interface PageContext {
  Page: () => Element;
}

export async function render(pageContext: PageContext): Promise<void> {
  const page = pageContext.Page();

  document.body.replaceChildren(page);
}
