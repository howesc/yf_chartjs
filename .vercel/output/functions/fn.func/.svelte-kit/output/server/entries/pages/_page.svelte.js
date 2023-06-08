import { c as create_ssr_component, d as add_attribute, f as each, v as validate_component } from "../../chunks/index2.js";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale/index.js";
import { Chart, registerables } from "chart.js";
const hsla = (HSLA) => `hsla(${HSLA[0]},${100 * HSLA[1]}%,${100 * HSLA[2]}%,${HSLA[3]})`;
const hs = {
  red: 0,
  yellow: 60,
  green: 120,
  teal: 180,
  blue: 240,
  pink: 330
};
const s = 0.9;
const l = 0.5;
const cols = {
  white: [0, 0, 0.9, 1],
  greyLt: [0, 0, 0.4, 1],
  greyMd: [0, 0, 0.2, 1],
  greyDk: [0, 0, 0.1, 1],
  red: [hs.red, s, l, 1],
  yellow: [hs.yellow, s, l, 1],
  green: [hs.green, s, l, 1],
  teal: [hs.teal, s, l, 1],
  blue: [hs.blue, s, l, 1],
  pink: [hs.pink, s, l, 1]
};
const replaceZerosWithPreviousValue = (nums) => {
  let result = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      result[i] = result[i - 1];
    } else {
      result[i] = nums[i];
    }
  }
  return result;
};
const calcRollAvgs = (win, nums) => {
  let avgs = [];
  for (let i = 0; i < nums.length; i++) {
    let avg = null;
    if (i >= win)
      avg = 1 / win * nums.slice(i - win, i).reduce((tot, num) => tot + num, 0);
    avgs.push(avg);
  }
  return avgs;
};
const trendLineOpts$1 = [
  { win: 2, col: cols.white, width: 0.5 },
  { win: 10, col: cols.red, width: 1.5 },
  { win: 40, col: cols.yellow, width: 2 },
  { win: 120, col: cols.green, width: 2.5 },
  { win: 240, col: cols.blue, width: 3 }
];
const makeTrendLine$1 = (nums, opt) => {
  return {
    type: "line",
    yAxisID: "y",
    data: calcRollAvgs(opt.win, replaceZerosWithPreviousValue(nums)),
    label: `SMA ${opt.win}`,
    borderColor: hsla(opt.col),
    backgroundColor: hsla(opt.col),
    borderWidth: opt.width
  };
};
const makeSmaDatasets = (prices) => {
  return [
    ...trendLineOpts$1.map((opt) => makeTrendLine$1(prices, opt)),
    {
      type: "line",
      yAxisID: "y",
      label: "Close",
      data: Array(prices.length).fill(prices.slice(-1)[0]),
      borderColor: hsla(cols.pink),
      borderWidth: 0.5,
      borderDash: [4, 4]
    },
    {
      type: "line",
      yAxisID: "y",
      label: "Close",
      data: prices,
      borderColor: hsla(cols.pink),
      borderWidth: 0.5
    }
  ];
};
const makeLabels$1 = (dates) => {
  return dates;
};
const makeVolumeDataset = (volumes) => {
  const color = hsla(cols.greyMd);
  return {
    type: "bar",
    yAxisID: "y1",
    data: volumes,
    label: `Volume`,
    borderColor: color,
    backgroundColor: color,
    borderWidth: 1
  };
};
const makeChartOptions$1 = (width2) => {
  return {
    responsive: true,
    animation: { duration: 100 },
    maintainAspectRatio: false,
    elements: { point: { pointStyle: false } },
    plugins: { title: { display: false } },
    scales: {
      x: {
        type: "timeseries",
        time: { unit: width2 <= 20 ? "day" : "month" },
        adapters: { date: { locale: enUS } },
        grid: { display: true, color: hsla(cols.greyMd) },
        ticks: {
          display: false,
          maxRotation: 90,
          minRotation: 90
        }
      },
      y: {
        position: "left",
        grid: { display: true, color: hsla(cols.greyMd) },
        ticks: { display: true },
        afterFit: (scaleInstance) => scaleInstance.width = 48
      },
      y1: {
        position: "right",
        grid: { display: false },
        ticks: { display: false },
        afterFit: (scaleInstance) => scaleInstance.width = 0
      }
    }
  };
};
const makeDefaultChart = () => {
  Chart.register(...registerables);
  Chart.defaults.plugins.legend.display = false;
  Chart.defaults.plugins.legend.display = false;
  Chart.defaults.font.size = 12;
  Chart.defaults.font.weight = "light";
  Chart.defaults.color = hsla(cols.greyLt);
  return Chart;
};
const DefaultChart = makeDefaultChart();
const SmasChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labels;
  let smaDatasets;
  let volumeDataset;
  let viewLabels;
  let viewSmaDatasets;
  let viewVolumeDataset;
  let chartOptions;
  let { width: width2 } = $$props;
  let { hists = [] } = $$props;
  let chartElement;
  let chart;
  if ($$props.width === void 0 && $$bindings.width && width2 !== void 0)
    $$bindings.width(width2);
  if ($$props.hists === void 0 && $$bindings.hists && hists !== void 0)
    $$bindings.hists(hists);
  labels = makeLabels$1(hists.map((hist) => hist.date));
  smaDatasets = makeSmaDatasets(hists.map((hist) => hist.close));
  volumeDataset = makeVolumeDataset(hists.map((hist) => hist.volume));
  viewLabels = labels.slice(-width2);
  viewSmaDatasets = smaDatasets.map((smaDataset) => {
    return {
      ...smaDataset,
      data: smaDataset.data.slice(-width2)
    };
  });
  viewVolumeDataset = {
    ...volumeDataset,
    data: volumeDataset.data.slice(-width2)
  };
  chartOptions = makeChartOptions$1(width2);
  {
    {
      try {
        chart.destroy();
      } catch {
      }
      chart = new DefaultChart(
        chartElement,
        {
          type: "line",
          data: {
            labels: viewLabels,
            datasets: [...viewSmaDatasets, viewVolumeDataset]
          },
          options: chartOptions
        }
      );
    }
  }
  return `<canvas${add_attribute("this", chartElement, 0)}></canvas>`;
});
const trendLineOpts = [
  { win: 120, col: cols.green, width: 2 },
  { win: 240, col: cols.blue, width: 3 }
];
const calcTrend = (width2, nums, opt) => {
  const rollAvgs = calcRollAvgs(opt.win, replaceZerosWithPreviousValue(nums)).slice(-width2);
  let trends = Array(rollAvgs.length).fill(null);
  for (let i = 1; i <= rollAvgs.length; i++) {
    if (!rollAvgs[i] || !rollAvgs[i - 1]) {
      trends[i] = null;
    } else {
      trends[i] = (rollAvgs[i] || 0) / (rollAvgs[i - 1] || 1) - 1;
    }
  }
  return trends;
};
const makeTrendLine = (width2, nums, opt) => {
  return {
    type: "line",
    yAxisID: "y",
    data: calcTrend(width2, nums, opt),
    label: `SMA ${opt.win}`,
    fill: false,
    borderColor: hsla(opt.col),
    backgroundColor: hsla(opt.col),
    borderWidth: opt.width
  };
};
const makeTrendLines = (width2, nums, opts) => {
  return opts.map((opt) => makeTrendLine(width2, nums, opt));
};
const makeTrendDatasets = (width2, prices) => {
  return makeTrendLines(width2, prices, trendLineOpts);
};
const makeLabels = (width2, dates) => {
  return dates.slice(-width2);
};
const makeChartOptions = (width2) => {
  return {
    responsive: true,
    animation: { duration: 100 },
    maintainAspectRatio: false,
    elements: { point: { pointStyle: false } },
    plugins: { title: { display: false } },
    scales: {
      x: {
        type: "timeseries",
        time: { unit: width2 <= 20 ? "day" : "month" },
        adapters: { date: { locale: enUS } },
        grid: { display: true, color: hsla(cols.greyMd) },
        ticks: {
          display: true,
          font: { size: 10 },
          maxRotation: 90,
          minRotation: 90
        }
      },
      y: {
        position: "left",
        grid: { display: true, color: hsla(cols.greyMd) },
        ticks: {
          display: true,
          callback: (value) => {
            return (Number(value) * 100).toFixed(1) + "%";
          }
        },
        afterFit: (scaleInstance) => scaleInstance.width = 48
      }
      // y1: {
      // 	position: 'right',
      // 	grid: { display: false },
      // 	ticks: { display: false },
      // 	afterFit: (scaleInstance) => (scaleInstance.width = 0)
      // }
    }
  };
};
const TrendChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labels;
  let trendDatasets;
  let chartOptions;
  Chart.register(...registerables);
  Chart.defaults.plugins.legend.display = false;
  let { width: width2 } = $$props;
  let { hists = [] } = $$props;
  let chartElement;
  let chart;
  if ($$props.width === void 0 && $$bindings.width && width2 !== void 0)
    $$bindings.width(width2);
  if ($$props.hists === void 0 && $$bindings.hists && hists !== void 0)
    $$bindings.hists(hists);
  labels = makeLabels(width2, hists.map((hist) => hist.date));
  trendDatasets = makeTrendDatasets(width2, hists.map((hist) => hist.close));
  chartOptions = makeChartOptions(width2);
  {
    {
      try {
        chart.destroy();
      } catch {
      }
      chart = new DefaultChart(
        chartElement,
        {
          type: "line",
          data: {
            labels,
            datasets: [
              ...trendDatasets,
              {
                type: "line",
                yAxisID: "y",
                data: hists.map((_) => 0),
                label: `${0}`,
                borderColor: hsla(cols.greyLt),
                backgroundColor: hsla(cols.greyLt),
                borderWidth: 1
              }
            ]
          },
          options: chartOptions
        }
      );
    }
  }
  return `<canvas${add_attribute("this", chartElement, 0)}></canvas>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{color:#fafafa;background-color:#18181b}",
  map: null
};
let width = 240;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="flex flex-col space-y-4">${each(data.data, (d) => {
    return `<div class="flex flex-col space-y-2"><div><!-- HTML_TAG_START -->${d.quote.symbol.name}<!-- HTML_TAG_END --></div>
			<div class="h-36">${validate_component(SmasChart, "SmasChart").$$render($$result, { width, hists: d.hists }, {}, {})}</div>
			<div class="h-36">${validate_component(TrendChart, "TrendChart").$$render($$result, { width, hists: d.hists }, {}, {})}</div>
		</div>`;
  })}</div>

`;
});
export {
  Page as default
};
