import axios from "axios"

export const sendMessage = async (selectedFood, foodTime) => {
  const EXAMPLE_RESPONSE = {
    name: "Pan de Amaranto y Avena",
    description:
      "Delicioso pan de amaranto y avena para un desayuno saludable.",
    ingredients: [
      "1/2 taza de amaranto",
      "1/2 taza de avena",
      "2 tazas de pan rallado",
    ],
    instructions: [
      "En un recipiente grande, mezcla el amaranto, la avena y el pan rallado.",
      "Añade suficiente agua para formar una masa homogénea.",
      "Forma pequeñas bolas con la masa y colócalas en una bandeja para hornear.",
      "Hornea a 180°C durante 20-25 minutos, hasta que estén doradas.",
      "Sirve caliente y disfruta de tu delicioso pan de amaranto y avena.",
    ],
  }

  const message = `Con los siguientes ingredientes: ${selectedFood
    .map((food) => food.name)
    .join(", ")} 
    Dime qué puedo cocinar. Debes especificar la cantidad exacta de ingredientes (ejemplo:
        ["1 taza de ingrediente1", "2 pieza de ingrediente 2"]) en una 
    sección y en la otra las instrucciones claras; devuélvemelos en un json. Los 
    ingredientes en un array y las instrucciones en otro array, las instrucciones dámelas 
    en orden pero sin numero y agrega un nombre a la receta. También quiero una descripción llamativa para la receta; sé creativo, ya que tendremos que despertar la atención y curiosidad del usuario. Además, la comida debe ser desayuno, comida o cena. En este caso, genera una receta para ${foodTime}.\n\nLa respuesta debe ser un json con el siguiente formato:\n\n${JSON.stringify(
    EXAMPLE_RESPONSE,
  )}`

  const url = "https://api.openai.com/v1/chat/completions"

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer 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`,
  }

  const data = {
    model: "gpt-3.5-turbo-0301",
    messages: [{ role: "user", content: message }],
  }

  return await axios
    .post(url, data, { headers: headers })
    .then((response) => {
      return response.data.choices[0].message.content
    })
    .catch((error) => {
      console.log(error)
    })
}
