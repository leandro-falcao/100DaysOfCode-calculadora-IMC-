  const calcularImc = () => {
    // escrevendo o valor do calculo do imc

    let clicarBotao = document
            .querySelector('.botoes .calculo')
                  .addEventListener('click', ()=>{

                        const peso = document.querySelector('.dados-peso')
                                                                    .value;
                        const altura = document.querySelector('.dados-altura')
                                                                    .value;

                        const resultado = Number( peso /  Math.pow( (altura / 100), 2) );

                        const textImc = document.querySelector('#resultado')

                        
                        /* const alfa = document
                                          .querySelector(`#resultado`)
                                              .textContent = 'IMC:' */
                
                        const valorImc = document
                                          .querySelector(`.secao-aplicacao .resultado-imc`);
                                    
                                valorImc.textContent +=  `IMC: ${resultado
                                                              .toFixed(2)
                                                              .replace('.', ',') }`

                        const cssResultado = document
                                                    .querySelector('.secao-aplicacao  div .resultado-imc')
                                                          
                                         /*  cssResultado.setAttribute('style', `background-color: #0bd859;
                                                              color: #d62929;
                                                              margin-top: 0.74rem;
                                                              margin-bottom: 0.53rem;
                                                              margin-left: 0rem;
                                                              margin-right: 0rem;
                                                              font-size: 2rem;
                                                              font-weight: 800;
                                                              `
                                              ); */
                        const adcClasses = document
                                            .querySelector('#resultado')
                              adcClasses.classList.add("teste")



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
                  botaoLimpar.addEventListener('click', ()=>{
                                  let resetar = document
                                                  .querySelector('.box-inputs')
                                                                      .reset();
                                
                                  let alterarCss = document
                                            .querySelector('.piso-aplicacao');
                                                  alterarCss.style.color = '#1c06db';
                                                  alterarCss.style.backgroundColor = '#f1e31b';
                                  
                                  let limparResultado = document.querySelector('#resultado')
                                                                        .textContent = ''                
                                                                                                                                            
                              })

      /* let valorImc = document.querySelectorAll('.secao-aplicacao span');
      valorImc[valorImc.length - 1].insertAdjacentHTML('beforeend', peso);
      console.log(valorImc[ (valorImc.length-1) ] );
      */
  }

  calcularImc()