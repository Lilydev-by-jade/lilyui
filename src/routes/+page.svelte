<script lang="ts">
	// Lib

	import type { SelectOption } from '$lib/types/component';
	import { Button, Select } from '$lib';

	// Local

	import { Section } from '$lib/local/components';

	import { ColorTheme } from '$lib/local/types';
	import { theme } from '$lib/local/stores';

	import { Plus, Minus } from 'lucide-svelte';

	let selectItems: SelectOption[] = [
		{ value: ColorTheme.Dark, label: 'Dark' },
		{ value: ColorTheme.Light, label: 'Light' }
	];

	let loadingSelectItems: SelectOption[] = [
		{ value: true, label: 'True' },
		{ value: false, label: 'False' }
	];

	// The following can be stores, but im tired :(

	function incrementButtonCount() {
		buttonCount += 1;
	}

	function decrementButtonCount() {
		buttonCount -= 1;
	}

	let buttonCount = 0;

	function setLoading() {
		isLoading = true;
		setTimeout(() => {
			isLoading = false;
		}, 2000);
	}

	$: isLoading = false;
</script>

<svelte:head>
	<title>LilyUI Examples</title>
</svelte:head>

<div class="flex flex-col gap-12">
	<Section label="Select Component">
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
			class="w-44"
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

		<label for="select_loading">Select (Loading)</label>
		<Select
			id="select_loading"
			class="w-96"
			placeholder="Choose is loading"
			items={loadingSelectItems}
			bind:value={isLoading}
			noChevron
		/>

		<label for="select_disabled">Select (disabled)</label>
		<Select
			id="select_disabled"
			class="w-96"
			placeholder="Choose is loading"
			items={loadingSelectItems}
			bind:value={isLoading}
			disabled
		/>
	</Section>
	<Section label="Button Component">
		<p>Counter Example</p>
		<div class="flex place-items-center gap-4">
			<div class="flex flex-col grow gap-2">
				<Button class="grow" on:click={incrementButtonCount}>Increment</Button>
				<Button class="grow" on:click={decrementButtonCount}>Decrement</Button>
			</div>
			<p class="text-2xl font-semibold pb-1.5">{buttonCount}</p>
		</div>

		<p>Counter Example (with icons)</p>
		<div class="flex place-items-center gap-4">
			<div class="flex flex-col grow gap-2">
				<Button on:click={incrementButtonCount}>
					<svelte:fragment slot="icon">
						<Plus size="19" />
					</svelte:fragment>
					Increment
				</Button>
				<Button on:click={decrementButtonCount}>
					<svelte:fragment slot="icon">
						<Minus size="19" />
					</svelte:fragment>
					Decrement
				</Button>
			</div>
			<p class="text-2xl font-semibold pb-1.5">{buttonCount}</p>
		</div>

		<p>Disabled</p>
		<div class="flex flex-col place-items-center gap-2">
			<Button class="w-full" on:click={decrementButtonCount} disabled>
				<svelte:fragment slot="icon">
					<Minus size="19" />
				</svelte:fragment>
				Decrement
			</Button>
		</div>

		<p>Loading (loading should be used with the `disabled` attribute)</p>
		<div class="flex flex-col place-items-center gap-2">
			<Button class="w-full" on:click={setLoading} disabled={isLoading} loading={isLoading}>
				Load!
			</Button>
		</div>
	</Section>
</div>
