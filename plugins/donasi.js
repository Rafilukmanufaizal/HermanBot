let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [6285600380823]
┣➥ *TELKOMSEL:* [6282153954737]
┣➥ *Dana:* [085600380823]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285600380823*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
