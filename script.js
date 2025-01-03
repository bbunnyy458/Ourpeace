document.getElementById('hugBtn').addEventListener('click', function() {
  const tahani = document.getElementById('tahani');
  tahani.classList.add('hugging');
  setTimeout(() => tahani.classList.remove('hugging'), 1000);
});

document.getElementById('patBtn').addEventListener('click', function() {
  const yasir = document.getElementById('yasir');
  yasir.classList.add('patting');
  setTimeout(() => yasir.classList.remove('patting'), 500);
});

document.getElementById('kissBtn').addEventListener('click', function() {
  const tahani = document.getElementById('tahani');
  tahani.classList.add('kissing');
  setTimeout(() => tahani.classList.remove('kissing'), 700);
});

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
