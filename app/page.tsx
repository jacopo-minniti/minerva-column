import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/api";

export default function Home() {
  const articles = getAllArticles();

  if (!articles || articles.length === 0) {
    return <div className="p-8 text-center text-accent font-avenir">No articles found. Check your /content/articles folder.</div>;
  }

  // Pick first article for main feature
  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <div className="py-4">
      {/* Newspaper Header Line */}
      <div className="flex justify-between items-center border-t-2 border-b-2 border-accent py-2 mb-8 text-sm font-trajan font-bold text-gray-700 tracking-widest uppercase">
        <span>Sunday, February 22</span>
        <span>The University Daily Est. 2025</span>
        <span>Volume I</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left column: Main Feature */}
        <div className="lg:w-2/3 flex flex-col pr-0 lg:pr-8 lg:border-r border-gray-300">
          <h2 className="text-xl font-avenir font-bold mb-4 flex items-center tracking-wider text-ink">
            TOP ARTICLES <span className="ml-1 text-gray-400">›</span>
          </h2>

          <Link href={`/articles/${mainArticle.meta.slug}`} className="group relative block mb-4">
            {/* Aspect Video provides a nice 16:9 box */}
            <div className="w-full aspect-video bg-gray-200 relative overflow-hidden flex items-center justify-center">
              {mainArticle.meta.coverImage ? (
                <Image
                  src={mainArticle.meta.coverImage}
                  alt={mainArticle.meta.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
                  <span className="text-accent opacity-50 font-trajan text-4xl font-bold">THE COLUMN</span>
                </div>
              )}
            </div>

            <h3 className="mt-4 text-3xl font-trajan font-bold text-ink group-hover:text-accent transition-colors leading-tight">
              {mainArticle.meta.title}
            </h3>
          </Link>

          <p className="text-sm font-avenir text-gray-500 uppercase font-semibold tracking-wider mb-2">
            By <span className="text-accent">{mainArticle.meta.author}</span> • {new Date(mainArticle.meta.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>

          <p className="font-avenir text-gray-700 leading-relaxed text-lg mb-6">
            {/* Extract first paragraph from MDX for excerpt or just a snippet */}
            {mainArticle.content.split('\n').find(line => line.length > 50 && !line.startsWith('#'))?.substring(0, 180) || 'Click to read the full story.'}...
          </p>
        </div>

        {/* Right Column: Opinion / Secondary Articles */}
        <div className="lg:w-1/3 flex flex-col pl-0 lg:pl-4">
          <h2 className="text-xl font-avenir font-bold mb-4 flex items-center tracking-wider text-ink">
            RECENT <span className="ml-1 text-gray-400">›</span>
          </h2>

          <div className="flex flex-col space-y-6">
            {sideArticles.map((article, idx) => (
              <div key={article.meta.slug} className={`pb-6 ${idx !== sideArticles.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <h4 className="text-xs font-avenir font-bold text-accent uppercase tracking-widest mb-1">
                  {article.meta.category}
                </h4>
                <Link href={`/articles/${article.meta.slug}`} className="group block">
                  <h3 className="text-xl font-trajan font-bold text-ink group-hover:text-accent transition-colors mb-2 leading-snug">
                    {article.meta.title}
                  </h3>
                </Link>
                <p className="text-xs font-avenir text-gray-500 uppercase font-semibold tracking-wider mb-2">
                  By <span className="text-accent">{article.meta.author}</span> • {new Date(article.meta.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
                <p className="text-sm font-avenir text-gray-700 leading-relaxed line-clamp-3">
                  {article.content.split('\n').find(line => line.length > 30 && !line.startsWith('#'))?.substring(0, 100) || 'Read more...'}...
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
      <div
        className="fixed top-0 right-[-10vw] md:right-0 w-[60vw] md:w-[40vw] h-screen bg-no-repeat bg-right-top bg-contain opacity-15 pointer-events-none -z-10"
        style={{
          backgroundImage: "url('/background.png')",
          maskImage: 'linear-gradient(to right, transparent, black 70%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 70%)'
        }}
      />
    </div>
  );
}
