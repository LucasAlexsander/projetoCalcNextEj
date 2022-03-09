function calcular(tipo, tecla) {

    /* Vamos pegar o valor que esta dentro do visor e passar para uma variável */
    let visor = document.getElementById('visor');

    /* Inserindo as teclas no visor */
    if(tipo === 'acao') { 

        /* Caso o tipo for acao vamos colocar os operadores */
        if(tecla === 'C') { 

            /* Se a tecla for igual a C vai limpar o visor */
            visor.value = ''; 
        } else if (tecla === '/' || tecla === '*' || tecla === '-' || tecla === '+' || tecla === '.' || tecla === '%') { 
            /* Se passar por essa condição vai colocar no visor o operador */
            visor.value += tecla; 
        } else if (tecla === 'R') { 

            /* Se a tecla for igual a R vamos ver a raiz quadrada dos números
            toFixed usado para limitar as casas decimais */
            visor.value = (visor.value**(1/2)); 
        } 
        else if (tecla == '=') {

            /* Caso a tecla precionada seja '=' vamos ter que verificar se algo já foi digitado, caso tenha sido vamos apresentar o resutlado no visor */
            if (visor.value == '') {

                /* Verificamos se algo foi digitado no visor, caso não tenha nada aparecerá mensagem de erro */
                visor.placeholder = 'Erro: entre com algum valor';
            } else {

                /* Eval usado para transformar toda string em cógido que roda no console, assim, teremos o resultado */
                visor.value = eval(visor.value);
            }
        }
    } else {
        /* Caso a tecla entrada seja do tipo 'valor', automaticamente vai ser apresentado no visor o número */
        visor.value += tecla;
        console.log(9**(1/2))
    }
}