export function ageValidator(value): number {
  if (!value) {
    return 0;
  }
  let day = value.day;
  let month = value.month;
  let year = value.year;

  if (typeof value === 'string') {
    const date = value.split('/');
    year = Number(date[0]);
    month = Number(date[1]);
    day = Number(date[2]);
  }

  const today = new Date();
  const birthDate = new Date(year, month, day);
  let age = today.getFullYear() - birthDate.getFullYear();

  if (today.getMonth() + 1 < birthDate.getMonth()) {
    age--;
  }
  if (
    birthDate.getMonth() === today.getMonth() + 1 &&
    today.getDate() < birthDate.getDate()
  ) {
    age--;
  }
  return age;
}
