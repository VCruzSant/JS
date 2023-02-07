//const data = new Date(); 
//const data0 = new Date(0); //01/01/1970 Timestamp Unix, mas ele retorna "Wed Dec 31 1969 21:00:00 GMT-0300" porque é GMT -3, então deve adicionar 3 horas para ver a data correta
//const tresH = 60 * 60 * 3 * 1000; // 60 segundos vezes 60 minutos, vezes 3 horas  vezes 1000 porque o JS da em milisegundos;
//const dataC = new Date(0 + tresH);

// para mês - 0 = janeiro e 11 = dezembro;
const hj = new Date(2023, 1, 7, 11, 10); //ano + mês + dia + hora + minuto + segundo + (milésimo) de segundo;
const data = new Date ('2023-02-07 11:13:00');//espaço para separar data de horario
const dataMs = new Date (1675779836175);

console.log(hj.toString());
console.log(data.toString());

console.log('dia', data.getDate());
console.log('mês', data.getMonth() + 1);
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('minuto', data.getMinutes());
console.log('segundos', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 = domingo  &&  6 = sabadp

console.log('milésimos de segundo do Unix até hoje é', Date.now());
console.log('data em ms', dataMs);

function numE0 (num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate (dateF) {
    const d = numE0(dateF.getDay());
    const m = numE0(dateF.getMonth() + 1);
    const y = numE0(dateF.getFullYear()); 

    return `${d}/${m}/${y}`;
}

const dateF = new Date();
const fFormatDate =  formatDate(dateF);
console.log(fFormatDate);

