import { playTrack } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { uri } = await req.json();

        if (!uri)   return NextResponse.json({ error: "Missing URI in request body" },{ status: 400 });

        const result = await playTrack(uri);

        if (result.success) {
            return NextResponse.json({ message: "Playback started" }, {status: 200});
        }

        return NextResponse.json({ error: result.error || "Playback failed" },{ status: result.status || 500 });
    } catch (err) {
        console.error("Play API error:", err);
        return NextResponse.json({ error: err?.message || "Internal Server Error" },{ status: 500 });
    }
}
