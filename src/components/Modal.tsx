import { FiCheck } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { ModalT } from "../types";

export default function Modal({ setModalOpen, modalOpen, content }: ModalT) {
  function clearPage() {
    setModalOpen(false);
    window.location.reload();
  }

  return (
    <>
      {modalOpen && content === "success" ? (
        <div
          onClick={() => clearPage()}
          className="absolute top-0 bottom-0 right-0 left-0 grid place-items-center bg-black/50"
        >
          <div className="  h-56 w-56 bg-gray-400/80 rounded-lg border-2 flex justify-center items-center flex-col">
            <p>Thanks for the Email!</p>
            <IconContext.Provider value={{ color: "#586369", size: "2rem" }}>
              <div className="grid place-content-center w-10 h-10 rounded-full border-2 border-darkGrey mt-4">
                <FiCheck />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      ) : modalOpen && content === "failed" ? (
        <div
          onClick={() => setModalOpen(false)}
          className="absolute top-0 bottom-0 right-0 left-0 grid place-items-center bg-black/50"
        >
          <div className="  h-56 w-56 bg-gray-400/80 rounded-lg border-2 flex justify-center items-center flex-col">
            <p>Woops, it didnt work!</p>
          </div>
        </div>
      ) : (
        modalOpen && (
          <div
            onClick={() => setModalOpen(false)}
            className="absolute top-0 bottom-0 right-0 left-0 grid place-items-center bg-black/50"
          >
            <div className="  h-56 w-56 bg-gray-400/80 rounded-lg border-2 flex justify-center items-center flex-col">
              <p>Just a Sec...</p>
            </div>
          </div>
        )
      )}
    </>
  );
}
