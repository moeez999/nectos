"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import AudienceChart from "../components/audienceCart";
import TrafficByDevice from "../components/trafficByDevice";
import TotalVisitors from "../components/totalVisitors";

import TrafficByLocation from "../components/trafficByLocationMap";

const navigation = [
  {
    name: "Profile",
    href: "/dashboard",
    icon: "../img/profileHome.svg",
    current: false,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "../img/analytics-2.svg",
    current: true,
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

export default function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

          <main className="py-10 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pb-4">
              <div className="bg-[#FFE8D2] px-4 py-6 rounded-xl sm:text-start text-center w-[160px] sm:w-full flex flex-col sm:flex-col-reverse">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-[#1B1E28]">50K</p>
                  <p className="text-sm hidden sm:flex items-center gap-1">
                    +20.1%{" "}
                    <svg
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.45488 1.60777L13 0L11.6198 5.6061L9.89804 3.9532L7.12069 6.84627C7.02641 6.94448 6.89615 7 6.76 7C6.62385 7 6.49359 6.94448 6.39931 6.84627L4.36 4.72199L1.36069 7.84627C1.16946 8.04547 0.85294 8.05193 0.653735 7.86069C0.454529 7.66946 0.44807 7.35294 0.639307 7.15373L3.99931 3.65373C4.09359 3.55552 4.22385 3.5 4.36 3.5C4.49615 3.5 4.62641 3.55552 4.72069 3.65373L6.76 5.77801L9.17665 3.26067L7.45488 1.60777Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </p>
                </div>

                <p className="text-[#272727] text-sm">New Visitors</p>
              </div>
              <div className="bg-[#FFECE6] px-4 py-6 rounded-xl sm:text-start text-center w-[160px] sm:w-full flex flex-col  sm:flex-col-reverse">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-[#1B1E28]">50K</p>
                  <p className="text-sm hidden sm:flex items-center gap-1">
                    +20.1%{" "}
                    <svg
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.54512 6.39223L-9.53674e-07 8L1.38019 2.3939L3.10196 4.0468L5.87931 1.15373C5.97359 1.05552 6.10385 1 6.24 1C6.37615 1 6.50641 1.05552 6.60069 1.15373L8.64 3.27801L11.6393 0.153734C11.8305 -0.0454712 12.1471 -0.0519314 12.3463 0.139307C12.5455 0.330544 12.5519 0.64706 12.3607 0.846266L9.00069 4.34627C8.90641 4.44448 8.77615 4.5 8.64 4.5C8.50385 4.5 8.37359 4.44448 8.27931 4.34627L6.24 2.22199L3.82335 4.73933L5.54512 6.39223Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </p>
                </div>
                <p className="text-[#272727] text-sm">Total Visitors</p>
              </div>
              <div className="bg-[#C5DFE5] px-4 py-6 rounded-xl sm:text-start text-center w-[160px] sm:w-full flex flex-col  sm:flex-col-reverse">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-[#1B1E28]">50K</p>
                  <p className="text-sm hidden sm:flex items-center gap-1">
                    +20.1%
                    <svg
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.54512 6.39223L-9.53674e-07 8L1.38019 2.3939L3.10196 4.0468L5.87931 1.15373C5.97359 1.05552 6.10385 1 6.24 1C6.37615 1 6.50641 1.05552 6.60069 1.15373L8.64 3.27801L11.6393 0.153734C11.8305 -0.0454712 12.1471 -0.0519314 12.3463 0.139307C12.5455 0.330544 12.5519 0.64706 12.3607 0.846266L9.00069 4.34627C8.90641 4.44448 8.77615 4.5 8.64 4.5C8.50385 4.5 8.37359 4.44448 8.27931 4.34627L6.24 2.22199L3.82335 4.73933L5.54512 6.39223Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </p>
                </div>

                <p className="text-[#272727] text-sm">New Users</p>
              </div>
              <div className="bg-[#D2F1DB] px-4 py-6 rounded-xl sm:text-start text-center w-[160px] sm:w-full flex flex-col  sm:flex-col-reverse">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-[#1B1E28]">50K</p>
                  <p className="text-sm hidden sm:flex items-center gap-1">
                    +20.1%{" "}
                    <svg
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.45488 1.60777L13 0L11.6198 5.6061L9.89804 3.9532L7.12069 6.84627C7.02641 6.94448 6.89615 7 6.76 7C6.62385 7 6.49359 6.94448 6.39931 6.84627L4.36 4.72199L1.36069 7.84627C1.16946 8.04547 0.85294 8.05193 0.653735 7.86069C0.454529 7.66946 0.44807 7.35294 0.639307 7.15373L3.99931 3.65373C4.09359 3.55552 4.22385 3.5 4.36 3.5C4.49615 3.5 4.62641 3.55552 4.72069 3.65373L6.76 5.77801L9.17665 3.26067L7.45488 1.60777Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </p>
                </div>
                <p className="text-[#272727] text-sm">Page Views</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {/* First row (70% and 30%) */}
              <div className="md:w-[65%]">
                <TotalVisitors />
              </div>
              <div className="md:w-[30%]">
                <AudienceChart />
              </div>

              {/* Second row (40% and 60%) */}
              <div className="md:w-[45%]">
                <TrafficByDevice />
              </div>
              <div className="md:w-[50%]">
                <TrafficByLocation />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
