import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import { Button } from "flowbite-react";
import SmallSpinner from "../../Shear/SmallSpinner/SmallSpinner";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../Hooks/UseToken/UseToken";

const Login = () => {
  const { loading, setLoading, handelLoginUser } = useContext(AuthContext);
  const [errorMessage, SetErrorMessage] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [token] = useToken(email);

  // handelUserLogin
  const handelUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    handelLoginUser(email, password)
      .then((result) => {
        setEmail(email);
        toast.success("🦄 Login successful!", {
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
        const errorCode = error.code;
        const errorMessage = error.message;
        const message = errorMessage.split(":")[1];
        if (message) {
          SetErrorMessage(message);
          setLoading(false);
          toast.error(`🦄 ${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

  if (token) {
    navigate("/");
  }
  return (
    <div className="min-h-[80.7vh]">
      <div>
        <form
          onSubmit={handelUserLogin}
          className="w-full md:w-1/2 lg:w-1/2 mx-auto mt-3 py-5 text-start px-5 border border-gray-500 rounded-lg"
        >
          <h1 className="text-center text-2xl font-bold text-gray-400 mb-5">
            Login
          </h1>
          <div className="flex justify-center items-center">
            <Button gradientDuoTone="purpleToPink" className="mt-5 rounded-lg ">
              <BsGoogle />
            </Button>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="floating_repeat_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Email
            </label>
          </div>
          <div className="relative z-0  w-full group">
            <input
              type="password"
              name="password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your password
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
                Login
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
