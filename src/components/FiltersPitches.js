/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  BookmarkAltIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const uploadDate = [
  { name: "Today", href: "#", icon: InformationCircleIcon },
  { name: "This Week", href: "#", icon: OfficeBuildingIcon },
  { name: "This Month", href: "#", icon: NewspaperIcon },
];
const industry = [
  { name: "Finance", href: "#", icon: UserGroupIcon },
  { name: "Business", href: "#", icon: GlobeAltIcon },
  { name: "Travel", href: "#", icon: BookmarkAltIcon },
];

const type = [
  { name: "Article", href: "#", icon: UserGroupIcon },
  { name: "Blog Post", href: "#", icon: GlobeAltIcon },
  { name: "Sponsored", href: "#", icon: BookmarkAltIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FiltersPitches() {
  return (
    <Popover className="z-0 relative">
      {({ open }) => (
        <>
          <div className="relative z-30 bg-white shadow">
            <div className="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                <span>Filters</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute z-10 inset-x-0 transform shadow-lg"
            >
              <div className="relative max-w-7xl mx-auto grid grid-cols-1 z-30">
                <nav
                  className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-3 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                  aria-labelledby="solutionsHeading"
                >
                  <h2 id="solutionsHeading" className="sr-only">
                    Solutions menu
                  </h2>
                  <div>
                    <div> </div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Upload date
                    </h3>
                    <ul className="mt-5 space-y-6">
                      {uploadDate.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-4">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Industry
                    </h3>
                    <ul className="mt-5 space-y-6">
                      {industry.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-4">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Type
                    </h3>
                    <ul className="mt-5 space-y-6">
                      {type.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-4">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
