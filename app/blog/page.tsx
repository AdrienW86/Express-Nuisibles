import Link from 'next/link';
// On importe le JSON directement
import articlesRaw from '@/data/articles.json'; 

// On définit l'interface pour une section
type Section = 
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: number; text: string }
  | { type: 'list'; items: string[] };

// On définit l'interface pour un article
interface Article {
  title: string;
  slug: string;
  metaDescription: string;
  imageUrl: string;
  sections: Section[];
}

// On force TypeScript à typer notre tableau JSON
const articles = articlesRaw as Article[];

export default async function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-slate-900">
          Le Blog d'Express Nuisibles
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between p-6">
              <div>
                <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover rounded-xl mb-4" />
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-xl font-bold group-hover:text-emerald-600 transition-colors text-slate-900">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-slate-600 text-sm line-clamp-3">{post.metaDescription}</p>
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-4 text-sm font-semibold text-emerald-600 block">
                Lire l'article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}