<script lang="ts">
	export let tooltip: string;
	export let align: 'top' | 'bottom' | 'left' | 'right';
	export let disableCollision: boolean = true;

	const alignment = {
		top: 'left-[50%] -translate-x-1/2 bottom-[115%]',
		bottom: 'left-[50%] -translate-x-1/2 top-[115%]',
		left: 'top-[50%] -translate-y-1/2 right-[102%]',
		right: 'top-[50%] -translate-y-1/2 left-[102%]'
	};

	function getAlignmentClasses(): string {
		switch (align) {
			case 'top':
				return alignment.top;
			case 'bottom':
				return alignment.bottom;
			case 'left':
				return alignment.left;
			case 'right':
				return alignment.right;
		}
	}
</script>

<div class="tooltip-parent relative {$$restProps.class}">
	<span
		class="
			tooltip absolute max-w-[64ch] overflow-ellipsis py-1 px-2 text-center rounded-md
			shadow-sm dark:shadow-lg bg-zinc-50 dark:bg-zinc-700
			z-10 opacity-0 invisible transition-all
			{disableCollision ? 'pointer-events-none' : ''}
			{getAlignmentClasses()}
		">{tooltip}</span
	>
	<div class="*:w-full">
		<slot />
	</div>
</div>

<style lang="postcss">
	.tooltip-parent:hover .tooltip {
		@apply opacity-100 visible;
	}

	.tooltip {
		width: max-content;
	}
</style>
