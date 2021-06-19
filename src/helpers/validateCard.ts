function numberValid(number: string): boolean {
  return /^[0-9]{16}$/.test(number.replace(/\s/g, ""));
}

function expiryValid(month: string, year: string): boolean {
  const isValidExpiryMonth = /^0?[1-9]|1[0-2]$/.test(month.replace(/\s/g, ""));

  const isValidExpiryYear = /^[0-9]{2}$/.test(year.replace(/\s/g, ""));

  return isValidExpiryMonth && isValidExpiryYear;
}

function codeValid(code: string): boolean {
  return /^[0-9]{3}$/.test(code.replace(/\s/g, ""));
}

export { numberValid, expiryValid, codeValid };
