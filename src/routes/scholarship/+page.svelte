<script lang="ts">
	const TASKDATA = [
		{
			type: 'link',
			icon: '/images/instagram.svg',
			title: 'Follow Us On Instagram',
			link: 'https://www.instagram.com/jojidao/'
		},
		{
			type: 'link',
			icon: '/images/x.svg',
			title: 'Follow Us On X',
			link: 'https://www.x.com/jojidao/'
		},
		{
			type: 'link',
			icon: '/images/instagram.svg',
			title: 'Like & Share Our Post',
			link: 'https://www.instagram.com/jojidao/'
		},
		{
			type: 'link',
			icon: '/images/x.svg',
			title: 'Like, Comment & Retweet Our Post',
			link: 'https://www.x.com/jojidao/'
		},
		{
			type: 'link',
			icon: '/images/luma.webp',
			title: 'Register for the Event',
			link: 'https://www.x.com/jojidao/'
		},
		{
			type: 'link',
			icon: '/images/whatsapp.png',
			title: 'Share on Whatsapp Status',
			link: 'https://www.x.com/jojidao/'
		},
		{
			type: 'action',
			icon: '/images/avatar.webp',
			title: 'Personal Details',
			link: 'https://www.x.com/jojidao/'
		}
	];

	const FORMDATA = [
		{ label: 'Fullname', placeholder: 'e.g John Doe' },
		{ label: 'Email', placeholder: 'e.g john@fuoye.edu.ng' },
		{ label: 'Matric NO', placeholder: 'e.g CSC/2026/1023' }
	];

	let modalPopup: any;
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
	class="scholarsip-container flex flex-col px-6 py-[6rem] gap-3 items-center w-[550px] md:w-full h-auto md:h-full mx-auto my-20 md:my-0 bg-black/10 rounded-3xl md:rounded-none border border-color-1/20 md:border-0"
>
	<p class="text-center text-[3.5rem] font-bold leading-none font-sora">
		J<img src="/images/dao.svg" class="w-[50px] inline" alt="" />ji
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
		<img src="/images/tasknode.webp" alt="" class="size-[50px]" />
		<img src="/images/academia.webp" alt="" class="size-[50px]" />
	</div>

	<div class="w-full mt-20 rounded-3xl bg-color-1/10 p-5 flex flex-col gap-7">
		{#each TASKDATA as item}
			<div class="item w-full flex gap-2 justify-between items-center">
				<div class="left flex gap-2 items-center">
					<div class="img-cont size-[45px] flex-shrink-0 rounded-xl bg-main p-2">
						<img src={item.icon} class="size-full object-contain rounded-md" alt="" />
					</div>
					<div class="info text-[0.8rem] text-color-1/70">{item.title}</div>
				</div>
				{#if item.type === 'action'}
					<button
						class="w-[100px] h-[40px] rounded-full bg-color-3 flex-shrink-0"
						onclick={() => modalPopup.showModal()}
						>Start
					</button>
					<dialog bind:this={modalPopup} id="my_modal_2" class="modal">
						<div class="modal-box py-20 bg-main border border-color-1/20">
							<form action="" class="flex flex-col gap-6">
								{#each FORMDATA as item}
									<div class="item flex flex-col gap-2">
										<p class="font-orbitron text=[0.8rem] tracking-[1px]">{item.label}</p>
										<div class="input-control w-full h-[50px] rounded-2xl border overflow-hidden">
											<input
												class="size-full bg-transparent outline-none border-none text-[0.7rem]"
												type="text"
												placeholder={item.placeholder}
											/>
										</div>
									</div>
								{/each}
							</form>
						</div>
						<form method="dialog" class="modal-backdrop bg-color-1/20 backdrop-blur-[10px]">
							<button>close</button>
						</form>
					</dialog>
				{:else if item.type === 'link'}
					<a href={item.link} target="_blank" class="flex-shrink-0">
						<button class="w-[100px] h-[40px] rounded-full bg-color-3">Start </button>
					</a>
				{/if}
			</div>
		{/each}
	</div>

	<p class="text-center text-[0.7rem] mt-20 font-light text-color-1/80">
		By clicking on the button you confirm to adhere to the <a
			class="text-color-4 underline"
			href="/terms-and-conditions">terms and conditions</a
		> of the scholarship.
	</p>
	<button class="w-[70%] md:w-[90%] h-[60px] bg-color-3 rounded-3xl font-semibold text-[0.9rem]"
		>Complete 🚀
	</button>
</div>
