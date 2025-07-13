import { fetchNowPlaying, fetchTopTracks } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const GET = async() => {
    try {
        const nowPlaying = await fetchNowPlaying();
        const topTracks = await fetchTopTracks();

        const artist = nowPlaying?.item?.artists?.[0]?.name || null;

        return NextResponse.json({nowPlaying,artist,topTracks}, {status: 200});
    } catch (error) {
        console.error("Spotify API Error:", error);
        return new NextResponse("Failed to load Spotify data", { status: 500 });
    }
}
