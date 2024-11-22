<script>
	// your script goes here
	import Header from '$components/Header.svelte';
	import { gsap } from 'gsap';
	$effect(() => {
		gsap.from('.tetg', {
			duration: 1,
			y: 50,
			ease: 'back.out',
			stagger: 0.1
		});
	});
</script>

<Header />
<main class="w-full h-[700px] px-[10%] md:px-5 flex md:flex-col items-center justify-center">
	<div
		class="w-full h-full gap-4 flex flex-col justify-center relative z-[1] md:text-center md:items-center"
	>
		<p
			class="tetg text-[1.2rem] md:text-[0.8rem] text-color-4 font-varela uppercase tracking-[3px]"
		>
			Nigeria's Largest
		</p>
		<p class="tetg text-[4rem] md:text-[2.2rem] font-unbounded font-bold leading-none">
			B<span class="sub-text">l</span><img
				src="/images/eth.webp"
				class="size-[70px] md:size-[35px] inline mr-[-12px] md:mr-[-4px]"
				alt=""
			/><span class="sub-text">c</span>k<span class="sub-text">c</span>h<span class="sub-text"
				>a</span
			>i<span class="sub-text">n</span>
		</p>
		<p class="tetg text-[1.5rem] md:text-[1rem] font-normal font-unbounded leading-none">
			Community & <span class="text-color-3 font-bold">Hangout Event</span> in Ekiti.
		</p>
		<p class="tetg text-color-1/60 text-[0.7rem] md:text-[0.7rem] font-light mr-10">
			Join JOJI DAO: a groundbreaking event connecting technology and Web3 innovation. Discover
			decentralized solutions, network with visionaries, and shape the digital future!
		</p>

		<div class="tetg buttons text-[0.7rem] font-medium font-unbounded flex gap-2 flex-wrap">
			<button class="h-[40px] rounded-2xl bg-color-4 px-4 text-color-1">Prizes and Giveaways</button
			>
			<button class="h-[40px] rounded-2xl bg-color-3 px-6 text-color-1">Join Us</button>
		</div>
	</div>

	<div class="right w-full"></div>
</main>

<style>
	/* .sub-text {
		font-size: 5rem;
	}

	@media (max-width: 768px) {
		.sub-text {
			font-size: 1.8rem;
		}
	} */
</style>
