import {
    type AgeGroup,
    type PlatformUsage,
    type EngagementMetrics,
    type ReleaseEngagement,
    type SocialMediaPlatform,
    type SocialMediaGrowth,
    type CrossPlatformData,
    type GrowthOpportunity,
} from "@/features/engagement/types";
import { PLATFORM_COLORS } from "@/lib/chart-colors";

export const platformUsage: PlatformUsage[] = [
    { platform: "Spotify", users: 45000, percentage: 42, color: PLATFORM_COLORS.spotify },
    { platform: "Apple Music", users: 28000, percentage: 26, color: PLATFORM_COLORS.appleMusic },
    { platform: "YouTube Music", users: 18000, percentage: 17, color: PLATFORM_COLORS.youtubeMusic },
    { platform: "Amazon Music", users: 9000, percentage: 8, color: PLATFORM_COLORS.amazonMusic },
    { platform: "SoundCloud", users: 7500, percentage: 7, color: PLATFORM_COLORS.soundcloud },
];

export const overallDemographics: AgeGroup[] = [
    { ageRange: "13-17", count: 8500, percentage: 8 },
    { ageRange: "18-24", count: 32000, percentage: 30 },
    { ageRange: "25-34", count: 38500, percentage: 36 },
    { ageRange: "35-44", count: 18000, percentage: 17 },
    { ageRange: "45-54", count: 7000, percentage: 6 },
    { ageRange: "55+", count: 3500, percentage: 3 },
];

export const overallEngagementMetrics: EngagementMetrics = {
    totalListeners: 107500,
    averageListenTime: 3.8,
    repeatListeners: 68500,
    shareRate: 12.4,
    saveRate: 28.6,
    playlistAdds: 42000,
};

export const releaseEngagements: ReleaseEngagement[] = [
    {
        releaseId: "1",
        releaseTitle: "Midnight Dreams",
        artwork: "https://picsum.photos/seed/album1/400/400",
        metrics: {
            totalListeners: 48000,
            averageListenTime: 4.2,
            repeatListeners: 32000,
            shareRate: 14.2,
            saveRate: 32.5,
            playlistAdds: 18500,
        },
        demographics: [
            { ageRange: "13-17", count: 3800, percentage: 8 },
            { ageRange: "18-24", count: 15800, percentage: 33 },
            { ageRange: "25-34", count: 16800, percentage: 35 },
            { ageRange: "35-44", count: 7700, percentage: 16 },
            { ageRange: "45-54", count: 2400, percentage: 5 },
            { ageRange: "55+", count: 1500, percentage: 3 },
        ],
        topPlatforms: [
            { platform: "Spotify", users: 21600, percentage: 45, color: PLATFORM_COLORS.spotify },
            { platform: "Apple Music", users: 12000, percentage: 25, color: PLATFORM_COLORS.appleMusic },
            { platform: "YouTube Music", users: 8640, percentage: 18, color: PLATFORM_COLORS.youtubeMusic },
            { platform: "Other", users: 5760, percentage: 12, color: PLATFORM_COLORS.other },
        ],
    },
    {
        releaseId: "2",
        releaseTitle: "Electric Soul",
        artwork: "https://picsum.photos/seed/single1/400/400",
        metrics: {
            totalListeners: 22000,
            averageListenTime: 3.1,
            repeatListeners: 14500,
            shareRate: 18.5,
            saveRate: 35.2,
            playlistAdds: 12000,
        },
        demographics: [
            { ageRange: "13-17", count: 3300, percentage: 15 },
            { ageRange: "18-24", count: 8800, percentage: 40 },
            { ageRange: "25-34", count: 6600, percentage: 30 },
            { ageRange: "35-44", count: 2200, percentage: 10 },
            { ageRange: "45-54", count: 880, percentage: 4 },
            { ageRange: "55+", count: 220, percentage: 1 },
        ],
        topPlatforms: [
            { platform: "Spotify", users: 11000, percentage: 50, color: PLATFORM_COLORS.spotify },
            { platform: "Apple Music", users: 5500, percentage: 25, color: PLATFORM_COLORS.appleMusic },
            { platform: "YouTube Music", users: 3300, percentage: 15, color: PLATFORM_COLORS.youtubeMusic },
            { platform: "TikTok", users: 2200, percentage: 10, color: PLATFORM_COLORS.tiktok },
        ],
    },
    {
        releaseId: "5",
        releaseTitle: "Velvet Shadows",
        artwork: "https://picsum.photos/seed/album2/400/400",
        metrics: {
            totalListeners: 62000,
            averageListenTime: 4.8,
            repeatListeners: 45000,
            shareRate: 11.2,
            saveRate: 28.8,
            playlistAdds: 24000,
        },
        demographics: [
            { ageRange: "13-17", count: 3100, percentage: 5 },
            { ageRange: "18-24", count: 15500, percentage: 25 },
            { ageRange: "25-34", count: 24800, percentage: 40 },
            { ageRange: "35-44", count: 12400, percentage: 20 },
            { ageRange: "45-54", count: 4340, percentage: 7 },
            { ageRange: "55+", count: 1860, percentage: 3 },
        ],
        topPlatforms: [
            { platform: "Spotify", users: 24800, percentage: 40, color: PLATFORM_COLORS.spotify },
            { platform: "Apple Music", users: 21700, percentage: 35, color: PLATFORM_COLORS.appleMusic },
            { platform: "YouTube Music", users: 9300, percentage: 15, color: PLATFORM_COLORS.youtubeMusic },
            { platform: "Amazon", users: 6200, percentage: 10, color: PLATFORM_COLORS.amazonMusic },
        ],
    },
];

