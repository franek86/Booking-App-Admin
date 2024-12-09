import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Logout from "./Logout";
import useGetSession from "@/hooks/auth/useGetSession";

function Header() {
  const { user } = useGetSession();
  return (
    <header className='header-shadow py-6'>
      <div className='container-xl mx-6 flex flex-col md:flex-row justify-between items-center'>
        <Logo />

        <div>
          <Button variant='green' className='ms-3'>
            Book now
          </Button>

          {!user ? (
            <Link to='/signin'>
              <Button variant='green' className='ms-3'>
                Login
              </Button>
            </Link>
          ) : (
            <Logout />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
