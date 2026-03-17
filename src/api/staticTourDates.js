/**
 * Static Tour Dates Data
 * 
 * This file contains a static list of upcoming tour dates. 
 * Each tour date includes the following details:
 * - `day`: The day of the month the event will occur.
 * - `month`: The month the event will occur.
 * - `place_geo`: The geographical location of the event, including the city, region, and country.
 * - `place_name`: The name of the venue or place where the event will take place.
 * - `ticket_link`: A URL to purchase tickets for the event (can be empty if no ticketing link is available).
 * - `more_link`: A URL to additional event details or related resources (can be empty if no further details are provided).
 * 
 * This data is currently static, and can be expanded or updated as new tour dates are added. 
 * 
 * The `getStaticTourDates` function is used to retrieve the tour dates. It simply returns the current list of static dates.
 * 
 */

const staticTourDates = [
]

const pastDates = [
  {
    day: 21,
    month: 'OCT',
    year: 2021,
    place_geo: 'Angers, France',
    place_name: "T'es rock Coco",
    ticket_link: '',
    more_link: ''
  },
  {
    day: 1,
    month: 'DEC',
    year: 2022,
    place_geo: 'Orléans, France',
    place_name: "Le bouillon, Université d'Orléans",
    ticket_link: '',
    more_link: ''
  },
]

export const getStaticTourDates = () => {
  return [...staticTourDates]
}

export const getStaticPastDates = () => {
  return [...pastDates]
}



