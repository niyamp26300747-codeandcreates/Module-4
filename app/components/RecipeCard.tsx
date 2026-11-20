import type { Recipe } from "@/app/data/recipes";


export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-neutral-500">
          <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-orange-800">
            {recipe.cuisine}
          </span>
          <span>{recipe.minutes} min</span>
        </div>


        <h2 className="mb-2 text-lg font-semibold text-neutral-900">
          {recipe.title}
        </h2>


        <p className="text-sm leading-relaxed text-neutral-600">
          {recipe.description}
        </p>
      </div>


      <div className="mt-4 border-t border-neutral-100 pt-3 text-xs font-medium text-neutral-500">
        Difficulty: <span className="text-neutral-800">{recipe.difficulty}</span>
      </div>
    </article>
  );
};