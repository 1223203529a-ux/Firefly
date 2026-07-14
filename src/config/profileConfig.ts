import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	avatar: "/assets/images/avatar.png",
	name: "Firefly",
	bio: "Hello, I'm Firefly.",
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&from=qqchat&k=&n=&uin=3651055492&wpa_qrcode=1",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/1223203529a-ux",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:3651055492@qq.com",
			showName: false,
		},
	],
};
