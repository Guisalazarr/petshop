
// função para salvar os dados de agendamento no LocalStorage
function appointmentService (value, image, title){
    const appoinment = JSON.stringify({value,image,title})
    localStorage.setItem('appoinment', appoinment)
    goToPet()
}

// função para ir até a página de PET
 function goToPet (){
    setTimeout(function() {
        window.location.replace("./pet.html");
      }, 1000);
 }


