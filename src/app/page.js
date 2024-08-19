import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RestaurantCard from "@/components/RestaurantCard";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl m-auto bg-white">
        <Header />
        <Hero />
        <div className="max-w-5xl my-5 pl-0.5 justify-center flex flex-wrap gap-5">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </main>
  );
}
