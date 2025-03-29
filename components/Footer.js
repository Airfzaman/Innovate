import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="dark:bg-gray-800 bg-white text-black dark:text-gray-400 py-6">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Links Section */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm md:text-base mb-4">
          <a href="/AboutMe" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            About
          </a>
          <a href="/Contact" className=" hover:text-gray-700 hover:text-grey dark:hover:text-white transition-colors">
            Contact
          </a>
          <a href="/projects" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="index" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            Home
          </a>
          {/* <a href="#" className="hover:text-white transition-colors">
            Accessibility
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Partners
          </a> */}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-xl mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/___arif___uz__zaman___/profilecard/?igsh=aTk2cm85NHZjM2Zm" aria-label="Instagram" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://github.com/Airfzaman" aria-label="GitHub" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/arif-uz-zaman-2a48b5275" aria-label="Linkedin" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm md:text-base">
          &copy; 2024 Arif uz zaman, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
