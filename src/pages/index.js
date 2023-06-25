import {
  FoodCard,
  Title,
  Text,
  SectionHeader,
  Section,
  SectionTitle,
  Tab,
  Tabs,
} from "@/components"
import { getFood } from "./api/firebase"
import { useState } from "react"
import { FoodGeneratorIcon } from "@/components/Icons"
import { sendMessage } from "./api/chatGPT"

const FOOD_TYPES = {
  good: {
    order: 0,
    name: "good",
    title: "Consumo diario",
    description:
      "Disfruta de una dieta balanceada, con alimentos de consumo diario.",
    color: "#28BC63",
  },
  moderate: {
    order: 1,
    name: "moderate",
    title: "Consumo moderado",
    description: "Disfruta estos alimentos de 2 - 3 veces por semana",
    color: "#F0A535",
  },
  bad: {
    order: 2,
    name: "bad",
    title: "Consumo limitado",
    description:
      "Recomendamos que disfrutes de estos alimentos 1 vez por semana.",
    color: "#DC2A2A",
  },
}

const FOOD_TIMES = {
  breakfast: {
    order: 0,
    name: "breakfast",
    title: "Desayuno",
  },
  lunch: {
    order: 1,
    name: "lunch",
    title: "Comida",
  },
  dinner: {
    order: 2,
    name: "dinner",
    title: "Cena",
  },
}

function FoodList({ classification, foodList, selectedFood, setSelectedFood }) {
  const { title, description, color } = FOOD_TYPES[classification]

  const toggleSelectedFood = (selectedFood, food) => {
    console.log({ selectedFood, food })

    const isFoodSelected = selectedFood.some(
      (currentFood) => currentFood.id === food.id,
    )

    if (isFoodSelected) {
      return selectedFood.filter((currentFood) => currentFood.id !== food.id)
    }

    return [...selectedFood, food]
  }

  const handleSelectFood = (food) => {
    setSelectedFood((selectedFood) => toggleSelectedFood(selectedFood, food))
  }

  return (
    <Section>
      <SectionHeader>
        <div className="flex gap-2 items-center">
          <span
            className="w-5 h-5 aspect-square rounded inline-block"
            style={{
              backgroundColor: color,
            }}
          />
          <SectionTitle>{title}</SectionTitle>
        </div>
        <Text>{description}</Text>
      </SectionHeader>

      <div className="flex gap-2 flex-wrap">
        {foodList.map((currentFood) => (
          <button
            key={currentFood.id}
            onClick={() => handleSelectFood(currentFood)}
          >
            <FoodCard
              food={currentFood}
              isSelected={selectedFood.some(
                (selected) => selected?.id === currentFood?.id,
              )}
            />
          </button>
        ))}
      </div>
    </Section>
  )
}

export default function Home({ categorizedFood }) {
  const [selectedFood, setSelectedFood] = useState([])
  const [selectedFoodTime, setSelectedFoodTime] = useState(FOOD_TIMES.breakfast)

  const [isGeneratingRecipe, setIsGeneratingRecipe] = useState(false)

  const generateRecipe = (selectedFood) => {
    console.log({ selectedFood })
    new Promise((resolve) => {
      setIsGeneratingRecipe(true)
      setTimeout(() => {
        setIsGeneratingRecipe(false)
        resolve()
      }, 1000)
    })

    sendMessage(selectedFood, selectedFoodTime.name)
      .then((response) => {
        console.log({ res: JSON.parse(response) })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const isRecipeGenerationDisabled =
    isGeneratingRecipe || selectedFood.length === 0

  const handleSelectFoodTime = (foodTime) => {
    console.log({ foodTime })
    setSelectedFoodTime(foodTime)
  }

  return (
    <>
      <section className="flex flex-col gap-12">
        <SectionHeader>
          <Title>Generador de recetas</Title>
          <Text>
            Disfruta de comidas personalizadas con ingredientes en casa.
            Selecciónalos, elige el tipo y deléitate.
          </Text>

          <p
            className={`text-xs ${
              selectedFood.length > 0 ? "text-primary" : "text-secondary"
            }`}
          >
            <b>{`${selectedFood.length} `}</b>
            alimentos seleccionados.
          </p>
        </SectionHeader>

        <button
          onClick={() => generateRecipe(selectedFood)}
          className={`flex flex-col gap-1 items-center justify-center mx-auto  ${
            isRecipeGenerationDisabled ? "text-secondary/50" : "text-primary"
          }`}
          disabled={isRecipeGenerationDisabled}
        >
          <div
            className={`transition-all ${
              !isRecipeGenerationDisabled && "hover:rotate-12"
            }`}
          >
            <FoodGeneratorIcon size={96} />
          </div>
          <span className="text-sm font-semibold">Generar</span>
        </button>

        <Tabs>
          {Object.values(FOOD_TIMES).map(({ name, title }) => (
            <Tab
              key={name}
              onClick={() => handleSelectFoodTime(FOOD_TIMES[name])}
              isSelected={selectedFoodTime.name.localeCompare(name) === 0}
            >
              {title}
            </Tab>
          ))}
        </Tabs>
      </section>

      {Object.entries(categorizedFood).map(
        ([classification, foodList], index) => {
          const props = {
            classification,
            foodList,
            selectedFood,
            setSelectedFood,
          }

          return <FoodList key={index} {...props} />
        },
      )}
    </>
  )
}

export const getServerSideProps = async () => {
  const food = await getFood()

  const categorizedFood = food.reduce((acc, current) => {
    const { classification } = current

    if (!acc[classification]) {
      acc[classification] = []
    }

    acc[classification].push(current)

    return acc
  }, {})

  const orderedCategorizedFood = Object.fromEntries(
    Object.entries(categorizedFood).sort(
      ([classificationA], [classificationB]) => {
        const { order: orderA } = FOOD_TYPES[classificationA]
        const { order: orderB } = FOOD_TYPES[classificationB]

        return orderA - orderB
      },
    ),
  )

  console.log({ food, orderedCategorizedFood })

  return { props: { food, categorizedFood: orderedCategorizedFood } }
}
