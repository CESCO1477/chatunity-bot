function handler(m, { text }) {
    if (!text) return m.reply(`🚩 Inserisci il tuo nome accanto al comando.`)
        let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
        m.reply(teks.replace(/[a-z]/gi, v => {
            return {
                'a': 'ka',
                'b': 'tsu',
                'c': 'mi',
                'd': 'te',
                'e': 'ku',
                'f': 'hi',
                'g': 'ji',
                'h': 'ri',
                'i': 'ki',
                'j': 'zu',
                'k': 'me',
                'l': 'ta',
                'm': 'rin',
                'n': 'to',
                'o': 'mo',
                'p': 'no',
                'q': 'ke',
                'r': 'shi',
                's': 'ari',
                't': 'chi',
                'u': 'do',
                'v': 'ru',
                'w': 'mei',
                'x': 'na',
                'y': 'fu',
                'z': 'mori'
            }[v.toLowerCase()] || v
        }))
    }
    handler.help = ['nomeninja *<texto>*']
    handler.tags = ['fun']
    handler.command = ['nomeninja']
    handler.register = true
    
    export default handler