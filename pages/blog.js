import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Features from "../components/features";

export default function Blog({ posts }) {
  return (
    <>
      <section className="py-10">
        <div className="max-w-[700px] mx-auto px-3 text-center">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
          Our Blog
          </h1>
          <p className="font-light text-white sm:text-xl">
          We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>  
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-3">
          <main className="grid gap-8 lg:grid-cols-3">
              {posts.map((post) => {
                const { slug, frontmatter } = post;
                const { title, author, category, date, excerpt, bannerImage, tags } = frontmatter;
                return (
                  <article className="p-6 bg-white rounded-lg">
                      <Link href={`/posts/${slug}`}>
                          <a className="mb-3 block">
                            <img src={bannerImage} />
                          </a>
                      </Link>
                      <h2 className="mb-2 text-2xl font-bold">
                        <Link href={`/posts/${slug}`}>
                          <a>{title}</a>
                        </Link>
                      </h2>
                      <p className="mb-5">
                        {excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <Link href={`/posts/${slug}`}>
                          <a
                            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                          >
                            Read more
                            <svg
                              className="ml-2 w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </Link>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
                      </div>
                  </article>
                );
              })}
          </main>
        </div>
      </section>
      <Features />
    </>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
