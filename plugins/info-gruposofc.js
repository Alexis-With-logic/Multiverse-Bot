let media = './galerΓ­a/grupos-oficiales.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*π·πΎπ»π° ππππ°ππΈπΎ ππ», ππ΄ πΈπ½ππΈππΎ π° ππ½πΈπππ΄ π° π»πΎπ πΆπππΏπΎπ πΎπ΅πΈπ²πΈπ°π»π΄π π³π΄ β πβπΊπβ―ππβ―π΅παͺ£π­β―πΉβ―πβ€ πΏπ°ππ° π²πΎπ½ππΈππΈπ π²πΎπ½ π»π° π²πΎπΌππ½πΈπ³π°π³ :D*

*β€ πΆπππππ πππππππππ πππ π±ππ:*
*1.-* https://chat.whatsapp.com/LlAbJM659dOBVJnxOIMl9h

*2._* https://chat.whatsapp.com/FxlQJ4A3tOjGx2Qu3BITfb

*3._* https://chat.whatsapp.com/JjO8d79Y6x85Lb9AVJTacg

*4._* https://chat.whatsapp.com/GzSa1szOscjCZS4jBPBvtG

*5._* https://chat.whatsapp.com/KMOHXtuV8A594uS8fVq0v9

*6._* https://chat.whatsapp.com/LEMnxt8sApu9HeBbpxI50w

`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
