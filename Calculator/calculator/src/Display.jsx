import styles from "./Display.module.css";
function Display({ displayVal }) {
  return (
    <input
      type="text"
      value={displayVal}
      className={styles.display}
      id="display"
    />
  );
}

export default Display;
