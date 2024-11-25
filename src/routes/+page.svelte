<script lang="ts">
	// your script goes here
	import Header from '$components/Header.svelte';
	import { gsap } from 'gsap';
	$effect(() => {
		gsap.from('.tetg', {
			duration: 1,
			y: 60,
			ease: 'power1.inOut',
			stagger: 0.1
		});

		gsap.from('.kuk', {
			duration: 1,
			x: 120,
			ease: 'power1.inOut',
			stagger: 0.1
		});
	});
</script>

<Header />
<main
	class="w-full h-screen md:h-auto bg-[url('/images/main-bg-9.webp')] bg-cover bg-no-repeat px-[10%] md:px-5 relative flex md:flex-col gap-10 md:gap-2 items-center justify-center"
>
	<div
		class="w-full h-full md:h-[500px] md:pt-[50px] gap-4 flex flex-col justify-center md:items-center relative z-[1]"
	>
		<p
			class="tetg text-[1.2rem] md:text-[0.8rem] text-color-4 font-varela uppercase tracking-[3px]"
		>
			Nigeria's Largest
		</p>
		<p class="tetg text-[4rem] md:text-[2.2rem] font-unbounded font-bold leading-none">
			B<span class="sub-text">l</span><img
				src="/images/eth.webp"
				class="size-[65px] md:size-[30px] inline mr-[-12px] md:mr-[-4px] animate-bounce duration-[2s]"
				alt=""
			/><span class="sub-text">c</span>k<span class="sub-text">c</span>h<span class="sub-text"
				>a</span
			>i<span class="sub-text">n</span>
		</p>
		<p
			class="tetg text-[1.5rem] md:text-[0.8rem] text-color-1 font-normal font-unbounded leading-none md:text-center"
		>
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
		<p class="tetg text-color-1/70 text-[0.7rem] md:text-[0.7rem] md:text-center font-light">
			Join JOJI DAO: a groundbreaking event connecting <br /> technology and Web3 innovation.
		</p>

		<div
			class="tetg buttons text-[0.7rem] font-medium font-unbounded flex gap-2 flex-wrap md:justify-center"
		>
			<button
				class="h-[40px] md:rounded-full px-4 text-color-1 flex gap-2 items-center justify-center bg-color-4"
				>Prizes & Giveaways 🎁</button
			>
			<button
				class="h-[40px] md:rounded-full bg-color-3 px-6 text-color-1 flex gap-2 items-center justify-center"
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

	<div class="right w-full z-[1] flex items-center justify-center flex-wrap gap-5">
		<img
			class="tronut kuk w-[220px] h-[300px] rounded-full object-cover xl:w-[170px] xl:h-[230px]"
			src="/images/digiboy.webp"
			alt=""
		/>
		<img
			class="kuk mask mask-squircle size-[150px] object-cover xl:size-[100px]"
			src="/images/rocket-2.jpeg"
			alt=""
		/>
		<img
			class="kuk mask mask-hexagon size-[140px] rounded-full object-contain"
			style="flex-basis: 100%"
			src="/images/locked.jpeg"
			alt=""
		/>
	</div>
</main>

<style>
	main::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(25px);
	}

	/*
	.sub-text {
		font-size: 5rem;
	}

	@media (max-width: 768px) {
		.sub-text {
			font-size: 1.8rem;
		}
	} */
</style>
