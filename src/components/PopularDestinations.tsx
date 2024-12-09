import { allDestinations } from "@/lib/data";
import DestinationCard from "./ui/card-destination";

function PopularDestinations() {
  const popularDestinations = allDestinations.filter((item) => item.popular);

  return (
    <section className='custom-container'>
      <h2 className='text-2xl text-gray-500 mb-3'>Popular yachts destinations</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-12'>
        {popularDestinations.map((item) => (
          <div key={item.title} className=''>
            <DestinationCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;
