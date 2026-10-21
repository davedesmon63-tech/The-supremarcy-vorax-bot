export default async function handler(req, res) {
  const body = req.body;
  if (!body.message) return res.status(200).send('OK');

  const token = process.env.BOT_TOKEN;
  const chatId = body.message.chat.id;
  const text = body.message.text || '';

  let reply = "";

  if (text === '/start') {
    reply = "Bienvenue sur VORAX CI Officiel !\nVoici les commandes :\n/menu - Voir le message de meilleurs voeux\n/end - Finir\n/help - Aide";
  } else if (text === '/menu') {
    reply = "✨ MEILLEURS VŒUX DE VORAX CI ✨\nVORAX CI vous souhaite une excellente année !\nMerci encore à vous pour votre confiance.";
  } else if (text === '/end') {
    reply = "Merci beaucoup d'avoir utilisé VORAX CI !\nN'hésite pas à revenir, et passe une belle journée !";
  } else if (text === '/help') {
    reply = "Commandes disponibles :\n/start - Démarrer\n/menu - Meilleurs voeux\n/end - Finir\n/help - Aide";
  } else {
    reply = "Je n'ai pas compris. Tape /menu ou /help";
  }

  // C'EST ÇA QUI MANQUAIT - ENVOYER LA RÉPONSE
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: reply })
  });

  return res.status(200).send('OK');
}
