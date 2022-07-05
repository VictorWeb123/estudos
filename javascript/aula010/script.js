function somar() {
    let tn1 = document.getElementById('txtn1');
    let tn2 = document.querySelector('#txtn2');
    let res = document.querySelector('#res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 + n2;
    res.innerHTML = `A soma entre ${n1} e ${n2} é = ${s} `
};

function multiplicar() {
    let tn3 = document.querySelector('#txtn3');
    let tn4 = document.querySelector('#txtn4');
    let res = document.querySelector('#res2');
    let n3 = Number(tn3.value);
    let n4 = Number(tn4.value);
    let a = n3 * n4;
    res.innerHTML = `A Multiplicação entre ${n3} e ${n4} é = ${a} `
};

function dividir() {
    let tn5 = document.querySelector('#txtn5');
    let tn6 = document.querySelector('#txtn6');
    let res = document.querySelector('#res3');
    let n5 = Number(tn5.value);
    let n6 = Number(tn6.value);
    let b = n5 / n6;
    res.innerHTML = `A divisão entre ${n5} e ${n6} é = ${b} `
};

function subtrair() {
    let tn7 = document.querySelector('#txtn7');
    let tn8 = document.querySelector('#txtn8');
    let res = document.querySelector('#res4');
    let n7 = Number(tn7.value);
    let n8 = Number(tn8.value);
    let b = n7 - n8;
    res.innerHTML = `A Subtração ente ${n7} e ${n8} é = ${b}`
};