import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "meting",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",

		// 音乐平台：netease=网易云音乐
		server: "netease",

		// 类型：song=单曲
		type: "song",

		// 单曲ID列表（按播放顺序）
		id: [
			"109951169585655912", // 使一颗心免于哀伤 - 知更鸟 / HOYO-MiX / Chevy
			"1342638960",        // 像鱼 - 王贰浪
			"36270466",           // 唯一 - G.E.M.邓紫棋
			"34228130",           // 剩下的盛夏 - TFBOYS/嘻游记
		],
	},

	// 本地音乐列表（mode为local时使用）
	local: [],
};
