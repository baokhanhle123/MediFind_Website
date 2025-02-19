"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/TestimonialSlider.module.css"; // Assume this is your CSS module file

const testimonials = [
  {
    name: "Xuan Son",
    role: "Founder Circle",
    comment:
      "The printer engagement app has streamlined our processes, saving us hours of administrative work. It's a game-changer for anyone managing multiple printing tasks.",
    image: "/3d_avatar_1.png", // Update with actual path
  },
  {
    name: "Viet Hung",
    role: "Software Engineer",
    comment:
      "I love the ease of access and the ability to print from anywhere on campus. This app is truly designed with the end-user in mind, making printing hassle-free and secure.",
    image: "/3d_avatar_1.png", // Update with actual path
  },
  {
    name: "Van Tien",
    role: "CTO of Company",
    comment:
      "The integration and user experience are seamless. Our team relies on this app daily, and it's significantly improved our productivity. Highly recommended!",
    image: "/3d_avatar_1.png", // Update with actual path
  },
  {
    name: "Trinh Chau",
    role: "Head of Marketing",
    comment:
      "This service has not only increased our efficiency but also helped reduce printing costs. The user-friendly interface makes it accessible for everyone on the team.",
    image: "/3d_avatar_1.png", // Update with actual path
  },
  {
    name: "Pham Canh",
    role: "Data Scientist",
    comment:
      "With secure access and reliable performance, I no longer worry about my documents being misplaced or inaccessible. It's been a great addition to our workflow.",
    image: "/3d_avatar_1.png", // Update with actual path
  },
  {
    name: "Viet Nguyen",
    role: "AI Scientist",
    comment:
      "With secure access and reliable performance, I no longer worry about my documents being misplaced or inaccessible. It's been a great addition to our workflow.",
    image: "/3d_avatar_1.png", // Update with actual path
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <h2>What our customer are saying</h2>
      <div className={styles.slider}>
        <div className={styles.slide} key={currentIndex}>
          <div className={styles.left}>
            <div className={styles.imageWrapper}>
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className={styles.image}
              />
            </div>
            <div className={styles.sub_left}>
              <h3>{testimonials[currentIndex].name}</h3>
              <p>{testimonials[currentIndex].role}</p>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.comment}>
              “{testimonials[currentIndex].comment}”
            </p>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.navButton}>
          &#8592;
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
            ></span>
          ))}
        </div>
        <button onClick={handleNext} className={styles.navButton}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
