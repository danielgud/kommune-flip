import { createRef, useLayoutEffect } from "react";

interface ModalProps {
  time: number;
}

const top10 = [
  { name: "Ola", time: 10 },
  { name: "Kari", time: 9 },
  { name: "Per", time: 8 },
  { name: "Anne", time: 7 },
  { name: "Nils", time: 6 },
  { name: "Mona", time: 5 },
  { name: "Ole", time: 4 },
  { name: "Lise", time: 3 },
  { name: "Knut", time: 2 },
  { name: "Guri", time: 1 },
];

const Modal = ({ time }: ModalProps) => {
  const modalRef = createRef<HTMLDialogElement>();
  useLayoutEffect(() => {
    modalRef.current?.showModal();
    modalRef?.current?.focus();
  }, [modalRef]);
  return (
    <dialog
      ref={modalRef}
      className="fixed z-20 inset-0 rounded-2xl flex items-center justify-center backdrop:bg-blue-900/80 backdrop:backdrop-blur-md"
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-1/3 min-w-fit text-center">
        <h2 className="text-4xl font-bold mb-4">Bra jobba!</h2>
        <div>
          Du brukte <em>{time}</em> sekunder, noe som gir en 5. plass! Her er
          topp 10:
        </div>

        <ul className="text-xl">
          {top10.map((entry, index) => (
            <li key={index} className="flex justify-between border-b-2 py-4">
              <span>{entry.name}</span>
              <span>{entry.time}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => window.location.reload()}
          className="z-20 bg-blue-900 text-white text-3xl text-bold px-10 py-4 mt-8 rounded-xl hover:scale-110 transition-all shadow-white-500/70 shadow-sm hover:shadow-lg hover:shadow-white-500/70 outline-none focus-visible:ring-4 ring-offset-4 ring-offset-focus select-none"
        >
          Spill igjen
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
