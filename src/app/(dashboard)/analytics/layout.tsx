import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Analytics",
    description: "Track your sales performance and revenue metrics",
};

export default function AnalyticsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
