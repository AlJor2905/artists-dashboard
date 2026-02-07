"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Heart, BarChart3 } from "lucide-react";
import type { SocialMediaPlatform } from "../types";

interface SocialMediaMetricsCardsProps {
    platforms: SocialMediaPlatform[];
}

function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
}

export function SocialMediaMetricsCards({ platforms }: SocialMediaMetricsCardsProps) {
    const totalFollowers = platforms.reduce((sum, p) => sum + p.followers, 0);
    const avgGrowth = platforms.reduce((sum, p) => sum + p.growth, 0) / platforms.length;
    const avgEngagement = platforms.reduce((sum, p) => sum + p.engagementRate, 0) / platforms.length;
    const topPlatform = platforms.reduce((prev, current) =>
        current.followers > prev.followers ? current : prev
    );

    const metrics = [
        {
            title: "Total Followers",
            value: formatNumber(totalFollowers),
            change: avgGrowth,
            icon: Users,
        },
        {
            title: "Avg. Growth Rate",
            value: `${avgGrowth.toFixed(1)}%`,
            change: avgGrowth,
            icon: TrendingUp,
        },
        {
            title: "Avg. Engagement",
            value: `${avgEngagement.toFixed(1)}%`,
            change: avgEngagement > 4 ? 12.5 : -3.2,
            icon: Heart,
        },
        {
            title: "Top Platform",
            value: topPlatform.platform,
            subtext: formatNumber(topPlatform.followers),
            icon: BarChart3,
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
                <Card key={metric.title}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            {metric.title}
                        </CardTitle>
                        <metric.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metric.value}</div>
                        {metric.subtext ? (
                            <p className="text-xs text-muted-foreground mt-1">
                                {metric.subtext} followers
                            </p>
                        ) : metric.change !== undefined ? (
                            <div className="flex items-center gap-1 text-xs mt-1">
                                <TrendingUp
                                    className={`h-3 w-3 ${metric.change >= 0 ? "text-green-500" : "text-red-500"
                                        }`}
                                />
                                <span
                                    className={
                                        metric.change >= 0 ? "text-green-500" : "text-red-500"
                                    }
                                >
                                    {metric.change >= 0 ? "+" : ""}
                                    {metric.change.toFixed(1)}%
                                </span>
                                <span className="text-muted-foreground">from last month</span>
                            </div>
                        ) : null}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
