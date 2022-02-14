export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "modules/foundry-factory-demo-github/templates"
  ];

  return loadTemplates(templatePaths);
}
