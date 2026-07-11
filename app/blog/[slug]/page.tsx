import { notFound } from 'next/navigation';
import articlesRaw from '@/data/articles.json';

type Section = 
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: number; text: string }
  | { type: 'list'; items: string[] };

interface Article {
  title: string;
  slug: string;
  metaDescription: string;
  imageUrl: string;
  sections: Section[];
}

const articles = articlesRaw as Article[];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  // Recherche de l'article dans le JSON local
  const post = articles.find((art) => art.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        
        {/* Image de couverture */}
        <div className="relative h-64 sm:h-96 w-full bg-slate-200">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 sm:p-10">
          {/* Titre Principal */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {post.title}
          </h1>

          {/* Temps de lecture */}
          <div className="flex items-center text-sm text-slate-500 mb-8 pb-6 border-b border-slate-100">
            <span className="flex items-center gap-1">⏱️ 3 min de lecture</span>
          </div>

          {/* Rendu dynamique des sections */}
          <div className="space-y-6">
            {post.sections.map((section, index) => {
              
              // 1. Paragraphes
              if (section.type === "paragraph") {
                return (
                  <p key={index} className="text-lg text-slate-700 leading-relaxed text-justify">
                    {section.text}
                  </p>
                );
              }

              // 2. Titres (H2 et H3 de la FAQ)
              if (section.type === "heading") {
                if (section.level === 3) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-slate-800 mt-6 mb-3 tracking-tight">
                      {section.text}
                    </h3>
                  );
                }
                // Par défaut (Level 2)
                return (
                  <h2 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">
                    {section.text}
                  </h2>
                );
              }

              // 3. Listes à puces
              if (section.type === "list" && "items" in section && Array.isArray(section.items)) {
                return (
                  <ul key={index} className="space-y-3 my-4 pl-1">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-700 text-base sm:text-lg">
                        <span className="text-emerald-500 mr-3 select-none">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>

        </div>
      </article>
    </main>
  );
}