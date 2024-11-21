<script>
	// your script goes here
	import Header from '$components/Header.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.fromTo(
			'.ito1',
			{
				y: 20,
				duration: 1,
				ease: 'power1.inOut'
			},
			{
				y: -10,
				duration: 1,
				rotateZ: 50,
				ease: 'power1.inOut'
			}
		);

		gsap.fromTo(
			'.ito2',
			{
				y: 20,
				duration: 1,
				ease: 'power1.inOut'
			},
			{
				y: -10,
				duration: 1,
				rotateZ: -50,
				ease: 'power1.inOut'
			}
		);
	});
</script>

<main class="w-full h-[650px] px-[10%] md:px-5 flex flex-col items-center justify-center">
	<Header />
	<div
		class="h-full text-center gap-2 md:gap-3 flex flex-col items-center justify-center relative z-[1]"
	>
		<img
			src="/images/megaphone.webp"
			class="ito1 size-[70px] absolute top-[20px] left-[-50px] md:top-[30px] md:left-0"
			alt=""
		/>
		<img
			src="/images/whatever.webp"
			class="ito2 size-[70px] absolute top-[20px] right-[-50px] md:top-[30px] md:right-0"
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

		<p class="text-[1.2rem] md:text-[0.8rem] text-color-4 font-varela uppercase tracking-[3px]">
			Nigeria's Largest
		</p>
		<p class="text-[6rem] md:text-[2.2rem] font-unbounded font-bold leading-none uppercase">
			B<span class="sub-text">l</span><img
				src="/images/eth.webp"
				class="size-[100px] md:size-[35px] inline mr-[-12px] md:mr-[-4px]"
				alt=""
			/><span class="sub-text">c</span>k<span class="sub-text">c</span>h<span class="sub-text"
				>a</span
			>i<span class="sub-text">n</span>
		</p>
		<p class="text-[3rem] md:text-[1rem] font-normal font-unbounded">
			Community & <span class="text-color-3 font-bold">Hangout Event</span> in Ekiti.
		</p>
		<p class="text-color-1/60 text-[0.9rem] md:text-[0.7rem] font-light tracking-[0.2px]">
			Join JOJI DAO: a groundbreaking event connecting technology and Web3 innovation. Discover
			decentralized solutions, network with visionaries, and shape the digital future!
		</p>

		<div class="buttons text-[0.7rem] font-medium font-unbounded flex gap-2">
			<button class="h-[40px] rounded-md bg-color-4 px-4 text-color-1">Prizes and Giveaways</button>
			<button class="h-[40px] rounded-md bg-color-3 px-6 text-color-1">Join Us</button>
		</div>
	</div>
</main>

<style>
	.sub-text {
		font-size: 5rem;
	}

	@media (max-width: 768px) {
		.sub-text {
			font-size: 1.8rem;
		}
	}
</style>
