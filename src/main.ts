import { footerHTML, headerHTML } from "./components.ts";
import { recipes } from "./recipes.ts";

const setInnerHTMLById = (id: string, innerHTML: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = innerHTML;
  }
};
setInnerHTMLById("header", headerHTML);
setInnerHTMLById("footer", footerHTML);

function getColorClass(index: number): string {
  const colors = [
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
  ];
  return colors[index % colors.length];
}

function getTimeBadge(recipe: any): string {
  if (recipe.description.includes("5分")) return "5分";
  return "時短";
}

function getShortDescription(recipe: any): string {
  // Extract first part of description before period or limit to 30 chars
  return recipe.description.split("。")[0].substring(0, 30) +
    (recipe.description.length > 30 ? "..." : "");
}

setInnerHTMLById(
  "recipes",
  recipes
    .map(
      (recipe, index) => `
      <div class="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
        <figure class="px-4 pt-4">
          <img src="/team-project/${recipe.image}" alt="${recipe.alt}" class="rounded-xl w-full h-48 object-cover" />
          <div class="badge badge-${
        getColorClass(index)
      } absolute top-6 right-6 p-3 font-bold">${getTimeBadge(recipe)}</div>
        </figure>
        <div class="card-body items-center text-center gap-2">
          <h2 class="card-title text-lg md:text-xl font-bold">${recipe.title}</h2>
          <p class="text-sm text-base-content/70">${
        getShortDescription(recipe)
      }</p>
          <div class="card-actions justify-center mt-1">
            <a class="btn btn-primary btn-sm" href="/team-project/recipes/${recipe.slug}.html">詳しく見る</a>
          </div>
        </div>
      </div>
`,
    )
    .join(""),
  // Helper functions for recipe cards
);
