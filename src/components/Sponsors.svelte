<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	let isInView: any = $state();
	const options: Options = {
		unobserveOnEnter: false
	};

	const sponsors = $state([
		{
			name: 'Offchain',
			image: '/images/offchain.webp',
			link: 'https://offchain.social/'
		},
		{
			name: 'Core DAO',
			image: '/images/core.webp',
			link: 'https://coredao.org/'
		},
		{
			name: 'QBX',
			image: '/images/qbx.webp',
			link: 'https://qiibeefoundation.org/'
		},
		{
			name: 'Gimme',
			image: '/images/gimme2.png',
			link: 'https://gimme.finance/'
		}
	]);
</script>

<div
	class={`my-20 px-2 ${isInView ? 'translate-y-0 transition-all duration-[1s]' : 'translate-y-[20px]'}`}
	id="sponsors"
	use:inview={options}
	oninview_change={({ detail }: CustomEvent<ObserverEventDetails>) => (isInView = detail.inView)}
>
	<p class="text-[2.5rem] md:text-[2rem] text-center font-sora font-semibold mb-2">Our Partners</p>

	<div class="item-conatiner w-full flex flex-wrap gap-4 justify-center">
		{#each sponsors as sponsor}
			<div
				class="sponsor-item size-[220px] md:size-[150px] relative mask mask-hexagon-2 p-[0.1rem] flex items-center justify-center"
			>
				<div
					class="size-full inner mask mask-hexagon-2 bg-black flex flex-col justify-center items-center"
				>
					<a href={sponsor.link} target="_blank">
						<img class="w-[120px] md:size-[80px] object-contain" src={sponsor.image} alt="" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.sponsor-item::before {
		@apply mask mask-circle animate-spin;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: linear-gradient(
			90deg,
			transparent,
			transparent,
			transparent,
			transparent,
			rgb(var(--color-3)),
			rgb(var(--color-4))
		);
	}
</style>
