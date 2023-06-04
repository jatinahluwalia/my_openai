
import { openai } from '@/utils/openAIConfig'
import { dbConfig } from '@/utils/dbConfig'

export const POST = async (req) => {
    try {
        await dbConfig()
        const { prompt } = await req.json()
        const description = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: "user",
                content: `${prompt}`
            }],
        })
        return new Response(JSON.stringify({ description: description.data.choices[0].message.content }))
    } catch (error) {
        console.log(error);
    }
}

export const GET = async () => {
    return new Response(JSON.stringify({ message: 'Hello World' }))
}