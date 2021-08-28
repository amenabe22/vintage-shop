import React from 'react'
import VintageBook from '../images/vinageBook.jpeg'
import { connect } from 'react-redux'

const mapStateToProps = ({ theme }: any) => {
    // console.clear()
    return { theme }
}

const TopBanner = ({ theme }: any) => {
    return (
        <div className="relative">
            <div className="container mt-12" style={{
                position: "relative",
                textAlign: "center",
                color: "white",
            }}>
                <img src={VintageBook} alt="Snow" className="object-cover w-full xl:h-96 h-72" style={{
                    opacity: "0.7"
                }} />
                <div style={{
                    position: "absolute",
                    top: "35%",
                    left: "16px",
                }}>
                    <div className="text-left mx-12">
                        <p className="font-bold text-sm uppercase">Services</p>
                        <p className="text-3xl font-bold">Multimedia products</p>
                        <p className="text-2xl mb-6 leading-none">Atractive designs for your brand</p>
                        <button className="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">Get Started</button>
                        {/* <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a> */}
                    </div>

                </div>
                {/* <div className="top-left">Top Left</div>
                <div className="top-right">Top Right</div>
                <div className="bottom-right">Bottom Right</div>
                <div className="centered">Centered</div> */}
            </div>

        </div>
    );
}

export default connect(mapStateToProps)(TopBanner);