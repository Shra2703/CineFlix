const Footer = () => {
  return (
    <footer className="bg-[#0F1016] text-white py-6 font-consent border-t border-gray-600 overflow-y-hidden">
      <p className="text-2xl text-center">
        &copy; {new Date().getFullYear()} CineFlix. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
