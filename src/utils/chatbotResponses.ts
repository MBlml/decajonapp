export const getChatbotResponse = (
  inputText: string,
  userName: string,
  groupName: string,
  songName: string,
  songDetails: string
): string => {
  let botResponse = '¡Hola! ¿En qué puedo ayudarte?';

  if (inputText.toLowerCase().includes('nombre')) {
    botResponse = `Tu nombre es ${userName}.`;
  } else if (inputText.toLowerCase().includes('grupo')) {
    botResponse = `Tu grupo es ${groupName}.`;
  } else if (inputText.toLowerCase().includes('canción')) {
    botResponse = `La canción es ${songName} por ${songDetails}.`;
  }

  return botResponse;
};