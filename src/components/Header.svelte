<script>
	// your script goes here

	import Logo from '$components/Logo.svelte';
</script>

<header
	class="w-full h-[100px] flex items-center justify-between absolute top-0 z-[2] px-[10%] md:px-5"
>
	<Logo />
	<nav class="md:hidden">
		<ul class="flex items-center gap-6 text-[11px] text-color-1/90">
			<li><a href="/no">Home</a></li>
			<li><a href="/yes">Community</a></li>
			<li><a href="/no">Events</a></li>
			<li><a href="/all">Sponsors</a></li>
		</ul>
	</nav>

	<button
		class="w-[160px] h-[40px] border border-color-1/70 rounded-[2.5rem] text-[0.7rem] md:hidden"
	>
		Contact Us
	</button>

	<div
		class="px-[0.7rem] py-[0.25rem] rounded-2xl border-[1.5px] border-color-1/90 text-[0.8rem] hidden md:flex gap-1 items-center justify-center"
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
