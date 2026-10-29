<script>
	import favicon from "#lib/assets/favicon.svg";
	import { page } from "$app/state";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	/>
</svelte:head>

<header class="site-header">
	<nav
		class="navbar navbar-expand navbar-dark container"
		aria-label="Hauptnavigation"
	>
		<a class="navbar-brand" href="/">MovieWatchlist</a>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a
					class:active={page.url.pathname === "/movies"}
					class="nav-link"
					href="/movies"
					aria-current={page.url.pathname === "/movies"
						? "page"
						: undefined}>Movies</a
				>
			</li>
		</ul>
	</nav>
</header>

{@render children()}

<style>
	:global(body) {
		min-height: 100vh;
		margin: 0;
		background: #000;
		color: #f4f5f6;
		font-family: Arial, Helvetica, sans-serif;
	}

	.site-header {
		background: #000;
		border-bottom: 1px solid #222;
	}

	.site-header :global(.navbar) {
		min-height: 4rem;
		background: #000;
		color: #fff;
	}

	.site-header :global(.navbar-brand),
	.site-header :global(.nav-link),
	.site-header :global(.nav-link.active) {
		color: #fff;
	}

	.site-header :global(.navbar-brand) {
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.site-header :global(.navbar-brand:hover),
	.site-header :global(.nav-link:hover) {
		color: #ccc;
	}
</style>
