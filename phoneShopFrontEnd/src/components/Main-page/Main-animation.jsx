import { useState, useEffect } from "react";

function MainAnimation() {
  const baseText = "Best ";
  const words = ["Devices", "Prices", "Quality"];
  const typingSpeed = 200;
  const deletingSpeed = 100;
  const pauseDuration = 2000;

  const [text, setText] = useState(baseText);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingInterval, setTypingInterval] = useState(typingSpeed);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let currentWord = words[wordIndex];

    const textAppearance = () => {
      if (text === baseText + currentWord && !isDeleting) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === baseText) {
        setIsDeleting(false);
        setWordIndex((previousIndex) => (previousIndex + 1) % words.length);
        setTypingInterval(typingSpeed);
      } else if (isDeleting) {
        setTypingInterval(deletingSpeed);
        setText(
          baseText + currentWord.substring(0, text.length - baseText.length - 1)
        );
      } else if (!isDeleting) {
        setText(
          baseText + currentWord.substring(0, text.length - baseText.length + 1)
        );
      }
    };

    const timeOut = setTimeout(textAppearance, typingInterval);

    return () => clearTimeout(timeOut);
  }, [text, wordIndex, isDeleting, typingInterval]);

  return (
    <>
      <div className="textWrapper">
        <h1>{text}</h1>
      </div>
      <div className="mountains">
        <img src="/images/mountains.png" alt="mountains" />
      </div>
    </>
  );
}

export default MainAnimation;
