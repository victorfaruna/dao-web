<script lang="ts">
	const DATA = [
		{
			icon: '/images/instagram.svg',
			title: 'Follow Us On Instagram',
			link: 'https://www.instagram.com/jojidao/'
		},
		{
			icon: '/images/x.svg',
			title: 'Follow Us On X',
			link: 'https://www.x.com/jojidao/'
		},
		{
			icon: '/images/instagram.svg',
			title: 'Like & Share Our Post',
			link: 'https://www.instagram.com/jojidao/'
		},
		{
			icon: '/images/x.svg',
			title: 'Like, Comment & Retweet Our Post',
			link: 'https://www.x.com/jojidao/'
		},
		{
			icon: '/images/luma.webp',
			title: 'Register for the Event',
			link: 'https://www.x.com/jojidao/'
		},
		{
			icon: '/images/whatsapp.png',
			title: 'Share on Whatsapp Status',
			link: 'https://www.x.com/jojidao/'
		},
		{
			icon: '/images/avatar.png',
			title: 'Confirm Identity',
			link: 'https://www.x.com/jojidao/'
		}
	];
</script>

<button
	class="back-btn size-[40px] rounded-full bg-color-1/10 absolute top-5 left-5 z-[2] flex items-center justify-center"
	aria-label="Back"
	onclick={() => window.history.back()}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-4"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
		/>
	</svg>
</button>

<div
	class="scholarsip-container flex flex-col px-6 py-[6rem] gap-3 items-center w-[550px] md:w-full h-auto md:h-full mx-auto my-20 md:my-0 bg-main/70 backdrop-blur-[10px] rounded-3xl md:rounded-none shadow-2xl shadow-color-1/10"
>
	<p class="text-center text-[3.5rem] font-bold leading-none font-sora">
		J<img class="inline size-[50px] object-contain" src="/images/logo-white.webp" alt="" />ji
	</p>
	<p class="text-center font-orbitron text-[1rem] text-color-1/90 leading-none tracking-[1px]">
		🎓 Scholarships 🎓
	</p>
	<p class="text-center text-[0.7rem] text-color-1/50 font-poppins">
		Seize the chance to secure one of 10 exclusive scholarships at the JOJI DAO event! Engage with
		our community tasks, showcase your passion for Web3, and earn a scholarship to kickstart your
		blockchain journey.
	</p>
	<div class="flex gap-10">
		<img src="/images/tasknode.png" alt="" class="size-[50px]" />
		<img src="/images/scholarship.png" alt="" class="size-[50px]" />
	</div>

	<div class="w-full mt-20 rounded-3xl bg-color-1/10 p-5 flex flex-col gap-7">
		{#each DATA as item}
			<div class="item w-full flex justify-between items-center">
				<div class="left flex gap-2 items-center">
					<div class="img-cont size-[45px] flex-shrink-0 rounded-xl bg-main p-2">
						<img src={item.icon} class="size-full object-cover rounded-md" alt="" />
					</div>
					<div class="info text-[0.8rem] text-color-1/70">{item.title}</div>
				</div>
				<div class="right">
					<button class="w-[90px] h-[35px] rounded-2xl bg-color-3 font-bold">Start</button>
				</div>
			</div>
		{/each}
	</div>

	<p class="text-center mt-10">
		By clicking on the button you confirm to adhere to the <a
			class="text-color-4 underline"
			href="/terms-and-conditions">terms and conditions</a
		> of the scholarship.
	</p>
	<button class="w-[70%] md:w-[90%] h-[60px] bg-color-3 rounded-full font-semibold text-[0.9rem]"
		>Complete 🚀
	</button>
</div>
