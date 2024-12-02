import { supabase } from './supabaseClient';
import fuoyeData from './fuoye.json';
const data: any = fuoyeData;

export function showAlert(text: string, type: string = '') {
	const alertElement = document.querySelector('#alert');

	if (alertElement) {
		// Create and append a text node
		const textNode = document.createTextNode(text);
		alertElement.appendChild(textNode);

		// Update alert element classes
		alertElement.classList.replace('translate-x-[100vw]', 'translate-x-0');
		alertElement.classList.add(type, 'transition-all', 'duration-[0.5s]', 'ease-out');

		// Hide the alert after 3 seconds
		setTimeout(() => {
			alertElement.classList.replace('translate-x-0', 'translate-x-[100vw]');
			alertElement.classList.remove(type);
			// Remove the text node after the animation
			setTimeout(() => {
				if (alertElement.contains(textNode)) {
					alertElement.removeChild(textNode);
				}
			}, 100); // Delay for the transition duration (adjust if necessary)
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

export function getStudentInfo(matric: string): { faculty: string; department: string } | string {
	const abbreviation = matric.substring(0, 3);
	for (const faculty in data.faculties) {
		const department = data.faculties[faculty].find(
			(dept: any) => dept.abbreviation === abbreviation
		);
		if (department) {
			return {
				faculty,
				department: department.name
			};
		}
	}
	return 'nothing-found';
}
