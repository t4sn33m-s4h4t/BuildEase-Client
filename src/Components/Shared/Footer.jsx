
import { Footer as Ft, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <Ft className="px-1 md:px-20 lg:px-44 bg-purple-200" container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand as={Link} href="/">
            <img className="md:max-w-14 max-w-12 mr-1 md:mr-3" src={logo} alt="" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">BuildEase</span>
          </FooterBrand>
          <FooterLinkGroup>
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
          <FooterLinkGroup>
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
