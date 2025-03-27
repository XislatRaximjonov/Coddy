"use strict";
function qaytart(qiymat) {
    return qiymat;
}
const son = qaytart(10);
const nom = qaytart("Salom");
console.log(son);
console.log(nom);
function arrRevers(arr, arr1) {
    return arr.reverse();
}
const sonlar = arrRevers([1, 2, 3, 4, 5], ["1", "2", "3", "4"]);
console.log(sonlar);
const juft = {
    birinchi: 5,
    ikinci: "Salom",
    uchinchi: 12,
};
console.log(juft);
class Malumot {
    constructor(qiymat) {
        this.qiymat = qiymat;
    }
    display() {
        console.log(`Qiymat : ${this.qiymat}`);
    }
}
const malumot1 = new Malumot("Salom");
malumot1.display();
const malumot2 = new Malumot(10);
malumot2.display();
function uzunlikHisobot(obj) {
    console.log(obj.length);
}
uzunlikHisobot("Salom"); // Error
uzunlikHisobot([1, 2, 3, 4, 5]);
function mapJuftlik(arr3, arr4) {
    return arr3.map((item, index) => [item, arr4[index]]);
}
const sonlar2 = mapJuftlik([1, 2, 3, 4, 5], ["Salom", "Dunyo", "Olim aka", "Kola bomi", "Eshmat aka"]);
console.log(sonlar2);
//# sourceMappingURL=index.js.map