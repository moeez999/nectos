"use client";

import { act, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  TransitionChild,
} from "@headlessui/react";
import {
  CalendarIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  PhotoIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ProfileCard from "./profileCard";
import CreateCard from "./createCard";
import ShareCard from "./shareCard";
import DetailsForm from "./detailsForm";
import PhotoLogoForm from "./photoLogo";
import LiveCard from "./liveCard";
import ContentForm from "./contentForm";

const navigation = [
  {
    name: "Profile",
    href: "/dashboard",
    icon: "../img/profileHome.svg",
    current: true,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "../img/analytics-2.svg",
    current: false,
  },
  {
    name: "Setttings",
    href: "/settings",
    icon: "../img/settings.svg",
    current: false,
  },
  {
    name: "Support",
    href: "/support",
    icon: "../img/support.svg",
    current: false,
  },
  {
    name: "Logout",
    href: "/signin",
    icon: "../img/logout.svg",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [createCard, setCreateCard] = useState(false);
  const [showShareCard, setShowShareCard] = useState(false);
  const [addCardDetails, setAddCardDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const handleShareCard = () => {
    setShowShareCard((prev) => !prev);
  };

  const handleAddCardDetails = () => {
    setAddCardDetails(true);
    setCreateCard(false);
  };

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-[#EFFAF5] transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-[#1B1E28]"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#EFFAF5] px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Nectos"
                    src="../img/Nectos-Logo.svg"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-[#1DD588] text-white"
                                  : "text-[#1B1E28] hover:bg-[#1DD588] hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                              )}
                            >
                              <img src={item.icon} alt="" />

                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#EFFAF5] px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center justify-center">
              <img
                alt="Nectos"
                src="../img/Nectos-Logo.svg"
                className="h-12 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col pt-12">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-4">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#1DD588] text-white"
                              : "text-[#1B1E28] hover:bg-[#1DD588] hover:text-white",
                            "group flex gap-x-3 rounded-[10px] p-2 text-sm/6 font-semibold"
                          )}
                        >
                          <img src={item.icon} alt="" />

                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky bg-white top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden bg-[#F7F7F9] rounded-[12px]"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 4.5H21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 9.5H12.47"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 14.5H21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 19.5H12.47"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex flex-1 justify-center md:justify-between items-center gap-x-4 self-stretch lg:gap-x-6">
              <h2 className="text-[#1B1E28] font-medium text-xl">Profile</h2>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative hidden md:block">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="../img/profileimg.png"
                      className="size-8 rounded-[12px]"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm/6 font-semibold text-[#575757]"
                      >
                        Smith012
                      </span>
                    </span>
                  </MenuButton>
                </Menu>
              </div>
            </div>
          </div>

          {createCard ? (
            <main className="py-10 px-8 flex items-center flex-col-reverse md:flex-row gap-2 relative">
              <CreateCard handleAddCardDetails={handleAddCardDetails} />
              <ProfileCard handleShareCard={handleShareCard} />
              {showShareCard && <ShareCard />}
            </main>
          ) : !addCardDetails && !createCard ? (
            <main className="py-10 ">
              <div className="px-4 sm:px-6 lg:px-8 flex justify-center items-center h-full flex-col gap-8">
                <h1 className="text-[#1B1E28] font-semibold md:text-2xl text-center">
                  Welcome to your <br /> Profile!
                </h1>
                <div className="relative flex justify-center items-center">
                  <img
                    className="w-[90%] md:w-full"
                    src="../img/welcome.png"
                    alt=""
                  />
                  <img
                    className="w-12 md:w-auto absolute bottom-[-20%] left-[-4%] md:bottom-[-5%] md:left-[-40%]"
                    src="../img/arrowcurly.png"
                    alt=""
                  />
                  <img
                    className="w-12 md:w-auto absolute top-0 right-[-2%] md:right-[-30%]"
                    src="../img/yellowmark.png"
                    alt=""
                  />
                  <img
                    className="w-12 md:w-auto absolute top-[-5%] left-0 md:left-[-30%]"
                    src="../img/dots.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setCreateCard(true)}
                  className="bg-[#053E42] text-white rounded-full md:rounded-[12px] px-8 py-3 mt-10"
                >
                  Create a card
                </button>
              </div>
            </main>
          ) : (
            addCardDetails &&
            !createCard && (
              <div className="flex justify-center gap-8  w-full px-4 py-6 bg-[#F3FFFA] rounded-xl">
                <div className="w-full max-w-[600px]">
                  {/* Tabs */}
                  <div className="flex gap-8 mb-6 border-b-2 border-gray-100">
                    <button
                      onClick={() => setActiveTab("details")}
                      className={`pb-2 ${
                        activeTab === "details"
                          ? "text-[#053E42] font-semibold border-b-2 border-[#053E42]"
                          : "text-[#7D848D]"
                      }`}
                    >
                      Details
                    </button>
                    <button
                      onClick={() => setActiveTab("photo")}
                      className={`pb-2 ${
                        activeTab === "photo"
                          ? "text-[#053E42] font-semibold border-b-2 border-[#053E42]"
                          : "text-[#7D848D]"
                      }`}
                    >
                      Photo/Logo
                    </button>
                    <button
                      onClick={() => setActiveTab("content")}
                      className={`pb-2 ${
                        activeTab === "content"
                          ? "text-[#053E42] font-semibold border-b-2 border-[#053E42]"
                          : "text-[#7D848D]"
                      }`}
                    >
                      Content
                    </button>
                  </div>

                  <div>
                    {activeTab === "details" && <DetailsForm />}
                    {activeTab === "photo" && <PhotoLogoForm />}
                    {activeTab === "content" && <ContentForm />}
                  </div>
                </div>
                <div className="sm:block hidden">
                  <p className="text-sm text-[#7D848D] mb-4 text-center">
                    Live Preview
                  </p>
                  <LiveCard />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
