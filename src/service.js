export function dobro(n)
{
    return n * 2;
}

export function somar(n1, n2)
{
    return n1 + n2;
}

export function temperatura(temp)
{
    let x = false;
    if(temp > 37){
        x = true;
        return x;
    }

    else{
        return x;
    }
        
}

export function media(n1, n2, n3)
{
    return(n1 + n2 + n3) / 3;
}

export function tabuada(numb)
{
    let arr = [];
    let volta
    let x = 0;
    while (volta > 11) {
        list.unshift(x);
        x = numb * volta;
        volta ++;
    }
    return arr;
}

export function primaria(cor){
    cor.toUpperCase();
    if(cor = "VERMELHO"){
        return true;
    }
    if(cor = "AZUL"){
        return true;
    }
    if(cor = "AMARELO"){
        return true;
    }
    else{
        return false;
    }
}

export function ingresso(qtdmeia, qtdint, dia, nacionalidade){
    dia.toUpperCase();
    nacionalidade.toUpperCase();
    let valor = 0;
    let total = 0;
    if(dia = "QUARTA"){
        if(nacionalidade = "BRASILEIRA"){
            valor = 5;
            total = (qtdint * valor) + (qtdmeia * (valor / 2));
        }
        else{
            valor = 28.5 / 2;
            total = (qtdint * valor) + (qtdmeia * (valor / 2));
        }
    }
    else{
        valor = 28.5;
        total = (qtdint * valor) + (qtdmeia * (valor / 2));
    }
}

export function freqcarac(texto, caracter){
    
}