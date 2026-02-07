import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type EngagementMetrics as EngagementMetricsType } from "@/features/engagement/types";
import {
    Users,
    Clock,
    Repeat2,
    Share2,
    Bookmark,
    ListMusic,
} from "lucide-react";

interface EngagementMetricsProps {
    metrics: EngagementMetricsType;
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

const metricItems = [
    { key: "totalListeners", label: "Total Listeners", icon: Users, format: formatNumber },
    { key: "averageListenTime", label: "Avg Listen Time", icon: Clock, format: (n: number) => `${n.toFixed(1)} min` },
    { key: "repeatListeners", label: "Repeat Listeners", icon: Repeat2, format: formatNumber },
    { key: "shareRate", label: "Share Rate", icon: Share2, format: (n: number) => `${n.toFixed(1)}%` },
    { key: "saveRate", label: "Save Rate", icon: Bookmark, format: (n: number) => `${n.toFixed(1)}%` },
    { key: "playlistAdds", label: "Playlist Adds", icon: ListMusic, format: formatNumber },
] as const;

export function EngagementMetricsCards({ metrics }: EngagementMetricsProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {metricItems.map((item) => (
                <Card key={item.key}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            {item.label}
                        </CardTitle>
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {item.format(metrics[item.key])}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
