import { render as renderPage } from "../render";

export function Page(): Element {
  const posts = import.meta.glob("../posts/*.ts", {
    import: "title",
    eager: true,
  });

  console.log(posts);

  const title = document.createElement("h1");
  title.innerHTML = "hello world";

  return title;
}
