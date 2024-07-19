import { Button } from "./Button";
import Modal from "./Modal";

export const Credits = () => {
  return (
    <Modal>
      <h1 className="text-4xl font-bold mb-4">Credits</h1>
      <p className="text-xl py-4">For KS Digital, Javabin 2024.</p>
      <ul className="text-xl">
        <li className="flex justify-between border-b-2 py-4">
          <a
            className="text-blue-600 underline"
            href="https://www.freepik.com/free-vector/hand-drawn-landscape-with-mountains_18895397.htm"
            target="_blank"
          >
            Landskap
          </a>
        </li>
        <li className="flex justify-between border-b-2 py-4">
          <a
            className="text-blue-600 underline"
            href="https://www.freepik.com/free-vector/hand-drawn-farm-animal-collection_4606116.htm"
            target="_blank"
          >
            Sau
          </a>
        </li>
      </ul>
      <div className="text-center">
        <Button onClick={() => window.location.reload()}>Ok</Button>
      </div>
    </Modal>
  );
};

export default Modal;
