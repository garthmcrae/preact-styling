import { useState, useEffect, CSSProperties } from "react";

export const Picture = ({ url }: { url: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = url;

    image.onload = () => {
      setImageLoaded(true);
    };

    image.onerror = () => {
      console.error("Error loading image");
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [url]);
  const picture: CSSProperties = {
    aspectRatio: "1 / 1",
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    opacity: imageLoaded ? 1 : 0,
    transition: "opacity 300ms ease-in-out",
    width: "100%",
  };
  return <div style={picture} />;
};
