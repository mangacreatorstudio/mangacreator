export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // API key dari environment variable — TIDAK pernah dikirim ke browser
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured on server' });
  }

  const { prompt, genre, systemPrompt } = req.body;

  if (!prompt || !genre) {
    return res.status(400).json({ error: 'prompt and genre are required' });
  }

  try {
    const deepseekRes = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Prompt: ${prompt}\nGenre: ${genre}` },
        ],
        max_tokens: 800,
        temperature: 0.9,
      }),
    });

    if (!deepseekRes.ok) {
      const errText = await deepseekRes.text();
      return res.status(deepseekRes.status).json({ error: errText });
    }

    const data = await deepseekRes.json();
    const content = data.choices[0].message.content.trim();

    // Kembalikan hanya content ke frontend — tidak ada API key yang bocor
    return res.status(200).json({ content });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
