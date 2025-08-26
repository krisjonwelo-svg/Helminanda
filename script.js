// Efek animasi ucapan 
const greetingText = "SELAMAT ULANG TAHUN";

let i = 0;

function typeWriter() {
    if (i <greetingText.length) {
        document.getElementById("greeting").innerHTML += greetingText.chartAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }

}