const calcularImc = () => {
  // escrevendo o valor do calculo do imc
  
  let clicarBotao = document
          .querySelector('.botoes .calculo')
                .addEventListener('click', function(){

                      let peso = document.querySelector('.dados-peso')
                                                                  .value;
                      let altura = document.querySelector('.dados-altura')
                                                                  .value;
                      
                      let resultado = Number( peso /  Math.pow( (altura / 100), 2) ); 
                                                          // ((altura / 100) ** 2) )
                                                          //  (altura / 100) ) ) );
                      console.log(resultado);
                      
                      let mudarBotao = document.querySelector('#root');
                      console.log(mudarBotao);
                      
                      let valorImc = document
                                      .querySelectorAll(`.secao-aplicacao .resultado-imc`);
                              valorImc[valorImc.length - 1]
                                        .textContent = resultado
                                                          .toFixed(2)
                                                              .replace('.', ',');
                      
                      const corParamResultado = document
                                                  .querySelector('.secao-aplicacao  div .resultado-imc');

                      const mudarCor = corParamResultado
                                          .setAttribute('style', `background-color: #0bd859;
                                                                  color: #d62929; 
                                                                  margin-top: 0.74rem; 
                                                                  margin-bottom: 0.53rem; 
                                                                  margin-left: 0rem;
                                                                  margin-right: 0rem;
                                                                  font-size: 2rem;
                                                                  font-weight: 800;
                                                                  `
                                          );


                      const mudarCor1 = document
                                          .querySelector(".piso-aplicacao");     
                                mudarCor1.style.color = "#0f1";
                                mudarCor1.style.backgroundColor = "#000";
                                // mudarCor1.style.marginTop = "10%";
                                // mudarCor1.style.marginBottom = "10%";

                      console.log(corParamResultado);

                      console.log(peso);
                      console.log(altura);
                      console.log('ultimo item: ', valorImc[ (valorImc.length-1) ] );  
                    
                    }
                  );
  

    /* let valorImc = document.querySelectorAll('.secao-aplicacao span');
    valorImc[valorImc.length - 1].insertAdjacentHTML('beforeend', peso);
    console.log(valorImc[ (valorImc.length-1) ] );  
     */
}
calcularImc()