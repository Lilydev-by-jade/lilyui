<script lang="ts">
	import { slide } from 'svelte/transition';

	import { ChevronDown } from 'lucide-svelte';

	import { SelectItem } from '$lib';
	import type { SelectOption } from '$lib/types/component';

	export let id: string | undefined;
	export let disabled: boolean | undefined = false;

	export let placeholder: string | undefined;
	export let value: any | undefined = '';
	export let open: boolean = false;
	export let items: SelectOption[];

	export let chevronSize = '20';
	export let noChevron = false;
	export let animateChevron = true;

	let label: string;

	$: items.forEach((item) => {
		if (value === item.value) {
			label = item.label;
		}
	});
</script>

<!-- TODO: This needs to be accessible! Make sure it adheres to https://www.w3.org/WAI/ARIA/apg/patterns/listbox/ -->
<button
	class="
		relative flex place-items-center px-3 py-2 rounded-md shadow-sm cursor-pointer
		dark:shadow-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200
		disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-400 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-400
		{$$restProps.class}
	"
	on:click={() => (open = !open)}
	{id}
	{disabled}
>
	{#if !noChevron}
		<ChevronDown
			size={chevronSize}
			class="absolute right-2.5 transition-transform pointer-events-none {open &&
			animateChevron
				? 'rotate-180'
				: ''}"
		/>
	{/if}
	{#if label === null || label === undefined}
		<p class="">{placeholder}</p>
	{:else}
		<p>{label}</p>
	{/if}
	{#if open}
		<div
			class="absolute flex flex-col z-10 top-[85%] left-0 right-0 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800"
			transition:slide={{ duration: 200 }}
		>
			{#each items as { label: itemLabel, value: itemValue }}
				<SelectItem
					value={itemValue}
					selected={itemValue === value}
					on:click={() => {
						value = itemValue;
						label = itemLabel;
					}}>{itemLabel}</SelectItem
				>
			{/each}
		</div>
	{/if}
</button>
