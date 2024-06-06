import {getCharacters} from "@/app/api/getCharacters";
import Image from "next/image";

export default async function CharactersPage() {
  const returnedData = await getCharacters()
  // console.log('returned data --> ', returnedData)
  const characters = returnedData.results
  console.log('characters --> ', characters)

  return (
    <div className={"h-full"}>
      <div className={"flex justify-center align-middle"}>
        <div className="pt-2 relative mx-auto text-gray-600">
          <input className="border-2 border-gray-300 bg-white h-10 px-8 pr-16 rounded-lg text-sm focus:outline-none"
                 type="search" name="search" placeholder="Search"/>
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          </button>
        </div>
      </div>
      <div className={"p-2 grid grid-cols-4 gap-6"}>
        {characters.map((character: any) => (
          <div key={character.id}>
            <h1 className={"text-[1rem] font-bold"}>{character.name}</h1>
            <Image src={character.image} alt={character.name} width={300} height={300}/>
          </div>
        ))}
      </div>
    </div>
  )
}