export default function Footer() {
  return (
    <footer className="flex-col px-4 md:px-0 md:flex md:items-center md:gap-x-10 bg-[#142027] py-12">
      <div className="mx-auto max-w-7xl">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="md:w-[40%]">
            <div className="flex w-48 md:w-full items-center space-x-2 mb-4 ">
              {/* Logo */}
              <img src="../img/nectoslog-footer.svg" alt="Nectos Logo" />
            </div>
            <p className="text-sm mb-4 text-white">
              Lorem ipsum dolor sit amet consectetur. Hac nullam gravida
              consequat purus rhoncus pharetra odio.
            </p>
            <p className="text-sm text-white">
              <strong>Phone:</strong> 309 888 3843 <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@Nectos.com"
                className="text-white hover:underline"
              >
                support@Nectos.com
              </a>
            </p>
          </div>
          {/* Center Section: Quick Links */}
          <div className="md:w-[30%] flex flex-col items-center  justify-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 text-white transition"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 text-white transition"
                >
                  FAQ's
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 text-white transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Right Section: Resources */}
          <div className="md:w-[30%] flex flex-col md:justify-center">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 text-white transition"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 text-white transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-white bg-opacity-10 p-2  rounded-full">
                <img src="../img/fb.svg" alt="" />
              </a>
              <a href="#" className="bg-[#1DD588] rounded-full p-2">
                <img src="../img/twitter.svg" alt="" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2  rounded-full">
                <img src="../img/insta.svg" alt="" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2  rounded-full">
                <img src="../img/youtube.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-4 text-center text-sm text-white w-full">
          <p className="border-t border-[#FFFFFF] pt-6">
            Copyright © 2024 Nectos.co - All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
    </footer>
  );
}
