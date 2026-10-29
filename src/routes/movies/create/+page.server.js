import { error, fail, redirect } from "@sveltejs/kit";
import db from "#lib/db.js";

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const title = String(formData.get("title") ?? "").trim();
		const year = Number(formData.get("year"));
		const length = String(formData.get("length") ?? "").trim();

		if (!title || !Number.isInteger(year) || !length) {
			return fail(400, {
				message: "Please enter a title, a valid year, and the movie length.",
				title,
				year: Number.isInteger(year) ? year : "",
				length
			});
		}

		const movieId = await db.createMovie({ title, year, length });
		if (!movieId) {
			error(500, "The movie could not be saved.");
		}

		redirect(303, "/movies");
	}
};
