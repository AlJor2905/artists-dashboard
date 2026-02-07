import { type Release } from "@/features/releases/types";

export const mockReleases: Release[] = [
    {
        id: "1",
        title: "Midnight Dreams",
        type: "album",
        artistName: "Luna Echo",
        artwork: "https://picsum.photos/seed/album1/400/400",
        releaseDate: "2026-01-15",
        streams: 2450000,
        sales: 12500,
        revenue: 45000,
    },
    {
        id: "2",
        title: "Electric Soul",
        type: "single",
        artistName: "Luna Echo",
        artwork: "https://picsum.photos/seed/single1/400/400",
        releaseDate: "2026-02-01",
        streams: 890000,
        sales: 4200,
        revenue: 15800,
    },
    {
        id: "3",
        title: "Neon Horizons",
        type: "ep",
        artistName: "Luna Echo",
        artwork: "https://picsum.photos/seed/ep1/400/400",
        releaseDate: "2025-11-20",
        streams: 1250000,
        sales: 6800,
        revenue: 28500,
    },
    {
        id: "4",
        title: "Starlight Serenade",
        type: "single",
        artistName: "Luna Echo",
        artwork: "https://picsum.photos/seed/single2/400/400",
        releaseDate: "2025-12-10",
        streams: 1650000,
        sales: 8900,
        revenue: 32000,
    },
    {
        id: "5",
        title: "Velvet Shadows",
        type: "album",
        artistName: "Luna Echo",
        artwork: "https://picsum.photos/seed/album2/400/400",
        releaseDate: "2025-08-05",
        streams: 3200000,
        sales: 18000,
        revenue: 68000,
    },
    {
        id: "6",
        title: "Aurora Rising",
        type: "single",
        artistName: "Luna Echo",
        artwork: "https://picsum.photos/seed/single3/400/400",
        releaseDate: "2026-03-01",
        streams: 0,
        sales: 0,
        revenue: 0,
        isUpcoming: true,
    },
    {
        id: "7",
        title: "Crystal Waves",
        type: "ep",
        artistName: "Luna Echo",
        artwork: "https://picsum.photos/seed/ep2/400/400",
        releaseDate: "2026-03-15",
        streams: 0,
        sales: 0,
        revenue: 0,
        isUpcoming: true,
    },
    {
        id: "8",
        title: "Cosmic Dance",
        type: "single",
        artistName: "Luna Echo",
        artwork: "https://picsum.photos/seed/single4/400/400",
        releaseDate: "2025-10-18",
        streams: 520000,
        sales: 2100,
        revenue: 8500,
    },
];

export const getLatestReleases = () =>
    mockReleases.filter(r => !r.isUpcoming).slice(0, 4);

export const getUpcomingReleases = () =>
    mockReleases.filter(r => r.isUpcoming);

export const getRecommendedReleases = () =>
    mockReleases.filter(r => !r.isUpcoming && r.streams > 1000000);
