import { cols, hsla } from '$lib/helpers'
import { Chart, registerables } from 'chart.js';

const makeDefaultChart = () => {
	Chart.register(...registerables);

	Chart.defaults.plugins.legend.display = false;
	Chart.defaults.plugins.legend.display = false;
	Chart.defaults.font.size = 12;
	Chart.defaults.font.weight = 'light';
	Chart.defaults.color = hsla(cols.greyLt);

	return Chart;
};

export const DefaultChart = makeDefaultChart();
