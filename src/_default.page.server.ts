import { escapeInject as html } from "vite-plugin-ssr";

export function render(): unknown {
  const documentHtml = html`
    <!DOCTYPE html>
    <html lang="en">
      <body></body>
    </html>
  `;

  return { documentHtml };
}
