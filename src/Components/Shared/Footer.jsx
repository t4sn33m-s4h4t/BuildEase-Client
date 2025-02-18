
import { Footer as Ft, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <Ft className=" bg-purple-200" container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand as={Link} className="justify-center" href="/">
            <img className="md:max-w-14 max-w-12 mr-1 md:mr-3" src={logo} alt="" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">BuildEase</span>
          </FooterBrand>
          <FooterLinkGroup className="justify-center">
            <FooterLink as={Link} to="https://www.facebook.com/t4sn33m.s4h4t/" target="_blank">
              <FaFacebookF size={24} />
            </FooterLink>
            <FooterLink as={Link} to="https://www.instagram.com/tasneem_sahat/" target="_blank">
              <FaInstagram size={24} />
            </FooterLink>
            <FooterLink as={Link} to="https://www.linkedin.com/in/tasneem-sahat/" target="_blank">
              <FaLinkedinIn size={24} />
            </FooterLink>
          </FooterLinkGroup>
          
          <FooterLinkGroup className="justify-center mt-5 md:mt-0">
            <FooterLink as={Link} to="/">Home</FooterLink>
            <FooterLink as={Link} to="/apartment">Apartment</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright to="/" by="BuildEase" year={2025} />
      </div>
    </Ft>
  );
}
