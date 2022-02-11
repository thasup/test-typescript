// Function

const add = (a: number, b: number) => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Expect function to not return anything
const logger = (message: string): void => {
  console.log(message);
};

// Expect function to never return anything ever
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

// Object

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// ES5
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES6
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Destructuring with Annotations
const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
