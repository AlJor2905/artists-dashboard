import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engagement",
    description: "Understand your audience across listening platforms and social media",
};

export default function EngagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
