export const theme = {
    colors: {
        primary: {
            // 琥珀金：社區代表色（溫暖）
            main: "#F5A623",       // Amber Gold
            light: "#FFD48A",      // 淺金色
            dark: "#D9822B",       // 深琥珀
            contrast: "#FFFFFF",   // 對比色
        },
        secondary: {
            // 森林綠：代表永續與自然
            main: "#2E7D4F",       // 中森林綠
            light: "#81C784",      // 嫩芽綠
            dark: "#1B5E20",       // 深森林
            contrast: "#FFFFFF",   // 對比色
        },
        accent: {
            // 湖水藍：象徵透明、信任、科技
            main: "#00B8D4",       // 湖水藍
            light: "#4DD0E1",      // 淺水藍
            dark: "#008394",       // 深藍綠
            contrast: "#FFFFFF",
        },
        text: {
            primary: "#263238",     // 暗藍灰，比純黑溫和
            secondary: "#607D8B",   // 藍灰色，內文佳
            light: "#FFFFFF",
        },
        background: {
            main: "#FFFFFF",
            light: "#F9FAFB",        // 簡約留白背景
            warm: "#FFF8E1",         // 保留暖色可用於 hero
            nature: "#E8F5E9",       // 淺綠背景，呼吸感
            warmLight: "#FDFDF7",
        },
    },
    gradients: {
        primary: "linear-gradient(135deg, #F5A623 0%, #FFD48A 100%)",
        secondary: "linear-gradient(135deg, #2E7D4F 0%, #81C784 100%)",
        accent: "linear-gradient(135deg, #00B8D4 0%, #4DD0E1 100%)",
        hero: "linear-gradient(180deg, rgba(46, 125, 79, 0.9) 0%, rgba(27, 94, 32, 0.8) 100%)",
    },
    shadows: {
        small: "0 2px 4px rgba(0,0,0,0.08)",
        medium: "0 4px 8px rgba(0,0,0,0.1)",
        large: "0 12px 24px rgba(0,0,0,0.12)",
    },
};
