function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    if (Boolean(salaries[key]) && typeof salaries[key] === 'number' && isFinite(salaries[key])) {
      sum += salaries[key];
    }
  }

  return sum;
}
