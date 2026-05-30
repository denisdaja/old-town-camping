import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://oldtowncampingberat.com/sitemap.xml",
    host: "https://oldtowncampingberat.com",
  };
}
