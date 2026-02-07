import {
    type SalesData,
    type PlatformSales,
    type ReleaseAnalytics,
    type OverallMetrics,
} from "@/features/analytics/types";
import { PLATFORM_COLORS } from "@/lib/chart-colors";

export const monthlySalesData: SalesData[] = [
    { month: "Sep", revenue: 42000, sales: 8500, streams: 1800000 },
    { month: "Oct", revenue: 48000, sales: 9200, streams: 2100000 },
    { month: "Nov", revenue: 52000, sales: 10100, streams: 2400000 },
    { month: "Dec", revenue: 68000, sales: 14500, streams: 3200000 },
    { month: "Jan", revenue: 58000, sales: 11800, streams: 2800000 },
    { month: "Feb", revenue: 62000, sales: 12500, streams: 2950000 },
];

export const platformBreakdown: PlatformSales[] = [
    { platform: "Spotify", revenue: 28000, percentage: 45, color: PLATFORM_COLORS.spotify },
    { platform: "Apple Music", revenue: 18500, percentage: 30, color: PLATFORM_COLORS.appleMusic },
    { platform: "YouTube Music", revenue: 9300, percentage: 15, color: PLATFORM_COLORS.youtubeMusic },
    { platform: "Amazon Music", revenue: 3700, percentage: 6, color: PLATFORM_COLORS.amazonMusic },
    { platform: "Other", revenue: 2500, percentage: 4, color: PLATFORM_COLORS.other },
];

export const releaseAnalytics: ReleaseAnalytics[] = [
    {
        releaseId: "1",
        releaseTitle: "Midnight Dreams",
        releaseType: "album",
        artwork: "https://picsum.photos/seed/album1/400/400",
        totalRevenue: 45000,
        totalSales: 12500,
        totalStreams: 2450000,
        previousMonthRevenue: 38000,
        growth: 18.4,
        platformBreakdown: [
            { platform: "Spotify", revenue: 20250, percentage: 45, color: PLATFORM_COLORS.spotify },
            { platform: "Apple Music", revenue: 13500, percentage: 30, color: PLATFORM_COLORS.appleMusic },
            { platform: "YouTube Music", revenue: 6750, percentage: 15, color: PLATFORM_COLORS.youtubeMusic },
            { platform: "Other", revenue: 4500, percentage: 10, color: PLATFORM_COLORS.other },
        ],
    },
    {
        releaseId: "2",
        releaseTitle: "Electric Soul",
        releaseType: "single",
        artwork: "https://picsum.photos/seed/single1/400/400",
        totalRevenue: 15800,
        totalSales: 4200,
        totalStreams: 890000,
        previousMonthRevenue: 12000,
        growth: 31.7,
        platformBreakdown: [
            { platform: "Spotify", revenue: 7900, percentage: 50, color: PLATFORM_COLORS.spotify },
            { platform: "Apple Music", revenue: 4740, percentage: 30, color: PLATFORM_COLORS.appleMusic },
            { platform: "YouTube Music", revenue: 2370, percentage: 15, color: PLATFORM_COLORS.youtubeMusic },
            { platform: "Other", revenue: 790, percentage: 5, color: PLATFORM_COLORS.other },
        ],
    },
    {
        releaseId: "5",
        releaseTitle: "Velvet Shadows",
        releaseType: "album",
        artwork: "https://picsum.photos/seed/album2/400/400",
        totalRevenue: 68000,
        totalSales: 18000,
        totalStreams: 3200000,
        previousMonthRevenue: 72000,
        growth: -5.6,
        platformBreakdown: [
            { platform: "Spotify", revenue: 27200, percentage: 40, color: PLATFORM_COLORS.spotify },
            { platform: "Apple Music", revenue: 23800, percentage: 35, color: PLATFORM_COLORS.appleMusic },
            { platform: "YouTube Music", revenue: 10200, percentage: 15, color: PLATFORM_COLORS.youtubeMusic },
            { platform: "Other", revenue: 6800, percentage: 10, color: PLATFORM_COLORS.other },
        ],
    },
    {
        releaseId: "4",
        releaseTitle: "Starlight Serenade",
        releaseType: "single",
        artwork: "https://picsum.photos/seed/single2/400/400",
        totalRevenue: 32000,
        totalSales: 8900,
        totalStreams: 1650000,
        previousMonthRevenue: 28000,
        growth: 14.3,
        platformBreakdown: [
            { platform: "Spotify", revenue: 14400, percentage: 45, color: PLATFORM_COLORS.spotify },
            { platform: "Apple Music", revenue: 9600, percentage: 30, color: PLATFORM_COLORS.appleMusic },
            { platform: "YouTube Music", revenue: 4800, percentage: 15, color: PLATFORM_COLORS.youtubeMusic },
            { platform: "Other", revenue: 3200, percentage: 10, color: PLATFORM_COLORS.other },
        ],
    },
];

export const overallMetrics: OverallMetrics = {
    totalRevenue: 189300,
    totalSales: 52400,
    totalStreams: 9440000,
    monthlyGrowth: 12.8,
    streamsGrowth: 15.2,
    salesGrowth: 8.7,
    topPlatform: "Spotify",
    topPlatformPercentage: 45,
};
