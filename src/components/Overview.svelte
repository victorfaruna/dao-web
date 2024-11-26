<p
	class="text-color-1 text-[3rem] md:text-[2rem] text-orange-300 font-bold text-right mr-[10%] md:mr-10"
>
	<img class="inline w-[100px] opacity-[0.7]" src="/images/coooo.svg" alt="" /> Event
	<br /><span class="text-[2.5rem]">Overview</span>
</p>
<div
	class="overview-cont no-scrollbar w-full h-[600px] md:h-[450px] flex flex-nowrap gap-5 overflow-x-auto mb-20 pl-[10%] md:pl-10"
>
	<div
		class="item relative overflow-hidden w-[30%] md:w-[80%] h-full rounded-[2rem] bg-[url(/images/project-exhibition.webp)] bg-cover bg-no-repeat flex flex-col justify-end"
		style="flex: 0 0 auto"
	>
		<div class="inner w-full p-5 flex flex-col gap-4 relative z-[2]">
			<p class="title">Project Exhibition</p>
			<p class="desc">
				Showcase your crypto project, connect with investors, and onboard new users at JOJI DAO.
				Drive adoption and foster Web3 collaborations!
			</p>
		</div>
	</div>

	<div
		class="item relative overflow-hidden w-[30%] md:w-[80%] h-full rounded-[2rem] bg-[url(/images/scholarship.webp)] bg-cover bg-no-repeat flex flex-col justify-end"
		style="flex: 0 0 auto"
	>
		<div class="inner w-full p-5 flex flex-col gap-4 relative z-[2]">
			<p class="title">Scholarship Opportunities</p>
			<p class="desc">
				JOJI DAO is offering up to 10 exclusive scholarship slots to support talented individuals
				passionate about blockchain and Web3. Don’t miss this chance to learn, grow, and innovate
				with the best in the industry!
			</p>
		</div>
	</div>
</div>

<style>
	.item::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
		z-index: 1;
	}

	.item .title {
		@apply text-color-1 text-[1.1rem] font-orbitron font-bold;
	}

	.item .desc {
		@apply text-color-1/70 text-[0.7rem];
	}
</style>
