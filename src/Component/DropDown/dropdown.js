import { useState } from "react";
import styles from "./dropdown.module.css";
import languages from "../../data/data";

export default function DropDown() {
  const [choice, setChoice] = useState(null);
  const [showList, setShowList] = useState(false);

  return (
    // Container
    <div className={styles.main}>
      {/* When choice is null nothing is display, when choice is set to any language then that langugae logo is displayed. */}
      {choice ? (
        <div style={{ textAlign: "center" }}>
          <img className={styles.choiceImg} src={choice.img} alt="choice" />
        </div>
      ) : (
        <></>
      )}

      {/* Prompt */}
      <h1 className={styles.heading}>Choose Your favourite language:</h1>

      {/* Actual dropdown */}
      <div className={styles.dropdown}>
        {/* Here is the select element onClicking or hovering it we will display the optioons */}
        <div
          className={styles.title}
          onMouseEnter={() => setShowList(true)}
          onClick={() => setShowList(!showList)}
        >
          Select{" "}
          <img
            className={`${styles.img} ${showList ? styles.showList : null}`}
            src="https://cdn-icons-png.flaticon.com/128/9917/9917532.png"
            alt="arrow-down"
          />
        </div>

        {/* OptionList - When showList state is set to true, then the list is displayed else list is hidden */}
        {showList ? (
          <ul className={styles.list}>
            {languages.map((lan, index) => (
              <li
                className={styles.listItem}
                key={index}
                onClick={() => {
                  setChoice(lan);
                  setShowList(!showList);
                }}
              >
                <img className={styles.img} src={lan.img} alt="language" />
                {lan.name}
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
