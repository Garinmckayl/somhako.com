import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

// The page for each post
export default function Post({ frontmatter, content }) {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  return (
    <>
      <Navbar />
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
        <div className="w-full mx-auto space-y-4 text-center">
          <p className="text-xs font-semibold tracking-wider uppercase">
            #TailwindCSS
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-sm dark:text-gray-400">
            by
            <a
              rel="noopener noreferrer"
              href="#"
              target="_blank"
              className="underline dark:text-violet-400"
            >
              <span>{author}</span>
            </a>
            on
            <time datetime="2021-02-12 15:34:18-0200">{date}</time>
          </p>
          <img src={bannerImage} />
        </div>
        <div className="dark:text-gray-100">
          <p>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          </p>
        </div>
      </article>

      <Footer />
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
