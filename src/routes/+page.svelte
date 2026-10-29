<svelte:head>
	<title>MovieWatchlist – Deine Filmsammlung</title>
	<meta
		name="description"
		content="Entdecke deine MovieWatchlist und behalte deine Lieblingsfilme im Blick."
	/>
</svelte:head>

<main class="home container">
	<section class="hero" aria-labelledby="welcome-title">
		<p class="eyebrow">DEINE FILMSAMMLUNG</p>
		<h1 id="welcome-title">Deine nächste Filmidee wartet schon.</h1>
		<p class="intro">
			Entdecke spannende Geschichten und behalte deine Filme an einem Ort im Blick.
		</p>
		<a class="movies-button" href="/movies">Zu den Movies <span aria-hidden="true">→</span></a>
	</section>
</main>

<style>
	.home {
		display: flex;
		min-height: calc(100vh - 4rem);
		align-items: center;
		padding-top: 3rem;
		padding-bottom: 3rem;
	}

	.hero {
		max-width: 48rem;
		padding: clamp(2rem, 7vw, 5rem) 0;
	}

	.eyebrow {
		margin-bottom: 1rem;
		color: #aaa;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.18em;
	}

	h1 {
		max-width: 12ch;
		margin-bottom: 1.25rem;
		font-size: clamp(2.8rem, 8vw, 5.5rem);
		font-weight: 800;
		letter-spacing: -0.055em;
		line-height: 1;
	}

	.intro {
		max-width: 34rem;
		margin-bottom: 2rem;
		color: #bbb;
		font-size: clamp(1rem, 2vw, 1.2rem);
		line-height: 1.7;
	}

	.movies-button {
		display: inline-flex;
		align-items: center;
		gap: 0.8rem;
		padding: 0.85rem 1.2rem;
		border: 1px solid #fff;
		border-radius: 0.25rem;
		background: #fff;
		color: #000;
		font-weight: 700;
		text-decoration: none;
		transition: background 150ms ease, color 150ms ease;
	}

	.movies-button:hover {
		background: transparent;
		color: #fff;
	}
</style>
