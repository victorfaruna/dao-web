<script>
	// your script goes here
	import Header from '$components/Header.svelte';
</script>

<main class="w-full h-[650px] px-[10%] md:px-5 flex flex-col items-center justify-center">
	<Header />
	<div class="h-full text-center gap-2 flex flex-col items-center justify-center relative z-[1]">
		<img
			src="/images/megaphone.webp"
			class="size-[70px] absolute top-[20px] left-[-50px] md:top-[30px] md:left-0"
			alt=""
		/>
		<img
			src="/images/whatever.webp"
			class="size-[70px] absolute top-[20px] right-[-50px] md:top-[30px] md:right-0"
			alt=""
		/>
		<img
			src="/images/money.webp"
			class="size-[40px] absolute bottom-[20px] md:bottom-[30px] right-[-50px] md:right-0"
			alt=""
		/>
		<img
			src="/images/binance.webp"
			class="size-[40px] absolute bottom-[20px] left-[-50px] md:bottom-[30px] md:left-0"
			alt=""
		/>

		<p class="text-[1.2rem] text-color-4 font-varela uppercase tracking-[3px]">Nigeria's Largest</p>
		<p class="text-[6rem] md:text-[3.5rem] font-unbounded font-bold leading-none">
			B<span class="sub-text">l</span><img
				src="/images/btc-3d.webp"
				class="size-[100px] md:size-[35px] inline"
				alt=""
			/>c<span class="sub-text">k</span>c<span class="sub-text">h</span>a<span class="sub-text"
				>i</span
			>n
		</p>
		<p class="text-[3rem] md:text-[1.1rem] font-normal font-varela">
			Community & <span class="text-color-4 font-bold">Hangout Event</span> in Ekiti.
		</p>
		<p class="text-color-1/80 text-[0.9rem] md:text-[0.6rem]">
			Dive into the future at JOJI DAO – a cutting-edge event bridging technology and <span
				class="text-color-4">Web3 innovation.</span
			>
			Explore decentralized solutions,
			<span class="text-color-3">connect with visionaries</span>, and shape the next wave of digital
			transformation!
		</p>

		<div class="buttons text-[0.7rem] font-semibold text-black">
			<button class="h-[40px] rounded-md bg-color-4 px-4">Prizes and Giveaways</button>
			<button class="h-[40px] rounded-md bg-color-3 px-6">Join US</button>
		</div>
	</div>
</main>
