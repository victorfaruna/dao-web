<script lang="ts">
	// your script goes here
	import Logo from '$components/Logo.svelte';
	import { onMount } from 'svelte';
	// Function to disable scrolling

	let isDrawerActive = $state(false);
	const toggleBodyScroll = (disable: boolean) => {
		document.body.style.overflow = disable ? 'hidden' : '';
	};

	$effect(() => {
		toggleBodyScroll(isDrawerActive);
	});
</script>

<section
	class={`drawer-cont w-screen h-screen bg-[#fdfff5] ${isDrawerActive ? 'fixed' : 'absolute'} z-[3] transition-all duration-[0.3s] ease-out ${isDrawerActive ? 'translate-x-0' : 'translate-x-[-300vw]'}`}
>
	<div class="rest w-full h-screen flex gap-4 flex-col items-center justify-center">
		<img src="/images/undraw_bitcoin_2.svg" class="w-[50%]" alt="" />

		<div class="socials flex gap-2 items-center justify-center text-main">
			<button
				onclick={() => window.open('//x.com/JOJI_INT', '_blank')}
				aria-label="Twitter Icon"
				class="item size-[40px] border border-main/20 rounded-full flex items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-twitter-x"
					viewBox="0 0 16 16"
				>
					<path
						d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
					/>
				</svg>
			</button>
			<button
				onclick={() => window.open('//instagram.com/joji_int', '_blank')}
				aria-label="Instagram Icon"
				class="item size-[40px] border border-main/20 rounded-full flex items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-instagram"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
					/>
				</svg>
			</button>
			<button
				onclick={() => window.open('//t.me/JOJIDAO', '_blank')}
				aria-label="Telegram Icon"
				class="item size-[40px] border border-main/20 rounded-full flex items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-telegram"
					viewBox="0 0 16 16"
				>
					<path
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
					/>
				</svg>
			</button>
		</div>
		<a href="/scholarship" class="flex gap-1 text-main">
			<svg
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
					d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
				/>
			</svg>
			Apply for schoolarship
		</a>
	</div>
</section>

<header
	class={`w-full h-[100px] flex items-center justify-between ${
		isDrawerActive ? 'fixed' : 'absolute'
	} z-[4] top-0 px-[10%] md:px-7`}
>
	<Logo {isDrawerActive} />
	<nav
		class="rounded-full bg-color-1/5 backdrop-blur-[10px] px-10 drop-shadow-2xl border border-color-1/15 py-3 md:hidden"
	>
		<ul class="flex items-center gap-8 text-[11px] text-color-1/90">
			<li class="relative active"><a href="/">Home</a></li>
			<li class="relative"><a href="#about">About</a></li>
			<li class="relative"><a href="#overview">Overview</a></li>
			<li class="relative"><a href="#sponsors">Sponsors</a></li>
			<li class="relative"><a href="/scholarship">Scholarships</a></li>
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
