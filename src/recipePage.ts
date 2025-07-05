import { recipes } from "./recipes.ts";

export function renderRecipePage(slug: string) {
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return;

  const container = document.getElementById("recipe-content");
  if (!container) return;

  container.innerHTML = `
    <div class="hero bg-base-200 min-h-[30vh]">
      <div class="hero-content flex flex-col items-center text-center w-full">
        <div class="max-w-md md:max-w-2xl lg:max-w-3xl">
          <h1 class="text-3xl md:text-5xl font-bold mb-4">${recipe.title}</h1>
          <p class="mb-2 text-base md:text-lg">${recipe.description}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center mt-8 px-2">
      <div class="card bg-base-100 w-80 sm:w-96 md:w-[32rem] lg:w-[36rem] shadow-md px-2 md:px-6 py-4">
        <figure class="pt-4"><img src="/team-project/${recipe.image}" alt="${recipe.alt}" class="rounded-xl w-full h-auto object-cover max-h-72" /></figure>
        <div class="card-body">
          <h2 class="card-title text-xl md:text-2xl">材料</h2>
          <ul class="list-disc list-inside mb-4 text-left text-base md:text-lg">
            ${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}
          </ul>
          <h2 class="card-title text-xl md:text-2xl">作り方</h2>
          <ol class="list-decimal list-inside mb-4 text-left text-base md:text-lg">
            ${recipe.steps.map((s) => `<li>${s}</li>`).join("")}
          </ol>
          ${
    recipe.points.length > 0
      ? `
            <h2 class="card-title text-xl md:text-2xl">ポイント</h2>
            <ul class="list-disc list-inside text-left text-base md:text-lg">
              ${recipe.points.map((p) => `<li>${p}</li>`).join("")}
            </ul>
          `
      : ""
  }
        </div>
      </div>
      <a href="../index.html" class="btn btn-outline m-6 w-full max-w-xs md:max-w-sm">← 一覧に戻る</a>
    </div>
  `;
}
