import React from 'react'
import './App.css';
import TopBanner from './components/banner';
import { ItemCard } from './components/card';
import Header from './components/header';
import cover from './images/fashionable.jpg'
import { CustomFooter } from './components/footer';
// import Carousel from "react-elastic-carousel";
import Carousel from 'react-elastic-carousel'
import { connect } from 'react-redux'


const mapStateToProps = ({ theme }: any) => {
  return { theme }
}
const App = ({ theme }: any) => {
  const Arrow = ({ type, onClick, isEdge }: any) => {
    const left = <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 dark:text-white text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>;
    const right = <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 dark:text-white text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>;
    const pointer = type === 'PREV' ? left : right
    return (
      <button onClick={onClick} disabled={isEdge} className="ring-pink-600 dark:bg-gray-800 bg-white shadow-xl h-1/2 rounded-full" style={{
        marginTop: "8%",
        // position: "absolute",
        marginRight: "10px"
      }}><p className="text-4xl">{pointer}</p></button>
    )
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Header />
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-3">
          <TopBanner />
          <div className="pb-12 xl:mt-40 lg:mt-32 mt-12">
            <p className="font-sans pb-5 text-3xl text-gray-500 font-black dark:text-white">Best products this week</p>
            <hr />
          </div>

          <div className="flex items-center justify-between">
            <div className="w-full text-blue-600 md:items-center">
              <div className="
                  grid grid-cols-1
                  sm:grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-3
                  xl:grid-cols-3
                ">
                {[{ name: "Amen Abe" }, { name: "Jack Harlow" }, { name: "Betty White" }].map(function (object, i) {
                  return <ItemCard obj={object} key={i} />;
                })}
              </div>
            </div>
          </div>


          <div className="pb-12 mt-20">
            <p className="font-sans pb-5 text-3xl text-gray-500 font-black dark:text-white">Best products for you</p>
            <hr />
          </div>

          <Carousel isRTL={false} itemsToShow={4} breakPoints={breakPoints} renderArrow={Arrow} className="relative">


            {[1, 2, 3, 4, 5, 6, 7].map(function (obj, idx) {
              return <div className="container mx-auto xl:p-9 lg:p-9 md:p-9 sm:p-5 p-3 dark:bg-gray-800 bg-white max-w-sm rounded-none overflow-hidden shadow-xl hover:shadow-2xl transition duration-300" >
                <img className="rounded-xl" src={cover} alt="" />
                <div className="flex justify-between items-center">

                  {/* <button class="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Large block button</button> */}
                  <div className="mt-5 w-full">
                    <button className="
                      w-full
                      text-white 
                      text-md 
                      font-semibold
                      bg-green-400
                      py-2 px-4
                      rounded-lg
                      shadow-md 
                      hover:shadow-lg
                      transition duration-500
                      transform-gpu
                      hover:scale-110 
                    "
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            })
            }
          </Carousel>

        </div>
        <div className="mb-32"></div>
        <CustomFooter />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
