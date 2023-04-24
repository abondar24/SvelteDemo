import {writable} from 'svelte/store'

export const FeedbackStore = writable([{
			id:1,
			rating: 10,
			text: 'All good, nice food'
		},
		{
			id:2,
			rating: 7,
			text: 'Waiters jokes are bad'
		},
		{
			id:3,
			rating: 5,
			text: 'Too long to to wait wgen full'
		}])