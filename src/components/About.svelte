<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: false
	};
</script>

<div
	use:inview={options}
	on:inview_change={({ detail }: CustomEvent<ObserverEventDetails>) => (isInView = detail.inView)}
	id="about"
	class="w-full px-[10%] md:px-8 flex items-center md:flex-col-reverse gap-10 font-orbitron"
>
	<div class="left w-[40%] md:w-full flex justify-center">
		<div class="img relative w-[350px] h-[450px] p-[0.18rem] xl:w-[90%]">
			<img
				src="/images/glossy-spacewoman.webp"
				class="mask mask-squircle size-full object-cover bg-main"
				alt=""
			/>
		</div>
	</div>
	<div class="right w-[60%] md:w-full flex flex-col gap-5">
		<p
			class={`text-color-1 text-[3rem] md:text-[2rem] text-orange-300 font-bold ${isInView ? 'translate-x-0 transition-all duration-[1s]' : 'translate-x-[100px]'}`}
		>
			About <img class="dx inline w-[100px]" src="/images/coooo.svg" alt="" /> <br /><span
				class="text-[2.5rem]">Joji Dao</span
			>
		</p>
		<p
			class={`text-[0.9rem] md:text-[0.7rem] font-sora ${isInView ? 'translate-y-0 opacity-[1] transition-all duration-[1s]' : 'translate-y-[120px] opacity-0'}`}
		>
			Joji Dao is a community that is built for helping Crypto projects grow in Nigeria by hosting
			IRL events and online community development. <br /><br />The first active Crypto community in
			Ekiti State built for onboarding and empowering individuals in Crypto and Web3. <br /><br />We
			are also passionate about helping Crypto projects reach their full potential across many
			Nigeria regions.
		</p>
	</div>
</div>

<style>
	.img::before {
		@apply mask mask-squircle;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: linear-gradient(180deg, rgb(var(--color-3)), rgb(var(--color-4)));
	}
</style>
