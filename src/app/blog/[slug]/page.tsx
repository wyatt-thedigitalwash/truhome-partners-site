"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTABanner from "@/components/CTABanner";
import { ArrowRight } from "lucide-react";
import { posts } from "../data";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#2F343A]">
            Post not found
          </h1>
          <p className="mt-3 text-[#6B6B6B]">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-block rounded-xl bg-[#3FA380] px-8 py-3 text-sm font-bold text-white transition-all duration-200 ease-out hover:bg-[#358E6E]"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = posts.filter((p) => p.slug !== post.slug);

  return (
    <main data-dark-hero>
      {/* ---------------------------------------------------------- */}
      {/*  Article Header                                             */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#2F343A] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">

        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            <ImagePlaceholder
              label="Blog post featured image"
              className="w-full"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-8 text-3xl font-bold text-white sm:text-4xl">
              {post.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-gray-500" />
              <span>{post.readTime}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Article Body                                               */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light" />

        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            {post.content.map((paragraph, index) => (
              <div key={index}>
                <p className="mb-6 text-base leading-relaxed text-[#2F343A] sm:text-lg">
                  {paragraph}
                </p>
                {index === 1 && (
                  <div className="my-10 rounded-2xl border border-gray-200 bg-[#F5F5F5] p-6 sm:p-8 text-center">
                    <p className="text-lg font-bold text-[#2F343A]">
                      Thinking about selling your Tampa home?
                    </p>
                    <p className="mt-2 text-sm text-[#6B6B6B]">
                      <Link
                        href="/how-it-works"
                        className="font-semibold text-[#3FA380] underline underline-offset-2 transition-colors duration-200 hover:text-[#358E6E]"
                      >
                        Here&apos;s how our process works &rarr;
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Related Posts                                              */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-50" />

        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#2F343A] sm:text-3xl">
              Related Posts
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2">
            {relatedPosts.map((related) => (
              <StaggerItem key={related.slug}>
                <Link
                  href={`/blog/${related.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <ImagePlaceholder
                      label="Blog post image"
                      className="w-full rounded-none"
                    />
                    <div className="p-5">
                      <h3 className="text-base font-bold text-[#2F343A]">
                        {related.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#3FA380]">
                        Read More
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  CTA Banner                                                 */}
      {/* ---------------------------------------------------------- */}
      <CTABanner />
    </main>
  );
}
