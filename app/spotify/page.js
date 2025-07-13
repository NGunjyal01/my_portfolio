"use client";

import { useState } from "react";

export default function SpotifyPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [actionMessage, setActionMessage] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        const res = await fetch("/api/spotify");
        const json = await res.json();
        setData(json);
        console.log(json)
        setLoading(false);
    };
    const playTrack = async (uri) => {
        try {
            const res = await fetch("/api/spotify/play", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ uri }),
            });

            const result = await res.json();

            if (!res.ok) {
                const errorReason = result?.error?.error?.reason || "Something went wrong.";
                setActionMessage(errorReason);
            } else {
                setActionMessage(result.message || "▶️ Playback started.");
            }
        } catch (error) {
            setActionMessage("Network error.");
        }
    };
    const pauseTrack = async () => {
        try {
            const res = await fetch("/api/spotify/pause", {
                method: "POST",
            });

            const data = await res.json(); 

            if (!res.ok) {
                setActionMessage(data?.error?.error?.reason || "Something went wrong.");
            } else {
                setActionMessage("⏸️ Playback paused successfully.");
            }
        } catch (error) {
            setActionMessage("Network error or Spotify not responding.");
        }
    };

    const handleReset = ()=>{
        setData(null);
        setActionMessage(null);
    }

    return (
    <div className="py-32 px-12 space-y-4">
        <div className="flex items-center gap-10">
            <h1 className="text-2xl font-bold">🎧 Spotify Integration</h1>
            {data && <button className="px-7 py-1 rounded-lg bg-red-700 text-white" onClick={handleReset}>reset</button>}
        </div>
        {!data && (
        <button
            onClick={fetchData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
            🔍 Fetch My Spotify Data
        </button>
        )}

        {loading && <p>Loading your top tracks...</p>}

        {data && (
        <>
            <div>
            <h2 className="text-lg font-semibold">Now Playing:</h2>
            {data?.nowPlaying ? (
                <p>
                {data?.nowPlaying?.item?.name} - {data?.nowPlaying?.item?.artists[0]?.name}
                </p>
            ) : (
                <p>No song currently playing.</p>
            )}
            </div>

            {data.nowPlaying && <button
            onClick={pauseTrack}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
            ⏸️ Pause Playback
            </button>}

            <div>
            <h2 className="text-lg font-semibold mt-6">Top Tracks:</h2>
            {!data.topTracks.length===0 ? <ul className="list-disc ml-6 space-y-1">
                {data.topTracks.map((track, index) => (
                <li key={track.uri}>
                    <span>
                    {track.name} – {track.artist}
                    </span>
                    <button
                    onClick={() => playTrack(track.uri)}
                    className="ml-3 px-2 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                    >
                    ▶️ Play
                    </button>
                </li>
                ))}
            </ul> : <h1> No Top Tracks</h1>}
            </div>

            {actionMessage && (
            <div className="mt-4 p-2 bg-yellow-100 border border-yellow-300 rounded">
                {actionMessage}
            </div>
            )}    
            <h1 className="mt-2 font-bold">Raw JSON DATA</h1>
            <pre className="mt-6 p-4 bg-gray-100 overflow-x-auto rounded text-sm">
            {JSON.stringify(data, null, 2)}
            </pre>
        </>
        )}
    </div>
    );
}
