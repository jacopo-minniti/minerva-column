/**
 * Simple utility to strip markdown formatting from a string for use in previews.
 */
export function stripMarkdown(text: string): string {
    if (!text) return "";

    return text
        // 1. Remove images ![alt](url)
        .replace(/!\[.*?\]\(.*?\)/g, "")
        // 2. Remove links [text](url) -> text
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        // 3. Remove bold/italics (***, **, *, __, _)
        .replace(/(\*{1,3}|_{1,3})/g, "")
        // 4. Remove inline code `text`
        .replace(/`{1,2}(.*?)`{1,2}/g, "$1")
        // 5. Remove HTML tags
        .replace(/<[^>]*>/g, "")
        // 6. Remove bullet points at start of line
        .replace(/^\s*[\-\*]\s+/gm, "")
        // 7. Remove blockquotes >
        .replace(/^\s*>\s+/gm, "")
        // 8. Trim extra whitespace
        .replace(/\s+/g, " ")
        .trim();
}
