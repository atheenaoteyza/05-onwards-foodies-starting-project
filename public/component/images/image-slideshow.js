"use client";
import burger from "@/assets/burger.jpg";
import curry from "@/assets/curry.jpg";
import dumplings from "@/assets/dumplings.jpg";
import macncheese from "@/assets/macncheese.jpg";
import pizza from "@/assets/pizza.jpg";
import schnitzel from "@/assets/schnitzel.jpg";
import tomato from "@/assets/tomato-salad.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image.slideshow.module.css";

export default function imageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    burger,
    curry,
    dumplings,
    macncheese,
    pizza,
    schnitzel,
    tomato,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={classes.slideshow}>
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            className={index === currentIndex ? classes.active : ""}
            alt="A delicious curry"
          ></Image>
        ))}
      </div>
    </>
  );
}
