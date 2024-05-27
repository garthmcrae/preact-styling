import { CSSProperties, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { Close } from "./Close";
import { FocusTrap } from "./FocusTrap";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { border, fadeInUp, padding } from "../styles";

export function Modal() {
  const ref = useRef<HTMLButtonElement>(null);
  const [showModal, setShowModal] = useState(false);
  const close: CSSProperties = {
    position: "absolute",
    right: 16,
    top: 16,
  };
  const content: CSSProperties = {
    backgroundColor: "var(--background-color)",
    ...border,
    ...padding,
    transform: `translateY(0)`,
    transition: "background-color 200ms ease-in-out",
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
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        handleHideModal();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <>
      <Button ref={ref} onClick={handleShowModal}>
        show modal
      </Button>
      {showModal &&
        createPortal(
          <FocusTrap>
            <div style={modal}>
              <div style={fadeInUp}>
                <div style={content}>
                  <Heading>Modal title</Heading>
                  <Paragraph>Modal {" .".repeat(2000)} content.</Paragraph>
                  <div style={close}>
                    <Close aria-label="dismiss" onClick={handleHideModal} />
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
