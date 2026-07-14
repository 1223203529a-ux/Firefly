import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	avatar: "/assets/images/avatar.png",
	name: "Snozze",
	bio: "记录生活，分享热爱 ✨",
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "/assets/images/image.png",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/1223203529a-ux",
			showName: false,
		},
		{
			name: "3651055492@qq.com",
			icon: "fa7-solid:envelope",
			url: "mailto:3651055492@qq.com",
			showName: true,
		},
	],
};
