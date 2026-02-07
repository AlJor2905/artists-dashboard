"use client";

import { type Release } from "@/features/releases/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Disc3, Album } from "lucide-react";

interface ReleaseCardProps {
    release: Release;
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

function formatCurrency(num: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(num);
}

function getReleaseTypeIcon(type: string) {
    switch (type) {
        case "album":
            return Album;
        case "ep":
            return Disc3;
        default:
            return Music;
    }
}

function getReleaseTypeBadgeVariant(type: string) {
    switch (type) {
        case "album":
            return "default" as const;
        case "ep":
            return "secondary" as const;
        default:
            return "outline" as const;
    }
}

export function ReleaseCard({ release }: ReleaseCardProps) {
    const TypeIcon = getReleaseTypeIcon(release.type);

    return (
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            {/* Image Container with Zoom Effect */}
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={release.artwork}
                    alt={release.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Upcoming Badge */}
                {release.isUpcoming && (
                    <div className="absolute top-3 right-3">
                        <Badge className="bg-accent text-accent-foreground">
                            Upcoming
                        </Badge>
                    </div>
                )}

                {/* Play button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110">
                        <TypeIcon className="h-6 w-6" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                        <h3 className="font-semibold truncate">{release.title}</h3>
                        <p className="text-sm text-muted-foreground truncate">
                            {release.artistName}
                        </p>
                    </div>
                    <Badge variant={getReleaseTypeBadgeVariant(release.type)}>
                        {release.type.toUpperCase()}
                    </Badge>
                </div>
            </CardContent>

            {/* Footer with Metrics */}
            <CardFooter className="border-t border-border bg-muted/30 p-4">
                {release.isUpcoming ? (
                    <div className="w-full text-center">
                        <p className="text-sm text-muted-foreground">
                            Releasing{" "}
                            <span className="font-medium text-foreground">
                                {new Date(release.releaseDate).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="grid w-full grid-cols-3 gap-2 text-center">
                        <div>
                            <p className="text-xs text-muted-foreground">Streams</p>
                            <p className="text-sm font-semibold">
                                {formatNumber(release.streams)}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Sales</p>
                            <p className="text-sm font-semibold">
                                {formatNumber(release.sales)}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Revenue</p>
                            <p className="text-sm font-semibold">
                                {formatCurrency(release.revenue)}
                            </p>
                        </div>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
