"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type ReleaseAnalytics } from "@/features/analytics/types";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface ReleaseMetricsListProps {
    releases: ReleaseAnalytics[];
    onSelectRelease?: (release: ReleaseAnalytics) => void;
    selectedReleaseId?: string;
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

function formatCurrency(num: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(num);
}

export function ReleaseMetricsList({
    releases,
    onSelectRelease,
    selectedReleaseId,
}: ReleaseMetricsListProps) {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Release Analytics</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <ScrollArea className="h-[400px]">
                    <div className="space-y-1 p-4 pt-0">
                        {releases.map((release) => (
                            <button
                                key={release.releaseId}
                                onClick={() => onSelectRelease?.(release)}
                                className={`w-full rounded-lg p-3 text-left transition-colors hover:bg-muted/50 ${selectedReleaseId === release.releaseId
                                        ? "bg-muted border border-primary/30"
                                        : ""
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={release.artwork}
                                        alt={release.releaseTitle}
                                        className="h-12 w-12 rounded-md object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <p className="font-medium truncate">
                                                {release.releaseTitle}
                                            </p>
                                            <Badge variant="outline" className="text-xs">
                                                {release.releaseType}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                            <span>{formatCurrency(release.totalRevenue)}</span>
                                            <span>{formatNumber(release.totalStreams)} streams</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                        {release.growth >= 0 ? (
                                            <>
                                                <ArrowUpRight className="h-4 w-4 text-green-500" />
                                                <span className="text-green-500">
                                                    +{release.growth.toFixed(1)}%
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <ArrowDownRight className="h-4 w-4 text-red-500" />
                                                <span className="text-red-500">
                                                    {release.growth.toFixed(1)}%
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
