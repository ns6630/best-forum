function getStrWithZeroPrefix(s: string) {
  return s.length === 1 ? `0${s}` : s;
}


export function getFormattedDate(date: Date) {
  const year = date.getFullYear();
  const month = getStrWithZeroPrefix(
    (date.getMonth() + 1).toString()
  );
  const day = getStrWithZeroPrefix(date.getDate().toString());

  const hours = getStrWithZeroPrefix(
    date.getHours().toString()
  );
  const minutes = getStrWithZeroPrefix(
    date.getMinutes().toString()
  );
  const seconds = getStrWithZeroPrefix(
    date.getSeconds().toString()
  );

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};
