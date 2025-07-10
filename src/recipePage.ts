import { footerHTML, headerHTML } from "./components.ts";
import { recipes } from "./recipes.ts";

export function renderRecipePage(slug: string) {
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return;

  const container = document.getElementById("recipe-content");
  if (!container) return;

  container.innerHTML = `
    ${headerHTML}
    <div class="hero bg-primary text-primary-content min-h-[30vh] rounded-b-3xl shadow-xl">
      <div class="hero-content flex flex-col items-center text-center w-full">
        <div class="max-w-md md:max-w-2xl lg:max-w-3xl">
          <h1 class="text-3xl md:text-5xl font-bold mb-4">${recipe.title}</h1>
          <div class="divider divider-secondary"></div>
          <p class="mb-4 text-base md:text-lg">${recipe.description}</p>
          <div class="badge badge-accent badge-lg">時短レシピ</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center mt-8 px-4">
      <div class="card bg-base-100 w-80 sm:w-96 md:w-[32rem] lg:w-[36rem] shadow-xl px-2 md:px-6 py-4 hover:shadow-2xl transition-all duration-300">
        <figure class="pt-4">
          <img src="/team-project/${recipe.image}" alt="${recipe.alt}" class="rounded-xl w-full h-auto object-cover max-h-72" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-xl md:text-2xl text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            材料
          </h2>
          <ul class="list-disc list-inside mb-4 text-left text-base md:text-lg space-y-1">
            ${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}
          </ul>
          <div class="divider"></div>
          <h2 class="card-title text-xl md:text-2xl text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            作り方
          </h2>
          <ol class="list-decimal list-inside mb-4 text-left text-base md:text-lg space-y-2">
            ${
    recipe.steps.map((s, idx) =>
      `<li class="p-2 ${
        idx % 2 === 0 ? "bg-base-200" : ""
      } rounded-lg">${s}</li>`
    ).join("")
  }
          </ol>
          ${
    recipe.points.length > 0
      ? `
            <div class="divider"></div>
            <h2 class="card-title text-xl md:text-2xl text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
              ポイント
            </h2>
            <div class="bg-accent/10 p-4 rounded-lg">
            <ul class="list-disc list-inside text-left text-base md:text-lg space-y-1">
              ${
        recipe.points.map((p) => `<li class="text-accent-content">${p}</li>`)
          .join("")
      }
            </ul>
            </div>
          `
      : ""
  }
        </div>
      </div>
      <a href="../index.html" class="btn btn-outline btn-primary m-6 w-full max-w-xs md:max-w-sm gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
        一覧に戻る
      </a>
    </div>
    ${footerHTML}
  `;
}
