// No.2
let x = 0;

for (x; x <= 10; x++) {
  x += 2;
  console.log(x);
}

// No.3
let x = 0;
let y = 20;

for (x; x <= y; x++) {
  if (x % 2 == 0) {
    console.log("genap");
  } else {
    console.log("ganjil");
  }
}

// No.4
let count = 0;
let ulang = true;

while (ulang) {
  const tanya = confirm("Apakah Anda mau mengulang?");

  if (tanya) {
    count++;
  } else {
    ulang = false;
    alert(`Perulangan sudah dilakukan sebanyak ${count} kali`);
  }
}

// No.5
let x = " ";

do {
  x = prompt("Sebutkan kepanjangan dari nama IB ?");

  if (x === "Impact Byte") {
    console.log("Selamat jawaban kamu benar");
  }
} while (x !== "Impact Byte");
