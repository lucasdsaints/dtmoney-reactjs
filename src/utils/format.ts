export function formatAsDate(date: string | Date) {
  if (typeof date === 'string') {
    date = new Date(date);
    if (isNaN(date.valueOf())) {
      return '';
    }
  }

  return new Intl.DateTimeFormat('pt-BR').format(date);   
}

export function formatAsCurrency(value: string | number) {
  if (typeof value === 'string') {
    value = Number(value);
    if (isNaN(value)) {
      return '';
    }
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}