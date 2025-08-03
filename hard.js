const Patient2 = Patient("John", "123-45-6789");

function Patient(name, ssn) {
  const PII = {
    name: name,
    ssn: ssn,
  };

  return {
    getName: function () {
      return PII.name;
    },
  };
}

console.log(Patient2.names);
console.log(Patient2.ssn);

console.log(Patient2.getName());
