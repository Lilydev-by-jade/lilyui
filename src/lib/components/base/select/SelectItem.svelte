<script lang="ts">
	export let selected: boolean = false;
</script>

<button
	class="{$$restProps.class} px-4 py-2 text-left transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 {selected
		? 'bg-zinc-200 dark:bg-zinc-700'
		: ''}"
	on:click
>
	<slot />
</button>
