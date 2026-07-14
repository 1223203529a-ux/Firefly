import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "🌸 公告",

	// 公告内容
	content: "欢迎来到 Snozze 的小窝！这里记录着生活的点滴、技术的探索，以及一些奇思妙想。希望你能在这里找到有趣的内容~ ✨",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,

		// 链接文本
		text: "了解更多关于我 →",

		// 链接 URL
		url: "/about/",

		// 内部链接
		external: false,
	},
};
