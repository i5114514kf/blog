import type { GamesConfig } from "@/types/gamesConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 娓告垙灞曠ず椤佃涓轰笌灞曠ず閰嶇疆銆?
 *
 * 閬靛惊銆岄厤缃琛屼负锛屾暟鎹鍐呭銆嶅師鍒欙細
 * - enable锛氶〉闈㈡€诲紑鍏筹紱false 鏃跺鑸叆鍙ｅ悓姝ラ殣钘忥紝璁块棶 /games/ 璺宠浆 404锛?
 * - categories锛氭父鎴忓垎绫绘竻鍗曪紙鏁扮粍椤哄簭鍗抽〉闈㈤《閮?Chips 椤哄簭锛?
 *   娌℃湁浠讳綍鏉＄洰鐨勫垎绫讳細鑷姩闅愯棌锛屽洜姝ゅ彲鏀惧績淇濈暀鏆傛椂鐢ㄤ笉鍒扮殑鍒嗙被锛夛紱
 * - disabledIds锛氬彲閫夎绂佺敤鐨勬父鎴?ID 鍒楄〃锛?
 *
 * 娉細娓告垙鐨勫叿浣撴竻鍗曟暟鎹紙娓告垙鍚嶃€佸紑鍙戝晢銆佸皝闈€佽瘎鍒嗐€佹椂闀裤€佺畝璇勭瓑锛夎鍦?`src/data/games.ts` 涓淮鎶ゃ€?
 */
export const gamesConfig: GamesConfig = withUserConfig("games", {
	enable: true,
	title: "$t:games",
	description: "$t:gamesBanner",
	categories: [
		{
			key: "open-world",
			label: "Open World",
			icon: "material-symbols:explore-outline-rounded",
			description: "Open-world adventures",
		},
		{
			key: "sandbox",
			label: "Sandbox",
			icon: "material-symbols:widgets-rounded",
			description: "Building, crafting & creative worlds",
		},
		{
			key: "rpg",
			label: "RPG",
			icon: "material-symbols:shield-outline-rounded",
			description: "Role-playing stories & builds",
		},
		{
			key: "action",
			label: "Action",
			icon: "material-symbols:swords-outline-rounded",
			description: "Action, fighting & shooters",
		},
		{
			key: "casual",
			label: "Casual",
			icon: "material-symbols:extension-outline-rounded",
			description: "Cozy, casual & party games",
		},
	],
	// disabledIds: [],
});
