<script>
	// your script goes here
	import Header from '$components/Header.svelte';
</script>

<main class="w-full h-[calc(100vh-180px)] px-[10%]">
	<Header />
	<div class="w-full h-full text-center gap-2 flex flex-col items-center justify-center">
		<p class="text-[1.2rem] text-color-4 font-varela uppercase tracking-[3px]">Nigeria's Largest</p>
		<p class="text-[8rem] font-unbounded font-bold">
			B<span class="sub-text">l</span><img
				src="/images/btc-3d.webp"
				class="w-[90px] h-[90px] inline"
				alt=""
			/>c<span class="sub-text">k</span>c<span class="sub-text">h</span>a<span class="sub-text"
				>i</span
			>n
		</p>
		<p class="text-[3rem] font-normal font-varela">
			Community & <span class="text-color-4 font-bold">Hangout Event</span> in Ekiti.
		</p>
		<p class="text-color-1/80 text-[1rem]">
			Dive into the future at JOJI DAO – a cutting-edge event bridging technology and <span
				class="text-color-4">Web3 innovation.</span
			> <br /> Explore decentralized solutions,
			<span class="text-color-3">connect with visionaries</span>, and shape the next wave of digital
			transformation!
		</p>

		<div class="buttons text-[0.9rem] text-main font-semibold">
			<button class="h-[50px] rounded-md bg-color-4 px-10">Awards and Giveaways</button>
			<button class="h-[50px] rounded-md bg-color-3 px-10">Join US</button>
		</div>
	</div>
</main>
