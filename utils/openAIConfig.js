import { Configuration, OpenAIApi } from "openai"
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    engine: "gpt-3.5-turbo",
})

const openai = new OpenAIApi(config)

export { openai }