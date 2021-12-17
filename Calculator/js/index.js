
function insert(num) {
  var numero = document.getElementById('input').innerHTML
  document.getElementById('input').innerHTML = numero + num
}
function clean(){
  document.getElementById('input').innerHTML = ""
}

function calcular(){
  var resultado = document.getElementById('input').innerHTML

  if(resultado){
    document.getElementById('input').innerHTML = eval(resultado)
  }
}




