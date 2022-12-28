import { Button } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import SmallSpinner from "../../Shear/SmallSpinner/SmallSpinner";

const SingUp = () => {
  const { handelUserCreate, updateUser, loading, setLoading } =
    useContext(AuthContext);
  const [errorMessage, SetErrorMessage] = useState("");

  // handel singUp form
  const handelSingUpForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    handelUserCreate(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          const updeInfo = {
            displayName: name,
          };
          console.log(updeInfo);
          updateUser(updeInfo)
            .then((userCredential) => {
              toast.success("🦄 Sing up successful!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.log(errorMessage);
            });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const message = errorMessage.split(":")[1];
        if (message) {
          SetErrorMessage(message);
        }
      });
  };
  return (
    <div className="min-h-[80.7vh]">
      <div>
        <form
          onSubmit={handelSingUpForm}
          className="w-full md:w-1/2 lg:w-1/2 mx-auto mt-3 py-5 text-start px-5 border border-gray-500 rounded-lg"
        >
          <h1 className="text-center text-2xl font-bold text-gray-400 mb-5">
            SingUp
          </h1>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="name"
              name="name"
              id="floating_repeat_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_repeat_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="floating_repeat_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_repeat_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
          </div>
          <div class="relative z-0  w-full group">
            <input
              type="password"
              name="password"
              id="floating_repeat_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_repeat_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              password
            </label>
          </div>
          <p className="mb-6 text-red-500">{errorMessage}</p>
          <div className="flex justify-start items-center">
            {loading ? (
              <Button gradientDuoTone="purpleToPink" className="mt-5">
                <SmallSpinner />
              </Button>
            ) : (
              <Button
                gradientDuoTone="purpleToPink"
                type="submit"
                className="px-6 py-1 mt-5"
              >
                Sing Up
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
