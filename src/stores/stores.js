import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'This is a feedback sample, this app looks cool. Looking forward to more cool stuff',
      },
      {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
      {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
]) 