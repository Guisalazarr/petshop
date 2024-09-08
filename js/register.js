const formRegister=  document.getElementById('formRegister')

// Função para ir para página home
function goToHome (){
  setTimeout(function() {
      window.location.href = './home.html'
    },2000);
}

const feedBackToastEl = document.getElementById("feedback-toast-register");
const feedBackToast = new bootstrap.Toast(feedBackToastEl);

// função para criar o alert
function createSuccess() {
  feedBackToastEl.classList.remove("text-bg-danger");
  feedBackToastEl.classList.add("text-bg-success");
  feedBackToastEl.innerHTML = "Usuário cadastrado com sucesso"
  feedBackToast.show();
  
}


// função para controlar o submit
formRegister.addEventListener('submit', function (event){
    event.preventDefault()


   createSuccess()
   goToHome()
})
