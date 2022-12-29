import { Avatar } from "flowbite-react";
import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import { CiDark } from "react-icons/ci";
import { BiSun } from "react-icons/bi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handelSingOutUser, user } = useContext(AuthContext);
  const [themIcon, setThemIcon] = useState(true);
  const [sideMenu, setSideMenu] = useState(false);

  const them = document.documentElement;
  // handelUserLogOut
  const handelUserLogOut = () => {
    handelSingOutUser()
      .then(() => {
        toast.success("🦄 Sing Out successful!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        localStorage.removeItem("access_Token");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Them change
  const changeTheme = () => {
    setThemIcon(!themIcon);
    if (them.classList.value === "dark") {
      them.classList.value = "light";
    } else {
      them.classList.value = "dark";
    }
  };

  const navBarMenu = (
    <>
      <li>
        <Link
          to="/"
          class="block py-4 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white bg-black"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/media"
          class="block py-4 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
        >
          My Task
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <span
              onClick={handelUserLogOut}
              class="block py-4 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer"
            >
              Sing Out
            </span>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="/sing-up"
              class="block py-4 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            >
              Sing Up
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              class="block py-4 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            >
              Login
            </Link>
          </li>
        </>
      )}

      <li className="cursor-pointer">
        <div
          onClick={() => {
            setSideMenu(!sideMenu);
            setIsMenuOpen(false);
          }}
        >
          <Avatar
            img={
              user?.phoneNumber
                ? user?.phoneNumber
                : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            }
            rounded={true}
            bordered={true}
          />
        </div>
      </li>
    </>
  );

  return (
    <div>
      <div class="dark:bg-gray-900 relative shadow-md">
        <div class="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1400px] md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <Link
              to="/"
              class="inline-flex items-center dark:text-gray-400 text-gray-500"
            >
              <svg
                class="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Company
              </span>
            </Link>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              {navBarMenu}
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  setIsMenuOpen(true);
                  setSideMenu(false);
                }}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full z-[999999] shadow-lg">
                  <div class="p-5 bg-white light:border rounded shadow-sm dark:bg-gray-800">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="/"
                          class="inline-flex items-center dark:text-white"
                        >
                          <svg
                            class="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase dark:text-white">
                            Company
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4 dark:text-black">{navBarMenu}</ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {sideMenu && (
          <div
            className={`dark:text-white absolute top-15 right-10 bg-white dark:bg-gray-900 shadow-lg pl-3 text-start pb-4 w-[200px] rounded-b-lg ${
              sideMenu ? "" : "hidden"
            }`}
          >
            <button
              aria-label="Close Menu"
              title="Close Menu"
              class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline lg:hidden"
              onClick={() => setSideMenu(false)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            </button>
            {user?.displayName && <h1 className="py-5">{user?.displayName}</h1>}
            {themIcon ? (
              <div
                onClick={changeTheme}
                className={`hover:bg-gray-800 hover:text-white cursor-pointer rounded-full w-10 h-10 flex justify-center items-center mb-5 ${
                  user?.displayName ? "" : "mt-5"
                }`}
              >
                <BiSun className="text-2xl" />
              </div>
            ) : (
              <div
                onClick={changeTheme}
                className={`hover:bg-gray-400 hover:text-gray-900 cursor-pointer rounded-full w-10 h-10 flex justify-center items-center mb-5 border bg-gray-200  ${
                  user?.displayName ? "" : "mt-5"
                }`}
              >
                <CiDark className="text-2xl" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
