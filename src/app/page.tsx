//import  from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/component/navbar";
import { urlFor } from "@/sanity/lib/image";
type Blog = {
  _id: string;
  title: string;
  Image: string;
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
      <Navbar />
      <div className="flex md:p-20 justify-between items-center gap-20">
        <div className="p-20">
          <h1 className="font-bold text-7xl ">Blogs</h1>
          <p className="mt-10 text-gray-600">
            Review a step-by-step guide plus useful templates to learn how to
            write an effective blog post for your target audience and customers.
          </p>
        </div>

        <Image
          src="/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg"
          width={600}
          height={600}
          alt="image"
          className="md:block hidden"
        ></Image>
      </div>
      <h1 className="text-center font-bold text-3xl">BLOGS</h1>
      <div className=" grid md:grid-cols-2 grid-cols-1 p-20 gap-20 ">
        {blog.map((blog: Blog) => (
          <Link
            key={blog._id}
            href={`/blog/${blog._id}`}
            className="md:flex gap-10 bg-slate-200 border-2 border-gray-400 hover:shadow-xl p-10"
          >
            <Image
              src={urlFor(blog.Image).width(800).url()}
              width={100}
              height={100}
              alt="Image"
            />
            <div>
              <p className="md:pt-0 pt-5">{blog.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
