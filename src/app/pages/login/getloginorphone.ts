export function getLoginOrPhone(input: string): string {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{9}$/;

  if (emailRegex.test(input)) {
    const [localPart, domain] = input.split('@');
    const obfuscatedEmail = `${localPart.slice(0, 2)}**********${localPart.slice(-2)}@${domain}`;
    return `a su dirección de correo electrónico ${obfuscatedEmail}.`;
  } else if (phoneRegex.test(input)) {
    const obfuscatedPhone = `${input.slice(0, 1)}********${input.slice(-2)}`;
    return `a su teléfono ${obfuscatedPhone}`;
  } else {
    return 'Entrada no válida';
  }
}
