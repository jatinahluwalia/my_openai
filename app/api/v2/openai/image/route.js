import { openai } from "@/utils/openAIConfig"
import { dbConfig } from "@/utils/dbConfig"
import { Prompt } from "@/models/prompts"

export const POST = async (req) => {
    try {
        await dbConfig()
        const { prompt, name } = await req.json()
        const description = await openai.createImage({
            prompt: `${prompt}`,
            n: 1,
            size: "1024x1024"
        })
        const newPrompt = new Prompt({
            username: name,
            prompt: prompt,
            description: description.data.data[0].url
        })
        await newPrompt.save()
        return new Response(JSON.stringify({ description: description.data.data[0].url }))
    } catch (error) {
        console.log(error.message);
    }
}

export const GET = async () => {
    return new Response(JSON.stringify({ message: 'Hello World' }))
}