
function calcularExpresion() {
    const seleccionar = document.getElementById('seleccionar').value;
    const a = parseFloat(document.getElementById('a').value);
    // Obtén los valores de las otras variables según su ID

    let result;

    switch (seleccionar) {
        case 'a':
            result = 3 / 2 + 4 / 3;
            break;
        case 'b':
            // Mostrar los campos de entrada para x e y
            document.getElementById('espacio-b').style.display = 'block';
            const x = parseFloat(document.getElementById('x').value);
            const y = parseFloat(document.getElementById('y').value);
            result = 1 / (x - 5) - 3 * x * y / 4;
            break;
        case 'c':
            // Mostrar los campos de entrada para a, b, c, d,e,f,g,h,j
            const aC = parseFloat(document.getElementById('a-c').value);
            const bC = parseFloat(document.getElementById('b-c').value);
            const cC = parseFloat(document.getElementById('c-c').value);
            const dC = parseFloat(document.getElementById('d-c').value);
            const eC = parseFloat(document.getElementById('e-c').value);
            const fC = parseFloat(document.getElementById('f-c').value);
            const gC = parseFloat(document.getElementById('g-c').value);
            const hC = parseFloat(document.getElementById('h-c').value);
            const jC = parseFloat(document.getElementById('j-c').value);
            result = aC * aC / (bC - cC) + (dC - eC) / (fC - gC * hC / jC);
            break;
        case 'd':
            // Realiza los cálculos para el ejercicio m, n, p
            const mD = parseFloat(document.getElementById('m-d').value);
            const nD = parseFloat(document.getElementById('n-d').value);
            const pD = parseFloat(document.getElementById('p-d').value); 
            result= mD / nD + pD;
            break;
        case 'e':
             // Realiza los cálculos para el ejercicio m, n, p, q,r,s
             const mE = parseFloat(document.getElementById('m-e').value);
             const nE = parseFloat(document.getElementById('n-e').value);
             const pE = parseFloat(document.getElementById('p-e').value); 
             const qE = parseFloat(document.getElementById('q-e').value); 
             const rE = parseFloat(document.getElementById('r-e').value); 
             const sE = parseFloat(document.getElementById('s-e').value); 
             result= (mE + nE / pE) / (qE - rE / sE);
             break;
        case 'f':
            // Realiza los cálculos para el ejercicio a,b,c,d,s,e,f,g,h
            const aF = parseFloat(document.getElementById('a-f').value);
            const bF = parseFloat(document.getElementById('b-f').value);
            const cF = parseFloat(document.getElementById('c-f').value); 
            const dF = parseFloat(document.getElementById('d-f').value); 
            const eF = parseFloat(document.getElementById('e-f').value); 
            const fF = parseFloat(document.getElementById('f-f').value); 
            const gF = parseFloat(document.getElementById('g-f').value); 
            const hF = parseFloat(document.getElementById('h-f').value); 
            result= (3 * aF + bF) / (cF - (dF + 5 * eF) / (fF + gF / (2 * hF))) ;
            break;
        default:
            result = 'Seleccione un ejercicio válido.';
    }

     // Mostrar el resultado en la página
     document.getElementById('result').textContent = `Resultado: ${result}`;

     // Mostrar u ocultar los campos de entrada según el ejercicio seleccionado
    document.getElementById('espacio-b').style.display = seleccionar === 'b' ? 'block' : 'none';
    document.getElementById('espacio-c').style.display = seleccionar === 'c' ? 'block' : 'none';
    document.getElementById('espacio-d').style.display = seleccionar === 'd' ? 'block' : 'none';
    document.getElementById('espacio-e').style.display = seleccionar === 'e' ? 'block' : 'none';
    document.getElementById('espacio-f').style.display = seleccionar === 'f' ? 'block' : 'none';

   
}
