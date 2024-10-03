import { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

import { supabase } from "@/config/supabase";
import { Workout } from "@/db/types";

export function useWorkouts() {
	const [loading, setLoading] = useState(true);
	const [workoutList, setWorkoutList] =  useState<Workout[] | null>(null);

	useEffect(() => {
		async function fetchWorkouts() {
			try {
				const { data } = await supabase.from("workouts").select("*");
				setWorkoutList(data);
			} catch (error) {
				console.error("Error fetching user:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchWorkouts();
	}, []);

	return { workoutList, loading };
}
