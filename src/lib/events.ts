import { parse } from 'date-fns';
export interface ClimateEvent {
  date: Date;
  city: string | null;
  title: string;
  host: string | null;
  venue: string | null;
  address: string | null;
  link: string;
  source: string;
  tags: string[];
}
const rawEvents = [
  { date_local: "2025-11-05", time_local: "17:30", city: "Boston", title: "Native American Heritage Month Panel", host: "newiee.org", venue: "Avangrid (Boston Office)", address: "125 High Street, 6th Floor, Boston, MA, 02110, United States", link: "https://newiee.org/event/balancing-environmental-land-stewardship-and-energy-development-on-indigenous-land/", source: "https://newiee.org/events/?ical=1", tags: "energy,sustainability,policy" },
  { date_local: "2025-11-06", time_local: "00:00", city: "Boston", title: "Housing Innovation Symposium", host: "architects.org", venue: null, address: null, link: "https://www.architects.org/events/subscribe.ics", source: "https://www.architects.org/events/subscribe.ics", tags: "climate tech,energy,policy" },
  { date_local: "2025-11-06", time_local: "08:00", city: "Boston", title: "Greentown Labs 2025 Climatetech Summit", host: "newiee.org", venue: "Greentown Labs", address: "444 Somerville Ave, Somerville, MA, 02143, United States", link: "https://newiee.org/event/masscec-greentown-labs-2025-climatetech-summit/", source: "https://newiee.org/events/?ical=1", tags: "climate tech,energy,decarbonization,sustainability,founders" },
  { date_local: "2025-11-06", time_local: "17:00", city: "Boston", title: "NESEA: 50th Anniversary Annual Meeting and Community Happy Hour", host: "newiee.org", venue: null, address: null, link: "https://newiee.org/event/nesea-50th-anniversary-annual-meeting-and-community-happy-hour/", source: "https://newiee.org/events/?ical=1", tags: "energy" },
  { date_local: "2025-11-13", time_local: "12:00", city: null, title: "Tufts Fletcher School Book Talk: Why Carbon Taxes Failed", host: "newiee.org", venue: "Cabot Intercultural Center", address: "Medford, 02155, United States", link: "https://newiee.org/event/tufts-fletcher-school-book-talk-why-carbon-taxes-failed/", source: "https://newiee.org/events/?ical=1", tags: "decarbonization,policy" },
  { date_local: "2025-11-13", time_local: "17:30", city: "Boston", title: "NECA & YPE: Young Professionals Trivia Night", host: "newiee.org", venue: "Margaritaville", address: "Boston, MA, 02110, United States", link: "https://newiee.org/event/neca-ype-young-professionals-trivia-night/", source: "https://newiee.org/events/?ical=1", tags: "energy,career" },
  { date_local: "2025-11-17", time_local: "00:00", city: "Boston", title: "RESNET Hybrid HERS Rater Training- FALL 2025", host: "newiee.org", venue: "Building Evolution Corporation", address: "138 Green Street, Suite 203, Worcester, MA, 01604, United States", link: "https://newiee.org/event/resnet-hybrid-hers-rater-training-fall-2025/", source: "https://newiee.org/events/?ical=1", tags: "energy,sustainability,policy" },
  { date_local: "2025-11-19", time_local: "00:00", city: "Boston", title: "NECBC: 33rd Annual U.S.-Canada Executive Energy Conference", host: "newiee.org", venue: "Seaport Hotel and World Trade Center", address: "1 Seaport Lane, Boston, MA, 02210, United States", link: "https://newiee.org/event/necbc-33rd-annual-u-s-canada-executive-energy-conference/", source: "https://newiee.org/events/?ical=1", tags: "energy,sustainability,policy" },
  { date_local: "2025-11-20", time_local: "15:00", city: "Boston", title: "Women's Energy Network Boston Chapter: Tour of Greentown Labs", host: "newiee.org", venue: "Greentown Labs", address: "444 Somerville Ave, Somerville, MA, 02143, United States", link: "https://newiee.org/event/womens-energy-network-boston-chapter-first-sundays-november-wen-meet-up-2/", source: "https://newiee.org/events/?ical=1", tags: "climate tech,energy,sustainability,founders" },
  { date_local: "2025-11-20", time_local: "16:30", city: "Boston", title: "NEWIEE’s Annual Members Meeting & Fall Fête 2025", host: "newiee.org", venue: "The Engine", address: "750 Main Street, Cambridge, MA, 02139, United States", link: "https://newiee.org/event/newiees-annual-members-meeting-fall-fete-2025-2/", source: "https://newiee.org/events/?ical=1", tags: "energy,decarbonization,sustainability,career" },
  { date_local: "2025-11-21", time_local: "12:00", city: "Boston", title: "NEWIEE Rising Professionals Committee Monthly Meetup", host: "newiee.org", venue: null, address: null, link: "https://newiee.org/event/newiee-rising-professionals-committee-monthly-meetup-16-2025-11-28/", source: "https://newiee.org/events/?ical=1", tags: "climate tech,energy,decarbonization,sustainability,policy,career,founders" },
];
export const events: ClimateEvent[] = rawEvents.map(event => {
  const dateTimeString = `${event.date_local} ${event.time_local}`;
  const parsedDate = parse(dateTimeString, 'yyyy-MM-dd HH:mm', new Date());
  return {
    ...event,
    date: parsedDate,
    tags: event.tags ? event.tags.split(',').map(tag => tag.trim()) : [],
  };
});