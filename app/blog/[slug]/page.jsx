import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { blogPosts, blogBodies, blogBySlug } from "@/lib/data";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = blogBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} | LTS Car Rental`, description: post.excerpt };
}

export default function BlogPost({ params }) {
  const post = blogBySlug(params.slug);
  if (!post) notFound();

  const body = blogBodies[post.slug] || [post.excerpt];
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={post.category} title={post.title} crumb="Blog" />

      <article className="wrap max-w-3xl py-14">
        <div className="mb-8 flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.read} read</span>
          <span className="rounded-full bg-char2 px-3 py-1 font-semibold text-white/80">{post.category}</span>
        </div>

        {/* cover */}
        <div className="photo relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          {/* Add cover at /public/blog/{slug}.jpg for a richer look */}
        </div>

        <div className="space-y-5 text-[15px] leading-relaxed text-white/80">
          <p className="text-lg font-medium text-white">{post.excerpt}</p>
          {body.map((para, i) => (
            <Reveal key={i} delay={i * 0.03}><p>{para}</p></Reveal>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
          <Link href="/blog" className="link-arrow"><ArrowLeft className="h-4 w-4" /> All articles</Link>
          <a href="https://wa.me/971522375439" className="btn-red">Book a car</a>
        </div>
      </article>

      {/* related */}
      <section className="border-t border-line bg-char2 py-14">
        <div className="wrap">
          <h2 className="mb-8 font-display text-2xl font-bold text-white">More from the blog</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-char transition-all hover:-translate-y-1 hover:border-brand/60">
                  <div className="photo aspect-[16/10] w-full" />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs text-muted">{p.date}</span>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white group-hover:text-brand">{p.title}</h3>
                    <span className="link-arrow mt-4">Read more <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
