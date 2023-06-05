import Link from "next/link";


export default function Home() {

  return (
    <main className="p-2 grid" style={{ height: "100dvh" }}>
      <h1 className="text-3xl lg:text-6xl font-bold text-center my-5">AI Made by Jatin Ahluwalia</h1>
      <div className="flex gap-5 mt-auto">
        <Link href={"/text"} className="grow text-center rounded-lg text-white bg-green-500 font-bold text-xl lg:text-3xl py-5">Chat</Link>
        <Link href={"/image"} className="grow text-center rounded-lg text-white bg-green-500 font-bold text-xl lg:text-3xl py-5">Generate Image</Link>

      </div>
    </main>
  )
}
