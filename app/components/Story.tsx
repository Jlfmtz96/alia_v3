"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { stories } from "./StoryData";
import Image from "next/image";

export default function Story() {
  const [activeStory, setActiveStory] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [currentImage, setCurrentImage] = useState(stories[0].storyImg);
  const contentUpdateDelay = 0.4;
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const storyDuration = 5000; // 5 segundos, puedes ajustar esto según tus necesidades

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const viewportWidth = window.innerWidth;
      setDirection(event.clientX < viewportWidth / 2 ? "prev" : "next");
    };

    const handleClick = () => {
      changeStory();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    // Cambiar la historia automáticamente después de storyDuration (5 segundos)
    const autoChange = setInterval(() => {
      changeStory();
    }, storyDuration);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      clearInterval(autoChange); // Limpiar el intervalo al desmontar el componente
    };
  }, [activeStory, direction]);

  const changeStory = () => {
    const newActiveStory =
      direction === "next"
        ? (activeStory + 1) % stories.length
        : (activeStory - 1 + stories.length) % stories.length;

    setActiveStory(newActiveStory);
    setCurrentImage(stories[newActiveStory].storyImg);

    // Animación GSAP para la imagen
    if (imgContainerRef.current) {
      gsap.fromTo(
        imgContainerRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );
    }

    // Animación GSAP para el título
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: contentUpdateDelay }
      );
    }
  };

  return (
    <div id="amenidades" className="story-container bg-black">
      <div className="story-img" ref={imgContainerRef}>
        <Image
          src={currentImage}
          alt={stories[activeStory].profileName}
          width={1920}
          height={1080}
          priority
          className="transition-opacity duration-500"
        />
      </div>

      <div className="story-content">
        <div className="profile">
          <div className="profile-icon bg-gradient-to-t from-[#dc2c81] to-[#c297ac]">
            <Image
              src={stories[activeStory].profileImg}
              alt={stories[activeStory].profileName}
              width={40}
              height={40}
            />
          </div>
          <div className="profile-name">
            <p>{stories[activeStory].profileName}</p>
          </div>
        </div>

        <div className="title" ref={titleRef}>
          {stories[activeStory].title.map((line, index) => (
            <div key={index} className="title-row text-xl lg:text-3xl">
              <h1>{line}</h1>
            </div>
          ))}
        </div>

        <div className="indexes">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`index ${index === activeStory ? "index-highlight" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
