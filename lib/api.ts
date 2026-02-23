import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleMeta {
    slug: string;
    title: string;
    description?: string;
    date: string;
    author: string;
    category: string;
    coverImage?: string;
    authorImage?: string;
}

export interface Article {
    meta: ArticleMeta;
    content: string;
}

export function getArticleSlugs() {
    if (!fs.existsSync(articlesDirectory)) {
        return [];
    }
    return fs.readdirSync(articlesDirectory).filter(file => file.endsWith('.mdx'));
}

export function getArticleBySlug(slug: string): Article {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
        meta: {
            slug: realSlug,
            title: data.title || 'Untitled',
            description: data.description || undefined,
            date: data.date || new Date().toISOString(),
            author: data.author || 'Anonymous',
            category: data.category || 'Other',
            coverImage: data.coverImage || undefined,
            authorImage: data.authorImage || undefined,
        },
        content,
    };
}

export function getAllArticles(): Article[] {
    const slugs = getArticleSlugs();
    const articles = slugs
        .map((slug) => getArticleBySlug(slug))
        // sort articles by date in descending order
        .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
    return articles;
}

export function getArticlesByCategory(category: string): Article[] {
    const articles = getAllArticles();
    return articles.filter(
        (article) => article.meta.category.toLowerCase() === category.toLowerCase()
    );
}
