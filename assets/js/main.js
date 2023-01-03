function converteTemperatura(){
    const resposta = prompt("Deseja converter de qual medida? (C/F)");
    if (resposta === '') return alert('Digite alguma medida.');
    const temperatura = Number(prompt("Qual o valor da temperatura que deseja converter?"));
    const resultado = document.querySelector('.resultado');
    resultado.innerText = '';

    if (resposta === 'C'){
        function celsius2Fahrenheit(){
            const fahrenheit = (temperatura * 1.8 + 32).toFixed(2);
            resultado.innerText += `Sua temperatura de Celsius para Fahrenheit é igual a ${fahrenheit}°F.`;
        }celsius2Fahrenheit();
    }
    if(resposta === 'F'){
        function fahrenheit2Celsius(){
            const celsius = ((temperatura - 32) * 5/9).toFixed(2);  
            resultado.innerText += `Sua temperatura de Fahrenheit para Celsius é igual a ${celsius}°C.`;
        }fahrenheit2Celsius();
    }
}
converteTemperatura();



