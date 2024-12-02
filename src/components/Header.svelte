<script>
	// your script goes here
	import Logo from '$components/Logo.svelte';
	import { onMount } from 'svelte';
	let isDrawerActive = $state(false);
	onMount(() => {
		if (isDrawerActive) {
			document.body.style.overflow = 'hidden';
		}
	});
</script>

<section
	class={`drawer-cont w-screen h-screen bg-[#fdfff5] absolute z-[3] transition-all duration-[0.3s] ease-out ${isDrawerActive ? 'translate-x-0' : 'translate-x-[-300vw]'}`}
>
	<ul class="flex items-center gap-8 text-[11px] text-color-1/90">
		<li class="relative active"><a href="/">Home</a></li>
		<li class="relative"><a href="#about">About</a></li>
		<li class="relative"><a href="#overview">Overview</a></li>
		<li class="relative"><a href="/scholarship">Scholarships</a></li>
		<li class="relative"><a href="/sponsors">Sponsors</a></li>
	</ul>
</section>

<header
	class="w-full h-[100px] flex items-center justify-between absolute z-[4] top-0 px-[10%] md:px-7"
>
	<Logo {isDrawerActive} />
	<nav
		class="rounded-full bg-color-1/5 backdrop-blur-[10px] px-10 drop-shadow-2xl border border-color-1/15 py-3 md:hidden"
	>
		<ul class="flex items-center gap-8 text-[11px] text-color-1/90">
			<li class="relative active"><a href="/">Home</a></li>
			<li class="relative"><a href="#about">About</a></li>
			<li class="relative"><a href="#overview">Overview</a></li>
			<li class="relative"><a href="/scholarship">Scholarships</a></li>
			<li class="relative"><a href="/sponsors">Sponsors</a></li>
		</ul>
	</nav>

	<a href="//wa.me/+2347040368997">
		<button
			class="w-[155px] h-[37px] bg-color-4/70 text-color-1 rounded-md font-medium text-[0.7rem] md:hidden"
		>
			Contact Us
		</button>
	</a>

	<button
		onclick={() => (isDrawerActive = !isDrawerActive)}
		class={`px-[0.7rem] py-[0.25rem] rounded-2xl border-[1.5px] text-[0.8rem] hidden md:flex gap-1 items-center justify-center transition-all duration-[0.5s] ease-out ${isDrawerActive ? 'border-main text-main' : 'border-color-1'}`}
	>
		menu
		{#if isDrawerActive}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
			</svg>
		{/if}
	</button>
</header>

<style>
	nav li.active::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: calc(50% - 1.5px);
		width: 3px;
		height: 3px;
		border-radius: 20px;
		background: rgba(var(--color-1), 0.7);
	}
</style>
