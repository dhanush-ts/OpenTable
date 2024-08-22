import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function page() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl m-auto bg-white">
        <Header />
        <Hero tit={true} message="Milestones Grill (Tornato)" search={false} />

        <div className="md:flex max-w-4xl m-auto">
        <div className="bg-white p-0.5 m-auto shadow -mt-9 sm:min-w-req rounded">
          <nav className="border-b py-1 mx-2">
            <Link href="/" className="text-xs font-semibold">Overview</Link>
            <Link href="/" className="text-xs mx-2 font-semibold">Menu</Link>
          </nav>
          <p className="text-2xl m-2 my-4 font-extrabold">Menu</p>
          <div className="rounded border shadow m-2 max-w-xs"> 
            <p className="font-extrabold mt-2 mx-2">Surf and Turf</p>
            <p className="mx-2 text-xs">A well done streak with lobster and rice</p>
            <p className="m-2 mt-4 text-sm font-bold">$ 80.00</p>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}
