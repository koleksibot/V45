let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, Owner}) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
    let msgpenuh = (pickRandom(['staminamu sudah penuh', 'coba deh liat inv mu, staminamu kan dah 100 ngapai makan lagi?', 'stamina mu dah penuh woyy', 'ws kebek weh :v', 'staminamu dah penuh :v', 'udh weh, udh penuh']))
    let stamina = global.db.data.users[m.sender].stamina
    let kucing = global.db.data.users[m.sender].kucing
    let spertamina= (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
    const Kchat = `
Contoh penggunaan: *${usedPrefix}makan ayamg 1*\n\n
⚠️List Makanan:\n\n
ayamg
ayamb
leleb
`.trim()
    try {
        if (/makan|eat/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
                    case 'ayamg':
                            if (global.db.data.users[m.sender].stamina < 100) {
        	                if (global.db.data.users[m.sender].ayamg >= count * 1) {
                            global.db.data.users[m.sender].ayamg -= count * 1
                            global.db.data.users[m.sender].stamina += spertamina * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `Anda tidak memiliki ayam goreng` ,m)
                            } else conn.reply(m.chat, msgpenuh, m)
                            
                        break
              case 'pancing':
                        if (global.db.data.users[m.sender].stamina < 100) {
        	            if (global.db.data.users[m.sender].ayamb >= count * 1) {
                        global.db.data.users[m.sender].ayamb -= count * 1
                        global.db.data.users[m.sender].stamina += spertamina * count
                        conn.reply(m.chat, `Nyam nyam`, m)
                         } else conn.reply(m.chat, `Anda tidak memiliki ayam bakar` ,m)
                         } else conn.reply(m.chat, msgpenuh, m)
                    
                          break
                case 'diamond':
                          if (global.db.data.users[m.sender].stamina < 100) {
                          if (global.db.data.users[m.sender].leleb >= count * 1) {
                          global.db.data.users[m.sender].leleb -= count * 1
                          global.db.data.users[m.sender].stamina += spertamina * count
                          conn.reply(m.chat, `Nyam nyam`, m)
                          } else conn.reply(m.chat, `Anda tidak memiliki lele bakar` ,m)
                      	} else conn.reply(m.chat, msgpenuh, m)
                        
                          break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (Owner) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'rpg-makan.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['makan <args>', 'eat  <args>']
handler.tags = ['rpg']
handler.command = /^(makan|eat)$/i


module.exports = handler


function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]

}
