import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const messages: { role: "user" | "assistant" | "system"; content: string }[] = body?.messages || []

    const apiKey = process.env.HUGGINGFACE_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "HUGGINGFACE_API_KEY manquant. Obtiens-en une gratuite sur https://huggingface.co/settings/tokens" }, { status: 500 })
    }

    // Construire le prompt depuis les messages
    let prompt = ""
    messages.forEach((msg) => {
      if (msg.role === "system") {
        prompt += `${msg.content}\n\n`
      } else if (msg.role === "user") {
        prompt += `User: ${msg.content}\n`
      } else if (msg.role === "assistant") {
        prompt += `Assistant: ${msg.content}\n`
      }
    })
    prompt += "Assistant:"

    // Appel à Hugging Face Inference API (gratuit, modèle Mistral-7B)
    const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 512,
          temperature: 0.7,
          top_p: 0.95,
          return_full_text: false,
        },
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return NextResponse.json({ error: `Erreur Hugging Face: ${err}` }, { status: response.status })
    }

    const data = await response.json()
    const reply = data?.[0]?.generated_text?.trim() || "Aucune réponse de l'IA."

    return NextResponse.json({ reply })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Erreur" }, { status: 500 })
  }
}
