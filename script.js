function kirimData(event) {
    event.preventDefault(); // Mencegah form submit default

    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\nAngkatan : " + angkatan +
        "\nTanggal : " + tanggal +
        "\nPeminatan : " + peminatan +
        "\nAlamat : " + alamat
    );
}
