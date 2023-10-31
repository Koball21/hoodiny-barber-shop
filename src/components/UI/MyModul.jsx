import React from "react";
import style from "./myModul.module.css";
const MyModul = ({ children, visible, setVisible }) => {
  const rootClasses = [style.modul];
  if (visible === true) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={style.content} onClick={(e) =>/*функция предотвращает всплытие события*/ e.stopPropagation()} >{children}</div>
    </div>
  );
};

export default MyModul;
