import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const useGetImage = (location) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchArticleImage = async () => {
      const storage = getStorage();
      const url = await getDownloadURL(ref(storage, location));
      setImage(url);
      console.log(url);
    };

    fetchArticleImage();
  }, [location]);

  return image;
};

export default useGetImage;
