<script lang="ts">
	let { isDrawerActive }: { isDrawerActive?: boolean } = $props();
</script>

<a href="/">
	<div class="w-[160px] flex flex-row items-center gap-1">
		<p
			class={`text-[1.2rem] transition-all duration-[0.5s] ease-out ${
				isDrawerActive ? 'text-main' : 'text-color-1'
			} font-sora font-regular tracking-[1.5px] flex items-center`}
		>
			J<img src="/images/logo.webp" alt="" class="size-[1.7rem] inline" />ji Dao
		</p>
	</div>
</a>
