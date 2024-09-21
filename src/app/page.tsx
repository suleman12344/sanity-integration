//import  from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
type Blog = {
  _id: string;
  title: string;
  // Add any other properties your blog object may have
};
const blogdata = async () => {
  return client.fetch(`*[_type == "blog"]`);
};
export default async function Home() {
  const blog = await blogdata();
  console.log(blog);

  return (
    <>
      <div className="flex items-center justify-center p-20">
        <p className="bg-blue-700 font-bold text-white p-5 rounded-lg">
          Sanity Integration
        </p>
      </div>
      <h1 className="text-center font-bold text-3xl">BLOGS</h1>
      <div className=" grid grid-cols-2 p-20 gap-20 ">
        {blog.map((blog: Blog) => (
          <Link key={blog._id} href={`/blog/${blog._id}`}>
            <div className="bg-green-300 border-2 border-gray-400 hover:shadow-xl p-20">
              <p>{blog.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
