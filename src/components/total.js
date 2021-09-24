const total = (cal) => {
  if (cal.total === null && cal.next !== null) return '';
  if (cal.total == null) return '0';
  return cal.total;
};

export default total;
