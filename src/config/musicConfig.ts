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
		api: "https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",

		// 音乐平台：netease=网易云音乐
		server: "netease",

		// 类型：song=单曲（使用逗号分隔多个ID）
		type: "song",

		// 单曲ID（逗号分隔，按播放顺序）
		id: "2706243890,2112276979,1394167216,1399642631,1807799505,3372049929,34200629,2063718207,1325484898",

		// 认证 token（可选）
		auth: "",

		// 备用API配置（当主API失败时自动切换）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐列表（mode为local时使用）
	local: {
		playlist: [
			{
				name: "出现又离开",
				artist: "那英",
				url: "https://api.moeyao.cn/meting/?server=netease&type=url&id=2706243890",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951170999115908",
				lrc: "https://api.moeyao.cn/meting/?server=netease&type=lrc&id=2706243890",
			},
			{
				name: "剩下的盛夏",
				artist: "TFBOYS",
				url: "https://api.moeyao.cn/meting/?server=netease&type=url&id=2112276979",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951169215305784",
				lrc: "https://api.moeyao.cn/meting/?server=netease&type=lrc&id=2112276979",
			},
			{
				name: "知我",
				artist: "国风堂/哦漏",
				url: "https://api.moeyao.cn/meting/?server=netease&type=url&id=1394167216",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951164415301539",
				lrc: "https://api.moeyao.cn/meting/?server=netease&type=lrc&id=1394167216",
			},
			{
				name: "像鱼",
				artist: "王贰浪",
				url: "https://api.moeyao.cn/meting/?server=netease&type=url&id=1399642631",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951169297723419",
				lrc: "https://api.moeyao.cn/meting/?server=netease&type=lrc&id=1399642631",
			},
			{
				name: "唯一",
				artist: "告五人",
				url: "https://api.moeyao.cn/meting/?server=netease&type=url&id=1807799505",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951165585701063",
				lrc: "https://api.moeyao.cn/meting/?server=netease&type=lrc&id=1807799505",
			},
			{
				name: "稻香",
				artist: "Lie",
				url: "https://api.moeyao.cn/meting/?server=netease&type=url&id=3372049929",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951173089238896",
				lrc: "https://api.moeyao.cn/meting/?server=netease&type=lrc&id=3372049929",
			},
			{
				name: "遇见 (Live)",
				artist: "孙燕姿",
				url: "https://api.moeyao.cn/meting/?server=netease&type=url&id=34200629",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=7931876884848881",
				lrc: "https://api.moeyao.cn/meting/?server=netease&type=lrc&id=34200629",
			},
			{
				name: "Sample this",
				artist: "RJ Pasin",
				url: "https://api.moeyao.cn/meting/?server=netease&type=url&id=2063718207",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951168736797480",
				lrc: "https://api.moeyao.cn/meting/?server=netease&type=lrc&id=2063718207",
			},
			{
				name: "时差 (On call)",
				artist: "鹿晗",
				url: "https://api.moeyao.cn/meting/?server=netease&type=url&id=1325484898",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951166673393845",
				lrc: "https://api.moeyao.cn/meting/?server=netease&type=lrc&id=1325484898",
			},
		],
	},
};
