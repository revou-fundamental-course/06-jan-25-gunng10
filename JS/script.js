// Ini File Javascript

function replaceName() {
    let name = prompt ("Halo, siapakah nama anda", "");
    document.getElementById("user-greeting").innerHTML = name
}
    
document.getElementById('tombol').addEventListener("click", function() {
    replaceName();
})

function submitForm() {
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked')?.value;
    const pesan = document.getElementById('pesan').value;

    const currentTime = new Date().toLocaleString();
    document.getElementById('currentTime').textContent = currentTime;

    document.getElementById('outputNama').textContent = nama;
    document.getElementById('outputTanggalLahir').textContent = tanggalLahir;
    document.getElementById('outputJenisKelamin').textContent = jenisKelamin;
    document.getElementById('outputPesan').textContent = pesan;
}