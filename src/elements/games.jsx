import React from "react";

function Games() {
    const elements = [];
    const num = 16;
    const gradient = "linear-gradient(transparent 50%, var(--color-primary-solid) 77.5%), ";
    const image = "url(https://www.digiseller.ru/preview/864936/p1_2718024_4fae8285.jpg)";

    const colors = ["rgb(231, 32, 32)", "rgb(25, 128, 168)", "rgb(35, 129, 67)"];

    for (let i = 0; i < num; i++) {
        elements.push(
        <div className = "rightside-grid-games" style = {{backgroundImage: gradient + image}}>
            <div className = "rightside-grid-games-info">
                <span className = "rightside-grid-games-info-name">Counter Strike {i + 2}</span>
                <div className = "rightside-grid-games-info-tags">
                    <span className = "rightside-grid-games-info-tags-tag" style = {{backgroundColor: colors[1]}}>#5x5</span>
                    <span className = "rightside-grid-games-info-tags-tag" style = {{backgroundColor: colors[2]}}>#хуйня</span>
                    <span className = "rightside-grid-games-info-tags-tag" style = {{backgroundColor: colors[0]}}>#для задротов</span>
                </div>
                <div className = "rightside-grid-games-info-like">
                    <svg className = "rightside-grid-games-info-like-icon"  viewBox = "0 0 29 30" fill = "none" xmlns = "http://www.w3.org/2000/svg">
                        <path d = "M14.5 7.88784C11.6717 1.24924 1.77271 1.95631 1.77271 10.4412C1.77271 18.9261 14.5 25.997 14.5 25.997C14.5 25.997 27.2273 18.9261 27.2273 10.4412C27.2273 1.95631 17.3283 1.24924 14.5 7.88784Z" stroke = "#B295FB" strokeWidth = "2.82828" strokeLinecap = "round" strokeLinejoin = "round"/>
                    </svg>
                    <span className = "rightside-grid-games-info-like-count">0</span>
                </div>
            </div>
        </div>)
    };
    return (
        elements
    )
}

export default Games