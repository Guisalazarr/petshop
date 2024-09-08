
// Função para ir para página de agendamentos
function goToAppointment (){
  setTimeout(function() {
      window.location.href = './appointment.html'
    },2000);
}

const feedBackToastEl = document.getElementById("feedback-toast-pet");
const feedBackToast = new bootstrap.Toast(feedBackToastEl);

// função para criar o alert
function createSuccess() {
  feedBackToastEl.classList.remove("text-bg-danger");
  feedBackToastEl.classList.add("text-bg-success");
  feedBackToastEl.innerHTML = "Pet cadastrado com sucesso"
  feedBackToast.show();
  
}

const formPet =  document.getElementById('formPet')

// função para controlar o submit
  formPet.addEventListener('submit', function (event){
    event.preventDefault()


   createSuccess()
   goToAppointment()
})
