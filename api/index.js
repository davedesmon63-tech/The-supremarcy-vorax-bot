export default async function handler(req, res) {
  const body = req.body;
  if (!body.message) return res.status(200).send('ok');
  
  const token = process.env.BOT_TOKEN;
  const chatId = body.message.chat.id;
  const text = body.message.text || '';

  let reply = "";

  if (text === '/start') {
    reply = "Bienvenue sur VORAX CI Officiel ! 🔥\n\n" +
            "Voici les commandes :\n" +
            "/menu - Voir le message de meilleurs vœux\n" +
            "/end - Finir\n" +
            "/help - Aide";
  } 
  else if (text === '/menu') {
    reply = "✨✨ MEILLEURS VŒUX DE VORAX CI ✨✨\n\n" +
            "VORAX CI vous souhaite une excellente année et beaucoup de prospérité !\n\n" +
            "Merci encore à vous pour votre confiance 🙏";
  } 
  else if (text === '/end') {
    reply = "Merci beaucoup d'avoir utilisé VORAX Bot ! 🙏\n\n" +
            "N'hésite pas à revenir, et passe une excellente journée ! A bientôt ! 👋";
  }
  else if (text === '/help') {
    reply = "Commandes disponibles :\n/start - Démarrer\n/menu - Meilleurs vœux\n/end - Merci et au revoir";
  }
  else {
    reply = "Je n'ai pas compris. Tape /menu pour voir les vœux ou /help pour l'aide.";
  }

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: reply })
  });

  return res.status(200).send('ok');
}
