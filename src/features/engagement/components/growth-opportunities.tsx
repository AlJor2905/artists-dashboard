"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, AlertCircle } from "lucide-react";
import type { GrowthOpportunity } from "../types";

interface GrowthOpportunitiesProps {
    opportunities: GrowthOpportunity[];
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

export function GrowthOpportunities({ opportunities }: GrowthOpportunitiesProps) {
    const priorityConfig = {
        high: { icon: AlertCircle, variant: "destructive" as const, label: "High Priority" },
        medium: { icon: Target, variant: "secondary" as const, label: "Medium Priority" },
        low: { icon: TrendingUp, variant: "outline" as const, label: "Low Priority" },
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Growth Opportunities</CardTitle>
                <CardDescription>Recommended actions to expand your reach</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {opportunities.map((opportunity, index) => {
                        const config = priorityConfig[opportunity.priority];
                        const Icon = config.icon;
                        const potentialGrowth = opportunity.potentialReach - opportunity.currentFollowers;
                        const growthPercentage = ((potentialGrowth / opportunity.currentFollowers) * 100).toFixed(0);

                        return (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
                            >
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                                    style={{ backgroundColor: opportunity.color + "20" }}
                                >
                                    <Icon className="h-6 w-6" style={{ color: opportunity.color }} />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold">{opportunity.platform}</h4>
                                        <Badge variant={config.variant}>{config.label}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {opportunity.recommendedAction}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm">
                                        <div>
                                            <span className="text-muted-foreground">Current: </span>
                                            <span className="font-medium">{formatNumber(opportunity.currentFollowers)}</span>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground">Potential: </span>
                                            <span className="font-medium">{formatNumber(opportunity.potentialReach)}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <TrendingUp className="h-4 w-4 text-green-500" />
                                            <span className="text-green-500 font-medium">+{growthPercentage}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
