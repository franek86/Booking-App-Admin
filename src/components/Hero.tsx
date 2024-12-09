import { HeroProps } from "@/lib/types";

function Hero({ title, bgImage, subtitle }: HeroProps) {
  const bgImageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className='custom-container' style={bgImageStyle}>
      <div className='flex flex-col items-center justify-center text-center h-72 rounded-xl hero-shadow'>
        <h1 className='text-bold text-[20px] xl:text-[40px] text-black'>{title}</h1>
        {subtitle && <p className='text-lg text-gray-600 my-3'>{subtitle}</p>}
      </div>
    </section>
  );
}

export default Hero;
