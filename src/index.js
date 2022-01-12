/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "佐々木",
//   age: "23"
// };
// val4.name = "sasaki"
// val4.address = "Mie";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 * ES2015で追加
 */
// const name = "ささき";
// const age = 24;
// // 「私の名前は佐々木です。年齢は24歳です。」

// // 従来の方法
// const message1 ="私の名前は" + name +"です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ささき",
//   age: 24
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile; //中身を取り出して名前を変更している
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列もオブジェクトと同様に分割代入を行うことが出来る。
// const myProfile = ['ささき', 24];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile; // 配列は順番で受け取る
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

// /**
//  * デフォルト値、引き数など
//  */
// const sayHello = (name = "ささき") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1); // 配列の中を順番に展開して処理してくれる

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); // 124行目と同じことをしている

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4]; // 全く同じ要素を持ったarr4を作る
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// この方法だと参照渡しをしてしまっているため、arr4の値も変わってしまう。
// なのでコピーする際はスプレッド構文を用いる方が良い。
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4);
