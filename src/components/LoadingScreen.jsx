import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "print('Welcome To My Portfolio!')";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white text-blue-900 flex flex-col items-center justify-center text-center">
      <div className="mb-4 text-4xl stix-two-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-blue-200 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-900 shadow-[0_0_15px_#1e3a8a] animate-loading-bar"></div>
      </div>
    </div>
  );
};