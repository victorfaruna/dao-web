<script lang="ts">
	// your script goes here
	import Header from '$components/Header.svelte';
	import { gsap } from 'gsap';
	$effect(() => {
		gsap.from('.tetg', {
			duration: 1,
			y: 100,
			ease: 'back.out',
			stagger: 0.1
		});

		gsap.from('.chain-img', {
			duration: 2,
			x: 200,
			ease: 'back.out'
		});

		gsap.to('.chain-img', {
			duration: 10,
			repeat: Infinity,
			rotate: 360,
			ease: 'none'
		});
		gsap.to('.chain-img', {
			scale: 1.09, // Increase size
			duration: 0.8, // Duration of the animation
			repeat: -1, // Infinite loop
			yoyo: true, // Reverse the animation
			ease: 'power1.inOut' // Smooth easing
		});
	});
</script>

<Header />
<main
	class="w-full h-screen sm:h-[650px] px-[10%] md:px-5 flex flex-col items-center justify-center"
>
	<div class="w-full h-full gap-4 flex flex-col justify-center text-center items-center">
		<p
			class="tetg font-bold text-[1.2rem] md:text-[0.8rem] text-color-3 font-varela uppercase tracking-[3px]"
		>
			Nigeria's Largest
		</p>
		<p class="tetg text-[5rem] md:text-[2.2rem] font-unbounded font-bold leading-none">
			B<span class="sub-text">l</span><img
				src="/images/eth.webp"
				class="size-[65px] md:size-[30px] inline mr-[-12px] md:mr-[-4px] animate-bounce duration-[2s]"
				alt=""
			/><span class="sub-text">c</span>k<span class="sub-text">c</span>h<span class="sub-text"
				>a</span
			>i<span class="sub-text">n</span>
		</p>
		<p class="tetg text-[1.5rem] md:text-[1rem] font-normal font-unbounded leading-none">
			Community & <span class="text-color-4 font-bold">Hangout Event</span> in Ekiti&nbsp;<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-4 inline"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
				/>
			</svg>
		</p>
		<p class="tetg text-color-1/60 text-[0.7rem] md:text-[0.7rem] font-light">
			Join JOJI DAO: a groundbreaking event connecting technology and Web3 innovation.
		</p>

		<div
			class="tetg buttons text-[0.7rem] font-medium font-unbounded flex gap-2 flex-wrap justify-center"
		>
			<button
				class="h-[40px] rounded-full px-4 text-color-1 flex gap-2 items-center justify-center bg-gradient-to-r from-color-3 to-color-4"
				>Prizes & Giveaways 🎁</button
			>
			<button
				class="h-[40px] rounded-full border-[1px] border-color-3 bg-main px-6 text-color-1 flex gap-2 items-center justify-center"
				>Join Us<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div class="right w-full z-[1] md:hidden flex items-center justify-center">
		<!-- <div class="inner relative">
			<img src="/images/on_chain.webp" alt="" class="chain-img w-[500px] object-cover" />
		</div> -->
	</div>
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
