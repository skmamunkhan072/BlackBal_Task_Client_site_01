import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";

//image fill host function
export const HandelImgHost = (imageFile = "") => {
  const { setLoading } = useContext(AuthContext);
  const [imgHostLink, setImgHostLink] = useState("");

  const imageHostKey = process.env.REACT_APP_UPLOADiMGkEY;
  const formData = new FormData();
  const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
  useEffect(() => {
    if (!imageFile) {
      return;
    }
    setLoading(true);
    const image = imageFile[0];
    formData.append("image", image);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setImgHostLink(data?.data);
          setLoading(false);
        }
      });
  }, [imageFile]);
  return [imgHostLink];
};
