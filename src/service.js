function Dobro(n)
{
    return n * 2;
}

function Soma(n1, n2)
{
    return n1 + n2;
}

function Temperatura(temp)
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

function Media(n1, n2, n3)
{
    return(n1 + n2 + n3) / 3;
}

function Tabuada(numb)
{
    let arr = [];
    let volta
    let x = 0;
    while (volta > 11) {
        arr.push(x);
        x = numb * volta;
        volta ++;
    }
    return arr;
}
export default{Soma};

export default{Dobro};

export default{Temperatura};

export default{Media};

export default{Tabuada};