import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_bbmDqAJEDhivLSgdLPJo6AYGEwZ7ZkHfKh3zbowI"
);

export const convertCurrency = async (fromCurrency, toCurrency, units) => {
  const response = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = response.data[toCurrency];
  //   console.log(multiplier);
  return multiplier * units;
};

