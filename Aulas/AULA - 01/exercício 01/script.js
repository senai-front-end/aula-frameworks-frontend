const display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        if (display.value === "") return;

        display.value = eval(display.value);
    } catch {
        display.value = "Erro";

        setTimeout(() => {
            display.value = "";
        }, 1200);
    }
}

// Permite usar o teclado
document.addEventListener("keydown", (e) => {

    const teclas = "0123456789+-*/.%";

    if (teclas.includes(e.key)) {
        adicionar(e.key);
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calcular();
    }

    if (e.key === "Backspace") {
        apagar();
    }

    if (e.key === "Escape") {
        limpar();
    }
});