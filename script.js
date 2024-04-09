// Função para recuperar e atualizar o número de visitas
function updateVisitCount() {
    let count = localStorage.getItem('visitCount');
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('visitCount', count);
    document.getElementById('visitCount').textContent = count;
  }
  
  // Chamada da função ao carregar a página
  window.onload = function() {
    updateVisitCount();
  };
  