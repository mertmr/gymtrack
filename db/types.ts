export interface User {
	id: number;
	username: string;
	email: string;
	created_at: string;
	last_login: string;
}

export interface Workout {
	id: number;
	user_id: number;
	name: string;
	description: string;
	created_at: string;
}

export interface Exercise {
	id: number;
	name: string;
	description: string;
	muscle_group: string;
	equipment: string;
}

export interface WorkoutLog {
	id: number;
	user_id: number;
	workout_id: number;
	date: string;
	duration: number;
	notes: string;
}

export interface ExerciseLog {
	id: number;
	workout_log_id: number;
	exercise_id: number;
	sets: number;
	reps: number;
	weight: number;
	duration: number;
	notes: string;
}
