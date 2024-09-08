
// função para ir para home.
function goToIndex (){
    setTimeout(function() {
        window.location.href = './index.html'
      },2000);
 }

 // função para limpar o localstorage
 function clearLocalStorage(){
    localStorage.clear();
    createSuccess('Serviço removido com sucesso');
    setTimeout(function() {
        window.location.reload(true);
      },2000);
    
}

// função para criar o alert de sucesso
function createSuccess(msg) {
    feedBackToastEl.classList.remove("text-bg-danger");
    feedBackToastEl.classList.add("text-bg-success");
    feedBackToastEl.innerHTML = msg
    feedBackToast.show();
}


// função para criar o alert de erro
function showDanger(){
    feedBackToastEl.classList.remove("text-bg-success");
    feedBackToastEl.classList.add("text-bg-danger");
    feedBackToastEl.innerHTML = "Adicione um serviço"
    feedBackToast.show();
 }


 // função para buscar os dados no localStorage
function getData(){
    const data = localStorage.getItem('appoinment')
    const appoinment = JSON.parse(data)

    if(appoinment){
        document.getElementById('appoinmentTitle').innerText = appoinment.title
        document.getElementById('appoinmentImage').src = appoinment.image
        document.getElementById('valueAppointment').innerText = 'R$ ' + appoinment.value    
        document.getElementById('appoinmentButtonAdd').innerText = 'Alterar'
        document.getElementById('appoinmentButtonDelete').removeAttribute('disabled')
    }
}

getData()

 const feedBackToastEl = document.getElementById("feedback-toast");
 const feedBackToast = new bootstrap.Toast(feedBackToastEl);
 const formAppoimente = document.getElementById('formAppoimente')


 // controla o submit
 formAppoimente.addEventListener('submit', function (event){
  event.preventDefault()

  const value = document.getElementById('valueAppointment').innerText

  if(value === 'R$ 0,00'){
    showDanger()

  }else{
    createSuccess('Serviço agendado com successo')
    goToIndex()
  
    localStorage.clear()
  }  
})