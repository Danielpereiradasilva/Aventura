const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBtn = document.getElementById('bth-reiniciar');

avance.forEach(button =>
       button.addEventListener('click',function() {
       const atual = document.querySelector('.ativo');
       const proximoPasso = 'passo-'+this.getAttribute('data-proximo');

       atual.classList.remove('ativo');
       atual.proximoElemento= document.getElementsById(proximoPasso);

       if (proximoElemento){
           proximoElemento.classList.add('ativo');
       } else {
           console.error(`Elemento com ID "${proximoPasso}" não encontrado.`)
       }
    })

)