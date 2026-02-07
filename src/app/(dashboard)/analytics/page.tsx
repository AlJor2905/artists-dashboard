"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    DollarSign,
    TrendingUp,
    ShoppingCart,
    Music2,
    ArrowUpRight,
    ArrowDownRight,
    ArrowLeft,
} from "lucide-react";
import {
    RevenueChart,
    PlatformBreakdown,
    ReleaseMetricsList,
} from "@/features/analytics";
import { type ReleaseAnalytics } from "@/features/analytics/types";
import {
    monthlySalesData,
    platformBreakdown,
    releaseAnalytics,
    overallMetrics,
} from "@/lib/mock-data/analytics";
import { DelayedContent } from "@/components/delayed-content";
import { AnalyticsSkeleton } from "@/components/page-skeletons";

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

export default function AnalyticsPage() {
    const [selectedRelease, setSelectedRelease] =
        useState<ReleaseAnalytics | null>(null);

    const handleSelectRelease = (release: ReleaseAnalytics) => {
        setSelectedRelease(release);
    };

    const handleBack = () => {
        setSelectedRelease(null);
    };

    const chartData = selectedRelease
        ? monthlySalesData.map((data) => ({
            ...data,
            revenue: Math.floor(data.revenue * (0.3 + Math.random() * 0.2)),
        }))
        : monthlySalesData;

    const platformData = selectedRelease
        ? selectedRelease.platformBreakdown
        : platformBreakdown;

    const overallStats = [
        {
            title: "Total Revenue",
            value: formatCurrency(overallMetrics.totalRevenue),
            change: overallMetrics.monthlyGrowth,
            icon: DollarSign,
        },
        {
            title: "Total Streams",
            value: formatNumber(overallMetrics.totalStreams),
            change: 15.2,
            icon: TrendingUp,
        },
        {
            title: "Total Sales",
            value: formatNumber(overallMetrics.totalSales),
            change: 8.3,
            icon: ShoppingCart,
        },
        {
            title: "Active Releases",
            value: releaseAnalytics.length.toString(),
            change: 25.0,
            subtext: "this quarter",
            icon: Music2,
        },
    ];

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

            <div>
                <h1 className="text-3xl font-bold">{selectedRelease.releaseTitle}</h1>
                <p className="text-muted-foreground mt-1">
                    Detailed analytics for this release
                </p>
            </div>

            {/* Selected Release Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Revenue
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {formatCurrency(selectedRelease.totalRevenue)}
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                            {selectedRelease.growth >= 0 ? (
                                <ArrowUpRight className="h-3 w-3 text-green-500" />
                            ) : (
                                <ArrowDownRight className="h-3 w-3 text-red-500" />
                            )}
                            <span
                                className={
                                    selectedRelease.growth >= 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {Math.abs(selectedRelease.growth)}%
                            </span>
                            <span className="text-muted-foreground">from last month</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Total Streams
                        </CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {formatNumber(selectedRelease.totalStreams)}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Total Sales
                        </CardTitle>
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {formatNumber(selectedRelease.totalSales)}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Previous Month
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {formatCurrency(selectedRelease.previousMonthRevenue)}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts for Selected Release */}
            <div className="grid gap-6 lg:grid-cols-2">
                <RevenueChart
                    data={chartData}
                    title={`${selectedRelease.releaseTitle} Revenue`}
                    description="Monthly revenue for this release"
                />
                <PlatformBreakdown
                    data={platformData}
                    title="Platform Breakdown"
                    description="Revenue distribution by platform"
                />
            </div>
        </div>
    ) : (
        // Overall Analytics View
        <div className="mx-auto max-w-[1200px] space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold">Sales Analytics</h1>
                <p className="text-muted-foreground mt-1">
                    Track your sales performance and revenue metrics
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {overallStats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="flex items-center gap-1 text-xs">
                                {stat.change >= 0 ? (
                                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                                ) : (
                                    <ArrowDownRight className="h-3 w-3 text-red-500" />
                                )}
                                <span
                                    className={
                                        stat.change >= 0 ? "text-green-500" : "text-red-500"
                                    }
                                >
                                    {Math.abs(stat.change)}%
                                </span>
                                <span className="text-muted-foreground">
                                    {stat.subtext ?? "from last month"}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid gap-6 lg:grid-cols-2">
                <RevenueChart data={monthlySalesData} />
                <PlatformBreakdown data={platformBreakdown} />
            </div>

            {/* Release List */}
            <ReleaseMetricsList
                releases={releaseAnalytics}
                onSelectRelease={handleSelectRelease}
                selectedReleaseId={selectedRelease ?? undefined}
            />
        </div>
    );

    return (
        <DelayedContent skeleton={<AnalyticsSkeleton />} delay={1200}>
            {content}
        </DelayedContent>
    );
}
