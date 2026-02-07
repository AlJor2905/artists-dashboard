export type ReleaseType = "single" | "album" | "ep";

export interface Release {
    id: string;
    title: string;
    type: ReleaseType;
    artistName: string;
    artwork: string;
    releaseDate: string;
    streams: number;
    sales: number;
    revenue: number;
    isUpcoming?: boolean;
}
