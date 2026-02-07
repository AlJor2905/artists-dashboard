export interface AgeGroup {
    ageRange: string;
    count: number;
    percentage: number;
}

export interface Demographics {
    releaseId: string;
    releaseTitle: string;
    ageGroups: AgeGroup[];
}

export interface PlatformUsage {
    platform: string;
    users: number;
    percentage: number;
    color: string;
}

export interface EngagementMetrics {
    totalListeners: number;
    averageListenTime: number;
    repeatListeners: number;
    shareRate: number;
    saveRate: number;
    playlistAdds: number;
}

export interface ReleaseEngagement {
    releaseId: string;
    releaseTitle: string;
    artwork: string;
    metrics: EngagementMetrics;
    demographics: AgeGroup[];
    topPlatforms: PlatformUsage[];
}

export interface SocialMediaPlatform {
    platform: string;
    followers: number;
    growth: number; // percentage growth
    engagementRate: number; // percentage
    color: string;
}

export interface SocialMediaGrowth {
    month: string;
    instagram: number;
    tiktok: number;
    twitter: number;
    youtube: number;
}

export interface GrowthOpportunity {
    platform: string;
    currentFollowers: number;
    potentialReach: number;
    recommendedAction: string;
    priority: "high" | "medium" | "low";
    color: string;
}

export interface CrossPlatformData {
    platform: string;
    listeners: number;
    socialFollowers: number;
    conversionRate: number; // percentage
    color: string;
}
