<script lang="ts">
	export let value: boolean | undefined;
	export let id: string;
	export let disabled: boolean = false;
</script>

<!-- Loosely based on Flowbite's toggle: https://flowbite.com/docs/forms/toggle -->

<label
	class="relative inline-flex items-center cursor-pointer {disabled ? 'cursor-not-allowed' : ''}"
>
	<input {id} type="checkbox" class="opacity-0 sr-only peer" bind:checked={value} {disabled} />
	<div
		class="
			w-11 h-6 rounded-full transition-colors peer shadow-sm dark:shadow-2xl
			bg-zinc-300 dark:bg-zinc-700 {disabled
			? 'peer-checked:bg-zinc-300 peer-checked:dark:bg-zinc-700'
			: 'peer-checked:bg-pink-300 peer-checked:dark:bg-pink-300'}
			after:absolute after:w-[18px] after:h-[18px] after:top-1/2 after:-translate-y-1/2
			{disabled ? 'after:bg-zinc-200 after:dark:bg-zinc-500' : 'after:bg-zinc-50 after:dark:bg-zinc-200'}
			after:rounded-full after:start-[4px] after:transition-transform
			peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
			{$$restProps.class}
		"
	/>
</label>
