<script lang="ts">
	import '../app.css';
	let { children } = $props();

	let cursor: HTMLElement;

	$effect(() => {
		document.addEventListener('mousemove', function (e) {
			cursor.setAttribute('style', `left: ${e.pageX}px; top: ${e.pageY}px`);
		});

		document.addEventListener('mouseleave', (event) => {
			if (event.clientY <= 0) {
				cursor.style.display = 'none';
			}
		});

		return () => {
			document.removeEventListener('mousemove', function (e) {
				cursor.setAttribute('style', `left: ${e.pageX}px; top: ${e.pageY}px`);
			});
		};
	});
</script>

<div
	bind:this={cursor}
	class="xl:hidden cursor size-[30px] rounded-full bg-transparent absolute z-[999] pointer-events-none"
>
	<img src="/images/cursor.svg" alt="" class="w-[30px] h-[30px]" />
</div>
{@render children()}
