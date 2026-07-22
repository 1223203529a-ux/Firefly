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

		// 单曲ID（逗号分隔，按播放顺序；已优先选择实测 2 分钟以上的可播放版本）
		id: "2706243890,2112276979,1394167216,1399642631,1807799505,3372049929,34200629",

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
				name: "出现又离开",
				artist: "那英",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=2706243890&auth=31a4e0ab399e622f85358e2f9eb53f073b3426fc",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951170999115908&auth=024fe1ec8ddef7119fb4d56709ac460549aec4dc",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=2706243890&auth=3a2dfccd63514891312cd9b32a1e250dbd81e973",
			},
			{
				name: "剩下的盛夏",
				artist: "TFBOYS",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=2112276979&auth=b981b696ffb96fd29c958e5d469ade2dec6d18b3",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951169215305784&auth=8a1b7299b5992a52e51a9c79e200b948acedf19e",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=2112276979&auth=c25f9799542d4e7253219c1c341d582fb6ebc314",
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
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=1399642631&auth=3ba32c1bad68038850cb677f9827d5adc959c48b",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951169297723419&auth=8828989eec8d70f1a00a61979952fffe09a7be52",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1399642631&auth=7bc3d2c65d40a4aedb9391ede37f98965955d3d6",
			},
			{
				name: "唯一",
				artist: "告五人",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=1807799505&auth=32d77063b79ec3281045edb3fcff3b9d7218b2b3",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951165585701063&auth=261a2a0bb0e38b4e89bfcb3b193ed4bdbe50c031",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1807799505&auth=a2bc34d27f3fcaa819d78ef5518f0b3122d3127f",
			},
			{
				name: "稻香",
				artist: "Lie",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=3372049929&auth=58821f5ff781d87e49ad48e80b70fe3eac2951f8",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951173089238896&auth=82bd13abc9b98d923c3ad56b709934b3f561ed73",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=3372049929&auth=054350577e9a32f03d01d275d946d714ea451333",
			},
			{
				name: "遇见 (Live)",
				artist: "孙燕姿",
				url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=34200629&auth=be92537ec5840a723c65de51dc386fdf9070a991",
				cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=7931876884848881&auth=daaa046505d36d4644c78e8986ac325c4723a916",
				lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=34200629&auth=7f599bd0bf64b9047b4b7e162d8d5821df02141b",
			},
			{
				name: "Sample this (降调版)",
				artist: "RJ Pasin",
				url: "https://api.i-meto.com/meting/api?server=kugou&type=url&id=8ec1753803b2b4bb7030cf32f5807061&auth=eb9e083efe309020bab8c5c5c49fa93249525bc5",
				cover: "https://api.i-meto.com/meting/api?server=kugou&type=pic&id=8ec1753803b2b4bb7030cf32f5807061&auth=23f75159e638802f75d3ec5459fd457b923bc684",
				lrc: "https://api.i-meto.com/meting/api?server=kugou&type=lrc&id=8ec1753803b2b4bb7030cf32f5807061&auth=8ce4ab304002729076e98736308b924f7d736932",
			},
		],
	},
};
