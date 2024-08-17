import React from "react";
import icon from "../../public/Task.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-semibold mb-4">Abstract</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Branches</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Blog</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Help Center</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Release Notes</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Status</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Twitter</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">LinkedIn</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Facebook</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Dribbble</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Podcast</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Careers</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Legal</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center mt-10 text-gray-400 flex items-center justify-center">
        <img src={icon} alt="Logo Icon" className="h-6 w-6 mr-2" />
        <p className="text-sm">&copy; 2024 Abstract Studio Design, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
