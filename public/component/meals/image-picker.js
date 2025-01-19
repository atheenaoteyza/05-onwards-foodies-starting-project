"use client";
import classes from "./image-picker.module.css";
import { useRef } from "react";
export default function ImagePicker({ label }) {
  const imageInput = useRef();
  const handleImagePicker = () => {
    imageInput.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={label}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={label}
          accept="image/jpg image/png"
          ref={imageInput}
        />
      </div>
      <p>
        <button type="submit" onClick={handleImagePicker}>
          Pick an Image
        </button>
      </p>
    </div>
  );
}
