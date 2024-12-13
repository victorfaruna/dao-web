import { supabase } from './supabaseClient';
import fuoyeData from './fuoye.json';
const data: any = fuoyeData;

let isAlertOpen = false;
export function showAlert(text: string, type: string = '') {
	const alertElement = document.querySelector('#alert');
	if (isAlertOpen) return;
	if (alertElement) {
		const textNode = document.createTextNode(text);
		alertElement.appendChild(textNode);

		// Update alert element classes
		isAlertOpen = true;
		alertElement.classList.replace('translate-x-[100vw]', 'translate-x-0');
		alertElement.classList.add(type, 'transition-all', 'duration-[0.5s]', 'ease-out');

		// Set a new timeout to hide the alert
		setTimeout(() => {
			alertElement.classList.replace('translate-x-0', 'translate-x-[100vw]');
			alertElement.classList.remove(type);
			// Remove the text node after the animation
			setTimeout(() => {
				if (alertElement.contains(textNode)) {
					alertElement.removeChild(textNode);
					isAlertOpen = false;
				}
			}, 10);
		}, 3000);
	}
}

export async function checkReppeatedEmail(email: string) {
	try {
		const { data } = await supabase.from('applications').select().eq('email', email);
		if (data && data.length > 0) {
			return true;
		}

		return false;
	} catch (error) {
		console.log(error);
	}
}

export async function checkReppeatedMatric(matric: string) {
	try {
		const { data } = await supabase.from('applications').select().eq('matric_number', matric);
		if (data && data.length > 0) {
			return true;
		}

		return false;
	} catch (error) {
		console.log(error);
	}
}

export async function getStudentInfo(matric: any) {
	let abbreviation = matric.split('/')[0];
	for (const faculty in data.faculties) {
		const department = data.faculties[faculty].find(
			(dept: any) => dept.course_code === abbreviation
		);
		if (department) {
			return {
				faculty,
				department: department.name
			};
		}
	}
	return {
		faculty: '',
		department: ''
	};
}
