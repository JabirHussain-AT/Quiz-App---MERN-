import React, { useState, useEffect } from "react";
import BannerImg from '../../assets/bannerImage.png'
import { useNavigate } from "react-router-dom";

const Banner: React.FC = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate()
  const fullText = "Practice With Us, Be the First One";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: "linear-gradient(to bottom right, violet, #8a2be2)",
      }}
    >
      <div className="w-full md:flex justify-around items-center  ">
        <div className=" w-full md:w-2/4 ">
          <h1 className="text-xl md:text-3xl text-white font-bold cursor-pointer hover:scale-110 duration-500 md:px-0 md:py-0 py-14">
            {text}
            <span className="animate-pulse">|</span>
          </h1>
          <h5>
            <p className="mt-4 animate-pulse space-x-4 text-gray-700 font-mono">
              At Quiz Point, we offer a diverse range of quizzes designed to
              engage minds of all ages. From academic topics to trivia and
              everything in between, our platform provides
            </p>
          </h5>
        </div>
        <div className="w-full md:w-1/3">
          <img src={BannerImg} alt="Logo" />
        </div>
      </div>
      {/*  */}
      <div className=" h-52 flex justify-center">
            <button  onClick={ () => navigate('/quiz') } className="bg-white px-20  cursor-pointer hover:scale-x-110  duration-300  border-black h-9 rounded-md animate-pulse font-serif font-bold shadow-lg border-2 ">
                Start Quiz 
            </button>
      </div>    
    </div>
  );
};

export default Banner;
