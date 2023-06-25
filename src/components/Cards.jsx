import Image from "next/image"

const FOOD_CARD_PROPS = {
  sm: { id: "sm", size: "min-h-10 h-full", iconSize: 24 },
  md: { id: "md", size: "w-28 min-h-28 h-full", iconSize: 48 },
  lg: { id: "lg", size: "w-40 min-h-40 h-full", iconSize: 96 },
}

const DEFAULT_ICON = "default.png"

export function FoodCard({
  food,
  isSelected,
  size = FOOD_CARD_PROPS.md.id,
  addShadow = false,
}) {
  const { size: cardSize, iconSize } = FOOD_CARD_PROPS[size]
  const { name, icon: foodIcon } = food

  const classes = [
    "cursor-pointer flex flex-col gap-2 p-3 rounded-lg border-2 justify-center items-center aspect-square",
    isSelected ? "border-primary" : "border-text/10",
    addShadow ? "drop-shadow-2xl" : "",
    cardSize,
  ].join(" ")

  const icon = foodIcon || DEFAULT_ICON

  const iconProps = {
    src: `/food/${icon}`,
    width: iconSize,
    height: iconSize,
  }

  return (
    <article className={classes}>
      <Image {...iconProps} alt={name} />
      {size !== FOOD_CARD_PROPS.sm.id && <h3 className="text-text">{name}</h3>}
    </article>
  )
}
