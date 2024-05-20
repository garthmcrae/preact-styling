import { CSSProperties, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { border, button, fadeInUp, padding } from "../styles";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export function Modal() {
  const ref = useRef<HTMLButtonElement>(null);
  const [showModal, setShowModal] = useState(false);
  const close: CSSProperties = {
    position: "absolute",
    right: 16,
    top: 16,
  };
  const closeButton: CSSProperties = {
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
  const content: CSSProperties = {
    backgroundColor: "var(--background-color)",
    ...border,
    ...padding,
    transform: `translateY(0)`,
    transition: "background-color 2000ms ease-in-out",
    zIndex: 2,
  };
  const modal: CSSProperties = {
    bottom: 0,
    left: 0,
    overflowY: "auto",
    padding: 32,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 2,
  };
  useEffect(() => {
    const root = document.getElementById("root");
    if (showModal) {
      root?.setAttribute("inert", "true");
    } else {
      root?.removeAttribute("inert");
      if (ref.current) {
        ref.current.focus();
      }
    }
  }, [showModal]);
  return (
    <>
      <button ref={ref} style={button} onClick={() => setShowModal(true)}>
        show modal
      </button>
      {showModal &&
        createPortal(
          <div style={modal}>
            <div style={fadeInUp}>
              <div style={content}>
                <Heading>Modal title</Heading>
                <Paragraph>Modal {" .".repeat(2000)} content.</Paragraph>
                <div style={close}>
                  <button
                    style={closeButton}
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
