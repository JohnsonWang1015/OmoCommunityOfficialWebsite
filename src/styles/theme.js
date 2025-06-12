export const theme = {
    colors: {
        primary: {
            // 主色：深紫，穩重而有設計感
            main: "#551B52",       // 葡萄深紫
            light: "#7B4B7B",      // 藕紫
            dark: "#3D123C",       // 暗紫
            contrast: "#FFFFFF",   // 文字對比色
        },
        secondary: {
            // 輔色：淡綠色，代表自然與溫潤
            main: "#C4E1C0",       // 輕柔草綠
            light: "#E2F3DC",      // 淺綠
            dark: "#A2C6A1",       // 草本綠
            contrast: "#263238",   // 文字對比色
        },
        accent: {
            // 灰藍紫：內斂科技感
            main: "#848793",       // 灰紫藍
            light: "#A4A7B3",      // 淺灰紫
            dark: "#666973",       // 深灰藍
            contrast: "#FFFFFF",
        },
        text: {
            primary: "#2C2C2C",     // 低飽和深灰，穩重可讀性高
            secondary: "#555D66",   // 較淡的灰藍文字
            light: "#FFFFFF",
        },
        background: {
            main: "#FFFFFF",
            light: "#F8F9FA",        // 留白主背景
            warm: "#FDF9F5",         // 微米色調
            nature: "#EEF5ED",       // 微綠灰背景
            warmLight: "#FAF9F7",
        },
    },
    gradients: {
        primary: "linear-gradient(135deg, #551B52 0%, #7B4B7B 100%)",
        secondary: "linear-gradient(135deg, #C4E1C0 0%, #E2F3DC 100%)",
        accent: "linear-gradient(135deg, #848793 0%, #A4A7B3 100%)",
        hero: "linear-gradient(180deg, rgba(85, 27, 82, 0.9) 0%, rgba(61, 18, 60, 0.8) 100%)",
    },
    shadows: {
        small: "0 2px 4px rgba(0,0,0,0.08)",
        medium: "0 4px 8px rgba(0,0,0,0.1)",
        large: "0 12px 24px rgba(0,0,0,0.12)",
    },
};
