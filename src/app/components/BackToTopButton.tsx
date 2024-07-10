'use client'
import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { HiArrowCircleUp } from "react-icons/hi";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    const [isButtonActive, setIsButtonActive] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", scrollWindow);
        return () => {
            window.removeEventListener("scroll", scrollWindow);
        };
    }, []);
    
    const scrollWindow = () => {
        const top = 300; //ボタンを表示させたい位置
        let scroll = 0;
        scroll = window.scrollY;
        if (top <= scroll) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    };
    
    const normalStyle = {
        opacity: 0,
        transition: "0.5s",
        pointerEvents: "none",
    };
    const activeStyle = {
        opacity: 1,
        transition: "0.5s",
    };
    const style = isButtonActive ? activeStyle : normalStyle;
    
    return (
        <>
        <div id="back-to-top-btn" style={style} onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-10 "
        >
            <HiArrowCircleUp size="4rem" className="bg-white rounded-full border border-4 border-black" />
        </div>
        <style jsx>{`
            #back-to-top-btn {
            }
            #back-to-top-btn:hover {
                cursor: pointer;
            }
        `}</style>
        </>
    );
}

export default BackToTopButton