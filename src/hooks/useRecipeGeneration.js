import { FOOD_TIMES } from "@/constants"
import { sendMessage } from "@/pages/api/chatGPT"
import { toast } from "react-hot-toast"
import { useMutation } from "react-query"
import { useState } from "react"

export const useRecipeGeneration = () => {
  const [selectedFood, setSelectedFood] = useState([])
  const [selectedFoodTime, setSelectedFoodTime] = useState(FOOD_TIMES.breakfast)

  const {
    data: generatedRecipe,
    isLoading,
    isError,
    mutate: generateRecipe,
  } = useMutation({
    mutationFn: ({ selectedFood, foodTime } = {}) => {
      if (!selectedFood || !foodTime) {
        toast.error("No se seleccionó comida o tiempo de comida")
      }

      return sendMessage(selectedFood, foodTime)
    },
    onSuccess: (recipe) => {
      console.log({ recipe })
    },
    onError: (error) => {
      toast.error("Ocurrió un error al generar la receta")
      console.log({ error })
    },
  })

  const isRecipeGenerationDisabled = isLoading || selectedFood.length === 0

  const handleSelectFoodTime = (foodTime) => {
    setSelectedFoodTime(foodTime)
  }

  return {
    generatedRecipe,
    generateRecipe,
    handleSelectFoodTime,
    isError,
    isLoading,
    isRecipeGenerationDisabled,
    selectedFood,
    selectedFoodTime,
    setSelectedFood,
  }
}
