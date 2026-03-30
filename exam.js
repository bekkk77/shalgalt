// 1.б
// 2.В
// 3.Б
// 4.Б
// 5.В
// 6.a
// 7.в
// 8.а
// 2-р хэсэг
// 9.= = zowkhon utgiig hartsuulnaa.javaskript awtomaataar torliig huwirgaj
// baigaad utgiig shaalgaadag.
// = = = utga bolon ogogdliin torliig hoyuulang hartsuulna.
// toroln oor bol shuud falsee utga butsaana.
// 10.
// function addNumbers(a, b) {
//   return a + b;
// }
// let c = addNumbers(1, 2);
// console.log(c); // ur dun 3
// // 11.Callback функц гэдэг нь өөр нэг функц руу аргумент болгон дамжуулагдаж, тодорхой нөхцөл
// //  биелэх эсвэл үйлдэл дууссаны дараа дуудагддаг функцийг хэлнэ.
// function greet(name, callback) {
//   let string = "Sain uu? Nmaig " + name + "gdg";
//   callback(string);
// }
// function logGreet(string) {
//   console.log(string);
// }
// greet("Bek", logGreet);
// 12.map punkats massiwiin elemnt bur deer ogogdson uildliig guitsetgej.shine massiw usgeh .
// undesen massiw oorshildgui.
// zorilgoo: massiwiin  ogogdliig huwiirgah transform hiih.
// 13.for => dawtlgiin too todorhoi uiyd ashiglahaad tohiromjtoi. massiwiin urtiin daguu ashiglnaa.
// while => dawtalt hedeen udaa hiigdehn todrhogui.harin negn nogsold byelj baih
// hugtsaand urgeljuuleh shaardlagtai uyd ashiglnaa.
// 14.filtern massiwiin elementuudees todorhoy nokhtsliig hangasan elmntuudiig shuuj,
// shine massiw uusgedeg.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = numbers.filter((num) => num % 2 !== 0);
// console.log(oddNumbers);
// [1, 3, 5, 7, 9];
// 15.function countVowels(str) {
const vowels = "aeiouAEIOU";
let count = 0;

for (let char of str) {
  if (vowels.includes(char)) {
    count++;
  }
}

return count;
console.log(hello);
