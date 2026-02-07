"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from "recharts";
import { THEME_COLORS } from "@/lib/chart-colors";
import type { SocialMediaGrowth } from "../types";

interface SocialMediaGrowthChartProps {
    data: SocialMediaGrowth[];
}

export function SocialMediaGrowthChart({ data }: SocialMediaGrowthChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Social Media Growth</CardTitle>
                <CardDescription>Follower growth across platforms over time</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke={THEME_COLORS.border} />
                        <XAxis
                            dataKey="month"
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
                            iconType="line"
                        />
                        <Line
                            type="monotone"
                            dataKey="instagram"
                            stroke="#E4405F"
                            strokeWidth={2}
                            dot={{ fill: "#E4405F", r: 4 }}
                            name="Instagram"
                        />
                        <Line
                            type="monotone"
                            dataKey="tiktok"
                            stroke="#00F2EA"
                            strokeWidth={2}
                            dot={{ fill: "#00F2EA", r: 4 }}
                            name="TikTok"
                        />
                        <Line
                            type="monotone"
                            dataKey="twitter"
                            stroke="#1DA1F2"
                            strokeWidth={2}
                            dot={{ fill: "#1DA1F2", r: 4 }}
                            name="Twitter"
                        />
                        <Line
                            type="monotone"
                            dataKey="youtube"
                            stroke="#FF0000"
                            strokeWidth={2}
                            dot={{ fill: "#FF0000", r: 4 }}
                            name="YouTube"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
