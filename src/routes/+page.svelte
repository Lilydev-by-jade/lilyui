<script lang="ts">
	import type { SelectOption } from '$lib/types/component';
	import { Select } from '$lib';

	import { ColorTheme } from '$lib/local/types';
	import { theme } from '$lib/local/stores';

	let selectItems: SelectOption[] = [
		{ value: ColorTheme.Dark, label: 'Dark' },
		{ value: ColorTheme.Light, label: 'Light' }
	];
</script>

<div class="flex flex-col gap-4">
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<select bind:value={$theme}>
		<option value={ColorTheme.Dark}>Dark</option>
		<option value={ColorTheme.Light}>Light</option>
	</select>

	<label for="base_select">Select</label>
	<Select
		id="base_select"
		placeholder="Choose theme..."
		items={selectItems}
		bind:value={$theme}
	/>

	<label for="select_custom_width">Select (Custom width)</label>
	<Select
		id="select_custom_width"
		class="w-96"
		placeholder="Choose theme..."
		items={selectItems}
		bind:value={$theme}
	/>

	<label for="select_no_chevron_animation">Select (No chevron animation)</label>
	<Select
		id="select_no_chevron_animation"
		placeholder="Choose theme..."
		items={selectItems}
		bind:value={$theme}
		animateChevron={false}
	/>

	<label for="select_no_chevron">Select (No chevron)</label>
	<Select
		id="select_no_chevron"
		class="w-96"
		placeholder="Choose theme..."
		items={selectItems}
		bind:value={$theme}
		noChevron
	/>

	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>
