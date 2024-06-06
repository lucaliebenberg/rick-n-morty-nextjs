import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={"w-full h-[40px] p-2 rounded-md flex flex-row justify-start gap-4 bg-indigo-400 text-white"}>
      <Link href={"/"}>
        Rick n Morty
      </Link>
      {/*<Link href={"/locations"}>*/}
      {/*  Dashboard*/}
      {/*</Link>*/}
      <Link href={"/characters"}>
        Characters
      </Link>
      <Link href={"/locations"}>
        Locations
      </Link>
    </nav>
  )
}