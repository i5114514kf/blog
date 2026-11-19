import type { SkillsConfig } from "@/types/skillsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 鎶€鑳介〉琛屼负涓庡睍绀洪厤缃€?
 *
 * 閬靛惊銆岄厤缃琛屼负锛屾暟鎹鍐呭銆嶅師鍒欙細
 * - enable锛氶〉闈㈡€诲紑鍏筹紱false 鏃跺鑸叆鍙ｅ悓姝ラ殣钘忥紝璁块棶 /skills/ 璺宠浆 404锛?
 * - categories锛氱瓫閫夊垎绫绘竻鍗曪紙鏁扮粍椤哄簭鍗抽〉闈㈤《閮?Chips 椤哄簭锛夛紱
 * - disabledNames锛氬彲閫夎绂佺敤鐨勬妧鑳藉悕绉板垪琛紙渚嬪 ["PHP"]锛夛紱
 *
 * 娉細鎶€鑳界殑鍏蜂綋鍐呭鏁版嵁锛堟妧鑳藉悕绉般€佺啛缁冨害绛夌骇銆佸浘鏍囥€佹弿杩扮瓑锛夎鍦?`src/data/skills.ts` 涓淮鎶ゃ€?
 */
export const skillsConfig: SkillsConfig = withUserConfig("skills", {
	enable: true,
	title: "$t:skills",
	description: "$t:skillsBanner",
	categories: [
		{
			key: "frontend",
			label: "Frontend",
			icon: "material-symbols:web-rounded",
		},
		{
			key: "backend",
			label: "Backend",
			icon: "material-symbols:dns-rounded",
		},
		{
			key: "tooling",
			label: "Tooling",
			icon: "material-symbols:construction-rounded",
		},
	],
	// disabledNames: [],
});
