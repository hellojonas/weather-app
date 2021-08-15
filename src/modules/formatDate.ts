export const formatDate = (date: Date | string) => {
  const formater = new Intl.DateTimeFormat('pt-PT', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  if (date instanceof Date) {
    return formater.format(date);
  }

  return formater.format(new Date(date));
};
