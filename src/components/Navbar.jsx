import logo from "../assets/SaloniLogo.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar  = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img className="mx-0 w-24" src={logo} alt="logo"/>

    </div>
    {/* display the icons */}
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedin />
      <FaGithub />
      <FaInstagram />
      <FaSquareXTwitter />
    </div>
  </nav>
  );
  };

export default Navbar;