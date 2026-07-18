(function () {
  const originalFetch = window.fetch.bind(window);

  window.fetch = function (input, init) {
    const requestUrl = typeof input === "string" ? input : input && input.url;
    const requestMethod = String(
      (init && init.method) || (input && input.method) || "GET",
    ).toUpperCase();

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

  const script = document.createElement("script");

  script.src = "https://unpkg.com/@waline/admin@0.34.2/dist/admin.js";
  script.async = false;
  document.body.appendChild(script);
})();
