import type { SiteConfig } from "@/types/config";
import { fontConfig } from "./fontConfig";

// 定义站点语言
// 语言代码，例如：'zh_CN', 'zh_TW', 'en', 'ja', 'ru'。
const SITE_LANG = "zh_CN";
export const siteConfig: SiteConfig = {
	// 站点标题
	title: "Snozze daily life",
	// 站点副标题
	subtitle: "记录生活，分享热爱 ✨",
	// 站点 URL
	site_url: "https://firefly-08r.pages.dev",
	// 站点描述
	description:
		"🌸 欢迎来到我的小窝！这里是 Snozze 的个人博客，记录生活中的点滴、技术学习的笔记，以及一些奇思妙想。希望能给你带来一些温暖和灵感~",
	// 站点关键词
	keywords: [
		"Firefly",
		"Fuwari",
		"Astro",
		"Snozze",
		"博客",
		"个人博客",
		"静态博客",
		"生活记录",
		"技术分享",
	],
	// 主题色
	themeColor: {
		// 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		hue: 250,
	},
	// 是否启用主题色选择器
	themeColorPicker: true,
	// 默认是否开启暗色模式
	darkMode: false,
	// 是否显示网站运行时长
	showSiteRunningTime: true,
	// 网站建立时间（用于计算运行时长）
	sinceDate: "2026-07-13",
	// 是否在导航栏显示搜索按钮
	showSearchInNavbar: true,
	// rehype-callouts 提示块主题 (修复构建错误)
	rehypeCallouts: {
		theme: "github",
	},
	// 页面配置 (修复 navBarConfig 构建错误)
	pages: {
		friends: true,
		guestbook: true,
		gallery: true,
		bangumi: true,
		sponsor: true,
	},
};
