"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    //it triger when the inputfeild down there has a value
    const file = event.target.files[0];
    if (!file) {
      setPickImage(null);
      return;
    }
//if a file was pick , we need to convert it to data url
const fileReader = new FileReader
fileReader.onload = () => {
    setPickImage(fileReader.result)
}
fileReader.readAsDataURL(file)


  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickImage && <p>No Image picked yet!</p>}
            {pickImage && <Image src={pickImage} alt="The image selected by the user." fill/>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
