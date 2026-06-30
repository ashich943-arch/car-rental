import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | LTS Car Rental Dubai",
  description: "Guides, tips and stories on renting luxury and exotic cars in Dubai.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="The LTS Blog"
        subtitle="Driving routes, rental guides and fleet stories to help you get the most out of Dubai."
        crumb="Blog"
      />

      <section className="wrap py-16">
        {/* Featured */}
        <Reveal>
          <article className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-char2 lg:grid-cols-2">
            <div className="photo relative aspect-[16/10] w-full lg:aspect-auto">
              {/* Add cover image at /public/blog/{slug}.jpg */}
              <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.read} read</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-white transition-colors group-hover:text-brand sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{featured.excerpt}</p>
              <span className="link-arrow mt-5">Read article <ArrowRight className="h-4 w-4" /></span>
            </div>
          </article>
        </Reveal>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-char2 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-card">
                <div className="photo relative aspect-[16/10] w-full">
                  {/* Add cover image at /public/blog/{slug}.jpg */}
                  <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.read}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">{post.excerpt}</p>
                  <span className="link-arrow mt-4">Read more <ArrowRight className="h-4 w-4" /></span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-muted">
            Want a specific car or topic covered? <Link href="/contact" className="text-brand">Tell us</Link> and we'll write about it.
          </p>
        </Reveal>
      </section>
    </>
  );
}
