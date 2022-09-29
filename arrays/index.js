const data = new Date();

function zeroNaFrente (zero) {
    return zero >= 10 ? zero : `0${zero}`;
}

function tempo() {
    horas    = zeroNaFrente(data.getHours());
    minutos  = zeroNaFrente(data.getMinutes());
    segundos = zeroNaFrente(data.getSeconds());
    dia      = zeroNaFrente(data.getDate());
    mes      = zeroNaFrente(data.getMonth() + 1);
    ano      = zeroNaFrente(data.getFullYear());
    return `${horas}:${minutos}:${segundos} - do dia = ${dia}/${mes}/${ano}`;
}

const dataBrasil = tempo();
console.log(dataBrasil);

