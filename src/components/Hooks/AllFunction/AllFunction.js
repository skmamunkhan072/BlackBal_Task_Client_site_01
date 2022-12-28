import { useState } from "react";
import { useEffect } from "react";

//image fill host function
export const HandelImgHost = (imageFile = "") => {
  const [imgHostLink, setImgHostLink] = useState("");

  const imageHostKey = process.env.REACT_APP_UPLOADiMGkEY;
  const formData = new FormData();
  const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
  useEffect(() => {
    if (!imageFile) {
      return;
    }
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
        }
      });
  }, [imageFile]);
  return [imgHostLink];
};
