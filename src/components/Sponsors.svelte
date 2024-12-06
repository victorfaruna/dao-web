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
</script>

<div class="my-20" id="about">
	<p class="text-[2.3rem] md:text-[1.3rem] text-center font-sora font-semibold mb-10">
		Partners & Sponsors 🤝
	</p>
	<div class="relative flex overflow-hidden gap-20">
		<div class="py-5 animate-marquee whitespace-nowrap flex items-center gap-20">
			{#each sponsors as sponsor}
				<a href={sponsor.link}><img class="w-[130px]" src={sponsor.image} alt="" /></a>
			{/each}
		</div>
		<div class="absolute top-0 py-5 animate-marquee2 whitespace-nowrap flex items-center gap-20">
			{#each sponsors as sponsor}
				<a href={sponsor.link}><img class="w-[150px]" src={sponsor.image} alt="" /></a>
			{/each}
		</div>
	</div>
</div>
