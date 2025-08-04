import OpenAI from "openai"

export async function aiTranslation(lang, text) {
    const messages = [
        {
            role: 'system',
            content: 'you are a expert translation agent. Given a language and some text you translate the text to that given language. Respond only with the translation'
        },
        {
            role: 'user',
            content: `Language: ${lang}, text to translate: ${text}`
        }
    ]
    try {
        const client = new OpenAI({
            dangerouslyAllowBrowser: true,
            apiKey: // add your own openai api key here
        })
        const completion = await client.chat.completions.create({
            model: "gpt-4",
            messages
        })
        return completion.choices[0].message.content
    } catch(err) {
        return `An error ocurred: ${err}
        Please try again.
        `
    }
  }