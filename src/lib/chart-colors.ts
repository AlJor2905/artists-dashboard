// Chart colors for use with Recharts (which can't interpret CSS variables)
// These match the --chart-* variables in globals.css for the dark theme

export const CHART_COLORS = {
    chart1: "#e879a8", // Pink (oklch(0.7 0.25 330))
    chart2: "#5cc8e8", // Cyan (oklch(0.75 0.2 200))
    chart3: "#a78bfa", // Purple (oklch(0.7 0.2 280))
    chart4: "#6ee7a8", // Green (oklch(0.8 0.15 150))
    chart5: "#f5b74b", // Amber (oklch(0.75 0.2 60))
} as const;

export const CHART_COLORS_ARRAY = [
    CHART_COLORS.chart1,
    CHART_COLORS.chart2,
    CHART_COLORS.chart3,
    CHART_COLORS.chart4,
    CHART_COLORS.chart5,
];

// Platform-specific brand colors
export const PLATFORM_COLORS = {
    spotify: "#1DB954",
    appleMusic: "#FA243C",
    youtubeMusic: "#FF0000",
    amazonMusic: "#FF9900",
    soundcloud: "#FF5500",
    tiktok: "#00F2EA",
    other: "#8b8b8b",
} as const;

// Theme colors for Recharts (matches globals.css dark theme)
export const THEME_COLORS = {
    foreground: "#fafafa",           // Text color
    mutedForeground: "#a1a1aa",      // Muted text (axis labels)
    background: "#1a1625",           // Background
    card: "#251f35",                 // Card background
    border: "#3d3456",               // Border color
    muted: "#352f45",                // Muted background (hover)
} as const;
