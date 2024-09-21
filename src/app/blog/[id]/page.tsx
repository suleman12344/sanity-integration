import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

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
    <div className="p-20 text-5xl">
      {blogdetail.title}
      <span className="text-sm">
        <p className="mt-20">{blogdetail.Description}</p>
      </span>
      <Image
        src={urlFor(blogdetail.Image).width(800).url()}
        width={100}
        height={100}
        alt="Image"
      />
    </div>
  );
}

export default blogdetail;
