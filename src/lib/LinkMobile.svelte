<script>
	export let url, img, text;
</script>

<a href="{url}" class="flex flex-row items-center justify-between w-full p-3 text-white rounded-md h-14 hover:bg-gray-400">
    <img src="{img}" class="w-8 h-8" alt="{url}"/>
    <h1 class="text-xl font-bold">{text}</h1>
</a>

<style>
    a:not(:first-child) {
        @apply mt-5;
    }
</style>