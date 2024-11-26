<script lang="ts">
	// your script goes here
	import Header from '$components/Header.svelte';
	import About from '$components/About.svelte';
	import Footer from '$components/Footer.svelte';
	import Purpose from '$src/components/Purpose.svelte';
	import Overview from '$src/components/Overview.svelte';
</script>

<Header />
<main
	class="w-full h-screen md:h-auto bg-cover bg-no-repeat px-[10%] md:px-5 relative flex md:flex-col gap-10 md:gap-2 items-center justify-center"
>
	<div
		class="w-[60%] md:w-full h-full md:h-[400px] md:pt-[60px] gap-3 flex flex-col justify-center md:items-center relative z-[1]"
	>
		<p
			class="tetg text-[1.2rem] md:text-[0.8rem] text-color-4 font-orbitron uppercase tracking-[4px]"
		>
			The Largest
		</p>
		<p class="tetg text-[4rem] md:text-[2.2rem] font-orbitron font-bold leading-none uppercase">
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
			class="tetg buttons text-[0.7rem] font-bold font-orbitron tracking-[0.5px] flex gap-2 flex-wrap md:justify-center"
		>
			<button
				class="h-[40px] rounded-full px-4 text-color-1 flex gap-2 items-center justify-center bg-gradient-to-r from-color-4 to-color-3/50"
				>Prizes & Giveaways 🎁</button
			>
			<button
				class="h-[40px] rounded-full border border-color-3 overflow-hidden pl-6 text-color-1 flex gap-2 items-center justify-center"
				>Join Us <span class="size-[40px] rounded-full bg-color-3 flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</span>
			</button>
		</div>
	</div>

	<div
		class="right w-[40%] relative md:w-full z-[1] flex items-center justify-center flex-wrap gap-3"
	>
		<img class="kuk kuk3 size-full object-contain" src="/images/bg-twurl.png" alt="" />
		<img class="kuk kuk3 size-[80%] object-contain absolute" src="/images/wwh.png" alt="" />
	</div>
</main>
<About />
<Overview />
<Purpose />
<Footer />
