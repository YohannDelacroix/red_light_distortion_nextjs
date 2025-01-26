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
  {
    day: 1,
    month: 'JAN',
    place_geo: 'München, Bayern Deutschland',
    place_name: 'Die Welt',
    ticket_link: '',
    more_link: ''
  },
  {
    day: 3,
    month: 'FEB',
    place_geo: 'Angers, Pays de la Loire, France',
    place_name: 'T es rock coco',
    ticket_link: 'http://google.com',
    more_link: ''
  },

  {
    day: 30,
    month: 'FEB',
    place_geo: 'Budapest, Hungary',
    place_name: 'Caligula',
    ticket_link: '',
    more_link: 'http://google.com'
  },
  {
    day: 18,
    month: 'AUG',
    place_geo: 'Paris, Île de France, France',
    place_name: 'Bercy',
    ticket_link: 'http://google.com',
    more_link: 'http://google.com'
  }
]

export const getStaticTourDates = () => {
  return [...staticTourDates]
}



