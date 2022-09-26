let potencia = 0
let dias = 0
let hora = 0
const precoKwh = 0.75
let consumoMensal = 0.0


const botaoConsumo = document.getElementById('botaoConsumo')

function calcularConsumo(){
 let potenciaWattsjs = document.getElementById('potenciaWatts')
 let diasjs = document.getElementById('dias')
 let horasjs = document.getElementById('horas')
 let consumoMensal = document.getElementById('consumo')

potenciaWattsjs = potenciaWattsjs.value
diasjs = diasjs.value
horasjs = horasjs.value

 if (potenciaWattsjs > 1) {
  consumo = (((potenciaWattsjs * diasjs * horasjs) / 1000) * 0.75).toFixed(2)
  if(consumo > 100 && consumo < 200) consumoMensal.innerHTML = consumo  + 5;
  if(consumo > 200 && consumo < 300) consumoMensal.innerHTML = consumo  + 10;
  if(consumo > 300 && consumo < 400) consumoMensal.innerHTML = consumo  + 15;
  if(consumo > 400 && consumo < 500) consumoMensal.innerHTML = consumo  + 20;
  if(consumo > 500) consumoMensal.innerHTML = consumo  + 25;
  consumoMensal.innerHTML = consumo 
  
 }
 cadastrar_contas()

}

let valorTotal = 0
let numContas = 0
let tipoconta = ''
function cadastrar_contas() {

  let descricao = document.getElementById('descricao_conta')
  let valor = document.getElementById('consumo')
  let listagem = document.getElementById('contas')
  let resultado = document.getElementById('contas2')
  let dinheiro = Number(valor.innerHTML)

  numContas++
  valorTotal = valorTotal + dinheiro

  tipoconta =
    tipoconta + descricao.value + ' - R$: ' + dinheiro + ' ' + '\n' + '<br>'

  listagem.innerHTML = tipoconta + '\n'

  resultado.innerHTML =
    numContas + ' contas' + ' total R$: ' + valorTotal + ''
}

botaoConsumo.addEventListener('click',calcularConsumo)