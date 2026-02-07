"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Music, Share2 } from "lucide-react";
import {
    DemographicsChart,
    PlatformUsageCard,
    EngagementMetricsCards,
    SocialMediaMetricsCards,
    SocialMediaGrowthChart,
    CrossPlatformComparison,
    GrowthOpportunities,
    type ReleaseEngagement,
} from "@/features/engagement";
import {
    platformUsage,
    overallDemographics,
    overallEngagementMetrics,
    releaseEngagements,
    socialMediaPlatforms,
    socialMediaGrowth,
    crossPlatformData,
    growthOpportunities,
} from "@/lib/mock-data/engagement";
import { DelayedContent } from "@/components/delayed-content";
import { EngagementSkeleton } from "@/components/page-skeletons";

export default function EngagementPage() {
    const searchParams = useSearchParams();
    const defaultTab = searchParams.get("tab") === "social" ? "social" : "listening";

    const [selectedRelease, setSelectedRelease] =
        useState<ReleaseEngagement | null>(null);

    const handleSelectRelease = (release: ReleaseEngagement) => {
        setSelectedRelease(release);
    };

    const handleBack = () => {
        setSelectedRelease(null);
    };

    const content = selectedRelease ? (
        // Release Detail View
        <div className="mx-auto max-w-[1200px] space-y-6">
            {/* Back Button & Header */}
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBack}
                    className="gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Overview
                </Button>
            </div>

            {/* Release Header */}
            <div className="flex items-center gap-4">
                <img
                    src={selectedRelease.artwork}
                    alt={selectedRelease.releaseTitle}
                    className="h-24 w-24 rounded-lg object-cover"
                />
                <div>
                    <h1 className="text-3xl font-bold">
                        {selectedRelease.releaseTitle}
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Detailed engagement metrics for this release
                    </p>
                </div>
            </div>

            {/* Release Metrics */}
            <EngagementMetricsCards metrics={selectedRelease.metrics} />

            {/* Release Charts */}
            <div className="grid gap-6 lg:grid-cols-2">
                <DemographicsChart data={selectedRelease.demographics} />
                <PlatformUsageCard data={selectedRelease.topPlatforms} />
            </div>
        </div>
    ) : (
        // Overview with Tabs
        <div className="mx-auto max-w-[1200px] space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold">Fan Engagement</h1>
                <p className="text-muted-foreground mt-1">
                    Understand your audience across listening platforms and social media
                </p>
            </div>

            {/* Tabs for Listening vs Social Media */}
            <Tabs defaultValue={defaultTab} className="space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="listening" className="gap-2">
                        <Music className="h-4 w-4" />
                        Listening Platforms
                    </TabsTrigger>
                    <TabsTrigger value="social" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Social Media
                    </TabsTrigger>
                </TabsList>

                {/* Listening Platforms Tab */}
                <TabsContent value="listening" className="space-y-6">
                    {/* Engagement Metrics */}
                    <EngagementMetricsCards metrics={overallEngagementMetrics} />

                    {/* Charts Grid */}
                    <div className="grid gap-6 lg:grid-cols-2">
                        <DemographicsChart data={overallDemographics} />
                        <PlatformUsageCard data={platformUsage} />
                    </div>

                    {/* Release Selection */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Engagement by Release</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ScrollArea className="h-[300px]">
                                <div className="space-y-1 p-4 pt-0">
                                    {releaseEngagements.map((release) => (
                                        <button
                                            key={release.releaseId}
                                            onClick={() => handleSelectRelease(release)}
                                            className="w-full rounded-lg p-3 text-left transition-colors hover:bg-muted/50"
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={release.artwork}
                                                    alt={release.releaseTitle}
                                                    className="h-12 w-12 rounded-md object-cover"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium truncate">
                                                        {release.releaseTitle}
                                                    </p>
                                                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                                                        <span>
                                                            {release.metrics.totalListeners.toLocaleString()}{" "}
                                                            listeners
                                                        </span>
                                                        <span>{release.metrics.shareRate}% share rate</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Social Media Tab */}
                <TabsContent value="social" className="space-y-6">
                    {/* Social Media Metrics */}
                    <SocialMediaMetricsCards platforms={socialMediaPlatforms} />

                    {/* Social Media Growth Chart */}
                    <SocialMediaGrowthChart data={socialMediaGrowth} />

                    {/* Cross-Platform Comparison & Growth Opportunities */}
                    <div className="grid gap-6 lg:grid-cols-2">
                        <CrossPlatformComparison data={crossPlatformData} />
                        <GrowthOpportunities opportunities={growthOpportunities} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );

    return (
        <DelayedContent skeleton={<EngagementSkeleton />} delay={1200}>
            {content}
        </DelayedContent>
    );
}
