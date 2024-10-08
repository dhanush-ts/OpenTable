import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RestaurantCards from "@/components/RestaurantCards";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl m-auto bg-white">
        <Header />
        <Hero tit={false} message="Find your Table for any occasion" search={false} />
        <RestaurantCards />
      </div>
    </main>
  );
}
