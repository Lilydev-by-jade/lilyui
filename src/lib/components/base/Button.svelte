<script lang="ts">
	import { fade } from 'svelte/transition';

	import { Loader2 } from 'lucide-svelte';

	// TODO: this component should support all attributes for both tags (button and anchor) in the future
	export let disabled: boolean | undefined = undefined;
	export let loading: boolean = false;
	export let href: string | undefined = undefined;
	export let target: string | '_blank' | '_self' | '_parent' | '_top' | undefined = undefined;

	let styles = `
		relative flex justify-center place-items-center px-3 py-2 gap-2 rounded-md shadow-sm dark:shadow-lg transition-all scale-100 active:scale-[97%]
		bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-50 hover:dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200
		disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-400 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-400
		disabled:scale-100 ${$$restProps.class}
	`;
</script>

{#if href === undefined}
	<button class={styles} {disabled} on:click>
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
{:else}
	<a class={styles} {href} {target}>
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
	</a>
{/if}
