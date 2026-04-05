const convertButton = document.querySelector(".convert-button"); /* Seleciona o botão de converter*/
const currencySelectFrom = document.querySelector(".currency-select-from"); /* Seleciona o elemento de seleção de moeda de origem */
const currencySelect = document.querySelector(".currency-select"); /* Seleciona o elemento de seleção de moeda */
const currencyImageFrom = document.getElementById("currency-img-from"); /* Seleciona a imagem da moeda de origem */
const currencyNameFrom = document.getElementById("currency-name-from"); /* Seleciona o nome da moeda de origem */

function convertValues() { /* Função para converter os valores */
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value); /* Seleciona o valor digitado pelo usuário */
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); /* Seleciona o elemento que exibe o valor a ser convertido */
    const currencyValueConverted = document.querySelector(".currency-value"); /* Seleciona o elemento que exibe o valor convertido */

    const dolarToday = 5.2; /* Valor do dólar hoje, pode ser atualizado conforme necessário */
    const euroToday = 6.2; /* Valor do euro hoje, pode ser atualizado conforme necessário */
    const libraToday = 7.2; /* Valor da libra hoje, pode ser atualizado conforme necessário */
    const bitcoinToday = 300000; /* Valor do bitcoin hoje, pode ser atualizado conforme necessário */

    // Converte o valor para Real
    let valueInReal;
    if (currencySelectFrom.value == "real") valueInReal = inputCurrencyValue;
    else if (currencySelectFrom.value == "dolar") valueInReal = inputCurrencyValue * dolarToday;
    else if (currencySelectFrom.value == "euro") valueInReal = inputCurrencyValue * euroToday;
    else if (currencySelectFrom.value == "libra") valueInReal = inputCurrencyValue * libraToday;
    else if (currencySelectFrom.value == "bitcoin") valueInReal = inputCurrencyValue * bitcoinToday;

    // Formata o valor da moeda de origem corretamente
    let formattedValueFrom;
    switch (currencySelectFrom.value) {
        case "real":
            formattedValueFrom = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue);
            break;
        case "dolar":
            formattedValueFrom = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue);
            break;
        case "euro":
            formattedValueFrom = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue);
            break;
        case "libra":
            formattedValueFrom = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputCurrencyValue);
            break;
        case "bitcoin":
            formattedValueFrom = inputCurrencyValue.toFixed(6) + " BTC";
            break;
    }
    currencyValueToConvert.innerHTML = formattedValueFrom;

    // Converte para a moeda de destino
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valueInReal);
    }
    else if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valueInReal / dolarToday);
    }
    else if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valueInReal / euroToday);
    }
    else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(valueInReal / libraToday);
    }
    else if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = (valueInReal / bitcoinToday).toFixed(6) + " BTC";
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    switch(currencySelect.value) {
        case "real":
            currencyName.textContent = "Real";
            currencyImage.src = "./assets/Real.png";
            break;
        case "dolar":
            currencyName.textContent = "Dólar Americano";
            currencyImage.src = "./assets/Dólar.png";
            break;
        case "euro":
            currencyName.textContent = "Euro";
            currencyImage.src = "./assets/Euro.png";
            break;
        case "libra":
            currencyName.textContent = "Libra Esterlina";
            currencyImage.src = "./assets/Libra.png";
            break;
        case "bitcoin":
            currencyName.textContent = "Bitcoin";
            currencyImage.src = "./assets/Bitcoin.png";
            break;
    }

    convertValues();
}

function changeCurrencyFrom() {
    switch(currencySelectFrom.value) {
        case "real":
            currencyImageFrom.src = "./assets/Real.png";
            currencyNameFrom.textContent = "Real";
            break;
        case "dolar":
            currencyImageFrom.src = "./assets/Dólar.png";
            currencyNameFrom.textContent = "Dólar Americano";
            break;
        case "euro":
            currencyImageFrom.src = "./assets/Euro.png";
            currencyNameFrom.textContent = "Euro";
            break;
        case "libra":
            currencyImageFrom.src = "./assets/Libra.png";
            currencyNameFrom.textContent = "Libra Esterlina";
            break;
        case "bitcoin":
            currencyImageFrom.src = "./assets/Bitcoin.png";
            currencyNameFrom.textContent = "Bitcoin";
            break;
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency); /* Adiciona um ouvinte de evento ao elemento de seleção de moeda, que chama a função changeCurrency quando a seleção é alterada */
currencySelectFrom.addEventListener("change", changeCurrencyFrom); /* Adiciona um ouvinte de evento ao elemento de seleção de moeda de origem, que chama a função changeCurrencyFrom quando a seleção é alterada */
convertButton.addEventListener("click", convertValues); /* Adiciona um ouvinte de evento ao botão de converter, que chama a função convertValues quando o botão é clicado */