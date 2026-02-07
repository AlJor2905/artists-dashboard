import type { Metadata } from "next";
import { ReleaseGrid } from "@/features/releases";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    getLatestReleases,
    getUpcomingReleases,
    getRecommendedReleases,
} from "@/lib/mock-data/releases";
import { DelayedContent } from "@/components/delayed-content";
import { ReleasesSkeleton } from "@/components/page-skeletons";

export const metadata: Metadata = {
    title: "Releases",
    description: "Manage and track your music releases",
};

export default function ReleasesPage() {
    const latestReleases = getLatestReleases();
    const upcomingReleases = getUpcomingReleases();
    const recommendedReleases = getRecommendedReleases();

    const content = (
        <div className="mx-auto max-w-[1200px] space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold">Releases</h1>
                <p className="text-muted-foreground mt-1">
                    Manage and track your music releases
                </p>
            </div>

            {/* Tabs for different views */}
            <Tabs defaultValue="latest" className="space-y-6">
                <TabsList>
                    <TabsTrigger value="latest">Latest</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="recommended">Top Performing</TabsTrigger>
                </TabsList>

                <TabsContent value="latest" className="space-y-6">
                    <ReleaseGrid
                        releases={latestReleases}
                        title="Latest Releases"
                        emptyMessage="No recent releases"
                    />
                </TabsContent>

                <TabsContent value="upcoming" className="space-y-6">
                    <ReleaseGrid
                        releases={upcomingReleases}
                        title="Upcoming Releases"
                        emptyMessage="No upcoming releases scheduled"
                    />
                </TabsContent>

                <TabsContent value="recommended" className="space-y-6">
                    <ReleaseGrid
                        releases={recommendedReleases}
                        title="Top Performing Releases"
                        emptyMessage="No top performers yet"
                    />
                </TabsContent>
            </Tabs>
        </div>
    );

    return (
        <DelayedContent skeleton={<ReleasesSkeleton />} delay={1200}>
            {content}
        </DelayedContent>
    );
}
