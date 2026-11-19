import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "CPer",
	bio: "你好！我是CPer",
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github", // Visit https://icones.js.org/ for icon codes
			url: "https://github.com/i5114514kf",
		},
		{
			name: "Telegram",
			icon: "fa7-brands:telegram",
			url: "https://t.me/lu1145",
		},
	],
});
