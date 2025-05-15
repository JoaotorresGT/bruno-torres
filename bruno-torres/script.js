const imagens = document.querySelectorAll('.estilo1');
  const modal = document.getElementById('modal');
  const imgExpandida = document.getElementById('imagem-expandida');
  const fechar = document.getElementById('fechar');

  imagens.forEach(img => {
    img.addEventListener('click', () => {
      imgExpandida.src = img.src;
      modal.style.display = 'flex';
    });
  });

  fechar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });