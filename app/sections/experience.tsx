"use client";
import React, { useState, useEffect, useRef } from "react";
import ExperienceRow from "../components/experience-row";
import { ExperienceData } from "../data";
import { IconRow } from "../../types/home";
import "./css/experience.scss";

export default function Experience() {

    const [experienceScrollHeight, setExperienceScrollHeight] = useState("0%");
    const experienceContainerRef = useRef<HTMLDivElement>(null);

    const handleExperienceScroll = () => {

        const experienceContainer = experienceContainerRef.current;
        if (!experienceContainer) return;

        const containerHeight = experienceContainer.clientHeight;
        const containerTop = experienceContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;

        if (!isContainerVisible) {
            setExperienceScrollHeight("0%");
        } else {
            const maxScroll = containerHeight * 2;
            const experienceScrollPercentage = Math.min((scrollPosition / maxScroll) * 90, 100);
            setExperienceScrollHeight(`${experienceScrollPercentage}%`);
        };
    };
    
    useEffect(() => {

        window.addEventListener("scroll", handleExperienceScroll);

        return () => {
            window.removeEventListener("scroll", handleExperienceScroll);
        };

    }, []);

    return (
        <>
            <div id="experience" ref={experienceContainerRef}>
                <div id="experience-header">
                    <h1>Experience && Skills</h1>
                </div>
                <div id="experience-container">
                    <div id="experience-paragraph">
                        <p>
                            In Summer 2024, I interned at Godaddy as a Backend Software Engineer on the Edge/API Gateway Team working on a CLI tool/lambda function written in Rust, Tokio, Axum, and Clap. I contributed to the first phase of a company-wide integration plan for a tier 0 service and wrote features that help streamline the configuration process of our reverse proxies for all of GoDaddy’s microservices and web traffic.
                            <br/><br/>
                            In Fall 2023 and Spring 2024, I interned at Baltimore Life Insurance as a Frontend Software Engineer on the Platform Team implementing my redesign of the home page for the Internal Agent Portal using React, which has now gone into prod.
                            <br/><br/>
                            <b>Keep scrolling</b> for more in-depth information about some of my works!
                            <br/><br/>
                            <a href="https://docs.google.com/document/d/1VA2JjizgZaup8Hw1dX10K6-6aRnEW3wpa1yVvscN2H4/edit?usp=sharing" target="_blank" aria-label="View Dawit's resume!"><b>Click me to view Dawit's resume!</b></a>
                        </p>
                    </div>
                    <div id="skills-container">
                        <div id="skills-row-container">
                            {ExperienceData.map((row: IconRow) => (
                                <ExperienceRow key={row.id} row={row} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {` 
                    :root { --experienceScrollHeight: ${experienceScrollHeight}; }
                `}
            </style>
        </>
    );
};