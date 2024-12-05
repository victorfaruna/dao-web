<script lang="ts">
	import { checkReppeatedEmail, checkReppeatedMatric, getStudentInfo } from '$src/lib/functions';
	import { showAlert } from '$lib/functions';
	import { supabase } from '$src/lib/supabaseClient';
	import axios from 'axios';

	const TASKDATA = [
		{
			type: 'link',
			icon: '/images/x.svg',
			title: 'Follow Us On X',
			link: 'https://www.x.com/JOJI_INT/'
		},
		{
			type: 'link',
			icon: '/images/instagram.svg',
			title: 'Follow Us On Instagram',
			link: 'https://www.instagram.com/joji_int/'
		},
		{
			type: 'link',
			icon: '/images/x.svg',
			title: 'Like, Comment & Retweet Our Post',
			link: 'https://www.x.com/'
		},
		{
			type: 'link',
			icon: '/images/instagram.svg',
			title: 'Like & Share Our Post',
			link: 'https://www.instagram.com/jojidao/'
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
			link: 'https://wa.me/?text=%F0%9F%8C%90%20*JOJI%20DAO%20is%20Here!*%20%F0%9F%9A%80%0A%F0%9F%92%A1%20Empowering%20tech%20%26%20Web3%20enthusiasts.%0A%F0%9F%93%85%20*14th%20Nov%202024*%0A%F0%9F%94%97%20Visit%3A%20[jojidao.com](http%3A%2F%2Fjojidao.com)%0A%0ADon%E2%80%99t%20just%20watch%2C%20*join%20the%20future!*%20%E2%9C%A8%20%23TechMeetsWeb3'
		},
		{
			type: 'action',
			icon: '/images/avatar.webp',
			title: 'Personal Details'
		}
	];

	let userData = $state(
		typeof window !== 'undefined' && localStorage.getItem('userData')
			? JSON.parse(localStorage.getItem('userData') || '')
			: []
	);
	let fullname = $state(userData?.fullname || '');
	let email = $state(userData?.email || '');
	let matric = $state(userData?.matric || '');
	let faculty = $state(userData?.faculty || '');
	let department = $state(userData?.department || '');
	let proposal = $state(userData?.proposal || '');
	//Social details...
	let twitterUsername = $state(
		typeof window !== 'undefined' && localStorage.getItem('twitterUsername')
			? localStorage.getItem('twitterUsername') || ''
			: ''
	);
	let instagramUsername = $state(
		typeof window !== 'undefined' && localStorage.getItem('instagramUsername')
			? localStorage.getItem('instagramUsername') || ''
			: ''
	);
	//
	let locallyStoredUserData: any = $derived({
		fullname: fullname,
		email: email,
		matric: matric,
		faculty: faculty,
		department: department,
		proposal: proposal
	});

	$effect(() => {
		matric = matric.toUpperCase();
	});

	let taskDone: any = $state(
		typeof window !== 'undefined' && localStorage.getItem('taskDone')
			? JSON.parse(localStorage.getItem('taskDone') || '')
			: []
	);
	let confirmedTasks: any = $state(
		typeof window !== 'undefined' && localStorage.getItem('confirmedTasks')
			? JSON.parse(localStorage.getItem('confirmedTasks') || '')
			: []
	);

	const checkTaskDone = (item: any) => {
		if (taskDone.includes(item)) {
			return true;
		}

		return false;
	};

	const checkTaskConfirmed = (item: any) => {
		if (confirmedTasks.includes(item)) {
			return true;
		}
		return false;
	};

	function addTask(taskId: number) {
		if (!taskDone.includes(taskId)) {
			taskDone = [...taskDone, taskId];
			// Save updated array to localStorage
			localStorage.setItem('taskDone', JSON.stringify(taskDone));
		}
	}

	function removeTask(taskId: number) {
		taskDone = taskDone.filter((item: any) => item !== taskId);
		// Save updated array to localStorage
		localStorage.setItem('taskDone', JSON.stringify(taskDone));
	}

	function addConfirmedTask(taskId: number) {
		if (!confirmedTasks.includes(taskId)) {
			confirmedTasks = [...confirmedTasks, taskId];
			// Save updated array to localStorage
			localStorage.setItem('confirmedTasks', JSON.stringify(confirmedTasks));
		}
	}

	function removeConfirmedTask(taskId: number) {
		confirmedTasks = confirmedTasks.filter((item: any) => item !== taskId);
		// Save updated array to localStorage
		localStorage.setItem('confirmedTasks', JSON.stringify(confirmedTasks));
	}

	function clearTasks() {
		taskDone = [];
		confirmedTasks = [];
		instagramUsername = '';
		twitterUsername = '';
		userData = [];
		// Save updated array to localStorage
		localStorage.setItem('taskDone', JSON.stringify(taskDone));
		localStorage.setItem('confirmedTasks', JSON.stringify(confirmedTasks));
		localStorage.setItem('instagramUsername', JSON.stringify(instagramUsername));
		localStorage.setItem('twitterUsername', JSON.stringify(twitterUsername));
		localStorage.setItem('userData', JSON.stringify(userData));
	}
	let modalPopup: any = $state();
	let modalPopupSocial: any = $state();
	let isTaskCheckingLoadingList: any = $state([]);
	let isPersonalDetailsLoading = $state(false);
	let isApplicationFormLoading = $state(false);

	const saveSocialDetails = () => {
		localStorage.setItem('twitterUsername', twitterUsername);
		localStorage.setItem('instagramUsername', instagramUsername);
		modalPopupSocial.close();
	};

	const validateTask = async (item: number) => {
		try {
			switch (item) {
				case 1:
					if (twitterUsername && instagramUsername) {
						if (!isTaskCheckingLoadingList.includes(item)) {
							isTaskCheckingLoadingList.push(item);
						}
						const { data } = await axios.get(
							'/api/twitter/verify-follow?targetUsername=' + twitterUsername
						);
						if (data.followStatus === true) {
							addConfirmedTask(item);
							showAlert('Task completed', 'alert-success');
						} else {
							isTaskCheckingLoadingList = isTaskCheckingLoadingList.filter(
								(item: any) => item !== item
							);
							showAlert('Task failed - Check your username', 'alert-error');
						}
					} else {
						modalPopupSocial.showModal();
					}
					break;
				case 2:
					if (twitterUsername && instagramUsername) {
						if (!isTaskCheckingLoadingList.includes(item)) {
							isTaskCheckingLoadingList.push(item);
						}
						const { data } = await axios.get(
							'/api/instagram/verify-follow?targetUsername=' + instagramUsername
						);
						if (data.followStatus === true) {
							addConfirmedTask(item);
							showAlert('Task completed', 'alert-success');
						} else {
							isTaskCheckingLoadingList = isTaskCheckingLoadingList.filter(
								(item: any) => item !== item
							);
							showAlert('Task failed - Check your username', 'alert-error');
						}
					} else {
						modalPopupSocial.showModal();
					}
					break;
				case 3:
					if (item === 3) {
						if (!isTaskCheckingLoadingList.includes(item)) {
							isTaskCheckingLoadingList.push(item);
						}
						setTimeout(() => {
							addConfirmedTask(item);
							isTaskCheckingLoadingList = isTaskCheckingLoadingList.filter(
								(item: any) => item !== item
							);
							showAlert('Task completed', 'alert-success');
						}, 2000);
					}
					break;
				case 4:
					if (item === 4) {
						if (!isTaskCheckingLoadingList.includes(item)) {
							isTaskCheckingLoadingList.push(item);
						}
						setTimeout(() => {
							addConfirmedTask(item);
							isTaskCheckingLoadingList = isTaskCheckingLoadingList.filter(
								(item: any) => item !== item
							);
							showAlert('Task completed', 'alert-success');
						}, 2000);
					}
					break;
				case 5:
					if (item === 5) {
						if (!isTaskCheckingLoadingList.includes(item)) {
							isTaskCheckingLoadingList.push(item);
						}
						setTimeout(() => {
							addConfirmedTask(item);
							isTaskCheckingLoadingList = isTaskCheckingLoadingList.filter(
								(item: any) => item !== item
							);
							showAlert('Task completed', 'alert-success');
						}, 2000);
					}
					break;
				case 6:
					if (item === 6) {
						if (!isTaskCheckingLoadingList.includes(item)) {
							isTaskCheckingLoadingList.push(item);
						}
						setTimeout(() => {
							addConfirmedTask(item);
							isTaskCheckingLoadingList = isTaskCheckingLoadingList.filter(
								(item: any) => item !== item
							);
							showAlert('Task completed', 'alert-success');
						}, 2000);
					}
					break;
			}
		} catch (error) {
			isTaskCheckingLoadingList = [];
			showAlert('Task Failed', 'alert-error');
		}
	};

	const submitPersonalDetails = async () => {
		try {
			addTask(7);
			localStorage.setItem('userData', JSON.stringify(locallyStoredUserData));
			isPersonalDetailsLoading = true;
			if ((await checkReppeatedEmail(email)) === true) {
				removeTask(7);
				removeConfirmedTask(7);
				modalPopup.close();
				showAlert('Email address is already registered', 'alert-error');
				return;
			}
			if ((await checkReppeatedMatric(matric)) === true) {
				removeTask(7);
				removeConfirmedTask(7);
				modalPopup.close();
				showAlert('Matric number already registered!', 'alert-error');
				return;
			}

			const studentInfo: any = getStudentInfo(matric);
			if (studentInfo === 'nothing-found') {
				removeTask(7);
				removeConfirmedTask(7);
				modalPopup.close();
				showAlert('Invalid Matric Number', 'alert-error');
				return;
			} else {
				faculty = studentInfo.faculty;
				department = studentInfo.department;
			}
			console.log(faculty, department);
			console.log('Personal details stored succefully');
			addConfirmedTask(7);
			modalPopup.close();
		} catch (error) {
			modalPopup.close();
			showAlert('An error occured', 'alert-error');
			console.log(error);
		} finally {
			isPersonalDetailsLoading = false;
		}
	};
	const submitApplication = async () => {
		try {
			isApplicationFormLoading = true;
			if (confirmedTasks.length === TASKDATA.length) {
				const { data } = await supabase.from('applications').insert({
					matric_number: matric,
					email: email,
					fullname: fullname,
					department: department,
					faculty: faculty,
					proposal: proposal
				});
				modalPopup.close();
				showAlert('Scholarship Application Submitted Successfully', 'alert-success');
				clearTasks();
				return;
			} else {
				modalPopup.close();
				showAlert('Please complete all the tasks', 'alert-error');
				return;
			}
		} catch (error) {
			modalPopup.close();
			showAlert('An error occured', 'alert-error');
			console.log(error);
		} finally {
			isApplicationFormLoading = false;
		}
	};

	$effect(() => {
		console.log(taskDone);
	});
