import React from 'react'
import Cryptoverse from '../assets/portfolio/Cryptoverse.png'
import Imaginary from '../assets/portfolio/Imaginary.png'
import Keeper from '../assets/portfolio/Keeper App.png'
import musicaly from '../assets/portfolio/Musicly.png'
import myDiary from '../assets/portfolio/MyDiary.png'
import ArticleSum from '../assets/portfolio/Artical Summarizer.png'
import Secrets from '../assets/portfolio/Secrets.png'
import HireVu from '../assets/portfolio/HireVu.png' 
import TodoList from '../assets/portfolio/TodoList.png' 
import DrumKit from '../assets/portfolio/DrumKit.png'
import TinDog from '../assets/portfolio/TinDog.png'
import SimonGame from '../assets/portfolio/SimonGame.png'

const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: musicaly,
        github: "https://github.com/shreyash2003w/CodeClause_Online-Music-Streaming-Website",
        live: "https://musical-teal.vercel.app/login",
      },
      {
        id: 2,
        src: Cryptoverse,
        github: "https://github.com/shreyash2003w/Cryptoverse",
        live: "https://my-crypto-verse.netlify.app/",
      },
      {
        id: 3,
        src: Imaginary,
        github: "https://github.com/shreyash2003w/AI-Image-Generator",
        live: "https://imaginary-indol.vercel.app/",
      },
      {
        id: 4,
        src: Keeper,
        github: "https://github.com/shreyash2003w/Keeper_App",
        live: "https://stq3pf.csb.app/",
      },
      {
        id: 5,
        src: myDiary,
        github: "https://github.com/shreyash2003w/MyDiary",
        live: "https://mydiary-d50n.onrender.com/",
      },
      {
        id: 6,
        src: ArticleSum,
        github: "https://github.com/shreyash2003w/Article-Summarizer",
        live: "https://su-mz.netlify.app",
      },
      {
        id: 7,
        src: Secrets,
        github: "https://github.com/shreyash2003w/Secrets",
        live: "https://secrets-15tx.onrender.com",
      },
      {
        id: 8,
        src: HireVu,
        github: "https://github.com/shreyash2003w/Mini-Project",
        live: "https://hirevu.onrender.com/",
      },
      {
        id: 9,
        src: TodoList,
        github: "https://github.com/shreyash2003w/TodoList-EJS-MongoDB-",
        live: "https://todolist-cvwc.onrender.com/",
      },
      {
        id: 10,
        src: DrumKit,
        github: "https://github.com/shreyash2003w/Drum-Kit",
        live: "https://my-band.netlify.app",
      },
      {
        id: 11,
        src: TinDog,
        github: "https://github.com/shreyash2003w/TinDog",
        live: " https://tiin-dog.netlify.app",
      },
      {
        id: 12,
        src: SimonGame,
        github: "https://github.com/shreyash2003w/Simon-Game",
        live: " https://simonngame.netlify.app",
      },
     
     
      
    ];
  
    return (
      <div
        name="Portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  px-12  sm:px-0">
            {portfolios.map(({ id, src , live , github }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a href={live} target='_blank' rel="noreferrer"> <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Live
                  </button> </a>

                  <a href={github}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;