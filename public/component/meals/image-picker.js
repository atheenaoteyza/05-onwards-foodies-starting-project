"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [image, setImage] = useState(null);

  const handleImagePicker = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result); // Base64 string
      };

      reader.readAsDataURL(file); // Convert to Base64
    }
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={label}
          name={name}
          accept="image/jpeg, image/png"
          ref={imageInput}
          onChange={handleImageChange}
          required
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
