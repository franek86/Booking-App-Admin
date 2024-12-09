import { Link } from "react-router-dom";
import Logo from "./Logo";
import { footerLinks } from "@/lib/links";

function Footer() {
  return (
    <footer className='footer-shadow py-6 mt-16'>
      <div className='container-xl mx-6 flex flex-col md:flex-row justify-between items-start'>
        <div>
          <Logo logoStyle='mb-3 text-md font-bold' />

          <p className='text-sm text-gray-500 mb-2'>Yout unlimited yacht booking platform since 2024</p>
          <p className='text-sm text-gray-500'>Yacht rental &copy; 2024</p>
        </div>

        <div>
          <h4 className='mb-3'>Support</h4>
          <div>
            {footerLinks.map((item) => {
              return (
                <Link className='text-sm text-gray-500 hover:text-green-500 mb-1 flex' key={item.label} to={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
