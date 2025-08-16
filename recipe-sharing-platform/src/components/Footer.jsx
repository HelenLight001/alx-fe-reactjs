import {FaYoutube, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://youtube.com/YourChannel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/HelenLight_01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-sm">
          &copy; 2025 🍴 FlavorFusion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
