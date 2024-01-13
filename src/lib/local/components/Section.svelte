<script lang="ts">
	export let label: string;
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-2xl font-semibold mb-2">{label}</h1>
	<slot />
</div>
