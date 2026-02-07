import { type Release } from "@/features/releases/types";
import { ReleaseCard } from "./release-card";

interface ReleaseGridProps {
    releases: Release[];
    title?: string;
    emptyMessage?: string;
}

export function ReleaseGrid({
    releases,
    title,
    emptyMessage = "No releases found",
}: ReleaseGridProps) {
    if (releases.length === 0) {
        return (
            <div className="py-12 text-center text-muted-foreground">
                {emptyMessage}
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {title && (
                <h2 className="text-xl font-semibold">{title}</h2>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {releases.map((release) => (
                    <ReleaseCard key={release.id} release={release} />
                ))}
            </div>
        </div>
    );
}
