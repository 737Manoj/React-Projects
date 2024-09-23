import styles from "./Button-container.module.css";
import Button from "./Button";

function ButtonContainer({ onButtonClick }) {
  return (
    <>
      <div className={styles.buttonContainer}>
        <Button onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default ButtonContainer;
