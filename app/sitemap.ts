import type { MetadataRoute } from "next";
import projects from "../lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://andordavoti.com/project/${project.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: "https://andordavoti.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...urls,
  ];
}
