"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Legend, Tooltip } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { type PlatformSales } from "@/features/analytics/types";
import { THEME_COLORS } from "@/lib/chart-colors";

interface PlatformBreakdownProps {
    data: PlatformSales[];
    title?: string;
    description?: string;
}

export function PlatformBreakdown({
    data,
    title = "Platform Distribution",
    description = "Revenue by streaming platform",
}: PlatformBreakdownProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={90}
                                paddingAngle={2}
                                dataKey="revenue"
                                nameKey="platform"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        stroke={THEME_COLORS.background}
                                        strokeWidth={2}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: THEME_COLORS.card,
                                    border: `1px solid ${THEME_COLORS.border}`,
                                    borderRadius: "8px",
                                    color: THEME_COLORS.foreground,
                                }}
                                labelStyle={{ color: THEME_COLORS.foreground }}
                                itemStyle={{ color: THEME_COLORS.foreground }}
                                formatter={(value: number, name: string) => [
                                    `$${value.toLocaleString()}`,
                                    name,
                                ]}
                            />
                            <Legend
                                verticalAlign="bottom"
                                height={36}
                                formatter={(value) => (
                                    <span style={{ color: THEME_COLORS.foreground }}>{value}</span>
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
