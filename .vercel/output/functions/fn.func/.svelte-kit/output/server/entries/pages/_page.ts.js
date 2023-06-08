import { addYears } from "date-fns";
const symbolIds = [
  "0P0000J1C2.L",
  "0P0000UUP8.L",
  "0P0000JSAS.L",
  "0P0000X9FA.L",
  "0P000102M0.L",
  "0P0000ZT02.L",
  "0P0000K7VW.L",
  "0P000102M3.L",
  "0P00000VDP.L",
  "0P0001FVLM.L",
  "^NDX",
  "^FTSE",
  "^STOXX50E",
  "^GDAXI",
  "^AXJO",
  "^HSI",
  "^N225",
  "BTC-USD",
  "ETH-USD",
  "ADA-USD"
];
const period1 = addYears(/* @__PURE__ */ new Date(), -5);
const load = async ({ params, fetch }) => {
  const responses = await Promise.all(
    symbolIds.map((symbolId) => fetch(`/api/historical?symbolId=${symbolId}&period1=${period1}`))
  );
  const datas = await Promise.all(responses.map((response) => response.json()));
  return { data: datas };
};
export {
  load
};