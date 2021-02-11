let cep = window.document.querySelector("#cep-value");
let modalOverlay = document.querySelector(".modal-overlay")
let button = window.document.querySelector("#button");


// INNERS HTML



let logradouro = document.querySelector('.logradouro')
let cepModal = window.document.querySelector(".cep");
let CidadeModal = window.document.querySelector(".localidade");
let uf = window.document.querySelector(".uf");
let bairro = window.document.querySelector(".bairro");
let ddd = window.document.querySelector(".ddd");

let complemento = window.document.querySelector(".complemento");

let icon = document.querySelector('.icon-close');


// ACTIONS
button.addEventListener('click',function(){
  var script = document.createElement('script');
  script.src = `https://viacep.com.br/ws/${cep.value}/json/?callback=retorno`
  document.body.appendChild(script)
  
})


icon.addEventListener("click",function(){
  modalOverlay.classList.remove("show-overlay")
})



//CALLBACKS
function retorno(resposta){

  if(!("erro" in resposta)){
    modalOverlay.classList.add("show-overlay")
  CidadeModal.innerHTML = resposta.localidade;
  logradouro.innerHTML = resposta.logradouro;
  uf.innerHTML = resposta.uf;
  ddd.innerHTML = resposta.ddd;
  bairro.innerHTML = resposta.bairro;
  complemento.innerHTML = resposta.complemento;
  }
  
  

}




