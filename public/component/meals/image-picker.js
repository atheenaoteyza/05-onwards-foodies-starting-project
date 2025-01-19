"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
export default function ImagePicker({ label }) {
  const imageInput = useRef();
  const [image, setImage] = useState(null);

  const handleImagePicker = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={label}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={label}
          accept="image/jpeg, image/png"
          ref={imageInput}
          onChange={handleImageChange}
        />

        <div className={classes.preview}>
          {image && <Image src={image} alt="Selected image" fill />}
          {!image && <p>No image picked yet.</p>}
        </div>
        <button type="button" onClick={handleImagePicker}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
