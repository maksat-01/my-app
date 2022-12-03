import React, {useEffect} from 'react';
import gsap from "gsap"

import modelLeft from "../../assest/img/model-left.jpg"
import modelRight from "../../assest/img/model-right.jpg"
import chefLeft from "../../assest/img/chef-left.jpg"
import chefRight from "../../assest/img/chef-right.jpg"
import hairLeft from "../../assest/img/hair-left.jpg"
import hairRight from "../../assest/img/hair-right.jpg"

const Pages = () => {
    useEffect(() => {

        function init() {
            const slides = document.querySelectorAll(".slide")
            const pages = document.querySelectorAll(".page")
            const backgrounds = ['radial-gradient(#2B3760, #0B1023)', 'radial-gradient(#4E3022, #161616)', 'radial-gradient(#4E4342, #161616)'];
            let current = 0;


            slides.forEach((slide, index) => {
                slide.addEventListener("click", function () {
                    nextSlide(index)
                })
            })


            function nextSlide(pageNumber) {
                const nextPage = pages[pageNumber];
                const currentPage = pages[current];
                const nextLeft = nextPage.querySelector(".hero .model-left")
                const nextRight = nextPage.querySelector(".hero .model-right")
                const currentLeft = currentPage.querySelector(".hero .model-left")
                const currentRight = currentPage.querySelector(".hero .model-right")
                const nextText = nextPage.querySelector(".details")
                const portfolio = document.querySelector(".portfolio")

                portfolio.style.backgroundImage = backgrounds[pageNumber]
                gsap.fromTo(currentLeft, 0.3, {y: "-10%"}, {y: "-100%"})
                gsap.fromTo(currentRight, 0.3, {y: "10%"}, {y: "100%"}, "-=0.2")
                gsap.fromTo(currentPage, 0.3, {opacity: 1, pointerEvents: "all"}, {opacity: 0, pointerEvents: "none"})
                gsap.fromTo(nextPage, 0.3, {opacity: 0, pointerEvents: "none"}, {opacity: 1, pointerEvents: "all"}, "-=0.6")

                gsap.fromTo(nextText, 0.3, {opacity: 0, y: 30}, {opacity: 1, y: 0})

                gsap.set(nextLeft, {clearProps: "all"})
                gsap.set(nextRight, {clearProps: "all"})
                current = pageNumber
            }

        }

        init()

    })


    return (
        <div className="portfolio">
            <div className="header">
                <div className="nav">
                    <h3 className="logo">Dimitri Marco</h3>
                </div>
            </div>
            <div className="main">
                <div className="page photographer">
                    <div className="details">
                        <h1>Elena Morell</h1>
                        <h2>Photograph</h2>
                        <p>02/08/2018</p>
                    </div>
                    <div className="hero">
                            <img className="model-left" src={modelLeft} alt=""/>
                            <img className="model-right" src={modelRight} alt=""/>

                    </div>
                </div>
                <div className="page chef">
                    <div className="details">
                        <h1>John Saves</h1>
                        <h2>Pro Chef</h2>
                        <p>02/08/2013</p>
                    </div>
                    <div className="hero">
                        <img className="model-left" src={chefLeft} alt=""/>
                        <img className="model-right" src={chefRight} alt=""/>
                    </div>
                </div>
                <div className="page hairstyle">
                    <div className="details">
                        <h1>Jon Mayer</h1>
                        <h2>Pro Hairstyle</h2>
                        <p>02/08/2011</p>
                    </div>
                    <div className="hero">
                        <img className="model-left" src={hairLeft} alt=""/>
                        <img className="model-right" src={hairRight} alt=""/>
                    </div>
                </div>
                <div className="pages">
                    <div className="page-1">
                        <h3>01</h3>
                        <svg className="slide active"
                             width="12"
                             height="12"
                             viewBox="0 0 12 12"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="white"></circle>
                        </svg>
                    </div>
                    <div className="page-2">
                        <h3>02</h3>
                        <svg className="slide active"
                             width="12"
                             height="12"
                             viewBox="0 0 12 12"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="white"></circle>
                        </svg>
                    </div>
                    <div className="page-3">
                        <h3>03</h3>
                        <svg className="slide active"
                             width="12"
                             height="12"
                             viewBox="0 0 12 12"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="white"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pages;