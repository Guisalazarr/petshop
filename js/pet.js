
// Função para ir para página de agendamentos
function goToAppointment() {
  setTimeout(function () {
    window.location.href = './appointment.html'
  }, 2000);
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

const formPet = document.getElementById('formPet')

// função para controlar o submit
formPet.addEventListener('submit', function (event) {
  event.preventDefault()

  createPet()
  createSuccess()
  //goToAppointment()
})


const createPet = () => {
  const name = document.getElementById('namePet').value
  const type = document.getElementById('type').value
  const race = document.getElementById('breed').value
  const temperament = document.getElementById('temperament').value

  const pet = { name, type, race, temperament }

  postPet(pet)

}


const postPet = async (data) => {
  const id = 'c3bc69d6-00db-4268-8039-dc6505a22f93'
  const url = `http://localhost:3333/user/${id}/pet`

  const request = new Request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  try {
    await fetch(request);

  } catch (error) {
    console.error("Error:", error.message);
  }
}



