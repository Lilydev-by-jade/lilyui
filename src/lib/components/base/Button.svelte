<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	import { Loader2 } from 'lucide-svelte';

	export let loading: boolean = false;
	export let disabled: boolean | undefined = undefined;
</script>

<button
	class="
		{$$restProps.class}
		relative flex justify-center place-items-center px-3 py-2 gap-2 rounded-md shadow-sm dark:shadow-lg transition-all scale-100 active:scale-[97%]
		bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-50 hover:dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200
		disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-400 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-400
		disabled:scale-100
	"
	on:click
	{disabled}
>
	{#if !loading}
		<div
			transition:fade={{ duration: 50 }}
			class="absolute flex justify-center place-items-center gap-2"
		>
			<slot name="icon" />
			<slot />
		</div>
		<div class="invisible flex justify-center place-items-center">
			<slot name="icon" />
			<slot />
		</div>
	{:else}
		<div transition:fade={{ duration: 50 }} class="absolute">
			<Loader2 class="animate-spin" />
		</div>
		<div>
			<Loader2 class="invisible" />
		</div>
	{/if}
</button>
