// We have to design a function that generates a park entry ticket according to the park's rules. Customers are classified into different categories: Infant, Child, Young, Person, and Senior Citizen.
// If the customer is less than 3 years old, they are considered an infant. If the customer is between 3 and 10 years old, they are considered a child. If the customer is between 10 and 20 years old,
// they are considered young. If the customer is older than 20 but younger than 50, they are considered a person. If the customer is 50 years or older, they are considered a senior citizen.
// Infants can enter for free. The entry fee for a child is ₹500, for a young person is
// ₹700, for a person is ₹900, and for a senior citizen is ₹400.

const PRICES = {
  infant: 0,
  child: 500,
  young: 700,
  person: 900,
  senior: 400,
} as const;

function priceClassifierV2(age: number): number {
  if (!Number.isFinite(age) || age < 0) {
    throw new Error('Enter valid age');
  }

  // Order matters: each check assumes every check above it was false.
  if (age < 3) return PRICES.infant;
  if (age <= 10) return PRICES.child;
  if (age <= 20) return PRICES.young;
  if (age < 50) return PRICES.person;
  return PRICES.senior;
}

const sampleAges: number[] = [0, 2.9, 3, 10, 10.5, 20, 21, 49, 50, 80];
for (const age of sampleAges) {
  console.log(`Age ${age}: ₹${priceClassifierV2(age)}`);
}

for (const badAge of [-1, NaN, Infinity]) {
  try {
    priceClassifierV2(badAge);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Age ${badAge}: ${error.message}`);
    }
  }
}
