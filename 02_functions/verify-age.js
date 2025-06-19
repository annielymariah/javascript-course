function verifyAge(age) {
  if (typeof age !== 'number' || age < 0) {
    throw new Error('Invalid age provided');
  }
  return age >= 18;
}

verifyAge(20);
verifyAge(17);