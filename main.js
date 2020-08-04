  
  const calcularImc = () => {
    // escrevendo o valor do calculo do imc

    const clicarBotao = document
            .querySelector('.botoes .calculo')
                  .addEventListener('click', ()=>{

                        const peso = document.querySelector('.dados-peso')
                                                                    .value;
                        const altura = document.querySelector('.dados-altura')
                                                                    .value;

                        const resultado = Number( peso /  Math.pow( (altura / 100), 2) );

                        const textImc = document.querySelector('#resultado')
                
                        const valorImc = document
                                          .querySelector(`.secao-aplicacao .resultado-imc`);
                                    
                                valorImc.textContent +=  `IMC= ${resultado
                                                              .toFixed(2)
                                                                  .replace('.', ',') }`

                        const cssResultado = document
                                                  .querySelector('.secao-aplicacao .resultado-imc')
                                                          
                        const adcClasses = document
                                            .querySelector('#resultado')
                                                .classList.add("alteracao");

                        const mudarFooter = document
                                            .querySelector(".piso-aplicacao");
                                  mudarFooter.style.color = "#ffe";
                                  mudarFooter.style.fontWeight = '900';
                                  mudarFooter.style.fontSize = '5rem';


                        console.log('valor do peso: ', peso);
                        console.log('a altura é: ', altura);

                      }
                  );


    const botaoLimpar = document
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
                                                                        
                                  const delClass = document.querySelector('#resultado')
                                                                .classList.remove('alteracao')

                              })

      /* let valorImc = document.querySelectorAll('.secao-aplicacao span');
      valorImc[valorImc.length - 1].insertAdjacentHTML('beforeend', peso);
      console.log(valorImc[ (valorImc.length-1) ] );
      */

      const umaCelula = 3.7
      const quantasCelulasEmpilhadas = 13 / umaCelula
      console.log(4*3.7, 'como ');
  }

  calcularImc()
