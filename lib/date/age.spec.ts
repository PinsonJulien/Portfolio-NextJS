import { calculateAge } from "./age";


describe ('Age', () => {

  it('Calculate current age properly.', () => {
    const birthDate = new Date('1995-08-24');
    const date = new Date('2022-06-02');
    let age: number; 
    
    age = calculateAge(birthDate, date);
    expect(age).toEqual(26);

    date.setMonth(birthDate.getMonth());
    age = calculateAge(birthDate, date);
    expect(age).toEqual(26);

    date.setDate(birthDate.getDate());
    age = calculateAge(birthDate, date);
    expect(age).toEqual(27);
  });
});