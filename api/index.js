export default async function handler(req,res){
const b=req.body;if(!b?.message)return res.status(200).send('OK');
const t=process.env.BOT_TOKEN;const id=b.message.chat.id;let r="";
const txt=b.message.text||'';if(txt=='/start')r="Bienvenue sur VORAX CI Officiel !\n/menu - meilleurs voeux\n/end - finir";
else if(txt=='/menu')r="✨ MEILLEURS VOEUX DE VORAX CI ✨\nVORAX CI vous souhaite une excellente année !";
else if(txt=='/end')r="Merci d'avoir utilisé VORAX CI !";
else if(txt=='/help')r="/start /menu /end /help";else r="Tape /menu";
await fetch(`https://api.telegram.org/bot${t}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:id,text:r})});
return res.status(200).send('OK');}
