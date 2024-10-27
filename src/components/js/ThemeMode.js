import React, { useState } from "react";
import "../css/ThemeMode.css";

const ThemeMode = (props) => {
  return (
    <div className="d-flex me-5">
      <label className="switch">
        <input
          type="checkbox"
          checked={props.theme === "light" ? false : true}
          onChange={props.onChange}
          class="toggle-theme"
        ></input>
        <span className="slider round"></span>
      </label>
      {props.theme === "light" ? (
        <i class="bi bi-brightness-high-fill ms-2 fs-4"></i>
      ) : (
        <i class="bi bi-moon-fill ms-2 fs-4"></i>
      )}
    </div>
  );
};

export default ThemeMode;
