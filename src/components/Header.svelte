<script>
	// your script goes here

	import Logo from '$components/Logo.svelte';
</script>

<header class="w-full h-[100px] flex items-center justify-between z-[1]">
	<Logo />
	<nav class="md:hidden">
		<ul class="flex items-center gap-6 text-[11px] tracking-[0.5px] font-light text-color-1/90">
			<li><a href="/">Home</a></li>
			<li><a href="/">About Us</a></li>
			<li><a href="/">Community</a></li>
			<li><a href="/">Events</a></li>
			<li><a href="/">Sponsors</a></li>
		</ul>
	</nav>

	<button class="w-[160px] h-[40px] border border-color-1/70 text-[0.7rem] md:hidden">
		Contact Us
	</button>

	<div
		class="px-2 py-1 rounded-2xl border border-color-1/70 text-[0.8rem] hidden md:flex gap-1 items-center justify-center"
	>
		menu
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
	</div>
</header>