</script>

<svelte:head>
	<title>JOJI DAO - Apply for scholarship</title>
	<meta
		name="description"
		content="Seize the chance to secure one of 10 exclusive scholarships at the JOJI DAO event!"
	/>
</svelte:head>
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
		<button
			class="text-blue-200 flex items-center gap-1 text-[0.7rem]"
			onclick={() => modalPopupSocial.showModal()}
		>
			{#if twitterUsername && instagramUsername}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4 inline"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4 inline"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
					/>
				</svg>
			{/if}
			Social Media Details
		</button>
		{#each TASKDATA as item, index}
			<dialog bind:this={modalPopupSocial} id="my_modal_2" class="modal">
				<div class="modal-box py-20 bg-black border border-color-1/20">
					<button
						onclick={() => modalPopupSocial.close()}
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
						onsubmit={(e: any) => {
							saveSocialDetails();
							e.preventDefault();
						}}
					>
						<div class="item flex flex-col gap-2">
							<p class="font-orbitron text=[0.8rem] tracking-[1px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="bi bi-twitter-x size-4 inline"
									viewBox="0 0 16 16"
								>
									<path
										d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
									/>
								</svg>
								Username
							</p>
							<div
								class="input-control w-full h-[50px] rounded-2xl border border-color-1/50 overflow-hidden"
							>
								<input
									bind:value={twitterUsername}
									class="size-full bg-transparent outline-none border-none text-[0.7rem]"
									type="text"
									required
									placeholder="e.g joji_int"
								/>
							</div>
						</div>

						<div class="item flex flex-col gap-2">
							<p class="font-orbitron text=[0.8rem] tracking-[1px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="bi bi-instagram size-4 inline"
									viewBox="0 0 16 16"
								>
									<path
										d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
									/>
								</svg>
								Instagram Username
							</p>
							<div
								class="input-control w-full h-[50px] rounded-2xl border border-color-1/50 overflow-hidden"
							>
								<input
									bind:value={instagramUsername}
									class="size-full bg-transparent outline-none border-none text-[0.7rem]"
									type="text"
									required
									placeholder="e.g joji_int"
								/>
							</div>
						</div>

						<p class="text-[goldenrod] text-center font-sora">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-4 inline"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
								/>
							</svg>
							This information will only be used to validate tasks.
						</p>

						<button
							class="w-full h-[50px] rounded-2xl bg-color-3 font-semibold text-color-1 text-[0.8rem] flex items-center justify-center gap-1"
						>
							Save
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
						</button>
					</form>
				</div>

				<form method="dialog" class="modal-backdrop bg-main/20 backdrop-blur-[10px]">
					<button>close</button>
				</form>
			</dialog>
			<div class="item w-full flex gap-2 justify-between items-center">
				<div class="left flex gap-2 items-center">
					<div class="img-cont size-[45px] flex-shrink-0 rounded-xl bg-main p-2">
						<img src={item.icon} class="size-full object-contain rounded-md" alt="" />
					</div>
					<div class="info text-[0.8rem] text-color-1/70">{item.title}</div>
				</div>
				{#if item.type === 'action'}
					{#if checkTaskConfirmed(index + 1)}
						<div class="flex gap-1 items-center">
							<button aria-label="Edit Details" onclick={() => modalPopup.showModal()}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-4 text-blue-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
									/>
								</svg>
							</button>

							<p
								class="inline-flex items-center justify-center gap-1 rounded-full text-blue-300 flex-shrink-0"
							>
								Complete! 🎉
							</p>
						</div>
					{:else}
						<button
							onclick={() => modalPopup.showModal()}
							class="w-[100px] h-[40px] flex items-center justify-center gap-1 rounded-full bg-color-3 flex-shrink-0"
						>
							Start
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-3"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
								/>
							</svg>
						</button>
					{/if}
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
											type="email"
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
									disabled={isPersonalDetailsLoading}
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
					{#if checkTaskDone(index + 1) && checkTaskConfirmed(index + 1)}
						<div class="flex gap-1 items-center">
							<p
								class="w-[100px] inline-flex items-center justify-center gap-1 rounded-full text-blue-300 flex-shrink-0"
							>
								Complete! 🎉
							</p>
						</div>
					{:else if checkTaskDone(index + 1) && !checkTaskConfirmed(index + 1)}
						<button
							disabled={isTaskCheckingLoadingList.includes(index + 1)}
							onclick={() => validateTask(index + 1)}
							class={`w-[100px] h-[40px] flex items-center justify-center gap-1 rounded-full bg-[#756c34]  flex-shrink-0`}
						>
							Check
							{#if isTaskCheckingLoadingList.includes(index + 1)}
								<p class="loading loading-spinner size-3"></p>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
									/>
								</svg>
							{/if}
						</button>
					{:else}
						<a
							href={item.link}
							target="_blank"
							class="flex-shrink-0"
							onclick={() => addTask(index + 1)}
						>
							<button
								class="w-[100px] h-[40px] flex items-center justify-center gap-1 rounded-full bg-color-3 flex-shrink-0"
							>
								Start
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
									/>
								</svg>
							</button>
						</a>
					{/if}
				{/if}
			</div>
		{/each}
		<div>
			<button
				class="text-blue-200 flex items-center gap-1 text-[0.7rem]"
				onclick={() => clearTasks()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4 inline"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
					/>
				</svg>
				<span>Clear Task Progress</span>
			</button>
		</div>
	</div>

	<button
		disabled={isApplicationFormLoading}
		class="w-[70%] md:w-[90%] h-[60px] mt-10 bg-color-3 rounded-3xl font-semibold text-[0.9rem]"
		onclick={() => submitApplication()}
		>{#if isApplicationFormLoading}
			<p class="loading loading-spinner"></p>
		{:else}
			Complete 🚀
		{/if}
	</button>
	<p class="text-center text-[0.7rem] font-light text-color-1/80">
		By clicking on the button you confirm to adhere to the <a
			class="text-color-4 underline"
			href="/terms-and-conditions">terms and conditions</a
		> of the scholarship.
	</p>
</div>
