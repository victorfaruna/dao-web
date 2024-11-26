<script>
	// your script goes here

	import Logo from '$components/Logo.svelte';
</script>

<header
	class="w-full h-[100px] flex items-center justify-between absolute z-[2] top-0 px-[10%] md:px-7"
>
	<Logo />
	<nav
		class="rounded-full bg-color-1/10 backdrop-blur-[10px] px-10 drop-shadow-2xl border border-color-1/15 py-3 md:hidden"
	>
		<ul class="flex items-center gap-8 text-[11px] text-color-1/90">
			<li class="relative active"><a href="/">Home</a></li>
			<li class="relative"><a href="/about">About</a></li>
			<li class="relative"><a href="/overview">Overview</a></li>
			<li class="relative"><a href="/events">Events</a></li>
			<li class="relative"><a href="/sponsors">Sponsors</a></li>
		</ul>
	</nav>

	<button
		class="w-[155px] h-[37px] bg-gradient-to-r from-color-4/80 to-color-3/70 rounded-md text-[0.7rem] md:hidden"
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
