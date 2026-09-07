export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

export function isValidPhone(phone) {
  return /^\+?[0-9\s-()]{8,}$/.test(String(phone).trim());
}

export function isNotEmpty(val) {
  return val !== null && val !== undefined && String(val).trim().length > 0;
}
