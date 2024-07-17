
interface ModalProps {
  score: number;
  time: number;
}

const Modal = ({ score, time }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
        <p className="mb-2">Your score: {score}</p>
        <p className="mb-4">Time: {time} seconds</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
