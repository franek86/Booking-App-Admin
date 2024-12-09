import { DestinationProps } from "@/lib/types";
import { Link } from "react-router-dom";

function DestinationCard(item: DestinationProps) {
  return (
    <div className='h-56 rounded-2xl p-3 relative overflow-hidden'>
      <Link to={`/${item.slug}`}>
        <h3 className='absolute z-[1] bottom-3 left-3 text-base text-gray-500 bg-white rounded-xl px-3 max-w-fit'>{item.title}</h3>
        <img src={item.bgImage} alt={item.title} className='object-cover absolute top-0 right-0 bottom-0 left-0 h-full w-full' />
      </Link>
    </div>
  );
}

export default DestinationCard;
