<script>
    import {v4 as uuidv4} from 'uuid'
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    import { FeedbackStore } from '../stores';
  

    
    let text = ''
    let btnDisabled = true
    let minText = 10
    let message
    let rating = 10

    const handleInput = () => {
        if (text.trim().length <= minText){
           message = `Text must be at least ${minText} characters`
           btnDisabled = true  
        } else {
            message = null
            btnDisabled = false
        }
    }

    const handleSelect = e => rating = e.detail

    const handleSubmit = () => {
        if (text.trim().length  > minText){
            const newFeedback = {
                id: uuidv4(),
                text,
                rating: +rating
            }
            
            FeedbackStore.update((currentFeedback)=>{
                return [newFeedback, ...currentFeedback]
            })
            text = ''
        }
    }

</script>

<Card>
  <header>
        <h2>
            How would you rate us?
        </h2>
    </header>
    <form on:submit|once|preventDefault={handleSubmit}>
    <RatingSelect on:ratingRelect={handleSelect}/>
    <div class="input-group">
        <input type="text"  on:input={handleInput}  placeholder="Tell us something what you like or dislike about us." bind:value={text}>
       <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>

    {#if message}
       <div class="message">
        {message}
       </div>
    {/if}
</form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    .input-group{
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }

    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }

    input:focus{
        outline: none;
    }

    .message {
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>