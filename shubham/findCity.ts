// Design function where user enter the city code and we have to return city name
// 	Code		City
// 12		Pune
// 11		Satara
// 15 		Nashik
// 18		Dhule
// 40		Navi Mumbai
// 43		Mumbai
// 27		Amravati
// 29		Yavatmal

function findCity(cityCode: number): string {
  switch (cityCode) {
    case 12:
      return 'Pune';
    case 11:
      return 'Satara';
    case 15:
      return 'Nashik';
    case 18:
      return 'Dhule';
    case 40:
      return 'Navi Mumbai';
    case 43:
      return 'Mumbai';
    case 27:
      return 'Amravati';
    case 29:
      return 'Yavatmal';
    default:
      return 'Enter valid city code';
  }
}

const cityCodeMap = {
  12: 'Pune',
  11: 'Satara',
  15: 'Nashik',
  18: 'Dhule',
  40: 'Navi Mumbai',
  43: 'Mumbai',
  27: 'Amravati',
  29: 'Yavatmal'
} as const;

type CityCode = keyof typeof cityCodeMap;
type CityName = typeof cityCodeMap[CityCode];

function findCityV2(cityCode: CityCode): CityName {
  return cityCodeMap[cityCode];
}

console.log(findCity(12));
console.log(findCityV2(11));


