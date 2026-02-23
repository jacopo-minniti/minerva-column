export default function AboutUsPage() {
    return (
        <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-trajan font-bold text-ink mb-10 text-center uppercase tracking-widest border-b border-gray-200 pb-6">
                About Us
            </h1>

            <div className="space-y-8 font-avenir text-lg text-gray-800 leading-relaxed">
                <p>
                    <span className="text-3xl font-trajan text-accent font-bold float-left mr-2 mt-[-6px]">W</span>e are a Minerva University student-led journal dedicated to bringing thoughtful journalism, rigorous opinion pieces, and creative insights to our global community. The Column was founded on the belief that student voices matter, especially when analyzing the complex, interconnected world we live in.
                </p>

                <p>
                    Operating across multiple campus cities, our writers draw inspiration from their diverse cultural experiences, producing content that bridges local nuances with global themes. From dissecting technological paradigms in San Francisco to observing political shifts in Berlin, our team is uniquely positioned to offer fresh perspectives.
                </p>

                <blockquote className="border-l-4 border-accent pl-6 py-2 my-10 italic text-xl text-gray-600 font-trajan">
                    "The most important stories are often found at the intersection of diverse disciplines and divergent cultures."
                </blockquote>

                <p>
                    Whether you are here for in-depth analysis on Science, thought-provoking Opinions, or just some Fun Things, we hope The Column provides a meaningful space for reflection and discovery.
                </p>

                <div className="pt-10 border-t border-gray-200 mt-12 text-center text-sm uppercase tracking-widest text-gray-500 font-bold font-avenir">
                    Founded in 2025 • Supported by the Minerva community
                </div>
            </div>
        </div>
    );
}
