import { Button } from "./Button";
import Modal from "./Modal";

export interface Result {
  time: number;
  name: string;
}

interface TopListProps {
  top10: Result[];
  currentResult: Result;
}

export const TopList = ({ top10, currentResult }: TopListProps) => {
  return (
    <Modal>
      <h2 className="text-4xl font-bold mb-4">
        Bra jobbet, {currentResult.name}
      </h2>
      <div>
        Du brukte <em>{currentResult.time}</em> sekunder. Her er topp 10:
      </div>

      <ol className="text-xl">
        {top10.map((entry, index) => (
          <li key={index} className="flex justify-between border-b-2 py-4">
            <span>
              {index + 1}. {entry.name} {index === 0 && "👑"}
            </span>
            <span>{entry.time} sekunder</span>
          </li>
        ))}
      </ol>
      <div className="text-center">
        <Button onClick={() => window.location.reload()}>Spill igjen</Button>
      </div>
    </Modal>
  );
};

export default Modal;
