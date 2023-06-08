<script lang="ts">
	import SmasChart from '$lib/charts/SmasChart.svelte';
	import TrendChart from '$lib/charts/TrendChart.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let width = 240;
</script>

<div class="flex flex-col space-y-4">
	{#each data.data as d}
		<div class="flex flex-col space-y-2">
			<div>{@html d.quote.symbol.name}</div>
			<div class="h-36">
				<SmasChart {width} hists={d.hists} />
			</div>
			<div class="h-36">
				<TrendChart {width} hists={d.hists} />
			</div>
		</div>
	{/each}
</div>

<!-- <style lang="postcss">
	:global(html) {
		color: theme(colors.zinc.50);
		background-color: theme(colors.zinc.900);
	}
</style> -->
