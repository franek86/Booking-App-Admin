import { yachts } from "@/lib/data";
import { formatCurrency } from "@/util/currencyFormatter";
import AddFavorite from "./ui/add-favorite";

function PopularYachts() {
  const filteredPopularYachts = yachts.filter((item) => item.rating >= 4.3);
  return (
    <section className='custom-container'>
      <h2 className='text-2xl text-gray-500 mb-3'>Top-rated yachts by guests</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {filteredPopularYachts.map((yacht) => (
          <div className='bg-white rounded-2xl shadow-md p-3' key={yacht._id}>
            <div className='relative'>
              <AddFavorite />
              {yacht.rating && (
                <div className='text-[12px] bg-white absolute top-2 left-2 rounded-full py-1 px-3 text-gray-400'>{yacht.rating}</div>
              )}
              <img src={yacht.mainImage} alt={yacht.name} className='rounded-2xl mb-5' />
            </div>
            <h3 className='text-base text-gray-600'>{yacht.name}</h3>
            <p className='text-sm text-gray-400'>{yacht.location}</p>
            <div className='text-base font-bold text-black mt-3'>{formatCurrency(yacht.minPrice, "EUR")}/day</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularYachts;
