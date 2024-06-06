import Image from "next/image";

import RickMortyBg from "@/public/rick-morty-bg 1.png"

export default function Home() {
  return (
    <main className="min-h-[100vh] w-full overflow-y-hidden">
      <div className={"relative h-full w-full flex justify-center align-middle"}>
        <h1 className={"text-4xl font-bold text-white absolute z-20 pt-8"}>Behold, an awesome Rick n Morty App</h1>
        <Image src={RickMortyBg} alt={"Rick 'n Morty adventures"} className={"relative"}/>
      </div>
    </main>
  );
}
