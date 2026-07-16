import type { SiteConfig } from "@/types/config";
import { fontConfig } from "./fontConfig";

// 定义站点语言
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
		"Firefly", "ncu", "Astro", "Snozze", "博客", "个人博客", "静态博客", "生活记录", "医学生",
	],
	// 主题色
	themeColor: {
		hue: 250,
		fixed: false,
		defaultMode: "system",
	},
	// 页面整体宽度（单位：rem）
	pageWidth: 100,
	// 网站Card样式配置
	card: {
		border: true,
		followTheme: false,
	},
	// 导航栏配置
	navbar: {
		logo: {
			type: "icon",
			value: "material-symbols:home-pin-outline",
		},
		title: "Snozze",
		widthFull: false,
		menuAlign: "center",
		followTheme: false,
		stickyNavbar: true,
	},
	// 站点开始日期
	siteStartDate: "2026-07-13",
	// 站点时区
	timezone: "Asia/Shanghai",
	// 页面开关配置
	pages: {
		friends: true,
		sponsor: true,
		guestbook: true,
		bangumi: true,
		gallery: true,
		anime: true,
	},
	// 分类导航栏开关
	categoryBar: true,
	// 归档页是否折叠非最新年份文章
	foldArticle: true,
	// 文章列表布局配置
	postListLayout: {
		defaultMode: "list",
		mobileDefaultMode: "grid",
		allowSwitch: true,
		descriptionLines: 2,
		showStatsIcons: true,
		tagsPosition: "bottom",
		meta: {
			showPublished: true,
			showCategory: true,
			showTags: true,
			tagCount: 5,
			showWords: false,
			showReadingTime: false,
		},
		stats: {
			showPublished: true,
			showWords: true,
			showReadingTime: true,
		},
		grid: {
			masonry: false,
			columnWidth: 320,
		},
	},
	// 文章内容页配置
	post: {
		rehypeCallouts: {
			theme: "github",
			enablePythonMarkdownAdmonitions: false,
		},
		showLastModified: true,
		outdatedThreshold: 30,
		sharePoster: true,
		generateOgImages: false,
	},
	// bangumi配置
	bangumi: {
		userId: "",
		mode: "dynamic",
		apiUrl: "https://bgmapi.anibt.net",
		subjectBaseUrl: "https://bgmmi.anibt.net/subject/",
		categoryOrder: ["anime", "book", "music", "game"],
	},
	// 追番配置
	anime: {
		bilibili: {
			uid: "",
		},
	},
	// 分页配置
	pagination: {
		postsPerPage: 10,
	},
	// 图像优化及响应式配置
	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: ["*.hdslb.com", "*.bilibili.com"],
	},
	// 是否启用主题色选择器
	themeColorPicker: true,
	// 默认是否开启暗色模式
	darkMode: false,
	// 是否显示网站运行时长
	showSiteRunningTime: true,
	// 网站建立时间
	sinceDate: "2026-07-13",
	// 是否在导航栏显示搜索按钮
	showSearchInNavbar: true,
	// 站点语言
	lang: SITE_LANG,
};
