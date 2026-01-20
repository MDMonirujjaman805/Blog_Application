import { BlogPost } from "@/types";
import { blogService } from "@/services/blog.service";
import BlogCard from "@/components/modules/homepage/BlogCard";

export default async function Home() {
  // const { data } = await userService.getSession();
  // console.log(data);
  const { data } = await blogService.getBlogPosts();
  // console.log(data);
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}



// import BlogCard from "@/components/modules/homepage/BlogCard";

// import { blogService } from "@/services/blog.service";
// import { BlogPost } from "@/types";

// export default async function Home() {
//   const { data } = await blogService.getBlogPosts(
//     {
//       isFeatured: false,
//     },
//     {
//       cache: "no-store",
//     },
//   );

//   console.log(data);

//   return (
//     <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
//       {data?.data?.map((post: BlogPost) => (
//         <BlogCard key={post.id} post={post} />
//       ))}
//     </div>
//   );
// }
