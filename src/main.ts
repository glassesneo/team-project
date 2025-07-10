import { footerHTML, headerHTML } from "./components.ts";
import { recipes } from "./recipes.ts";

const header = document.getElementById("header");

if (header) {
  header.innerHTML = headerHTML;
}

const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = footerHTML;
}

const recipesContainer = document.getElementById("recipes");

if (recipesContainer) {
  recipesContainer.innerHTML = recipes
    .map(
      (recipe) => `
      <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-200">
        <figure class="p-4">
          <img src="/team-project/${recipe.image}" alt="${recipe.alt}" class="rounded-xl w-full h-48 object-cover" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-lg md:text-xl">${recipe.title}</h2>
          <a class="btn btn-primary btn-sm mt-2" href="/team-project/recipes/${recipe.slug}.html">詳しく見る</a>
        </div>
      </div>
    `,
    )
    .join("");
}

// const setInnerHTMLById = (id: string, innerHTML: string) => {
// const element = document.getElementById(id);
// if (element) {
// element.innerHTML = innerHTML;
// }
// };
// setInnerHTMLById("header", headerHTML);
// setInnerHTMLById("header", footerHTML);

// setInnerHTMLById(
// "recipes",
// recipes
// .map(
// (recipe) => `
// <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-200">
// <figure class="p-4">
// <img src="/team-project/${recipe.image}" alt="${recipe.alt}" class="rounded-xl w-full h-48 object-cover" />
// </figure>
// <div class="card-body items-center text-center">
// <h2 class="card-title text-lg md:text-xl">${recipe.title}</h2>
// <a class="btn btn-primary btn-sm mt-2" href="/team-project/recipes/${recipe.slug}.html">詳しく見る</a>
// </div>
// </div>
// `,
// )
// .join(""),
// );
