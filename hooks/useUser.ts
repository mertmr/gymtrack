import { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

import { supabase } from "@/config/supabase";

export function useUser() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchUser() {
			try {
				const {
					data: { user },
				} = await supabase.auth.getUser();
				setUser(user);
			} catch (error) {
				console.error("Error fetching user:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchUser();
	}, []);

	return { user, loading };
}
