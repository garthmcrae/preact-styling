import { CSSProperties, ReactNode, useState } from "react";
import { Box } from "../components/Box";
import { Expand } from "../components/Expand";
import { ExpandButton } from "../components/ExpandButton";

export const Banner = ({ children }: { children: ReactNode }) => {
  const [toggleBanner, setToggleBanner] = useState<boolean>(true);
  const handleToggleBanner = () =>
    setToggleBanner((prevToggleBanner) => !prevToggleBanner);

  const banner: CSSProperties = {
    alignItems: "flex-start",
    borderColor: "currentcolor",
    borderRadius: 0,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    justifyContent: "space-between",
  };
  const content: CSSProperties = {
    fontSize: 24,
    lineHeight: 1.25,
    margin: 0,
    padding: 16,
  };
  const close: CSSProperties = {
    padding: 16,
  };

  return (
    <Expand expand={toggleBanner}>
      <Box>
        <div style={banner}>
          <p style={content}>{children}</p>
          <div style={close}>
            <ExpandButton onClick={handleToggleBanner}>x</ExpandButton>
          </div>
        </div>
      </Box>
    </Expand>
  );
};
