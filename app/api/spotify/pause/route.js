import { pauseTrack } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const POST = async() => {
    try {
    const result = await pauseTrack();

    if (result.success) {
        return NextResponse.json({ message: "Playback paused" }, {status:200});
    }

    return NextResponse.json({ error: result.error || "Pause failed" },{ status: result.status || 500 });
    } catch (err) {
        console.error("Pause API error:", err);
        return NextResponse.json({ error: "Internal Server Error" },{ status: 500 });
    }
}
