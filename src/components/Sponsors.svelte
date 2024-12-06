<script lang="ts">
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
		}
	]);
</script>

<div class="my-20 px-5" id="sponsors">
	<p class="text-[2.3rem] md:text-[1.3rem] text-center font-sora font-semibold mb-10">
		Partners & Sponsors 🤝
	</p>

	<div class="item-conatiner w-full flex flex-wrap gap-4 justify-center">
		{#each sponsors as sponsor}
			<div
				class="item w-[350px] md:w-[95%] h-[170px] rounded-3xl border border-color-1/20 bg-main/10 p-4 flex flex-col justify-center items-center"
			>
				<p>{sponsor.name}</p>
				<a href={sponsor.link} target="_blank">
					<img class="w-[150px]" src={sponsor.image} alt="" />
				</a>
			</div>
		{/each}
	</div>
</div>
