function qaytart<T>(qiymat: T): T {
  return qiymat;
}

const son = qaytart(10);
const nom = qaytart("Salom");
console.log(son);
console.log(nom);

function arrRevers<T, U>(arr: T[], arr1: U[]): T[] {
  return arr.reverse();
}

const sonlar = arrRevers([1, 2, 3, 4, 5], ["1", "2", "3", "4"]);
console.log(sonlar);

interface Juft<T, U, B> {
  birinchi: T;
  ikinci: U;
  uchinchi: B;
}

const juft: Juft<number, string, number> = {
  birinchi: 5,
  ikinci: "Salom",
  uchinchi: 12,
};
console.log(juft);

class Malumot<T> {
  constructor(public qiymat: T) {}
  display(): void {
    console.log(`Qiymat : ${this.qiymat}`);
  }
}

const malumot1 = new Malumot<string>("Salom");

malumot1.display();

const malumot2 = new Malumot<number>(10);

malumot2.display();


interface Uzunlik {
  length: number;
}

function uzunlikHisobot<T extends Uzunlik>(obj: T): void {
 console.log(obj.length);
 
}


uzunlikHisobot("Salom"); // Error
uzunlikHisobot([1,2,3,4,5])

function mapJuftlik <T, U> (arr3:T[], arr4:U[]): [T, U][] {
  return arr3.map((item, index) => [item, arr4[index]]);
} 

const sonlar2 = mapJuftlik([1, 2, 3, 4, 5], ["Salom", "Dunyo", "Olim aka", "Kola bomi","Eshmat aka"]);

console.log(sonlar2);

function uzunlikHisobot1<T extends Uzunlik>(obj: T): void {
  console.log(obj.length);
  
 }
 
 
 uzunlikHisobot("Salom"); // Error
 uzunlikHisobot([1,2,3,4,5])
 
 function mapJuftlik1 <T, U> (arr3:T[], arr4:U[]): [T, U][] {
   return arr3.map((item, index) => [item, arr4[index]]);
 } 
 
 const sonlar22 = mapJuftlik1([1, 2, 3, 4, 5], ["Salom", "Dunyo", "Olim aka", "Kola bomi","Eshmat aka"]);
 
 console.log(sonlar22);
