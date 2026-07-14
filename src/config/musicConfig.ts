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
		id: "109951169585655912,1342638960,36270466,34228130,26207295",

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
				name: "像鱼",
				artist: "王贰浪",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=1331819951&auth=f8910f58b9364a51af4ef789f6a2ff2c3d1d6761",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951169297651430&auth=8082ee9dbdf91b228d56e1ac914129ae595d124b",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1331819951&auth=09e050cef44d1b9bb109ff5b17b20fff281f31e6",
			},
			{
				name: "剩下的盛夏",
				artist: "TFBOYS / 嘻游记",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=34228130&auth=319f218847b36f696b3689384745e13cee5b00e1",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951167560635959&auth=2e5900537a42fe5423f853b0fa26d4f3e5c490a6",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=34228130&auth=fa41e1a65054bcbf599b300df8115052633d107f",
			},
			{
				name: "唯一",
				artist: "G.E.M.邓紫棋",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=2083785152&auth=5dbf5f2de8d60e492304ebf85e4effda5d2e947a",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951168919708423&auth=9705e7cb18afb3a6a0d9daee270ddcfdae48f4c7",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=2083785152&auth=ea4a612f684f59ccad8d01f7fdbffa8147b65d8c",
			},
		],
	},
};
