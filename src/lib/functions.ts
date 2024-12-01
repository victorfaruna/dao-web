import { supabase } from './supabaseClient';

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
