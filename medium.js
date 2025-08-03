function Pizza(totalSlices, perPerson) {
  const slicesPizza = totalSlices / perPerson;
  return `Each person gets ${slicesPizza.toFixed(
    2
  )} slices of pizza; from our ${totalSlices} slice pizza`;
}

console.log(Pizza(8, 2));
console.log(Pizza(8, 3));
console.log(Pizza(21, 20));
console.log(Pizza(10, 3));
