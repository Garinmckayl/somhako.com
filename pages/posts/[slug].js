import Head from 'next/head';
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

// The page for each post
export default function Post({ frontmatter, content }) {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  return (
    <>
    <Head>
        <title>
        {title} | Somhako
        </title>
        <meta
        name="description"
        content="Make your job search easier with trackable resumes and enhanced applications."
        />
      </Head>
      <article className="max-w-[1000px] px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
        <div className="w-full mx-auto space-y-4 text-center">
          <h1 className="text-4xl text-white font-bold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-sm text-white">
            <span className="mr-1">by</span>
            <a
              rel="noopener noreferrer"
              href="#"
              target="_blank"
              className="underline dark:text-violet-400 mr-1"
            >
              <span>{author}</span>
            </a>
            <span className="mr-1">on</span>
            <time dateTime="2021-02-12 15:34:18-0200">{date}</time>
          </p>
          <img src={bannerImage} className="w-full" />
        </div>
        <article className="blogSummay text-white" dangerouslySetInnerHTML={{ __html: md().render(content) }} ></article>
      </article>
    </>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
