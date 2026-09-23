# Calling the OpenAI Responses API from the browser

    const res = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('cb_openai_key')}`,
      },
      body: JSON.stringify({
        model: 'gpt-6-luna',
        instructions,          // grounded-prompt.md
        input,                 // numbered sources + the question
        max_output_tokens: 400,
      }),
    });
    const data = await res.json();
    const text = data.output_text ??
      data.output.flatMap(o => o.content || [])
        .filter(c => c.type === 'output_text').map(c => c.text).join('');

Notes
- api.openai.com allows browser (CORS) calls, which is exactly why the key
  must come from the visitor and never be written into the site.
- The key lives in sessionStorage: it disappears when the tab closes.
- Model ids: gpt-6-luna (fast, low cost), gpt-6-sol (stronger).
