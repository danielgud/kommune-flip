import { Button } from "./Button";
import Modal from "./Modal";

interface ToplistProps {
  time: number;
  name: string
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

export const TopList = ({ time, name }: ToplistProps) => {
  return (
    <Modal>
      <h2 className="text-4xl font-bold mb-4">Bra jobbet, {name}</h2>
      <div>
        Du brukte <em>noen sekunder</em> sekunder, noe som gir en 5. plass! Her
        er topp 10:
      </div>

      <ul className="text-xl">
        {top10.map((entry, index) => (
          <li key={index} className="flex justify-between border-b-2 py-4">
            <span>{entry.name}</span>
            <span>{entry.time}</span>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <Button onClick={() => window.location.reload()}>Spill igjen</Button>
      </div>
    </Modal>
  );
};

export default Modal;
