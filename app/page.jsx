"use client"

import { useState } from "react"

export default function Home() {
  const [description, setDescription] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/v2/openai', {
      method: 'POST',
      body: JSON.stringify({ prompt: e.target.prompt.value })
    })
    const data = await res.json()
    setDescription(data.description)
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mx-auto gap-4 text-3xl h-screen p-5">
      <h1 className="font-bold">AI Made by Jatin Ahluwalia</h1>
      <div className="flex flex-col bg-slate-200 p-5 rounded-md shadow-sm">
        <label htmlFor="prompt" className="mb-5">Type here:</label>
        <input type="text" placeholder="Type anything..." name="prompt" id="prompt" className="shadow-md px-4 py-2 rounded-full" />
      </div>
      {description && <div className="text-2xl">
        <p>Hello, I am the AI made by Jatin Ahluwalia!</p>
        <p className="text-gray-600">{description}</p>
      </div>}
      <button className="mt-auto rounded-full px-4 py-2 bg-blue-400">SUBMIT</button>

    </form>
  )
}
