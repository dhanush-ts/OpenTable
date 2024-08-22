import Link from "next/link";
import MenuCard from "./MenuCard";

export default function InsideComponent() {
  return (
    <div className="md:flex max-w-4xl m-auto">
        <div className="bg-white p-0.5 m-auto shadow -mt-9 sm:min-w-req rounded">
        <nav className="border-b py-1 mx-2">
            <Link href="/" className="text-xs font-semibold">Overview</Link>
            <Link href="/" className="text-xs mx-2 font-semibold">Menu</Link>
        </nav>
        <p className="text-2xl m-2 my-4 font-extrabold">Menu</p>
        <div className="gap-5 flex flex-wrap mb-5" >
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
        </div>
        </div>
    </div>
  )
}
