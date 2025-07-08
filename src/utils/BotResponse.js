export const getBotReply = (text) => {
  const lower = text.toLowerCase();

  if (lower.includes("hola")) return "¡Hola! ¿Cómo estás?";
  if (lower.includes("chau")) return "Chau, hablamos despues";
  if (lower.includes("hora")) return `Son las ${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })}`;
  if (lower.includes("como estas?")) return "Bien, ¿y vos?";
  if (lower.includes("bien")) return "¡Buenisimo, me alegro!";
  if (lower.includes("nos juntamos hoy")) return "¡Si, dale! ¿a que hora?";
  if (lower.includes("a las ")) return "Me parece perfecto, nos vemos ahí.";
  if (lower.includes("como te llamas")) return "jajajaja, ya sabes mi nombre, es broma?";
  if (lower.includes("si")) return "Ok";
  if (lower.includes("no")) return "Ok";
  if (lower.includes("dale")) return "Ok, excelente. Un Abrazo";
  return "Interesante... contame más";
};
