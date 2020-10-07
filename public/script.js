const table = document.querySelector('.table');


function remover(event) {
  event.preventDefault();
  const btn = event.target;
  if (btn.classList.contains('delete-btn')) {
    const url = btn.href;

    fetch(url, {
      method: 'DELETE'
    }).then((response) => {
      console.log(btn.parentNode.parentNode);
      btn.parentNode.parentNode.remove();
    })
  }
};

table.addEventListener('click', remover);