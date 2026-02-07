"use client";

import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { type AgeGroup } from "@/features/engagement/types";
import { CHART_COLORS_ARRAY, THEME_COLORS } from "@/lib/chart-colors";

interface DemographicsChartProps {
    data: AgeGroup[];
    title?: string;
    description?: string;
}

export function DemographicsChart({
    data,
    title = "Audience Demographics",
    description = "Listeners by age group",
}: DemographicsChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical">
                            <XAxis
                                type="number"
                                stroke={THEME_COLORS.mutedForeground}
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value}%`}
                            />
                            <YAxis
                                type="category"
                                dataKey="ageRange"
                                stroke={THEME_COLORS.mutedForeground}
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                width={50}
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
                                formatter={(value: number, name: string, props) => {
                                    const payload = props.payload as AgeGroup | undefined;
                                    if (!payload) return [value, name];
                                    return [
                                        `${payload.count.toLocaleString()} listeners (${value}%)`,
                                        payload.ageRange,
                                    ];
                                }}
                            />
                            <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={CHART_COLORS_ARRAY[index % CHART_COLORS_ARRAY.length]}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
