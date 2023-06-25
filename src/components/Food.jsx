import { FoodCard } from "@/components"

export function FoodIconsList({ foodList }) {
  return (
    <div className="grid gap-2 grid-cols-3 w-full">
      {foodList?.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          isSelected={false}
          size="sm"
          addShadow={true}
          addClassificationColors={true}
        />
      ))}
    </div>
  )
}
