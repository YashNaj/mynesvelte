<svelte:head>
    <link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css">
</svelte:head>
<script>
    import logo from '$lib/images/white_myne_logo.png'
</script>

<div>
	<img alt = 'Myne Logo' src = {logo}/>
	<h1>Welcome</h1>
	<div class = 'home-button-container'>
		<button> 
			<a href = '/signin' >
			Sign in</a>
		</button>
		<button> 
			<a href = '/signup' >
			Sign Up</a>
		</button>
	</div>
	
</div>

<style>
	:root {
		--myne-blue: #002d72;
        --font-family: futura-pt;
	}
	:global(html){
		background-color: var(--myne-blue);
		width: 100%;
		height: 100vh;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
	}
	div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        font-family: futura-pt;
        color: white;
        background-color: var(--myne-blue);
        margin: 0 0; 
	}
	img{ 
		width: 100%;
		height: 100%;
		max-width: 100%;
	}
	.home-button-container{
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 1em; 
	}
	button{
		font-size: 22px;
		text-decoration:none;
	}
</style>
