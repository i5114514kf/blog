import type { DevicesConfig } from "@/types/devicesConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 璁惧灞曠ず椤佃涓轰笌灞曠ず閰嶇疆銆?
 *
 * 閬靛惊銆岄厤缃琛屼负锛屾暟鎹鍐呭銆嶅師鍒欙細
 * - enable锛氶〉闈㈡€诲紑鍏筹紱false 鏃跺鑸叆鍙ｅ悓姝ラ殣钘忥紝璁块棶 /devices/ 璺宠浆 404锛?
 * - categories锛氬満鏅垎绫绘竻鍗曪紙鏁扮粍椤哄簭鍗抽〉闈㈤《閮?Chips 椤哄簭锛夛紱
 * - disabledIds锛氬彲閫夎绂佺敤鐨勮澶?ID 鍒楄〃锛?
 *
 * 娉細璁惧鐨勫叿浣撴竻鍗曟暟鎹紙璁惧鍚嶃€佸搧鐗屻€佽鏍笺€佹劅鍙楄鏄庛€佸浘鐗囩瓑锛夎鍦?`src/data/devices.ts` 涓淮鎶ゃ€?
 */
export const devicesConfig: DevicesConfig = withUserConfig("devices", {
	enable: true,
	title: "$t:devices",
	description: "$t:devicesBanner",
	categories: [
		{
			key: "desk",
			label: "Desk Setup",
			icon: "material-symbols:desktop-windows-outline-rounded",
			description: "Workstation & home office hardware",
		},
		{
			key: "mobile",
			label: "Mobile & EDC",
			icon: "material-symbols:phone-iphone",
			description: "Daily portable devices & smart gadgets",
		},
		{
			key: "audio",
			label: "Audio & Visual",
			icon: "material-symbols:headphones-rounded",
			description: "Headphones, speakers & monitoring gears",
		},
		{
			key: "peripheral",
			label: "Peripherals",
			icon: "material-symbols:keyboard-outline-rounded",
			description: "Keyboards, mice & desk accessories",
		},
	],
	// disabledIds: [],
});
