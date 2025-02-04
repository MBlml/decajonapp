const getChatbotResponse = (
  inputText: string,

  // Variables a utilizar para información del usuario
  userName: string,
  groupName: string,
  songName: string,
  songDetails: string,
  nextRehearsalDate: string,
  rehearsalSongs: string[],
  songStyle: string,
  eventDate: string

): string => {
  let botResponse = '¡Hola! ¿En qué puedo ayudarte?';

  if (inputText.toLowerCase().includes('hola')) {
    botResponse = '¡Hola! ¿En qué puedo ayudarte?';
  } else if (inputText.toLowerCase().includes('nombre')) {
    botResponse = `Tu nombre es ${userName}.`;
  } else if (inputText.toLowerCase().includes('grupo')) {
    botResponse = `Tu grupo es ${groupName}.`;
  } else if (inputText.toLowerCase().includes('canción')) {
    botResponse = `La canción ${songName} por ${songDetails}.`;
  } else if (inputText.toLowerCase().includes('próximo ensayo')) {
    botResponse = `El próximo ensayo es el ${nextRehearsalDate}.`;
  } else if (inputText.toLowerCase().includes('canciones') && inputText.toLowerCase().includes('ensayar')) {
    if (Array.isArray(rehearsalSongs)) {
      botResponse = `Las canciones que necesitas ensayar son: ${rehearsalSongs.join(', ')}.`;
    } else {
      botResponse = 'No se han definido las canciones para ensayar.';
    }
  } else if (inputText.toLowerCase().includes('estilo de canción')) {
    botResponse = `El estilo de la canción es ${songStyle}.`;
  } else if (inputText.toLowerCase().includes('evento')) {
    botResponse = `El próximo evento es el ${eventDate}.`;
  }

  return botResponse;
};

export default getChatbotResponse;