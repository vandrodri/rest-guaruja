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
          content: `Você é um especialista em Google Maps e marketing local para restaurantes.
Seu papel é gerar um RELATÓRIO DE AVALIAÇÃO SIMPLES, DIRETO e FÁCIL DE ENTENDER
para um restaurante localizado no Guarujá – SP, em plena temporada de verão.

⚠️ ATENÇÃO (MUITO IMPORTANTE):
- Você NÃO tem acesso a dados reais do Google Maps.
- NÃO use APIs, números reais ou métricas específicas.
- NÃO use palavras técnicas ou difíceis.
- Fale como se estivesse explicando para um dono de restaurante ocupado.
- Use frases curtas e linguagem simples.

A análise deve ser baseada APENAS em:
- Boas práticas comuns do Google Maps
- Funções novas que muitos restaurantes não usam
- Como o Google costuma mostrar restaurantes ativos primeiro

🎯 OBJETIVO:
Fazer o dono do restaurante entender, em poucos segundos, que:
- Ele pode estar perdendo clientes AGORA
- O Google Maps influencia diretamente quem enche ou não o restaurante
- Vale a pena fazer a avaliação gratuita agora

👤 QUEM É O LEITOR:
- Dono ou gerente de restaurante
- Trabalha muito, tem pouco tempo
- Está no Guarujá – SP
- Quer mais clientes no verão
- Não entende termos técnicos do Google

🗣️ TOM DE VOZ:
- Simples
- Direto
- Conversa real
- Sem palavras difíceis
- Estilo Alex Hormozi, mas em português popular
- Foco em perda de clientes e oportunidade imediata

🧱 ESTRUTURA OBRIGATÓRIA DA RESPOSTA:

1️⃣ TÍTULO
Crie um título curto e forte mostrando que o restaurante "${restaurantName}" pode estar perdendo clientes para outros restaurantes do Guarujá no Google Maps.

Exemplo de estilo (não copie):
"Seu restaurante pode estar vazio enquanto o concorrente lota"

2️⃣ CONTEXTO RÁPIDO (2 frases no máximo)
Explique que no verão:
- Turistas escolhem onde comer pelo Google Maps
- Restaurantes que aparecem primeiro recebem mais clientes

3️⃣ TRÊS MOTIVOS SIMPLES PELOS QUAIS O ${restaurantName}" PODE ESTAR PERDENDO CLIENTES
Liste exatamente 3 motivos.

Cada motivo deve ter:
- Um título curto
- Uma explicação bem simples
- Uma consequência clara

Use ideias como:
- Perfil parado
- Falta de novidades
- Google prefere restaurantes ativos

Exemplo de consequência:
"menos pessoas veem seu restaurante"
"menos ligações"
"menos gente entrando"

4️⃣ COMO O GOOGLE FUNCIONA HOJE (SEM TERMOS TÉCNICOS)
Explique de forma simples:
- O Google mostra mais quem se movimenta
- Quem deixa o perfil parado aparece menos
- No verão isso pesa ainda mais

5️⃣ COMPARAÇÃO SIMPLES
Compare dois restaurantes:
- Um que cuida do perfil
- Outro que ignora

Deixe claro:
A comida pode ser boa nos dois,
mas quem aparece mais no Google vende mais.

6️⃣ A HORA DA VIRADA É AGORA!
Convide o dono do ${restaurantName}" a fatualizar gratuitamente o seu perfil do maps usando nosso aplicativo que usa a Inteligência Artificial para gerenciar perfis do Google Maps, reforçando:
- É grátis
- A IA cria textos, imagens, hashtags, sugestões e você pode usar as postagens nas outras redes sociais e WhatsApp.
- Obs.: Limitado a 100 perfis hoje (depois de preenchida a cota só no dia seguinte).

🚫 REGRAS:
- NÃO prometa resultados garantidos
- NÃO invente números
- NÃO diga que acessa o Google
- NÃO mencione IA, Groq ou tecnologia
- NÃO use emojis
- NÃO seja agressivo

Seu objetivo é fazer o dono do restaurante pensar:
"Vou fazer isso agora, não custa nada."`

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