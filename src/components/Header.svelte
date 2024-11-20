<script>
	// your script goes here

	import Logo from '$components/Logo.svelte';
</script>

<header class="w-full h-[100px] flex items-center justify-between">
	<Logo />
	<nav>
		<ul class="flex items-center gap-10">
			<li><a href="/">Home</a></li>
			<li><a href="/">About Us</a></li>
			<li><a href="/">Community</a></li>
			<li><a href="/">Events</a></li>
			<li><a href="/">Sponsors</a></li>
		</ul>
	</nav>

	<button class="w-[160px] h-[40px] border border-color-1/70 text-[0.8rem]">Contact Us</button>
</header>
