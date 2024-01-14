<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/local/stores';
</script>

<div class={$theme}>
	<div
		class="flex w-screen min-h-screen p-12 transition-colors duration-500 bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200"
	>
		<slot />
	</div>
</div>
