import { CSSProperties, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { border, button, fadeInUp, padding } from "../styles";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { FocusTrap } from "./FocusTrap";

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
    backgroundColor: "transparent",
    bottom: 0,
    left: 0,
    overflowY: "auto",
    padding: 32,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 2,
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
    if (ref.current) {
      ref.current.focus();
    }
  };
  return (
    <>
      <button ref={ref} style={button} onClick={handleShowModal}>
        show modal
      </button>
      {showModal &&
        createPortal(
          <FocusTrap>
            <div style={modal}>
              <div style={fadeInUp}>
                <div style={content}>
                  <Heading>Modal title</Heading>
                  <Paragraph>Modal {" .".repeat(2000)} content.</Paragraph>
                  <div style={close}>
                    <button style={closeButton} onClick={handleHideModal}>
                      &times;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FocusTrap>,
          document.body
        )}
    </>
  );
}
