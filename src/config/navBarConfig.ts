import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
	LinkPreset,
} from "../types/config";

const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: (NavBarLink | LinkPreset)[] = [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Friends,
		LinkPreset.Guestbook,
		{
			name: "我的",
			url: "#",
			icon: "material-symbols:person",
			children: [
				LinkPreset.Gallery,
				LinkPreset.Anime,
				LinkPreset.Bangumi,
			],
		},
		{
			name: "关于",
			url: "#",
			icon: "material-symbols:info",
			children: [
				LinkPreset.Sponsor,
				{ name: "关于我", url: "/about/", icon: "material-symbols:person" },
			],
		},
		{
			name: "链接",
			url: "#",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/1223203529a-ux",
					external: true,
					icon: "fa7-brands:github",
				},
				{
					name: "QQ交流群",
					url: "https://qm.qq.com/q/ZGsFa8qX2G",
					external: true,
					icon: "fa7-brands:qq",
				},
			],
		},
	];

	return { links };
};

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
