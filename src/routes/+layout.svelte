<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/local/stores';
</script>

<div class={$theme}>
	<div
		class="flex w-screen h-screen p-12 bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200"
	>
		<slot />
	</div>
</div>
