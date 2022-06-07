export function calculateAge(birthDate: Date, date: Date): number {
  let age = date.getFullYear() - birthDate.getFullYear();
  const monthDifference = date.getMonth() - birthDate.getMonth();
  const dayDifference = date.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

export function calculateAgeToday(birthDate: Date): number {
  return calculateAge(birthDate, new Date());
}