const name = 'Gustavo Henrique';
const surname = 'Alves';
const age = 21;
const hasHadBirthdayThisYear = true;
const weight = 56.6;
const height = 1.68;
const bodyMassIndex = weight / (height * height);
const currentYear = new Date().getFullYear();

let birthYear =
    (hasHadBirthdayThisYear) ? currentYear - age : currentYear - (age + 1);

let output = (`${name} ${surname} tem ${age} anos, pesa ${weight} Kg,
tem ${height}m de altura e seu IMC é de ${bodyMassIndex.toFixed(2)}.
${name} ${surname} nasceu em ${birthYear}.`);

output = output.replace(/\n/g, ' ');
console.log(output);