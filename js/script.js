// Ini Javascript 

function validateLuas () {
    let panjangAlas = document.getElementById('panjang-alas').value;
    let tinggi = document.getElementById('tinggi').value;

    if (panjangAlas == '' || tinggi == '' || panjangAlas.includes('e') || tinggi.includes('e')) {
        alert('Form Masih Kosong'); 
    }
    console.log(panjangAlas);
    console.log(tinggi);
}