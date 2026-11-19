import type { ProjectsConfig } from "@/types/projectsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 椤圭洰椤佃涓轰笌灞曠ず閰嶇疆銆?
 *
 * 閬靛惊銆岄厤缃琛屼负锛屾暟鎹鍐呭銆嶅師鍒欙細
 * - enable锛氶〉闈㈡€诲紑鍏筹紱false 鏃跺鑸叆鍙ｅ悓姝ラ殣钘忥紝璁块棶 /projects/ 璺宠浆 404锛?
 * - categories锛氱瓫閫夊垎绫绘竻鍗曪紙鏁扮粍椤哄簭鍗抽〉闈㈤《閮?Chips 椤哄簭锛夛紱
 * - disabledKeys锛氬彲閫夎绂佺敤鐨勯」鐩?key 鍒楄〃锛堜緥濡?["folkpatch"]锛夛紱
 *
 * 娉細椤圭洰鐨勫叿浣撳唴瀹规暟鎹紙鏍囬銆佹弿杩般€佹妧鏈爤銆侀摼鎺ャ€佸皝闈㈢瓑锛夎鍦?`src/data/projects.ts` 涓淮鎶ゃ€?
 */
export const projectsConfig: ProjectsConfig = withUserConfig("projects", {
	enable: true,
	title: "$t:projects",
	description: "$t:projectsBanner",
	categories: [
		{
			key: "theme",
			label: "Theme",
			icon: "material-symbols:palette-outline-rounded",
		},
		{
			key: "android",
			label: "Android",
			icon: "material-symbols:android-rounded",
		},
	],
	// disabledKeys: [],
});
