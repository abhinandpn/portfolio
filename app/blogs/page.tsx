import BlogContent from "@/components/blogContent";
import BlogHero from "@/components/blogHero";
import { fetchBlogs } from "@/helpers/fetchBlogs";

export default async function Blogs() {
  const res = await fetchBlogs()
  return (
    <>
    <BlogHero />
    <BlogContent data = {res} />
    </>
  );
}
