import { CSSProperties, ReactNode, useState } from "react";
import { Box } from "./Box";
import { Close } from "./Close";
import { Expand } from "./Expand";
import { border } from "../styles";

export const Alert = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const handleToggle = () => setToggle((prevToggle) => !prevToggle);
  const alert: CSSProperties = {
    alignItems: "flex-start",
    ...border,
    display: "flex",
    justifyContent: "space-between",
  };
  const close: CSSProperties = {
    flexGrow: 0,
    flexShrink: 0,
    padding: 14,
  };
  return (
    <Expand expand={toggle}>
      <Box>
        <div style={alert} role="alert">
          <div>{children}</div>
          <div style={close}>
            <Close aria-label="dismiss" onClick={handleToggle} />
          </div>
        </div>
      </Box>
    </Expand>
  );
};
