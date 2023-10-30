let text = "xushnudbek"
// console.log(text.charAt(3)); bu xarfni sonini olib beradi
// console.log(text.concat("","dunyo")); malumot qoshib beradi
// console.log(text.startsWith("s")); text ni boolenni tekshiradi bosh xarfni
// console.log(text.endsWith("m")); text ni boolen ni tekshiradi oxirgi xarfni
// console.log(text.includes("m")); text ni ichida mashi xarf borligiga tekshiradi
// console.log(text.indexOf("d")); sanab beradi masalan d gacha 
// console.log(text.lastIndexOf("o")); 
// console.log(text.match(/[a-z]/)); bu kichik xarfni olib beradi
// console.log(text.match(/[A-Z]/)); bu katta xarfni olib beradi
// console.log(text.match(/[a-z]/g).join("")); kotta xarfni chopadi
// console.log(text.padStart(6,"Addd")); oldiga xarf qushadi lekin sonini aytib otiladi
// console.log(text.padEnd(6,"Addd")); oxiriga xarf qushadi lekin sonini aytib otiladi
// console.log(text.repeat(3)); bu sozni qaytarib berip turadi
// console.log(text.replace("xu","us")); chopati va boshqani quyadi
// console.log(text.search("salom")); bu leinght ni va qidirip beradi
// console.log(text.slice(0,3)); bu kesib beradi qayerdan qayergacha
// console.log(text.toLowerCase()); xammasini kichik xarfga ugurip beradi
// console.log(text.toUpperCase()); xammasini katta xarfga ugurip beradi
// console.log(text.trim()); bosh joyni chopadi
// console.log(text.trimEnd()); oxirida bosh joyni chopadi
// console.log(text.trimStart()); boshida bosh joyni chopadi
const  CapitaLize = text.charAt(0).toUpperCase() + text.slice(1)
console.log(CapitaLize);
