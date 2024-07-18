import { createRef, useEffect, useRef } from "react";

interface ModalProps {
  score: number;
  time: number;
}

const top10 = [
  { name: "Ola", score: 10 },
  { name: "Kari", score: 9 },
  { name: "Per", score: 8 },
  { name: "Anne", score: 7 },
  { name: "Nils", score: 6 },
  { name: "Mona", score: 5 },
  { name: "Ole", score: 4 },
  { name: "Lise", score: 3 },
  { name: "Knut", score: 2 },
  { name: "Guri", score: 1 },
];

const Modal = ({ score, time }: ModalProps) => {
  const modalRef = createRef<HTMLDialogElement>();
  useEffect(() => {
    modalRef?.current?.focus();
  }, [modalRef]);
  return (
    <dialog
      ref={modalRef}
      open
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      autoFocus
      tabIndex={-1}
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
              <span>{entry.score}</span>
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
