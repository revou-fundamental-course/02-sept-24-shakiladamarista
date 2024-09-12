
function hitungLuas() {
    let alas = parseFloat(document.getElementById('alas').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);

   
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        document.getElementById('hasil-luas').innerHTML = "Alas dan tinggi harus diisi dengan angka yang valid!";
        return;
    }

    
    let luas = 0.5 * alas * tinggi;

    
    document.getElementById('hasil-luas').innerHTML = `Luas Segitiga: ${luas}`;
}


function hitungKeliling() {
    let sisi1 = parseFloat(document.getElementById('sisi1').value);
    let sisi2 = parseFloat(document.getElementById('sisi2').value);
    let sisi3 = parseFloat(document.getElementById('sisi3').value);

  
    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) || sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        document.getElementById('hasil-keliling').innerHTML = "Semua sisi harus diisi dengan angka yang valid!";
        return;
    }

    if ((sisi1 + sisi2 <= sisi3) || (sisi1 + sisi3 <= sisi2) || (sisi2 + sisi3 <= sisi1)) {
        document.getElementById('hasil-keliling').innerHTML = "Nilai sisi-sisi tidak valid untuk membentuk segitiga!";
        return;
    }

   
    let keliling = sisi1 + sisi2 + sisi3;

    
    document.getElementById('hasil-keliling').innerHTML = `Keliling Segitiga: ${keliling}`;
}
