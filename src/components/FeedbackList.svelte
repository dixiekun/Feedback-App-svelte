<script>
    import {FeedbackStore} from '../stores/stores'
    import { scale, slide } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";
</script>

<ul>
    {#each $FeedbackStore as item (item.id) }
   
        <li in:scale out:slide>
            <FeedbackItem {item} />
        </li>
  
    {/each}
</ul>