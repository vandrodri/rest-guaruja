import Groq from "groq-sdk";

// Usaremos variáveis de ambiente para segurança
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Necessário para rodar no front-end
});

export async function analyzeRestaurantPresence(restaurantName: string): Promise<string> {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Aja como um ESTRATEGISTA SÊNIOR DE SEO LOCAL. 
          Gere um relatório para o restaurante "${restaurantName}" em Guarujá. 
          Use APENAS TEXTO PURO, sem negritos ou hashtags. 
          Destaque títulos com LETRAS MAIÚSCULAS.
          Foque em SEO Local, CTR no mapa e micro-momentos.`
        }
      ],
      model: "llama-3.3-70b-versatile",
    });

    return chatCompletion.choices[0]?.message?.content || "Erro ao gerar análise.";
  } catch (error) {
    console.error("Erro na IA:", error);
    return "Desculpe, não conseguimos processar sua análise agora.";
  }
}