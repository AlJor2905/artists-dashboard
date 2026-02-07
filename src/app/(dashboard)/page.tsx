import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    DollarSign,
    TrendingUp,
    Disc3,
    Users,
    ArrowUpRight,
    ArrowDownRight,
    Trophy,
    Target,
    Share2,
    ChevronRight,
} from "lucide-react";
import { overallMetrics, monthlySalesData, releaseAnalytics } from "@/lib/mock-data/analytics";
import { mockReleases } from "@/lib/mock-data/releases";
import { overallEngagementMetrics, platformUsage, socialMediaPlatforms } from "@/lib/mock-data/engagement";
import { DelayedContent } from "@/components/delayed-content";
import { DashboardSkeleton } from "@/components/page-skeletons";

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

const stats = [
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
        title: "Active Releases",
        value: mockReleases.filter((r) => !r.isUpcoming).length.toString(),
        change: 33.3,
        icon: Disc3,
    },
    {
        title: "Total Listeners",
        value: formatNumber(overallEngagementMetrics.totalListeners),
        change: 8.4,
        icon: Users,
    },
];

export const metadata: Metadata = {
    title: "Overview",
    description: "Dashboard overview and key metrics",
};

export default function DashboardPage() {
    const latestReleases = mockReleases
        .filter((r) => !r.isUpcoming)
        .slice(0, 3);

    // Get top performing release
    const topRelease = releaseAnalytics.reduce((prev, current) =>
        current.totalRevenue > prev.totalRevenue ? current : prev
    );

    // Get top engagement platform
    const topPlatform = platformUsage.reduce((prev, current) =>
        current.users > prev.users ? current : prev
    );

    // Get top social media platform
    const topSocialPlatform = socialMediaPlatforms.reduce((prev, current) =>
        current.followers > prev.followers ? current : prev
    );

    const content = (
        <div className="mx-auto max-w-[1200px] space-y-6">
            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
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
                                <span className="text-muted-foreground">from last month</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Top Performers Grid */}
            <div className="grid gap-4 md:grid-cols-3">
                {/* Top Release Performer */}
                <Link href="/releases" className="block transition-transform hover:scale-[1.02]">
                    <Card className="h-full cursor-pointer hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Trophy className="h-5 w-5 text-yellow-500" />
                                    <CardTitle className="text-base">Top Release</CardTitle>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4">
                                <div className="relative h-14 w-14 rounded-lg overflow-hidden">
                                    <Image
                                        src={
                                            mockReleases.find((r) => r.id === topRelease.releaseId)
                                                ?.artwork || ""
                                        }
                                        alt={topRelease.releaseTitle}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold truncate">
                                        {topRelease.releaseTitle}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                        <span>{formatCurrency(topRelease.totalRevenue)}</span>
                                        <span>•</span>
                                        <span className="text-green-500 flex items-center gap-0.5">
                                            <ArrowUpRight className="h-3 w-3" />
                                            {topRelease.growth}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* Top Engagement Platform */}
                <Link href="/engagement?tab=listening" className="block transition-transform hover:scale-[1.02]">
                    <Card className="h-full cursor-pointer hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Target className="h-5 w-5 text-blue-500" />
                                    <CardTitle className="text-base">Top Platform</CardTitle>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4">
                                <div
                                    className="h-14 w-14 rounded-lg flex items-center justify-center text-2xl font-bold"
                                    style={{ backgroundColor: topPlatform.color + "20", color: topPlatform.color }}
                                >
                                    {topPlatform.platform[0]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold truncate">
                                        {topPlatform.platform}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                        <span>{formatNumber(topPlatform.users)} listeners</span>
                                        <span>•</span>
                                        <span>{topPlatform.percentage}% share</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* Top Social Platform */}
                <Link href="/engagement?tab=social" className="block transition-transform hover:scale-[1.02]">
                    <Card className="h-full cursor-pointer hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Share2 className="h-5 w-5 text-purple-500" />
                                    <CardTitle className="text-base">Top Social</CardTitle>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4">
                                <div
                                    className="h-14 w-14 rounded-lg flex items-center justify-center text-2xl font-bold"
                                    style={{ backgroundColor: topSocialPlatform.color + "20", color: topSocialPlatform.color }}
                                >
                                    {topSocialPlatform.platform[0]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold truncate">
                                        {topSocialPlatform.platform}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                        <span>{formatNumber(topSocialPlatform.followers)} followers</span>
                                        <span>•</span>
                                        <span className="text-green-500 flex items-center gap-0.5">
                                            <ArrowUpRight className="h-3 w-3" />
                                            {topSocialPlatform.growth}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            {/* Quick Overview Section */}
            <div className="grid gap-4 md:grid-cols-2">
                {/* Recent Activity */}
                <Link href="/releases" className="block transition-transform hover:scale-[1.02]">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Recent Releases</CardTitle>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {latestReleases.map((release) => (
                                    <div key={release.id} className="flex items-center gap-4">
                                        <div className="relative h-12 w-12 rounded-md overflow-hidden">
                                            <Image
                                                src={release.artwork}
                                                alt={release.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium truncate">{release.title}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {formatNumber(release.streams)} streams
                                            </p>
                                        </div>
                                        <Badge variant="secondary">{release.type}</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Link>
                {/* Revenue Trend */}
                <Link href="/analytics" className="block transition-transform hover:scale-[1.02]">
                    <Card className="h-full cursor-pointer hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Revenue Trend</CardTitle>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {monthlySalesData.slice(-4).map((data) => (
                                    <div key={data.month} className="flex items-center gap-4">
                                        <div className="w-12 text-sm text-muted-foreground">
                                            {data.month}
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="h-2 rounded-full bg-primary"
                                                style={{
                                                    width: `${(data.revenue / 70000) * 100}%`,
                                                }}
                                            />
                                        </div>
                                        <div className="w-20 text-right text-sm font-medium">
                                            {formatCurrency(data.revenue)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );

    return (
        <DelayedContent skeleton={<DashboardSkeleton />} delay={1200}>
            {content}
        </DelayedContent>
    );
}
