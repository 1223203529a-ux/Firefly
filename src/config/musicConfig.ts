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
		id: "2010069209,1394167216,1331819951,2083785152,3372049929,287319",

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
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=2010069209&auth=0a36237d99f37b961660781aea6275823f7121e7",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951168185413219&auth=b8666f50d198669eeeadb0675aef6ff855b0cac4",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=2010069209&auth=34ae96fa3b67afc5c71e979b8aa26a476d9119e3",
			},
			{
				name: "知我",
				artist: "国风堂/哦漏",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=1394167216&auth=b19e84cb96db12860270717c3302dbaa4d77ed30",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164415301539&auth=53a3fe18dd4f00fde44f36a341e708cf0983ccd2",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1394167216&auth=6c8439dea01df93efec0070d5381132aca198923",
			},
			{
				name: "像鱼",
				artist: "王贰浪",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=1331819951&auth=f8910f58b9364a51af4ef789f6a2ff2c3d1d6761",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951169297651430&auth=8082ee9dbdf91b228d56e1ac914129ae595d124b",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1331819951&auth=09e050cef44d1b9bb109ff5b17b20fff281f31e6",
			},
			{
				name: "唯一",
				artist: "G.E.M.邓紫棋",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=2083785152&auth=5dbf5f2de8d60e492304ebf85e4effda5d2e947a",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951168919708423&auth=9705e7cb18afb3a6a0d9daee270ddcfdae48f4c7",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=2083785152&auth=ea4a612f684f59ccad8d01f7fdbffa8147b65d8c",
			},
			{
				name: "稻香",
				artist: "Lie",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=3372049929&auth=58821f5ff781d87e49ad48e80b70fe3eac2951f8",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951173089238896&auth=82bd13abc9b98d923c3ad56b709934b3f561ed73",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=3372049929&auth=054350577e9a32f03d01d275d946d714ea451333",
			},
			{
				name: "遇见",
				artist: "孙燕姿",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=287319&auth=e3a2d1449f23ac81df76c4f466cfbd2b0156e69e",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951169717940503&auth=18a4a10a7f9de2d17fd63ba9a04763d9dbd04ffe",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=287319&auth=0ad10cefe66584dd7223cfd516ac3b5fbb76514f",
			},
		],
	},
};