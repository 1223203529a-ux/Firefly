import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

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

		// 类型：song=单曲（使用逗号分隔多个ID）
		type: "song",

		// 单曲ID（逗号分隔，按播放顺序）
		id: "2010069209,1394167216,1331819951,27483167,470013134,287319",

		// 备用API配置（当主API失败时自动切换）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐列表（mode为local时使用）
	local: {
		playlist: [
			{
				name: "剩下的盛夏",
				artist: "杨鹤松",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=2010069209",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951169215305784",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=2010069209",
			},
			{
				name: "知我",
				artist: "国风堂/哦漏",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=1394167216",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951169297651430",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=1394167216",
			},
			{
				name: "像鱼",
				artist: "王贰浪",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=1331819951",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951169297651430",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=1331819951",
			},
			{
				name: "唯一",
				artist: "王力宏",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=27483167",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951168919708423",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=27483167",
			},
			{
				name: "晴天",
				artist: "赵方婧",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=470013134",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951169215305784",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=470013134",
			},
			{
				name: "遇见",
				artist: "孙燕姿",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=287319",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951169297651430",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=287319",
			},
		],
	},
};