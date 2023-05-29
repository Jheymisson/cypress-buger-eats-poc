export default class CPFGenerator {

    static generateValidCPF() {
      const randomDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  
      const cpf = randomDigits.map(Number);
  
      // Calcula o primeiro dígito verificador
      let sum = cpf.reduce((acc, digit, index) => acc + digit * (10 - index), 0);
      let digit = 11 - (sum % 11);
      if (digit > 9) {
        digit = 0;
      }
      cpf.push(digit);
  
      // Calcula o segundo dígito verificador
      sum = cpf.reduce((acc, digit, index) => acc + digit * (11 - index), 0);
      digit = 11 - (sum % 11);
      if (digit > 9) {
        digit = 0;
      }
      cpf.push(digit);
  
      return cpf.join('');
    }

  }