import { useState } from "react";
import { Button } from "./Button";
import Modal from "./Modal";

type Props = {
  onSubmit: (player1: string, player2: string) => void;
};

export const TwoPlayerPrompt = ({ onSubmit }: Props) => {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  return (
    <Modal>
      <h1 className="text-3xl font-bold mb-4">To-spiller modus</h1>
      <p className="text-lg mb-4">Skriv inn navnene på spillerne:</p>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Spiller 1"
          className="border p-3 rounded-md text-lg"
          value={p1}
          onChange={(e) => setP1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Spiller 2"
          className="border p-3 rounded-md text-lg"
          value={p2}
          onChange={(e) => setP2(e.target.value)}
        />
        <Button onClick={() => onSubmit(p1, p2)} disabled={!p1 || !p2}>
          Start spillet
        </Button>
      </div>
    </Modal>
  );
};