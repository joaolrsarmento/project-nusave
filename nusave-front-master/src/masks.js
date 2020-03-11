const unmaskToNumber = value => {
  if (typeof value === 'string') return value.replace(/[^0-9]/g, '');
  return value.toString().replace(/[^0-9]/g, '');
};

export const unmaskMoney = value => {
  const numbers = unmaskToNumber(value);
  return numbers.slice(0, 6);
};

export const maskMoney = value => {
  if (!value) return '';
  const val = typeof vlue === 'string' ? value : value.toString();
  const parts = [value.slice(0, 4), value.slice(4, 6)];
  if (value.length < 5) return parts[0];
  return `${parts[0]},${parts[1]}`;
};