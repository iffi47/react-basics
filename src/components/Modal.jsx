import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

export default function Modal({ children }) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..")
  }
  return(
    <>
      <div className={classes.backdrop} >
        {/* onClick={closeHandler} this event somehow triggering the all dialog also that why comment it out */}
        <dialog open className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  )
}