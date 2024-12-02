<script lang="ts">
	import { checkReppeatedEmail, checkReppeatedMatric, getStudentInfo } from '$src/lib/functions';
	import { showAlert } from '$lib/functions';
	const TASKDATA = [
		{
			type: 'link',
			icon: '/images/instagram.svg',
			title: 'Follow Us On Instagram',
			link: 'https://www.instagram.com/joji_int/'
		},
		{
			type: 'link',
			icon: '/images/x.svg',
			title: 'Follow Us On X',
			link: 'https://www.x.com/JOJI_INT/'
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
			link: 'https://www.x.com/'
		},
		{
			type: 'link',
			icon: '/images/luma.webp',
			title: 'Register for the Event',
			link: 'https://lu.ma/m8r2te01'
		},
		{
			type: 'link',
			icon: '/images/whatsapp.png',
			title: 'Share on Whatsapp Status',
			link: 'https://www.x.com/'
		},
		{
			type: 'action',
			icon: '/images/avatar.webp',
			title: 'Personal Details'
		}
	];

	let fullname = $state('');
	let email = $state('');
	let matric = $state('');
	let faculty = $state('');
	let department = $state('');
	let proposal = $state('');

	let modalPopup: any = $state();
	let isPersonalDetailsLoading = $state(false);
	let isPersonalDetailsSubmitted = $state(false);
	let isButtonDisabled = $state(false);

	const submitPersonalDetails = async () => {
		try {
			isButtonDisabled = true;
			isPersonalDetailsLoading = true;
			if ((await checkReppeatedEmail(email)) === true) {
				modalPopup.close();
				showAlert('Email address is already registered', 'alert-error');
				return;
			}
			if ((await checkReppeatedMatric(matric)) === true) {
				modalPopup.close();
				showAlert('Matric number already registered!', 'alert-error');
				return;
			}

			const studentInfo: any = getStudentInfo(matric);
			if (studentInfo === 'nothing-found') {
				showAlert('Invalid Matric Number', 'alert-error');
				return;
			} else {
				faculty = studentInfo.faculty;
				department = studentInfo.department;
			}
			console.log(faculty, department);

			isPersonalDetailsSubmitted = true;
			console.log('Personal details stored succefully');
			modalPopup.close();
			showAlert('Details Collated Successfully', 'alert-success');
		} catch (error) {
			showAlert('An error occured', 'alert-error');
			console.log(error);
		} finally {
			isPersonalDetailsLoading = false;
			isButtonDisabled = false;
		}
	};
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
						class={`w-[100px] h-[40px] rounded-full ${isPersonalDetailsSubmitted ? 'bg-green-500 text-main' : 'bg-color-3'} flex-shrink-0`}
						onclick={() => modalPopup.showModal()}
						>{isPersonalDetailsSubmitted ? 'Done' : 'Start'}
					</button>
					<dialog bind:this={modalPopup} id="my_modal_2" class="modal">
						<div class="modal-box py-20 bg-black border border-color-1/20">
							<button
								onclick={() => modalPopup.close()}
								aria-label="Close Modal"
								class="text-color-1 text-[1rem] font-orbitron top-3 right-3 absolute"
							>
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
							</button>
							<form
								class="custom-form flex flex-col gap-6"
								onsubmit={(e: Event) => {
									e.preventDefault();
									submitPersonalDetails();
								}}
							>
								<div class="item flex flex-col gap-2">
									<p class="font-orbitron text=[0.8rem] tracking-[1px]">Fullname</p>
									<div
										class="input-control w-full h-[50px] rounded-2xl border border-color-1/50 overflow-hidden"
									>
										<input
											bind:value={fullname}
											class="size-full bg-transparent outline-none border-none text-[0.7rem]"
											type="text"
											required
											placeholder="e.g John Doe"
										/>
									</div>
								</div>

								<div class="item flex flex-col gap-2">
									<p class="font-orbitron text=[0.8rem] tracking-[1px]">Email</p>
									<div
										class="input-control w-full h-[50px] rounded-2xl border border-color-1/50 overflow-hidden"
									>
										<input
											bind:value={email}
											class="size-full bg-transparent outline-none border-none text-[0.7rem]"
											type="text"
											required
											placeholder="e.g john@gmail.com"
										/>
									</div>
								</div>

								<div class="item flex flex-col gap-2">
									<p class="font-orbitron text=[0.8rem] tracking-[1px]">Matric NO</p>
									<div
										class="input-control w-full h-[50px] rounded-2xl border border-color-1/50 overflow-hidden"
									>
										<input
											bind:value={matric}
											class="size-full bg-transparent outline-none border-none text-[0.7rem]"
											type="text"
											required
											placeholder="e.g EEE/2022/1024"
										/>
									</div>
								</div>

								<!-- <div class="item flex flex-col gap-2">
									<p class="font-orbitron text=[0.8rem] tracking-[1px]">Faculty</p>
									<div
										class="input-control w-full h-[50px] rounded-2xl border border-color-1/50 overflow-hidden"
									>
										<input
											bind:this={faculty}
											class="size-full bg-transparent outline-none border-none text-[0.7rem]"
											type="text"
											required
											placeholder="e.g Engineering"
										/>
									</div>
								</div>

								<div class="item flex flex-col gap-2">
									<p class="font-orbitron text=[0.8rem] tracking-[1px]">Department</p>
									<div
										class="input-control w-full h-[50px] rounded-2xl border border-color-1/50 overflow-hidden"
									>
										<input
											bind:this={department}
											class="size-full bg-transparent outline-none border-none text-[0.7rem]"
											type="text"
											required
											placeholder="e.g Computer Science"
										/>
									</div>
								</div> -->

								<div class="item flex flex-col gap-2">
									<p class="font-orbitron text=[0.8rem] tracking-[1px]">
										Why do you deserve this scholarship?
									</p>
									<div
										class="input-control w-full h-[120px] rounded-2xl border border-color-1/50 overflow-hidden"
									>
										<textarea
											required
											bind:value={proposal}
											class="size-full bg-transparent outline-none border-none text-[0.7rem]"
											placeholder={'Tell us why you deserve this scholarship'}
										></textarea>
									</div>
								</div>
								<button
									disabled={isButtonDisabled}
									class="w-full h-[50px] rounded-2xl bg-color-3 font-semibold text-color-1 text-[0.8rem] flex items-center justify-center gap-1"
								>
									{#if isPersonalDetailsLoading}
										<p class="loading loading-spinner"></p>
									{:else}
										Submit
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
												d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
											/>
										</svg>
									{/if}
								</button>
							</form>
						</div>
						<form method="dialog" class="modal-backdrop bg-main/20 backdrop-blur-[10px]">
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
