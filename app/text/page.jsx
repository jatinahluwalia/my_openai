"use client"

import { useState } from "react"
import Loader from "@/components/Loader/Loader"

export default function Chat() {
    const [loading, setLoading] = useState(false)
    const [description, setDescription] = useState('')
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const res = await fetch('/api/v2/openai', {
                method: 'POST',
                body: JSON.stringify({
                    name: e.target.name.value,
                    prompt: e.target.prompt.value
                })
            })
            const data = await res.json()
            setDescription(data.description)
            setLoading(false)
        } catch (error) {
            setLoading(false);
            setDescription('Error Occured')
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto gap-4 text-3xl p-5" style={{ height: "100dvh" }}>
            <h1 className="font-bold">AI Made by Jatin Ahluwalia</h1>
            <div className="flex flex-col bg-slate-200 p-5 rounded-md shadow-sm">
                <label htmlFor="name" className="mb-5">Enter your name first:</label>
                <input type="text" placeholder="Your Name..." name="name" id="name" className="shadow-md px-4 py-2 rounded-full mb-5" />
                <label htmlFor="prompt" className="mb-5">Type here:</label>
                <input type="text" placeholder="Type Anything..." name="prompt" id="prompt" className="shadow-md px-4 py-2 rounded-full mb-5" />
            </div>
            {loading && <Loader />}
            <button className="mt-auto rounded-full px-4 py-2 bg-blue-400">SUBMIT</button>
            {description && <div className="text-2xl">
                <p className="text-gray-600">{description}</p>
            </div>}
        </form>
    )
}