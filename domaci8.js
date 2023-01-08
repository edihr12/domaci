/*1.	Izračunaj sumu svih parnih brojeva nekog proizvoljnog niza od minimalno 10 članova.

2.	Pronađi najmanji i najveći član niza i zbroji te brojeve, pa ako je zbroj manji od 10, ispiši "Zbroj je jednoznamenkast", a ako je veći od 10, ispiši taj broj 

3.	Iz niza stringova unijetih preko konzole, izbaci sve što nije voće 

4.	Napravi niz proizvoljnih podataka, pa iz tog niza izbaci sve članove koji nisu broj, te od tog dobijenog niza napravi novi niz koji je obrnutog redoslijeda

5.	Uz pomoć petlji, kreiraj ovakav ispis:
0123456789
012345678
01234567
0123456
012345
01234
0123
012
01
0 */

// 1 zadatak

var niz = [23, 45, 234, 22, 45, 67, 88, 99, 100, 1000];
let sum = 0;
for (const clan of niz) {
    if (clan % 2 === 0) {
        sum += clan;
    }
}
console.log(sum);

//2

let array = [1, 2, 3, 4, 5];

let max = array[0];
let min = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
    if (array[i] < min) {
        min = array[i];
    }
}

if (max + min < 10) {
    console.log("Zbroj je jednoznamenkast");
} else {
    console.log(max + min);
}

//3

let froot = process.argv.slice(2);
