import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InsideComponent from "./components/InsideComponent";

export default function page() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl m-auto bg-white mb-5">
        <Header />
        <Hero tit={true} message="Milestones Grill (Tornato)" search={false} />
        <InsideComponent />
      </div>
    </main>
  )
}
