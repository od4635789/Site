import { NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1497919578834075648/uE5FzXOg7E5N0NkHLUZgmdyxsy_EcsqtXWwmGqInnC2co4XHzzgbEP1vu0CuP8JmdBQN";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, userIP } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const payload = {
      username: "Portfolio Bot",
      content: "🚨 <@1188351912488218717> You have a new lead!",
      embeds: [
        {
          title: "🚀 New Lead From Portfolio!",
          color: 12951641,
          fields: [
            { name: "👤 Name", value: name, inline: true },
            { name: "📧 Email", value: email, inline: true },
            { name: "💬 Message", value: message, inline: false },
            { name: "🌐 IP Address", value: `||${userIP || "Unknown IP"}||`, inline: false },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!discordResponse.ok) {
      throw new Error("Failed to send to Discord");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
