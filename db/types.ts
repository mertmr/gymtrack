import { Database } from "./supabase";

export type Workout = Database["public"]["Tables"]["workouts"]["Row"];
export type WorkoutExercise =
	Database["public"]["Tables"]["workout_exercises"]["Row"];
