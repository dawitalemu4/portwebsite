"use client";
import React, { useEffect } from "react";
import "./css/luffy.scss";

export default function Luffy() {

    useEffect(() => {

        let gif: any = document.getElementById("luffy-img");
        let gifs: any[] = ["hatclose.webp", "hatmid.webp", "hatopen.webp"];
        let message: any = document.getElementById("warning-message");
        let gameIntervalId: any;
        let startTime: number;
        if (!message || !gif) return;

        const startGame = () => {

            message.style.display = "none";
            startTime = Date.now();
            gif.src = "/docs/luffy/luffy.gif";

            gameIntervalId = setInterval(() => {
                startTime = Date.now();
                gif.src = "/docs/luffy/luffy.gif";
            }, 5040);
        };

        const onClick = () => {

            let now = Date.now();

            if (now - startTime >= 3700 && now - startTime <= 5040) {

                message.style.display = "none";
                displayWinOutcome();

            } else {

                message.style.display = "flex";

                setTimeout(() => {
                    message.style.display = "none";
                }, 2000);
            };
        };

        const displayWinOutcome = () => {

            clearInterval(gameIntervalId);
            let i = 0;

            gameIntervalId = setInterval(() => {

                gif.src = "/docs/luffy/" + gifs[i];
                i++;

                if (i === gifs.length) {
                    clearInterval(gameIntervalId);
                    gif.src = "/docs/luffy/" + gifs[i-1];
                    message.style.display = "none";
                };

                if (i == gifs[1]) { 
                    message.style.display = "none"; 
                };

            }, 400);

            gif.removeEventListener("click", onClick);
            gif.removeEventListener("contextmenu", onClick);
        };

        startGame();

        gif.addEventListener("click", onClick);
        gif.addEventListener("contextmenu", onClick);

    }, []);

    return (
        <div id="luffy-container">
            <img id="luffy-img" src="/docs/luffy/luffy.gif" alt="Animated Gif of Luffy Fishing" />
            <div id="warning-message">
                <p>Tap left click while luffy is pulling - Don't drag or hold</p>
            </div>
        </div>
    );
};