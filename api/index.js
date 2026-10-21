export default async function handler(req) {
  const token = process.env.BOT_TOKEN;
  const body = await req.json();
  const chatId = body?.message?.chat?.id;
  const text = body?.message?.text;
  if (!chatId) return new Response('OK');
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      chat_id: chatId, 
      text: `RECU: ${text} -> Le bot marche enfin ! Tape /menu` 
    })
  });
  return new Response('OK');
}
