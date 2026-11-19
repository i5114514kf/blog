import type { TimelineConfig } from "@/types/timelineConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 鏃堕棿绾块〉琛屼负涓庡睍绀洪厤缃€?
 *
 * 閬靛惊銆岄厤缃琛屼负锛屾暟鎹鍐呭銆嶅師鍒欙細
 * - enable锛氶〉闈㈡€诲紑鍏筹紱false 鏃跺鑸叆鍙ｅ悓姝ラ殣钘忥紝璁块棶 /timeline/ 璺宠浆 404锛?
 * - categories锛氱瓫閫夊垎绫绘竻鍗曪紙鏁扮粍椤哄簭鍗抽〉闈㈤《閮?Chips 椤哄簭锛夛紱
 * - order锛氭帓搴忔柟鍚戯紝榛樿涓?"desc"锛堟椂闂村€掑簭锛屾渶鏂板湪鍓嶏級锛涘彲閫?"asc"锛堟搴忥級锛?
 * - disabledTitles锛氬彲閫夎绂佺敤鐨勪簨浠舵爣棰樺垪琛紱
 *
 * 娉細鏃堕棿绾跨殑鍏蜂綋鑺傜偣鏁版嵁锛堟爣棰樸€佹棩鏈熴€佺粡鍘嗘弿杩般€佽鐐瑰垪琛ㄣ€佸叧鑱旈摼鎺ョ瓑锛夎鍦?`src/data/timeline.ts` 涓淮鎶ゃ€?
 */
export const timelineConfig: TimelineConfig = withUserConfig("timeline", {
	enable: true,
	title: "$t:timeline",
	description: "$t:timelineBanner",
	categories: [
		{
			key: "milestone",
			label: "Milestones",
			icon: "material-symbols:flag-rounded",
		},
		{
			key: "project",
			label: "Projects",
			icon: "material-symbols:code-rounded",
		},
		{
			key: "career",
			label: "Career",
			icon: "material-symbols:work-rounded",
		},
		{
			key: "education",
			label: "Education",
			icon: "material-symbols:school-rounded",
		},
		{
			key: "life",
			label: "Life",
			icon: "material-symbols:favorite-rounded",
		},
	],
	order: "desc",
	// disabledTitles: [],
});
