export interface SalesData {
    month: string;
    revenue: number;
    sales: number;
    streams: number;
}

export interface PlatformSales {
    platform: string;
    revenue: number;
    percentage: number;
    color: string;
}

export interface ReleaseAnalytics {
    releaseId: string;
    releaseTitle: string;
    releaseType: string;
    artwork: string;
    totalRevenue: number;
    totalSales: number;
    totalStreams: number;
    previousMonthRevenue: number;
    growth: number;
    platformBreakdown: PlatformSales[];
}

export interface OverallMetrics {
    totalRevenue: number;
    totalSales: number;
    totalStreams: number;
    monthlyGrowth: number;
    streamsGrowth: number;
    salesGrowth: number;
    topPlatform: string;
    topPlatformPercentage: number;
}
