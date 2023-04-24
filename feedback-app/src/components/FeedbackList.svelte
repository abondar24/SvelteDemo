<script>
    import { FeedbackStore } from './../stores.js';
    import FeedbackItem from "./FeedbackItem.svelte";
    import { fade, scale } from 'svelte/transition' 
	
    

</script>

{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade="{{ duration: 500 }}">
 <FeedbackItem item={fb} k/>
</div>
 
{/each}