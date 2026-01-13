let dataString = "abcdef"
let dataChar = dataString.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`character pada index 5 = ${dataChar}`);

//2. menyaambung string
let namaDepan = "jacub";
let namaBelakang = "hanma";

let namaLengkap = namaDepan.concat(' ',namaBelakang,' si keren');
console.log(namaLengkap);

// 3. mengambil index
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('c'));
console.log(namaLengkap.indexOf('j'));
console.log(namaLengkap.indexOf('a'));

// 4 substring 
let namaLengkap_5_12 = namaLengkap.substring(5,12);
console.log(namaLengkap_5_12)
console.log(namaLengkap.substring(12,6));


// 5. slice
console.log(namaLengkap.slice(5,12));
console.log(namaLengkap.slice(12,5));  // menjadi kosong

// 6. replace
namaLengkap = namaLengkap.replace('jacub hanma','mirai kae');
console.log(namaLengkap);

// 7.tolower
console.log(namaLengkap.toUpperCase());
console.log(namaLengkap.toUpperCase());

// extrack data number
let dataString2 = '10';
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

// let dataString
let dataString3 = '10,125'
console.log(typeof dataString3)
let dataFloat = parseFloat(dataString3)
console.log(dataFloat);
console.log(typeof dataFloaf);