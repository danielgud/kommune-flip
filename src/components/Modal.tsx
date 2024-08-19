import { createRef, useLayoutEffect } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const modalRef = createRef<HTMLDialogElement>();
  useLayoutEffect(() => {
    modalRef.current?.showModal();
  }, [modalRef]);
  return (
    <dialog
      onCancel={(event) => event.preventDefault()}
      ref={modalRef}
      className="bg-white p-8 shadow-lg w-1/3 min-w-fit transition-opacity ease-in-out duration-300 fixed z-20 inset-0 rounded-2xl flex items-center justify-center backdrop:bg-blue-900/80 backdrop:backdrop-blur-md"
    >
      <div className="w-full">{children}</div>
    </dialog>
  );
};

export default Modal;
