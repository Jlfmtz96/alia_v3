"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { stories } from "./StoryData";
import Image from "next/image";

export default function Story() {
  const [activeStory, setActiveStory] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [currentImage, setCurrentImage] = useState(stories[0].storyImg); // Estado para la imagen principal
  // const storyDuration = 4000;
  const contentUpdateDelay = 0.4;
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

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

    // let storyTimeout = setTimeout(changeStory, storyDuration);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      // clearTimeout(storyTimeout);
    };
  }, [activeStory, direction]);

//   const changeStory = () => {
//     const previousStory = activeStory;
//     const newActiveStory =
//       direction === "next"
//         ? (activeStory + 1) % stories.length
//         : (activeStory - 1 + stories.length) % stories.length;
//     setActiveStory(newActiveStory);

//     const story = stories[newActiveStory];

//     gsap.to(".profile-name p", {
//       y: direction === "next" ? -24 : 24,
//       duration: 0.5,
//       delay: contentUpdateDelay,
//     });
//     gsap.to(".title-row h1", {
//       y: direction === "next" ? -48 : 48,
//       duration: 0.5,
//       delay: contentUpdateDelay,
//     });

//     const currentImgContainer = document.querySelector(".story-img .img");
//     const currentImg = currentImgContainer?.querySelector("img");

//     setTimeout(() => {
//       const newProfileName = document.createElement("p");
//       newProfileName.innerText = story.profileName;
//       newProfileName.style.transform =
//         direction === "next" ? "translateY(24px)" : "translateY(-24px)";

//       const profileNameDiv = document.querySelector(".profile-name");
//       profileNameDiv?.appendChild(newProfileName);

//       gsap.to(newProfileName, {
//         y: 0,
//         duration: 0.5,
//         delay: contentUpdateDelay,
//       });

//       const titleRows = document.querySelectorAll(".title-row");
//       story.title.forEach((line, index) => {
//         if (titleRows[index]) {
//           const newTitle = document.createElement("h1");
//           newTitle.innerText = line;
//           newTitle.style.transform =
//             direction === "next" ? "translateY(48px)" : "translateY(-48px)";
//           titleRows[index].appendChild(newTitle);

//           gsap.to(newTitle, {
//             y: 0,
//             duration: 0.5,
//             delay: contentUpdateDelay,
//           });
//         }
//       });

//       const newImgContainer = document.createElement("div");
//       newImgContainer.classList.add("img");
//       const newStoryImg = document.createElement("img");
//       newStoryImg.src = story.storyImg;
//       newStoryImg.alt = story.profileName;
//       newImgContainer.appendChild(newStoryImg);

//       const storyImgDiv = document.querySelector(".story-img");
//       storyImgDiv?.appendChild(newImgContainer);

//       animateNewImage(newImgContainer);

//       if (currentImg) {
//         animateImageScale(currentImg, newStoryImg);
//       }

//       resetIndexHighlight(previousStory);
//       animateIndexHighlight(newActiveStory);

//       cleanUpElements();
//     }, 200);
//   };

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

  // const animateNewImage = (imgContainer: HTMLDivElement) => {
  //   gsap.set(imgContainer, {
  //     clipPath:
  //       direction === "next"
  //         ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
  //         : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  //   });

  //   gsap.to(imgContainer, {
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     duration: 1,
  //     ease: "power4.inOut",
  //   });
  // };

  // const animateImageScale = (
  //   currentImg: HTMLImageElement,
  //   upcomingImg: HTMLImageElement
  // ) => {
  //   gsap.fromTo(
  //     currentImg,
  //     {
  //       scale: 1,
  //       rotate: 0,
  //     },
  //     {
  //       scale: 2,
  //       rotate: direction === "next" ? -25 : 25,
  //       duration: 1,
  //       ease: "power4.inOut",
  //       onComplete: () => {
  //         currentImg.parentElement?.remove();
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     upcomingImg,
  //     {
  //       scale: 2,
  //       rotate: direction === "next" ? 25 : -25,
  //     },
  //     {
  //       scale: 1,
  //       rotate: 0,
  //       duration: 1,
  //       ease: "power4.inOut",
  //     }
  //   );
  // };

  // const resetIndexHighlight = (index: number) => {
  //   const highlight = document.querySelectorAll(".index .index-highlight")[index];
  //   gsap.killTweensOf(highlight);
  //   gsap.to(highlight, {
  //     width: direction === "next" ? "100%" : "0%",
  //     duration: 0.3,
  //     onStart: () => {
  //       gsap.to(highlight, {
  //         transformOrigin: "right center",
  //         scaleX: 0,
  //         duration: 0.3,
  //       });
  //     },
  //   });
  // };

  // const animateIndexHighlight = (index: number) => {
  //   const highlight = document.querySelectorAll(".index .index-highlight")[index];
  //   gsap.set(highlight, {
  //     width: "0%",
  //     scaleX: 1,
  //     transformOrigin: "right center",
  //   });
  //   gsap.to(highlight, {
  //     width: "100%",
  //     duration: storyDuration / 1000,
  //     ease: "none",
  //   });
  // };

//   const cleanUpElements = () => {
//     const profileNameDiv = document.querySelector(".profile-name");
//     const titleRows = document.querySelectorAll(".title-row");

//     while (profileNameDiv?.childElementCount > 2) {
//       profileNameDiv.removeChild(profileNameDiv.firstChild!);
//     }

//     titleRows.forEach((titleRow) => {
//       while (titleRow.childElementCount > 2) {
//         titleRow.removeChild(titleRow.firstChild!);
//       }
//     });
//   };

  return (
    // <div className="story-container bg-black">
    //   <div className="cursor">
    //     <p></p>
    //   </div>

    //   <div className="story-img">
    //     <div className="img">
    //       <Image
    //         src={stories[activeStory].storyImg}
    //         alt={stories[activeStory].profileName}
    //         width={1920}
    //         height={1080}
    //       />
    //     </div>
    //   </div>

    //   <div className="story-content">
    //     <div className="row">
    //       <div className="indices">
    //         {stories.map((_, index) => (
    //           <div key={index} className="index">
    //             <div className="index-highlight"></div>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="profile">
    //         <div className="profile-icon">
    //           <Image
    //             src={stories[activeStory].profileImg}
    //             alt={stories[activeStory].profileName}
    //             width={40}
    //             height={40}
    //           />
    //         </div>
    //         <div className="profile-name">
    //           <p>{stories[activeStory].profileName}</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="title">
    //         {stories[activeStory].title.map((line, index) => (
    //           <div key={index} className="title-row text-xl lg:text-3xl">
    //             <h1>{line}</h1>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="story-container bg-black">
    {/* Imagen de fondo */}
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

    {/* Contenido del Story */}
    <div className="story-content">
      {/* Perfil */}
      <div className="profile">
        <div className="profile-icon">
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

      {/* Título con animación */}
      <div className="title" ref={titleRef}>
        {stories[activeStory].title.map((line, index) => (
          <div key={index} className="title-row text-xl lg:text-3xl">
            <h1>{line}</h1>
          </div>
        ))}
      </div>

      {/* Índices de progreso */}
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