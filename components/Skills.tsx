"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "mongodb",
  "python",
  "framer",
  "ai",
  "tailwindcss",
  "numpy",
];

function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="my-10 py-10 ">
      <h1 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h1>
      <div className="flex justify-center align-middle">
        <IconCloud images={images} />
      </div>
    </div>
  );
}

export default Skills;
