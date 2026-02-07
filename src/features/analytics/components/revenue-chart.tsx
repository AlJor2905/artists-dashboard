"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { type SalesData } from "@/features/analytics/types";
import { CHART_COLORS, THEME_COLORS } from "@/lib/chart-colors";

interface RevenueChartProps {
    data: SalesData[];
    title?: string;
    description?: string;
}

export function RevenueChart({
    data,
    title = "Revenue Overview",
    description = "Monthly revenue comparison",
}: RevenueChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis
                                dataKey="month"
                                stroke={THEME_COLORS.mutedForeground}
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke={THEME_COLORS.mutedForeground}
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value / 1000}k`}
                            />
                            <Tooltip
                                cursor={{ fill: THEME_COLORS.muted }}
                                contentStyle={{
                                    backgroundColor: THEME_COLORS.card,
                                    border: `1px solid ${THEME_COLORS.border}`,
                                    borderRadius: "8px",
                                    color: THEME_COLORS.foreground,
                                }}
                                labelStyle={{ color: THEME_COLORS.foreground }}
                                itemStyle={{ color: THEME_COLORS.foreground }}
                                formatter={(value: number) => [
                                    `$${value.toLocaleString()}`,
                                    "Revenue",
                                ]}
                            />
                            <Bar
                                dataKey="revenue"
                                fill={CHART_COLORS.chart3}
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
