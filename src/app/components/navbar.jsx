import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  // Dynamic navigation items array
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "How it works?", href: "#howitworks" },
    { name: "Features", href: "#features" },
    { name: "FAQ’S", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img
              alt="Nectos"
              src="../img/Nectos-Logo.svg"
              className="h-8 md:h-12 w-auto"
            />
          </div>

          {/* Centered Navigation Items */}
          <div className="hidden lg:flex-1 lg:flex md:justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 md:text-base font-medium text-[#242424] hover:text-[#1DD588]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Button on the right */}
          <div className="hidden lg:block items-center space-x-4">
            <button
              type="button"
              className="relative rounded-full bg-[#053E42] text-white px-6 py-4 text-sm font-medium"
            >
              Create Card
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <DisclosureButton className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1DD588]">
              <svg
                className="h-6 w-6 text-[#053E42]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="lg:hidden bg-white py-4">
        <div className="space-y-1 pb-3 pt-2">
          {navItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium text-[#242424] hover:bg-indigo-100 hover:text-[#1DD588]"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <button
          type="button"
          className="relative rounded-full bg-[#053E42] text-white ml-2 px-4 py-2 text-sm font-medium"
        >
          Create Card
        </button>
      </DisclosurePanel>
    </Disclosure>
  );
}
