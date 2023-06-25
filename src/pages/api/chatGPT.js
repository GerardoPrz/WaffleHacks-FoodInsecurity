import axios from "axios"

export const sendMessage = (selectedFood) => {
    const message = 
    `Con los siguientes ingredientes: ${selectedFood.map((food) => food.name).join(", ")} 
    Dime que puedo cocinar, debes especificar la cantidad extacta de ingredientes (ejemplo:
        ["1 taza de ingrediente1", "2 pieza de ingrediente 2"]) en una 
    seccion y en la otra las instrucciones claras, devuelvemelos en un json, los 
    ingredientes en un array y las instrucciones en otro array, las instrucciones damelas 
    en orden pero sin numero y agrega un nombre a la receta`;

    const url = "https://api.openai.com/v1/chat/completions"

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    }

    const data = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: message }],
    }
    

    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        return response.data.choices[0].message.content;
      })
      .catch((error) => {
        console.log(error)
      })
  }