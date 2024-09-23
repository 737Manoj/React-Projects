import styles from "./Button.module.css";

function Button({ onButtonClick }) {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {/* Could've been mapped without the button and index parameters but for react key is important (read the reasons for it) */}
      {buttons.map((button, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </>
  );
}

export default Button;
