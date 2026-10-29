<script>
	let{data}= $props();
</script>
<svelte:head>
	<title>Movies – MovieWatchlist</title>
</svelte:head>

<main class="container py-4">
	<h1 class="mb-4">Movies</h1>

	<div class="mb-3">
		<a class="btn btn-primary" href="/movies/create">Add New Movie</a>
	</div>

	<div class="row g-2">
		{#each data.movies as movie}
			<div class="col-6 col-md-4 col-lg-3">
				<article class="movie">
					<img class="cover" src={movie.poster} alt="Cover: {movie.title}" />
					<div class="movie-info">
			
					
						<a href={"/movies/" + movie._id}>
						<h2>{movie.title}</h2>
						</a>
						<p>Jahr: {movie.year}</p>
						<p>Dauer: {movie.length}</p>
					</div>
				</article>
			</div>
		{/each}
	</div>
</main>

<style>
	h1 {
		font-size: 2rem;
	}

	.movie {
		height: 100%;
		background: #444;
		color: #f5f5f5;
	}

	.movie h2 {
		margin-bottom: 0.25rem;
		font-size: 1rem;
		font-weight: 700;
	}

	.movie p {
		margin-bottom: 0.15rem;
		font-size: 0.9rem;
	}

	.cover {
		display: block;
		width: 100%;
		height: auto;
	}

	.movie-info {
		padding: 0.6rem;
	}
</style>
