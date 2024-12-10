<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics();
</script>

<div
	id="alert"
	role="alert"
	class={`w-[60%] md:w-full md:h-[50px] alert fixed z-[999] right-0 top-0 translate-x-[100vw] p-4 text-white  rounded-md shadow-lg flex transition-all duration-[0.5s] ease-out`}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6 shrink-0 stroke-current"
		fill="none"
		viewBox="0 0 24 24"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
</div>
{@render children()}
