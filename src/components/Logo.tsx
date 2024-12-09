import { Link } from "react-router-dom";

type LogoProps = {
  logoStyle?: string;
};

function Logo({ logoStyle }: LogoProps) {
  return (
    <div className={`text-black text-2xl font-bold ${logoStyle}`}>
      <Link to='/'>Yacht Rent</Link>
    </div>
  );
}

export default Logo;
