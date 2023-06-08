const symbolIds = [
  "0P0000J1C2.L",
  "0P0000UUP8.L",
  "0P0000JSAS.L"
  // '0P0000X9FA.L',
  // '0P000102M0.L',
  // '0P0000ZT02.L',
  // '0P0000K7VW.L',
  // '0P000102M3.L',
  // '0P00000VDP.L',
  // '0P0001FVLM.L',
  // '^NDX',
  // '^FTSE',
  // '^STOXX50E',
  // '^GDAXI',
  // '^AXJO',
  // '^HSI',
  // '^N225',
  // 'BTC-USD',
  // 'ETH-USD',
  // 'ADA-USD'
];
const now = /* @__PURE__ */ new Date();
const period1 = new Date(now.setFullYear(now.getFullYear() - 5));
console.log({ period1 });
const load = async ({ params, fetch }) => {
  try {
    let responses = await Promise.all(
      symbolIds.map((symbolId) => fetch(`/api/historical?symbolId=${symbolId}&period1=${period1}`))
    );
    let datas = await Promise.all(responses.map((response) => response.json()));
    return { data: datas };
  } catch (err) {
    console.log({ err });
  }
};
export {
  load
};
