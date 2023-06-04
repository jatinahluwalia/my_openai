import { Schema, model, models } from "mongoose"

const promptSchema = new Schema({
    username: {
        type: String,
    },
    prompt: {
        type: String,
    },
    description: {
        type: String,
    },
},
    {
        timestamps: true,
    })

const Prompt = models.Prompts || model("Prompts", promptSchema)
export { Prompt }