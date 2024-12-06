<script lang="ts">
	const sponsors = $state([
		{
			name: 'Offchain',
			image: '/images/offchain.webp',
			link: 'https://offchain.social/'
		},
		{
			name: 'Core',
			image: '/images/core.webp',
			link: 'https://coredao.org/'
		},
		{
			name: 'QBX',
			image: '/images/qbx.webp',
			link: 'https://qiibeefoundation.org/'
		}
	]);

	$effect(() => {
		setInterval(() => {
			sponsors.push({
				name: 'Offchain',
				image: '/images/offchain.webp',
				link: ''
			});
			sponsors.push({
				name: 'Core',
				image: '/images/core.webp',
				link: ''
			});
			sponsors.push({
				name: 'QBX',
				image: '/images/qbx.webp',
				link: ''
			});
		}, 800);
	});

	let scrollContainer: any;
	function autoScroll() {
		scrollContainer.scrollLeft += 10;
		requestAnimationFrame(autoScroll); // Smooth looping
	}
	$effect(() => {
		autoScroll();
	});
</script>

<div class="my-20" id="about">
	<p class="text-[2.3rem] md:text-[1.3rem] text-center font-sora font-semibold mb-10">
		Partners & Sponsors 🤝
	</p>
	<div
		bind:this={scrollContainer}
		class="marquee no-scrollbar w-full flex flex-nowrap overflow-x-auto gap-20 items-center scroll-smooth"
	>
		{#each sponsors as sponsor}
			<a href={sponsor.link} target="_blank" style="flex: 0 0 auto">
				<img
					src={sponsor.image}
					alt={sponsor.name}
					class="w-[140px] md:w-[90px] h-auto object-cover"
				/>
			</a>
		{/each}
	</div>
</div>
