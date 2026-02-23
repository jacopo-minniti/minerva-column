"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

export function CopyButton({ url }: { url: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center space-x-2 text-sm font-avenir text-ink hover:text-accent transition-colors w-full p-2 border border-transparent hover:border-gray-200 rounded-sm"
            aria-label="Copy link to article"
        >
            {copied ? <Check size={16} className="text-green-600" /> : <LinkIcon size={16} />}
            <span>{copied ? "Copied!" : "Share Link"}</span>
        </button>
    );
}
