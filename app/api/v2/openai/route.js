
import { openai } from '@/utils/openAIConfig'
import { dbConfig } from '@/utils/dbConfig'
import { Prompt } from '@/models/prompts'

export const POST = async (req) => {
    try {
        await dbConfig()
        const { prompt } = await req.json()
        console.log(prompt);
        const description = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: "user",
                content: `${prompt}`
            }],
            max_tokens: 1500,
        })
        const newPrompt = new Prompt({
            prompt: prompt,
            description: description.data.choices[0].message.content
        })
        await newPrompt.save()
        return new Response(JSON.stringify({ description: description.data.choices[0].message.content }))
    } catch (error) {
        console.log(error.message);
    }
}

export const GET = async () => {
    return new Response(JSON.stringify({ message: 'Hello World' }))
}