document.addEventListener("DOMContentLoaded", function() {
    askForUserData();
});

function askForUserData() {
    // Meminta nama pengguna
    var name = prompt("Masukkan nama Anda:");
    if (!name) {
        alert("Nama harus diisi");
        return;
    }

    // Meminta email pengguna
    var email = prompt("Masukkan email Anda:");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Email tidak valid");
        return;
    }

    // Meminta nomor telepon pengguna
    var phone = prompt("Masukkan nomor telepon Anda:");
    var phonePattern = /^[0-9]{10,13}$/;
    if (!phonePattern.test(phone)) {
        alert("Nomor telepon tidak valid");
        return;
    }

    // Meminta pesan pengguna
    var message = prompt("Masukkan pesan Anda:");
    if (!message) {
        alert("Pesan harus diisi");
        return;
    }

    // Menyimpan data ke dalam variabel
    var userData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // Menampilkan nama pengguna di sebelah teks "Hi"
    var greetingElement = document.getElementById("greeting");
    greetingElement.textContent += name;

    console.log("Data pengguna:", userData);
    alert("Selamat Datang");
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const currentTime = new Date().toString();


    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const genderElements = document.querySelectorAll('input[name="gender"]');
    let gender = '';
    for (const element of genderElements) {
        if (element.checked) {
            gender = element.value;
            break;
        }
    }


    console.log('Gender Elements:', genderElements);
    console.log('Gender Selected:', gender);

    const messageElement = document.getElementById('userMessage');
    console.log('Message Element:', messageElement); // Debugging log
    const message = messageElement ? messageElement.value : '';
    console.log('Message Value:', message); // Debugging log

    console.log('Nama:', name);
    console.log('Tanggal Lahir:', dob);
    console.log('Jenis Kelamin:', gender);
    console.log('Pesan:', message);

    if (!name || !dob || !gender || !message) {
        alert('Mohon isi semua bidang.');
        return;
    }

    document.getElementById('currentTime').innerHTML = `<strong>Current time:</strong> ${currentTime}`;
    document.getElementById('displayName').innerHTML = `<strong>Nama:</strong> ${name}`;
    document.getElementById('displayDob').innerHTML = `<strong>Tanggal Lahir:</strong> ${dob}`;
    document.getElementById('displayGender').innerHTML = `<strong>Jenis Kelamin:</strong> ${gender}`;
    document.getElementById('displayMessage').innerHTML = `<strong>Pesan:</strong> ${message}`;
});
