"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type PlatformUsage } from "@/features/engagement/types";

interface PlatformUsageCardProps {
    data: PlatformUsage[];
    title?: string;
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

export function PlatformUsageCard({
    data,
    title = "Top Platforms",
}: PlatformUsageCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {data.map((platform) => (
                        <div key={platform.platform} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="h-3 w-3 rounded-full"
                                        style={{ backgroundColor: platform.color }}
                                    />
                                    <span className="text-sm font-medium">{platform.platform}</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {formatNumber(platform.users)} users ({platform.percentage}%)
                                </div>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-500"
                                    style={{
                                        width: `${platform.percentage}%`,
                                        backgroundColor: platform.color,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
