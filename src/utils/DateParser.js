export function dateParseada(date) {
  const dateRecebida = new Date(date);
  return ` ${dateRecebida.getDate()}/${parseInt(
    dateRecebida.getMonth() + 1
  )}/${dateRecebida.getFullYear()} ${dateRecebida.getHours()}:${dateRecebida.getMinutes()}`;
}

export function dateParseadaShort(date) {
  const dateRecebida = new Date(date);
  return `${dateRecebida.getDate()}/${parseInt(
    dateRecebida.getMonth() + 1
  )}/${dateRecebida.getFullYear()}`;
}

export function horaParseada(date) {
  const dateRecebida = new Date(date);
  return ` ${dateRecebida.getHours()}:${dateRecebida.getMinutes()}`;
}
