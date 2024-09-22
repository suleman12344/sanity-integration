import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const detailFetch = async (id: string) => {
  // Fetching all blog posts from Sanity
  const data = await client.fetch(`*[_type == "blog"]`);
  const blogDetail = data.find((item: { _id: string }) => item._id === id);

  return blogDetail;
};

async function blogdetail({ params }: { params: { id: string } }) {
  console.log(params);
  const blogdetail = await detailFetch(params.id);
  console.log(blogdetail);

  return (
    <div className="p-20">
      <Link href="/">
        <Image
          src="/previous.png"
          width={50}
          height={50}
          alt="image"
          className="mb-10"
        ></Image>
      </Link>
      <p className="md:text-4xl text-2xl font-semibold">{blogdetail.title}</p>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16">
        <Image
          src={urlFor(blogdetail.Image).width(800).url()}
          width={500}
          height={500}
          alt="Image"
          className="md:ml-20 md:mb-0 mb-8"
        />
        <p>{blogdetail.Description}</p>
      </div>
    </div>
  );
}

export default blogdetail;
