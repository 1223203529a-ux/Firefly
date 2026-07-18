(function () {
  const originalFetch = window.fetch.bind(window);
	let authHeader = "";

	function readHeader(headers, name) {
		if (!headers) return "";
		if (typeof headers.get === "function") return headers.get(name) || "";

		const foundKey = Object.keys(headers).find(
			(key) => key.toLowerCase() === name.toLowerCase(),
		);

		return foundKey ? headers[foundKey] : "";
	}

  window.fetch = function (input, init) {
    const requestUrl = typeof input === "string" ? input : input && input.url;
    const requestMethod = String(
      (init && init.method) || (input && input.method) || "GET",
    ).toUpperCase();
		const nextAuthHeader =
			readHeader(init && init.headers, "Authorization") ||
			readHeader(input && input.headers, "Authorization");

		if (nextAuthHeader) {
			authHeader = nextAuthHeader;
		}

    if (
      requestUrl &&
      requestUrl.includes("/api/user") &&
      requestMethod === "PUT" &&
      init &&
      typeof init.body === "string"
    ) {
      try {
        const body = JSON.parse(init.body);

        // Waline 1.41.3 + MongoDB 下，保存未修改的当前邮箱可能被误判为邮箱重复。
        // 管理后台更新个人资料时移除 email 字段，让昵称、主页、标签等资料正常保存。
        delete body.email;

        init = {
          ...init,
          body: JSON.stringify(body),
        };
      } catch {
        // 不是 JSON 请求体时保持原请求不变。
      }
    }

    return originalFetch(input, init);
  };

	function createElement(tagName, attrs, children) {
		const el = document.createElement(tagName);

		Object.entries(attrs || {}).forEach(([key, value]) => {
			if (key === "style") Object.assign(el.style, value);
			else if (key === "className") el.className = value;
			else if (key === "textContent") el.textContent = value;
			else el.setAttribute(key, value);
		});

		(children || []).forEach((child) => el.append(child));

		return el;
	}

	function getApiUrl(path) {
		const base = window.serverURL || "/api/";

		return `${base}${path}`;
	}

	function compressAvatar(file) {
		return new Promise((resolve, reject) => {
			const image = new Image();
			const reader = new FileReader();

			reader.onerror = reject;
			reader.onload = () => {
				image.onload = () => {
					const size = 160;
					const canvas = document.createElement("canvas");
					const context = canvas.getContext("2d");
					const sourceSize = Math.min(image.width, image.height);
					const sourceX = Math.floor((image.width - sourceSize) / 2);
					const sourceY = Math.floor((image.height - sourceSize) / 2);

					canvas.width = size;
					canvas.height = size;
					context.drawImage(
						image,
						sourceX,
						sourceY,
						sourceSize,
						sourceSize,
						0,
						0,
						size,
						size,
					);

					resolve(canvas.toDataURL("image/webp", 0.82));
				};
				image.onerror = reject;
				image.src = reader.result;
			};
			reader.readAsDataURL(file);
		});
	}

	function injectAvatarUploader() {
		if (document.querySelector("[data-waline-avatar-uploader]")) return;

		const profileButton = [...document.querySelectorAll("button")].find((button) =>
			button.textContent.includes("更新我的档案"),
		);

		if (!profileButton) return;

		const fileInput = createElement("input", {
			type: "file",
			accept: "image/*",
			style: { display: "none" },
		});
		const status = createElement("div", {
			textContent: "默认使用登录账号头像；上传后会优先使用自定义头像。",
			style: {
				marginTop: "8px",
				color: "#6b7280",
				fontSize: "13px",
				lineHeight: "1.5",
			},
		});
		const preview = createElement("img", {
			alt: "头像预览",
			style: {
				width: "56px",
				height: "56px",
				borderRadius: "50%",
				objectFit: "cover",
				display: "none",
				marginRight: "12px",
				border: "1px solid rgba(0,0,0,.08)",
			},
		});
		const uploadButton = createElement("button", {
			type: "button",
			textContent: "上传头像",
			style: {
				border: "0",
				borderRadius: "999px",
				padding: "8px 14px",
				background: "#16a34a",
				color: "#fff",
				cursor: "pointer",
				fontWeight: "600",
			},
		});
		const wrapper = createElement(
			"div",
			{
				"data-waline-avatar-uploader": "true",
				style: {
					margin: "18px 0",
					padding: "14px",
					border: "1px solid rgba(0,0,0,.08)",
					borderRadius: "12px",
					background: "rgba(22,163,74,.06)",
				},
			},
			[
				createElement("div", {
					textContent: "自定义头像",
					style: { fontWeight: "700", marginBottom: "10px" },
				}),
				createElement(
					"div",
					{ style: { display: "flex", alignItems: "center" } },
					[preview, uploadButton, fileInput],
				),
				status,
			],
		);

		uploadButton.addEventListener("click", () => fileInput.click());
		fileInput.addEventListener("change", async () => {
			const [file] = fileInput.files || [];

			if (!file) return;
			if (!file.type.startsWith("image/")) {
				status.textContent = "请选择图片文件。";
				return;
			}

			try {
				status.textContent = "正在压缩并上传头像...";

				const avatar = await compressAvatar(file);
				const resp = await originalFetch(getApiUrl("user?lang=zh-CN"), {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						...(authHeader ? { Authorization: authHeader } : {}),
					},
					body: JSON.stringify({ avatar }),
				}).then((res) => res.json());

				if (resp.errno !== 0) {
					throw new Error(resp.errmsg || "头像保存失败");
				}

				preview.src = avatar;
				preview.style.display = "block";
				status.textContent = "头像已保存。刷新后台或重新发表评论后会使用自定义头像。";
			} catch (error) {
				status.textContent = `头像上传失败：${error.message || error}`;
			}
		});

		profileButton.parentElement.insertBefore(wrapper, profileButton);
	}

	const observer = new MutationObserver(injectAvatarUploader);

	observer.observe(document.documentElement, { childList: true, subtree: true });
	setInterval(injectAvatarUploader, 1500);

  const script = document.createElement("script");

  script.src = "https://s4.zstatic.net/npm/@waline/admin@0.34.2/dist/admin.js";
  script.async = false;
  document.body.appendChild(script);
})();
