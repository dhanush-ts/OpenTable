import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EntireFlow from "./components/EntireFlow";

export default function page() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl m-auto bg-white">
        <Header />
        <Hero tit={false} message="Find your Table" search={false} />
        <EntireFlow />
      </div>
    </main>
  );
}