// Social Media Data
export const socialMediaPlatforms: SocialMediaPlatform[] = [
    { platform: "Instagram", followers: 52000, growth: 18.5, engagementRate: 4.2, color: "#E4405F" },
    { platform: "TikTok", followers: 89000, growth: 45.2, engagementRate: 8.7, color: "#00F2EA" },
    { platform: "Twitter", followers: 28000, growth: 8.3, engagementRate: 2.1, color: "#1DA1F2" },
    { platform: "YouTube", followers: 34000, growth: 12.4, engagementRate: 5.3, color: "#FF0000" },
];

export const socialMediaGrowth: SocialMediaGrowth[] = [
    { month: "Jan", instagram: 38000, tiktok: 45000, twitter: 22000, youtube: 28000 },
    { month: "Feb", instagram: 41000, tiktok: 52000, twitter: 23500, youtube: 29500 },
    { month: "Mar", instagram: 44000, tiktok: 61000, twitter: 24800, youtube: 30800 },
    { month: "Apr", instagram: 47000, tiktok: 72000, twitter: 26000, youtube: 32000 },
    { month: "May", instagram: 49000, tiktok: 81000, twitter: 27000, youtube: 33000 },
    { month: "Jun", instagram: 52000, tiktok: 89000, twitter: 28000, youtube: 34000 },
];

export const crossPlatformData: CrossPlatformData[] = [
    { platform: "Spotify", listeners: 45000, socialFollowers: 28000, conversionRate: 62.2, color: PLATFORM_COLORS.spotify },
    { platform: "TikTok", listeners: 12000, socialFollowers: 89000, conversionRate: 13.5, color: "#000000" },
    { platform: "YouTube", listeners: 18000, socialFollowers: 34000, conversionRate: 52.9, color: "#FF0000" },
    { platform: "Instagram", listeners: 8000, socialFollowers: 52000, conversionRate: 15.4, color: "#E4405F" },
];

export const growthOpportunities: GrowthOpportunity[] = [
    {
        platform: "Instagram",
        currentFollowers: 52000,
        potentialReach: 78000,
        recommendedAction: "Focus on Reels targeting 18-24 age group",
        priority: "high",
        color: "#E4405F",
    },
    {
        platform: "YouTube",
        currentFollowers: 34000,
        potentialReach: 56000,
        recommendedAction: "Create music video content for top 3 tracks",
        priority: "high",
        color: "#FF0000",
    },
    {
        platform: "Twitter",
        currentFollowers: 28000,
        potentialReach: 35000,
        recommendedAction: "Increase engagement with fan interactions",
        priority: "medium",
        color: "#1DA1F2",
    },
    {
        platform: "Spotify",
        currentFollowers: 45000,
        potentialReach: 62000,
        recommendedAction: "Convert TikTok followers to Spotify listeners",
        priority: "high",
        color: PLATFORM_COLORS.spotify,
    },
];

