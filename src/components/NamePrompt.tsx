import { useState } from "react";
import { Button } from "./Button";
import Modal from "./Modal";

type NamePromptProps = {
  onTypedName: (name: string) => void;
  time: number;
};

export const NamePrompt = ({ onTypedName, time }: NamePromptProps) => {
  const [name, setName] = useState("");
  return (
    <Modal>
      <h2 className="text-4xl font-bold mb-4">
        Bra jobbet! Du brukte {time} sekunder
      </h2>
      <p className="text-xl pt-2 pb-4">
        Hva heter du? Fornavn eller nickname holder. For ordens skyld lagrer vi
        ingen data.
      </p>

      <div className="w-full flex flex-col pt-4">
        <label className="text-left text-xl pb-2 font-semibold" htmlFor="name">
          Ditt navn
        </label>
        <input
          className="text-xl border-2 border-black rounded-md p-4 w-100 outline-none focus-visible:ring-4 ring-offset-4 ring-offset-focus"
          placeholder="Flippus Maximus"
          autoComplete="off"
          name="name"
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button onClick={() => onTypedName(name)}>Send inn</Button>
    </Modal>
  );
};

export default Modal;
