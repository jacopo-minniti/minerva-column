"use client";

import React, { useEffect, useState } from "react";

interface Header {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
    const [headers, setHeaders] = useState<Header[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        // Extract headers from the content
        // This regex matches ## and ### headers
        const lines = content.split("\n");
        const foundHeaders: Header[] = [];

        lines.forEach((line) => {
            const match = line.match(/^(#{1,3})\s+(.*)/);
            if (match) {
                const level = match[1].length;
                const text = match[2].trim();
                const id = text
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, "")
                    .replace(/\s+/g, "-");
                foundHeaders.push({ id, text, level });
            }
        });

        setHeaders(foundHeaders);
    }, [content]);

    useEffect(() => {
        const handleScroll = () => {
            // Check if we're at the bottom of the page
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
                if (headers.length > 0) {
                    setActiveId(headers[headers.length - 1].id);
                    return;
                }
            }

            // Otherwise use intersection logic
            const headerElements = headers.map(h => document.getElementById(h.id)).filter(Boolean);
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (let i = headerElements.length - 1; i >= 0; i--) {
                const element = headerElements[i];
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveId(element.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [headers]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Account for any sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            window.history.pushState(null, "", `#${id}`);
        }
    };

    if (headers.length === 0) return null;

    return (
        <div className="border border-gray-200 p-4 shadow-sm bg-white/50">
            <span className="block text-xs font-avenir font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-200 pb-2">
                Outline
            </span>
            <ul className="space-y-2 text-sm font-avenir">
                {headers.map((header) => (
                    <li
                        key={header.id}
                        className={`transition-all duration-200 ${header.level === 3 ? "ml-4 text-xs" :
                                header.level === 1 ? "font-bold text-gray-900 border-b border-gray-100 pb-1 mb-2" : ""
                            }`}
                    >
                        <a
                            href={`#${header.id}`}
                            onClick={(e) => handleClick(e, header.id)}
                            className={`block hover:text-accent transition-colors ${activeId === header.id
                                ? "text-accent font-bold translate-x-1"
                                : "text-gray-600"
                                }`}
                        >
                            {header.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
