import React from 'react'
import cover from '../images/fashionable.jpg'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

export const ItemCard = (props: any) => {
    const history = useHistory()
    return (
        <div 
            className="bg-gray-50 mt-10 lg:mt-0 md:mt-0 xl:mt-0 dark:bg-gray-900 flex justify-center items-start cursor-pointer"
            onClick={()=>history.push("/detail")}>
            <div className="lg:mx-5 p-6 dark:bg-gray-800 bg-white rounded-none shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                <img className="h-82 object-cover rounded-t-md" src={cover} alt="" />
                <div className="mt-4">
                    <h1 className="text-2xl font-bold dark:text-white text-gray-700">Zebra succulent</h1>
                    <p className="text-sm mt-2 dark:text-white text-gray-700">Two sizes</p>
                    <div className="mt-3 space-x-4 flex p-1">
                        <div className="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
                            <span className="block h-6 w-6 bg-green-400 rounded-full"> </span>
                        </div>
                        <div className="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
                            <span className="block h-6 w-6 bg-blue-400 rounded-full"> </span>
                        </div>
                        <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                            <span className="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
                        </div>
                    </div>
                    <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                        <button className="block text-xl font-semibold text-gray-700 cursor-auto dark:text-white">$12.99</button>
                        <button className="md:mx-2 text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export const CardItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
    background-color: #00008B;
    color: #fff;
    margin: 0 15px;
    font-size: 4em;
`;