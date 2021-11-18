<svelte:head>
    <title>Svelte App</title>
</svelte:head>

<script>
	import { onMount } from 'svelte';
    import Link from '../lib/Link.svelte';

    var bgs = [
        {'img':'/assets/img/akl-bg.png', 'attr':'Photo by <a href="https://unsplash.com/@samferrara">Samuel Ferrara</a> on <a href="https://unsplash.com/s/photos/auckland">Unsplash</a>'},
        {'img':'/assets/img/akl-bike.png', 'attr':'Photo by <a href="https://unsplash.com/@thantzinoo18">Thant Zin Oo</a> on <a href="https://unsplash.com/s/photos/auckland">Unsplash</a>'},
        {'img':'/assets/img/london-bridge.png', 'attr':'Photo by <a href="https://unsplash.com/@charlespostiaux">Charles Postiaux</a> on <a href="https://unsplash.com/s/photos/london">Unsplash</a>'},
        {'img':'/assets/img/clouds-1.png', 'attr':'Photo by <a href="https://unsplash.com/@zetong">Zetong Li</a> on <a href="https://unsplash.com/t/nature">Unsplash</a>'},
        {'img':'/assets/img/ice-1.png', 'attr':'Photo by <a href="https://unsplash.com/@didiofederico_photographer">Federico Di Dio photography</a> on <a href="https://unsplash.com/t/naturet">Unsplash</a>'},
    ];

    onMount(async () => {
        bg()

        const left = document.getElementById('left');
        const right = document.getElementById('right');

        await sleep(1.5);
        left.classList.remove('h-0');
        left.classList.add('h-full');
        left.classList.add('p-5');
        await sleep(0.7);
        right.classList.remove('opacity-0');
        left.classList.remove('translate-x-1/2');
        right.classList.add('-translate-x-full');
        right.classList.remove('-translate-x-1/2');
        await sleep(0.7);
        right.classList.remove('-translate-x-full');
        
        let pfp = 'irl';

        var irlpfp = document.getElementById('irl-pfp');
        var mcpfp = document.getElementById('mc-pfp');

        var irlname = document.getElementById('irl-name');
        var mcname = document.getElementById('mc-name');

        setInterval(() => {
            if (pfp == 'irl') {
                mcpfp.classList.add('h-full');
                mcpfp.classList.remove('h-0');

                mcname.classList.add('h-full');
                mcname.classList.remove('h-0');



                irlpfp.classList.remove('h-full');
                irlpfp.classList.add('h-0');

                irlname.classList.remove('h-full');
                irlname.classList.add('h-0');

                pfp = 'mc'
            } else {
                irlpfp.classList.add('h-full');
                irlpfp.classList.remove('h-0');

                irlname.classList.add('h-full');
                irlname.classList.remove('h-0');



                mcpfp.classList.remove('h-full');
                mcpfp.classList.add('h-0');

                mcname.classList.remove('h-full');
                mcname.classList.add('h-0');

                pfp = 'irl'
            }
        }, 3000);

        setInterval(() => {
            bg()
        }, 10000);
    });

    function bg() {
        let bg = bgs[Math.floor(Math.random() * (bgs.length - 0 + 1) + 0)]
        document.getElementById('main').style.backgroundImage = `url("${bg.img}")`;
        document.getElementById('img-attr').innerHTML = bg.attr;
    }

    function sleep(s) {
        return new Promise(resolve => setTimeout(resolve, (s * 1000)));
    }

    var links = [
        {'url':'https://github.com/IzMichael', 'img':'./assets/icons/github.png', 'text':'GitHub'},
        {'url':'https://twitter.com/IzMichael7', 'img':'./assets/icons/twitter.svg', 'text':'Twitter'},
        {'url':'https://dev.to/izmichael', 'img':'./assets/icons/dev.svg', 'text':'DEV'},
        {'url':'https://izmichael.xyz/', 'img':'./assets/icons/website.svg', 'text':'Website'},
        {'url':'https://blog.izmichael.xyz/', 'img':'./assets/icons/blog.svg', 'text':'Blog'},
    ];
</script>

<div id="main" class="flex flex-row items-center justify-center w-screen h-screen p-16 overflow-hidden">
    <div id="left" class="z-50 flex flex-col items-center justify-center w-1/3 h-0 overflow-hidden font-bold text-white transition-all duration-700 ease-in-out transform translate-x-1/2 bg-gray-600 rounded-lg shadow-2xl">
        <div class="relative w-32 h-32 overflow-hidden rounded-full">
            <img src="./assets/img/IRL-Circle.png" alt="IRL PFP" id="irl-pfp" class="absolute top-0 z-40 w-full h-full transition-all duration-500 ease-in-out">
            <img src="./assets/img/MC-Circle.png" alt="MC PFP" id="mc-pfp" class="absolute bottom-0 z-40 w-full h-0 transition-all duration-500 ease-in-out">
        </div>

        <div class="relative w-full h-10 mt-2 overflow-hidden text-3xl">
            <h1 id="irl-name" class="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-full overflow-hidden transition-all duration-500 ease-in-out bg-gray-600">Michael Martin</h1>
            <h1 id="mc-name" class="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-0 overflow-hidden transition-all duration-500 ease-in-out bg-gray-600">IzMichael</h1>
        </div>

        <hr class="w-8 my-4">
        
        <p id="img-attr" class="text-sm font-light">a</p>
    </div>

    <div id="right" class="z-40 flex flex-col items-center justify-center w-1/3 p-2 transition-all duration-700 ease-in-out transform -translate-x-1/2 bg-gray-500 rounded-r-lg shadow-2xl opacity-0" style="height: 90%;">
        {#each links as { url, img, text }, i}
            <Link {url} {img} {text}/>
	    {/each}
    </div>
</div>

<style>
    #main {
        background-image: url("/assets/img/akl-bg.png");
        background-size: cover;
        z-index: 5;
    }

    #main::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: rgba(41, 41, 41, 0.514);
    }
</style>