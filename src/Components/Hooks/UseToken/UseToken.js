import { useEffect, useState } from "react";
import { server_url } from "../AllUrl/AllUrl";

export const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`${server_url}jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.accessToken) {
            localStorage.setItem("access_Token", data?.accessToken);
            setToken(data?.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};
