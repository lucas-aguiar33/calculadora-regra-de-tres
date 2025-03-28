const btnCalcular = document.querySelector("#btn-calcular");
const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const valor3 = document.querySelector("#valor3");
const res = document.querySelector("#res");

btnCalcular.addEventListener('click',()=>{
    const v1 = parseInt(valor1.value);
    const v2 = parseInt(valor2.value);
    const v3 = parseInt(valor3.value);

    res.value = (v2 * v3) / v1;

    setTimeout(()=>{
        valor1.value='';
        valor2.value='';
        valor3.value='';
        res.value='';

        valor1.focus();
    }, 6000)
})