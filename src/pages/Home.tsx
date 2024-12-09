import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PopularDestinations from "@/components/PopularDestinations";
import PopularYachts from "@/components/PopularYachts";
import SmallSearchForm from "@/components/SmallSearchForm";

function Home() {
  return (
    <>
      <Hero title='Find your perfect yacht on YachtRental' subtitle='Discover a wide selection of luxury yachts for your special event!' />
      <SmallSearchForm />
      <PopularDestinations />
      <PopularYachts />
      <Newsletter />
    </>
  );
}

export default Home;
