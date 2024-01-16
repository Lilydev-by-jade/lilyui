<!-- This component is based on Lucide's Svelte component: https://github.com/lucide-icons/lucide/blob/main/packages/lucide-svelte/src/Icon.svelte -->
<script lang="ts">
	export let size: number | string = 24;
	export let color: string = 'currentColor';
	export let brand: boolean = false;
</script>

<svg
	class={$$restProps.class}
	aria-hidden="true"
	xmlns="http://www.w3.org/2000/svg"
	fill={brand ? '#38bdf8' : color}
	viewBox="0 0 20 14"
	width={size}
	height={size}
>
	<path
		d="M9.782.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231C14.488 3.365 13.551.6 9.782.72ZM4.8 6.979A4.772 4.772 0 0 0 0 11.151a3.43 3.43 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231C9.51 9.623 8.573 6.853 4.8 6.979Z"
	/>
</svg>
