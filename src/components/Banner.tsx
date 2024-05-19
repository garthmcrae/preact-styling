import { CSSProperties, ReactNode, useState } from "react";
import { Box } from "../components/Box";
import { Expand } from "../components/Expand";
import { border, padding } from "../styles";

export const Banner = ({ children }: { children: ReactNode }) => {
  const [toggleBanner, setToggleBanner] = useState<boolean>(true);
  const handleToggleBanner = () =>
    setToggleBanner((prevToggleBanner) => !prevToggleBanner);
  const banner: CSSProperties = {
    alignItems: "flex-start",
    ...border,
    display: "flex",
    justifyContent: "space-between",
  };
  const button: CSSProperties = {
    appearance: "none",
    backgroundColor: "var(--background-color)",
    ...border,
    color: "inherit",
    cursor: "pointer",
    display: "block",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1,
    minWidth: 28,
    paddingBottom: 5,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
    textDecoration: "none",
    transition:
      "background-color 2000ms ease-in-out, padding 100ms ease-in-out",
    width: "max-content",
  };
  const paragraph: CSSProperties = {
    fontSize: 32,
    lineHeight: 1.25,
    margin: 0,
  };
  const close: CSSProperties = {
    padding: 16,
  };
  return (
    <Expand expand={toggleBanner}>
      <Box>
        <div style={banner}>
          <div style={padding}>
            <p style={paragraph}>{children}</p>
          </div>
          <div style={close}>
            <button
              aria-label="dismiss"
              style={button}
              onClick={handleToggleBanner}
            >
              &times;
            </button>
          </div>
        </div>
      </Box>
    </Expand>
  );
};
