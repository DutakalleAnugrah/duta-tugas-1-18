// operator logika

// and,or,not

let data_bool = true;
console.log(data_bool);

// 1.not
console.log(!data_bool);
console.log(!!data_bool);
console.log(!1);
console.log(!0);

let is_keren = true;
let is_jelek = !is_keren

//2. OR  (operasi antara dua variebal boolean)
// A     true true false false
// B     true false true false
// Hasil true true true false

// A     1 1 0 0
// B     1 0 1 0
// Hasil 1 1 1 0

console.log(`true || true, Hasil = ${true || true}`);
console.log(`true || false, Hasil = ${true || false}`);
console.log(`false || true, Hasil = ${false || true}`);
console.log(`false || false, Hasil = ${false || false}`);

let makan = false;
let minum = false;

let sudah_menyatap = makan || minum;
console.log(`sudah menyantap = $(sudah_menyantap)`);

// 3. AND -> && (operasi antara dua variebel boolean)
// A        true true false false
// B        true false true false
// Hasil    true false false false

// A        1 1 0 0
// B        1 0 1 0
// Hasil    1 0 0 0

console.log(`true && true, Hasil =${true && true}`);
console.log(`true && false, Hasil =${true && false}`);
console.log(`false && true, Hasil =${false && true}`);
console.log(`false && false, Hasil =${false && false}`);

makan = true;
minum = true;

let sudah_makmin = makan && minum;
console.log(`sudah makan dan minum?= ${sudah_makmin}`);