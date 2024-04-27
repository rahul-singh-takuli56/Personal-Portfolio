const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10">
      <div className="container mx-auto">
        <p className="text-center text-2xl font-semibold mb-6">
          Rahul Singh Takuli
        </p>
        <div className="flex justify-center items-center lg:gap-10 gap-3 mb-10">
          <a href="#" className="hover:text-purple-500">
            About
          </a>
          <a href="#" className="hover:text-purple-500">
            Skills
          </a>
          <a href="#" className="hover:text-purple-500">
            Projects
          </a>
          <a href="#" className="hover:text-purple-500">
            Education
          </a>
          <a href="#" className="hover:text-purple-500">
            Contact
          </a>
        </div>
        <div className="text-center">
          <p>&copy; 2024 Rahul Singh Takuli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
