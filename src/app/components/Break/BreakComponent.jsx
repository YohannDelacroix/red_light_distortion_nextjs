"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

const BreakComponent = () => {
    const svgRef = useRef(null);
    const pathRef = useRef(null);
    const rafRef = useRef(null);

    const [pathLength, setPathLength] = useState(0);
    const [progress, setProgress] = useState(0);

    const tailLength = 180;

    const d = `
    M 0 110
    L 180 110
    L 240 110
    L 270 60
    L 300 150
    L 340 40
    L 380 110
    L 520 110
    L 560 110
    L 590 90
    L 610 125
    L 640 110
    L 820 110
    L 860 110
    L 890 70
    L 930 145
    L 970 50
    L 1010 110
    L 1200 110
  `;

    useEffect(() => {
        if (!pathRef.current) return;

        const updateLength = () => {
            setPathLength(pathRef.current.getTotalLength());
        };

        updateLength();
        window.addEventListener("resize", updateLength);

        return () => {
            window.removeEventListener("resize", updateLength);
        };
    }, []);

    useEffect(() => {
        const updateScrollProgress = () => {
            if (!svgRef.current) return;

            const rect = svgRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const start = viewportHeight;
            const end = -rect.height * 0.65; // plus rapide qu'avant

            const rawProgress = (start - rect.top) / (start - end);
            const nextProgress = clamp(rawProgress, 0, 1);

            setProgress(nextProgress);
            rafRef.current = null;
        };

        const handleScroll = () => {
            if (rafRef.current) return;
            rafRef.current = window.requestAnimationFrame(updateScrollProgress);
        };

        updateScrollProgress();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (rafRef.current) {
                window.cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    const dashValues = useMemo(() => {
        if (!pathLength) {
            return {
                strokeDasharray: "0 999999",
                strokeDashoffset: 0,
            };
        }

        const head = progress * pathLength;
        const tail = Math.max(0, head - tailLength);
        const visible = Math.max(0, head - tail);

        return {
            strokeDasharray: `${visible} ${pathLength + tailLength}`,
            strokeDashoffset: -tail,
        };
    }, [pathLength, progress]);

    return (
        <section
            style={{
                height: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <svg
                ref={svgRef}
                viewBox="0 0 1200 220"
                width="100%"
                height="220"
                preserveAspectRatio="none"
            >
                <path
                    d={d}
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    ref={pathRef}
                    d={d}
                    fill="none"
                    stroke="#ff2a2a"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        strokeDasharray: dashValues.strokeDasharray,
                        strokeDashoffset: dashValues.strokeDashoffset,
                        transition: "stroke-dashoffset 40ms linear, stroke-dasharray 40ms linear",
                        filter: "drop-shadow(0 0 8px rgba(255, 0, 0, 0.9))",
                    }}
                />
            </svg>
        </section>
    );
};

export default BreakComponent;