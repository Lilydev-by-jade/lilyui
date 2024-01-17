<script lang="ts">
	// Lib

	import type { SelectOption } from '$lib/types/component';
	import { Button, Select, Toggle, Tooltip } from '$lib';
	import {
		Bluesky,
		Discord,
		Github,
		Modrinth,
		Rust,
		Svelte,
		SvelteOutline,
		Tailwind,
		Twitter
	} from '$lib';

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

	$: toggle = false;
</script>

<svelte:head>
	<title>LilyUI Examples</title>
</svelte:head>

<div class="flex flex-row gap-12">
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
				placeholder="Choose theme..."
				items={selectItems}
				bind:value={$theme}
				noChevron
			/>

			<label for="select_loading">Select (Loading)</label>
			<Select
				id="select_loading"
				placeholder="Choose is loading"
				items={loadingSelectItems}
				bind:value={isLoading}
				noChevron
			/>

			<label for="select_disabled">Select (disabled)</label>
			<Select
				id="select_disabled"
				placeholder="Choose is loading"
				items={loadingSelectItems}
				bind:value={isLoading}
				disabled
			/>
		</Section>

		<Section label="Tooltip Component">
			<Tooltip tooltip="This is a tooltip!" align="top">
				<p>Tooltips!</p>
			</Tooltip>

			<Tooltip tooltip="This is a top-aligned tooltip!" align="top">
				<Button>Top tooltip!</Button>
			</Tooltip>
			<Tooltip tooltip="This is a bottom-aligned tooltip!" align="bottom">
				<Button>Bottom tooltip!</Button>
			</Tooltip>
			<Tooltip tooltip="This is a right-aligned tooltip!" align="right">
				<Button>Right tooltip!</Button>
			</Tooltip>
			<Tooltip tooltip="This is a left-aligned tooltip!" align="left">
				<Button>Left tooltip!</Button>
			</Tooltip>

			<Tooltip
				tooltip="This is another tooltip! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, temporibus."
				align="top"
			>
				<Button>This is a <em>really</em> long tooltip</Button>
			</Tooltip>
		</Section>
		<Section label="Toggle Component">
			<div class="flex justify-between">
				<label for="toggle">Toggled: {toggle}</label>
				<Toggle bind:value={toggle} id="toggle" />
			</div>
			<div class="flex justify-between">
				<label for="toggle">Toggle with custom classes</label>
				<Toggle
					bind:value={toggle}
					id="toggle"
					class="peer-checked:dark:bg-blue-400 peer-checked:bg-blue-500"
				/>
			</div>
			<div class="flex justify-between">
				<label for="toggle">Toggle (disabled)</label>
				<Toggle bind:value={toggle} id="toggle" disabled />
			</div>
		</Section>
	</div>
	<div class="flex flex-col gap-12">
		<Section label="Button Component">
			<h2 class="text-xl font-semibold mt-3">Button</h2>
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
						<Bluesky size="19" />
					</svelte:fragment>
					Bluesky
				</Button>
			</div>

			<p>Disabled with tooltip</p>
			<Tooltip tooltip="woah this is disabled" align="right">
				<Button class="w-full" on:click={decrementButtonCount} disabled>
					<svelte:fragment slot="icon">
						<Bluesky size="19" />
					</svelte:fragment>
					Bluesky
				</Button>
			</Tooltip>

			<p>Loading (loading should be used with the `disabled` attribute)</p>
			<div class="flex flex-col place-items-center gap-2">
				<Button
					class="w-full"
					on:click={setLoading}
					disabled={isLoading}
					loading={isLoading}
				>
					Load!
				</Button>
			</div>

			<h2 class="text-xl font-semibold mt-3">Button Link</h2>
			<Button href="/test">Link Button!</Button>
			<Button href="/test">
				<svelte:fragment slot="icon">
					<Modrinth size="19" />
				</svelte:fragment>
				Link Button with icon!
			</Button>

			<Button href="https://github.com/Lilydev-by-jade/lilyui" target="_blank">
				<svelte:fragment slot="icon">
					<Github size="19" />
				</svelte:fragment>
				Link Button with icon!
			</Button>
		</Section>
	</div>
	<div class="flex flex-col gap-12">
		<Section label="Icon Components">
			<div class="flex flex-col gap-4">
				<h2 class="text-xl font-semibold mt-3">Brand</h2>
				<div class="flex flex-col gap-2">
					<h3 class="text-md">General</h3>
					<div class="flex gap-3">
						<Bluesky size="40" />
						<Github size="40" />
						<Twitter size="40" />
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-md">Discord</h3>
					<div class="flex gap-3">
						<Discord size="40" />
						<Discord size="40" color="#ee7df5" />
						<Discord size="40" brand />
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-md">Modrinth</h3>
					<div class="flex gap-3">
						<Modrinth size="40" />
						<Modrinth size="40" color="#ee7df5" />
						<Modrinth size="40" brand />
					</div>
				</div>

				<h2 class="text-xl font-semibold mt-3">Stack</h2>

				<div class="flex flex-col gap-2">
					<h3 class="text-md">Svelte - Brand Colors</h3>
					<div class="flex gap-3">
						<Svelte size="40" brand />
						<SvelteOutline size="40" brand />
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-md">Svelte - Custom Colors</h3>
					<div class="flex gap-3">
						<Svelte size="40" />
						<SvelteOutline size="40" />
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-md">Rust</h3>
					<div class="flex gap-3">
						<Rust size="40" />
						<Rust size="40" brand />
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-md">Tailwind</h3>
					<div class="flex gap-3">
						<Tailwind size="40" />
						<Tailwind size="40" brand />
					</div>
				</div>
			</div>
		</Section>
	</div>
</div>
