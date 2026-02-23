import { getArticlesByCategory } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";

export default function MinervaCitiesPage() {
    const allArticles = getArticlesByCategory("Minerva Cities");

    if (!allArticles || allArticles.length === 0) {
        return <div className="p-8 text-center text-accent font-avenir">No articles found in this category.</div>;
    }

    // Explicitly find the impeachment article for the main feature
    const impeachmentArticle = allArticles.find(a => a.meta.slug.includes('impeachment')) || allArticles[0];
    const otherArticles = allArticles.filter(a => a.meta.slug !== impeachmentArticle.meta.slug);

    return (
        <div className="py-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-trajan font-bold text-center text-ink mb-12 uppercase tracking-widest">
                Minerva Cities
            </h1>

            {/* Main Feature */}
            <div className="mb-20">
                <Link href={`/articles/${impeachmentArticle.meta.slug}`} className="group block mb-8 relative w-full aspect-[2/1] bg-gray-200 overflow-hidden">
                    {impeachmentArticle.meta.coverImage ? (
                        <Image
                            src={impeachmentArticle.meta.coverImage}
                            alt={impeachmentArticle.meta.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
                            <span className="text-accent opacity-50 font-trajan text-4xl font-bold">THE COLUMN</span>
                        </div>
                    )}
                </Link>

                <div className="text-center px-4">
                    <Link href={`/articles/${impeachmentArticle.meta.slug}`} className="group block">
                        <h2 className="text-3xl md:text-5xl font-trajan font-bold text-ink group-hover:text-accent transition-colors leading-tight mb-6">
                            {impeachmentArticle.meta.title}
                        </h2>
                    </Link>
                    <p className="text-sm font-avenir text-gray-500 uppercase font-semibold tracking-wider mb-6">
                        By <span className="text-accent">{impeachmentArticle.meta.author}</span> • {new Date(impeachmentArticle.meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                    <p className="font-avenir text-gray-700 leading-relaxed text-lg text-justify mx-auto max-w-2xl">
                        {impeachmentArticle.content.split('\n').find(line => line.length > 50 && !line.startsWith('#'))?.substring(0, 300) || 'Click to read full story.'}...
                    </p>
                </div>
            </div>

            {/* List of other articles directly below */}
            <div className="flex flex-col space-y-12 border-t border-gray-300 pt-12">
                {otherArticles.map((article) => (
                    <div key={article.meta.slug} className="text-center max-w-2xl mx-auto pb-10 border-b border-gray-100 last:border-0">
                        <Link href={`/articles/${article.meta.slug}`} className="group block mb-4">
                            <h3 className="text-2xl font-trajan font-bold text-ink group-hover:text-accent transition-colors leading-snug">
                                {article.meta.title}
                            </h3>
                        </Link>
                        <p className="text-xs font-avenir text-gray-500 uppercase font-semibold tracking-wider mb-4">
                            By <span className="text-accent">{article.meta.author}</span> • {new Date(article.meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="text-base font-avenir text-gray-700 leading-relaxed text-justify">
                            {article.content.split('\n').find(line => line.length > 50 && !line.startsWith('#'))?.substring(0, 250) || 'Click to read full story.'}...
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
