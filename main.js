const calcularImc = () => {
  // escrevendo o valor do calculo do imc
  
  let clicarBotao = document
          .querySelector('.botoes .calculo')
                .addEventListener('click', function(){

                      const peso = document.querySelector('.dados-peso')
                                                                  .value;
                      const altura = document.querySelector('.dados-altura')
                                                                  .value;
                      
                      const resultado = Number( peso /  Math.pow( (altura / 100), 2) ); 
                                                          
                      console.log(resultado);
                      
                     const mudarBotao = document.querySelector('#root');
                      console.log(mudarBotao);
                      
                     const valorImc = document
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


                      const mudarFooter = document
                                          .querySelector(".piso-aplicacao");     
                                mudarFooter.style.color = "#0f1";
                                mudarFooter.style.backgroundColor = "#000";
                                // mudarFooter.style.marginTop = "10%";
                                // mudarFooter.style.marginBottom = "10%";

                      console.log('valor do peso: ',peso);
                      console.log('a altura é: ', altura);
                    
                    }
                  );
    
  let botaoLimpar = document
          .querySelector('.clear')
          console.log(botaoLimpar);
                botaoLimpar.addEventListener('click', clear)
  
    function clear() {  
      // const nam = "leandro";
      console.log('OLA mundo');
      let footer = document
            .querySelector('#demo').innerHTML = "ola mundo text"
       let resetar = document
                      .querySelector('.valores-inputs').reset()     
    }                        
                    //  const valorImc = document
                    //                    .querySelectorAll(`.secao-aplicacao .resultado-imc`);
                                
                    //           valorImc[valorImc.length - 1]
                    //                     .textContent = resultado
                    //                                         .toFixed(2)
                    //                                             .replace('.', ',');
                    // document.getElementById("demo").innerHTML = "Paragraph changed!";

                        
                      // const corParamResultado = document
                      //                             .querySelector(`.secao-aplicacao  .containerResultado`).innerHTML = nam


                      // const mudarCor = corParamResultado 

                                            //       .setAttribute('style', `background-color: #f0b;
                                            //                         color: #d62929; 
                                            //                         margin-top: 0.74rem; 
                                            //                         margin-bottom: 0.53rem; 
                                            //                         margin-left: 0rem;
                                            //                         margin-right: 0rem;
                                            //                         font-size: 2rem;
                                            //                         font-weight: 800;
                                            //                         `
                                            // );


                      // const mudarFooter = document
                      //                     .querySelector(".piso-aplicacao");     
                      //           mudarFooter.style.color = "#0f1";
                      //           mudarFooter.style.backgroundColor = "#000";
                      //           // mudarFooter.style.marginTop = "10%";
                                // mudarFooter.style.marginBottom = "10%";

                      // console.log('valor do peso: ',peso);
                      // console.log('a altura é: ', altura);
                    
                    // }
                  // );                



    /* let limpar = document
                  .querySelector('.botoes .limpar')
                        .addEventListener('click', function() {
                              let clear = document.
                                            .querySelector('.dados-peso')
                                                                    .reset()
                          
                        });   */            
  

    /* let valorImc = document.querySelectorAll('.secao-aplicacao span');
    valorImc[valorImc.length - 1].insertAdjacentHTML('beforeend', peso);
    console.log(valorImc[ (valorImc.length-1) ] );  
     */
}
calcularImc()