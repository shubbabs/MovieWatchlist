<script>
	let { form } = $props();
</script>

<svelte:head>
	<title>Add a Movie – MovieWatchlist</title>
</svelte:head>

<main class="container py-4">
	<div class="create-form">
		<a href="/movies" class="back-link">Back</a>
		<h1>Add a Movie</h1>

		{#if form?.message}
			<p class="error-message" role="alert">{form.message}</p>
		{/if}

		<form method="POST">
			<label for="title">Name</label>
			<input
				id="title"
				name="title"
				type="text"
				placeholder="Barbie"
				value={form?.title ?? ""}
				required
			/>

			<label for="year">Year</label>
			<input
				id="year"
				name="year"
				type="number"
				value={form?.year ?? 2023}
				required
			/>

			<label for="length">Length</label>
			<input
				id="length"
				name="length"
				type="text"
				placeholder="114 Minuten"
				value={form?.length ?? ""}
				required
			/>

			<button class="btn btn-primary" type="submit">Add Movie</button>
		</form>
	</div>
</main>

<style>
	.create-form {
		max-width: 520px;
		margin: 0 auto;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 0.75rem;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 2rem;
	}

	form {
		display: grid;
		gap: 0.5rem;
	}

	input {
		margin-bottom: 0.5rem;
		padding: 0.5rem;
		border: 1px solid #ced4da;
		border-radius: 0.375rem;
	}

	button {
		justify-self: start;
	}

	.error-message {
		color: #ff8a8a;
	}
</style>
