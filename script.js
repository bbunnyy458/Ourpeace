document.getElementById("hugBtn").addEventListener("click", function() {
  document.getElementById("comfortAnimation").innerHTML = "<p>🤗 Virtual Hug for Yasir! 🤗</p>";
});

document.getElementById("patBtn").addEventListener("click", function() {
  document.getElementById("comfortAnimation").innerHTML = "<p>👏 Virtual Pat for Yasir! 👏</p>";
});

document.getElementById("peckBtn").addEventListener("click", function() {
  document.getElementById("comfortAnimation").innerHTML = "<p>💋 Virtual Peck for Yasir! 💋</p>";
});

document.getElementById("swayBtn").addEventListener("click", function() {
  document.getElementById("comfortAnimation").innerHTML = "<p>💃 Virtual Sway for Yasir! 💃</p>";
});

// Hug button functionality
document.getElementById('hugBtn').addEventListener('click', function() {
  const tahani = document.getElementById('tahani');
  tahani.classList.add('hugging');
  setTimeout(() => tahani.classList.remove('hugging'), 1000);
});

// Pat button functionality
document.getElementById('patBtn').addEventListener('click', function() {
  const yasir = document.getElementById('yasir');
  yasir.classList.add('patting');
  setTimeout(() => yasir.classList.remove('patting'), 500);
});

// Kiss button functionality
document.getElementById('kissBtn').addEventListener('click', function() {
  const tahani = document.getElementById('tahani');
  tahani.classList.add('kissing');
  setTimeout(() => tahani.classList.remove('kissing'), 700);
});

// Peck button functionality
document.getElementById('patBtn').addEventListener('click', function() {
  const tahani = document.getElementById('tahani');
  tahani.classList.add('pecking');
  setTimeout(() => tahani.classList.remove('pecking'), 300);
});

// Sway button functionality
document.getElementById('swayBtn').addEventListener('click', function() {
  const tahani = document.getElementById('tahani');
  const yasir = document.getElementById('yasir');
  tahani.classList.add('swaying');
  yasir.classList.add('swaying');
  setTimeout(() => {
    tahani.classList.remove('swaying');
    yasir.classList.remove('swaying');
  }, 1000);
});
