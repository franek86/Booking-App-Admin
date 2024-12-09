import { HandCoins } from "lucide-react";
import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <section className='custom-container my-16'>
      <div className='flex flex-col md:flex-row justify-between items-center p-3 md:p-6 shadow-md rounded-3xl'>
        <div className='flex flex-col items-center md:flex-row'>
          <HandCoins size={40} />
          <div className='ms-8'>
            <h3 className='text-base text-black font-bold'>Exlusive deals</h3>
            <p className='text-sm text-gray-500'>Want excluse offers and discounts for luxurouis yacht rentals? Join the yacht club now!</p>
          </div>
        </div>
        <Button variant='green' className='rounded-3xl'>
          Join now
        </Button>
      </div>
    </section>
  );
};

export default Newsletter;
