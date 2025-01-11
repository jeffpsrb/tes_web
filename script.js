document.getElementById('startButton').onclick = function() {
    document.getElementById('choiceSection').classList.remove('hidden');
    this.classList.add('hidden');
};

document.getElementById('yesButton').onclick = function() {
    document.getElementById('userResponse').value = "MAU!!";
    alert("Yay! dia MAU!!");
    document.getElementById('responseForm').submit(); // Mengirim formulir secara otomatis
};

document.getElementById('noButton').onclick = function() {
    document.getElementById('userResponse').value = "TIDAK!!";
    alert("yahhh, dia memilih TIDAK!!");
    document.getElementById('responseForm').submit(); // Mengirim formulir secara otomatis
};