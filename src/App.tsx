import { useState } from "react";
import styles from "./app.module.css";

const avatarSrc = "/avatar_hex.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className={styles.header}>
        <h1>Black square</h1>
      </header>
      <div className={styles.container}>
        <div
          className={styles.square}
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer__author}>
          <span>© 2025 </span>
          <img height={24} src={avatarSrc} alt="avatar" />
          <a href="https://github.com/mrHoft">
            <span> mrHoft</span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
