// Este es un servicio simulado para conectar con un modelo LLM
// En una implementación real, aquí se conectaría con la API del modelo

export type LLMResponse = {
  text: string
  id: string
}

export async function sendMessageToLLM(message: string): Promise<LLMResponse> {
  // Simulamos una respuesta del modelo LLM con un retraso
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        text: `Respuesta simulada del modelo LLM a: "${message}"`,
        id: Date.now().toString(),
      })
    }, 1000)
  })
}
