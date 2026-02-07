"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from "recharts";
import { THEME_COLORS } from "@/lib/chart-colors";
import type { CrossPlatformData } from "../types";

interface CrossPlatformComparisonProps {
    data: CrossPlatformData[];
}

export function CrossPlatformComparison({ data }: CrossPlatformComparisonProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Cross-Platform Comparison</CardTitle>
                <CardDescription>Listening vs social media followers by platform</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke={THEME_COLORS.border} />
                        <XAxis
                            dataKey="platform"
                            stroke={THEME_COLORS.foreground}
                            tick={{ fill: THEME_COLORS.foreground }}
                        />
                        <YAxis
                            stroke={THEME_COLORS.foreground}
                            tick={{ fill: THEME_COLORS.foreground }}
                            tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: THEME_COLORS.background,
                                border: `1px solid ${THEME_COLORS.border}`,
                                borderRadius: "8px",
                            }}
                            labelStyle={{ color: THEME_COLORS.foreground }}
                            itemStyle={{ color: THEME_COLORS.foreground }}
                            formatter={(value: number) => value.toLocaleString()}
                        />
                        <Legend
                            wrapperStyle={{ color: THEME_COLORS.foreground }}
                        />
                        <Bar
                            dataKey="listeners"
                            fill="#8b5cf6"
                            name="Listeners"
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            dataKey="socialFollowers"
                            fill="#06b6d4"
                            name="Social Followers"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
