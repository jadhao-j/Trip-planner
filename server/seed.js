// ─────────────────────────────────────────────────────────────────────────────
//  seed.js — Run once to populate spots into MongoDB
//  Usage: cd server && node seed.js
// ─────────────────────────────────────────────────────────────────────────────

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Spot = require('./models/Spot');
const Hotel = require('./models/Hotel');

const spots = [
  // ── Amravati ────────────────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Chikhaldara Hill Station',
    location: 'Amravati, Maharashtra',
    fee: '50',
    timing: '9:00 AM to 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/chilkharldara.png',
    city: 'amravati',
  },
  {
    id: 2,
    name: 'Gavilgad Fort',
    location: 'Satpura Range, Amravati',
    fee: 'Free',
    timing: '8:00 AM - 5:30 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/govilghadport.png',
    city: 'amravati',
  },
  {
    id: 3,
    name: 'Ambadevi Temple',
    location: 'Amravati City',
    fee: 'Free',
    timing: '6:00 AM - 9:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/amravati.png',
    city: 'amravati',
  },
  {
    id: 4,
    name: 'Wan Wildlife Sanctuary',
    location: 'Amravati District',
    fee: '100',
    timing: '7:00 AM - 5:00 PM',
    closed: 'Tuesday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/chilkharldara.png',
    city: 'amravati',
  },

  // ── Pune ────────────────────────────────────────────────────────────────────
  {
    id: 5,
    name: 'Shaniwar Wada',
    location: 'Pune City',
    fee: '25',
    timing: '8:00 AM - 6:30 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/maharashtra/pune/shaniwarwada.jpg',
    city: 'pune',
  },
  {
    id: 6,
    name: 'Sinhagad Fort',
    location: '25km from Pune',
    fee: '50',
    timing: 'Open all day',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/maharashtra/pune/sinhagad fort.jpg',
    city: 'pune',
  },

  // ── Mumbai ──────────────────────────────────────────────────────────────────
  {
    id: 7,
    name: 'Gateway of India',
    location: 'Apollo Bunder, Mumbai',
    fee: 'Free',
    timing: 'Open 24 hrs',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/maharashtra/mumbai/gateway of india.jpg',
    city: 'mumbai',
  },
  {
    id: 8,
    name: 'Elephanta Caves',
    location: 'Elephanta Island, Mumbai',
    fee: '40',
    timing: '9:00 AM - 5:30 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/maharashtra/mumbai/elephant caves.jpg',
    city: 'mumbai',
  },

  // ── Chennai ─────────────────────────────────────────────────────────────────
  {
    id: 9,
    name: 'Kapaleeshwarar Temple',
    location: 'Mylapore, Chennai',
    fee: 'Free',
    timing: '5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/channai/kapaleeshwar-temple.jpg',
    city: 'chennai',
  },
  {
    id: 10,
    name: 'Marina Beach',
    location: 'Chennai Coast',
    fee: 'Free',
    timing: 'Open 24 hrs',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/channai/marina beach.jpg',
    city: 'chennai',
  },
  {
    id: 11,
    name: 'Chennai Rail Museum',
    location: 'ICF, Chennai',
    fee: '50',
    timing: '10:00 AM - 6:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/channai/chennai rail museum.jpg',
    city: 'chennai',
  },

  // ── Lonavala ────────────────────────────────────────────────────────────────
  {
    id: 12,
    name: 'Lion Point',
    location: 'Lonavala, Maharashtra',
    fee: '30',
    timing: '7:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/maharashtra/lonavala/lion point.jpg',
    city: 'lonavala',
  },
  {
    id: 13,
    name: 'Khandala Waterfall',
    location: 'Khandala, Lonavala',
    fee: 'Free',
    timing: 'Open all day',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/maharashtra/lonavala/waterfall.jpg',
    city: 'lonavala',
  },
  {
    id: 14,
    name: 'Eling Lake',
    location: 'Lonavala Hills',
    fee: '20',
    timing: '8:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/maharashtra/lonavala/lake.jpg',
    city: 'lonavala',
  },

  // ── Nashik ──────────────────────────────────────────────────────────────────
  {
    id: 15,
    name: 'Kalaram Temple',
    location: 'Nashik City',
    fee: 'Free',
    timing: '5:00 AM - 10:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/maharashtra/nashik/kalaram temple.jpg',
    city: 'nashik',
  },
  {
    id: 16,
    name: 'Trimbakeshwar Temple',
    location: 'Trimbak, Nashik',
    fee: 'Free',
    timing: '6:00 AM - 9:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/maharashtra/nashik/trimbakeshwar.jpg',
    city: 'nashik',
  },
  {
    id: 17,
    name: 'Godavari River Ghat',
    location: 'Nashik Ghat',
    fee: 'Free',
    timing: 'Open 24 hrs',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/maharashtra/nashik/ghat.jpg',
    city: 'nashik',
  },

  // ── New Delhi ───────────────────────────────────────────────────────────────
  {
    id: 18,
    name: 'India Gate',
    location: 'New Delhi',
    fee: 'Free',
    timing: 'Open 24 hrs',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/new delhi/india gate.jpg',
    city: 'new delhi',
  },
  {
    id: 19,
    name: 'Raj Ghat',
    location: 'New Delhi',
    fee: 'Free',
    timing: '9:30 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/new delhi/raj ghat.jpg',
    city: 'new delhi',
  },
  {
    id: 20,
    name: 'Red Fort',
    location: 'Old Delhi',
    fee: '35',
    timing: '9:30 AM - 4:30 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/new delhi/red fort.jpg',
    city: 'new delhi',
  },
  {
    id: 21,
    name: 'Kutub Minar',
    location: 'South Delhi',
    fee: '30',
    timing: '8:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/new delhi/kutub minar.jpg',
    city: 'new delhi',
  },

  // ── Jaipur ──────────────────────────────────────────────────────────────────
  {
    id: 22,
    name: 'Hawa Mahal',
    location: 'Jaipur City',
    fee: '75',
    timing: '9:00 AM - 5:30 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/rajasthan/jaypur/hawa mahal.jpg',
    city: 'jaipur',
  },
  {
    id: 23,
    name: 'City Palace',
    location: 'Jaipur City',
    fee: '50',
    timing: '9:30 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/rajasthan/jaypur/city palace.jpg',
    city: 'jaipur',
  },
  {
    id: 24,
    name: 'Albert Hall Museum',
    location: 'Ram Niwas Garden, Jaipur',
    fee: '40',
    timing: '10:00 AM - 5:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/rajasthan/jaypur/museum.jpg',
    city: 'jaipur',
  },

  // ── Jodhpur ─────────────────────────────────────────────────────────────────
  {
    id: 25,
    name: 'Mehrangarh Fort',
    location: 'Jodhpur City',
    fee: '100',
    timing: '9:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/rajasthan/jodhpur/mehrangarh.jpg',
    city: 'jodhpur',
  },
  {
    id: 26,
    name: 'Umaid Bhawan Palace',
    location: 'Jodhpur',
    fee: '150',
    timing: '9:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/rajasthan/jodhpur/umaid bhawan.jpg',
    city: 'jodhpur',
  },
  {
    id: 27,
    name: 'Ghanta Ghar',
    location: 'Jodhpur Clock Tower',
    fee: 'Free',
    timing: '9:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/rajasthan/jodhpur/ghanta ghar.jpg',
    city: 'jodhpur',
  },

  // ── Jaisalmer ───────────────────────────────────────────────────────────────
  {
    id: 28,
    name: 'Jaisalmer Fort',
    location: 'Jaisalmer City',
    fee: '50',
    timing: '9:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/rajasthan/jaisalmer/fort.jpg',
    city: 'jaisalmer',
  },
  {
    id: 29,
    name: 'Sam Sand Dunes',
    location: 'Sam, Jaisalmer',
    fee: '200',
    timing: '6:00 AM - 8:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/rajasthan/jaisalmer/sand dunes.jpg',
    city: 'jaisalmer',
  },
  {
    id: 30,
    name: 'Patwon Ki Haveli',
    location: 'Jaisalmer City',
    fee: '60',
    timing: '9:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/rajasthan/jaisalmer/haveli.jpg',
    city: 'jaisalmer',
  },

  // ── Udaipur ─────────────────────────────────────────────────────────────────
  {
    id: 31,
    name: 'City Palace',
    location: 'Udaipur, Rajasthan',
    fee: '80',
    timing: '9:30 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/rajasthan/Udaipur/city palace.jpg',
    city: 'udaipur',
  },
  {
    id: 32,
    name: 'Lake Pichola',
    location: 'Udaipur',
    fee: '500',
    timing: 'Open all day',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/rajasthan/Udaipur/lake.jpg',
    city: 'udaipur',
  },
  {
    id: 33,
    name: 'Jag Mandir',
    location: 'Lake Pichola, Udaipur',
    fee: '100',
    timing: '10:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/rajasthan/Udaipur/mandir.jpg',
    city: 'udaipur',
  },

  // ── Agra ────────────────────────────────────────────────────────────────────
  {
    id: 34,
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    fee: '250',
    timing: '6:00 AM - 7:00 PM',
    closed: 'Friday',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/uttar pradesh/Agra/taj mahal.jpg',
    city: 'agra',
  },
  {
    id: 35,
    name: 'Agra Fort',
    location: 'Agra City',
    fee: '35',
    timing: '6:00 AM - 6:00 PM',
    closed: 'Friday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/uttar pradesh/Agra/fort.jpg',
    city: 'agra',
  },
  {
    id: 36,
    name: 'Mehtab Bagh',
    location: 'Agra',
    fee: '200',
    timing: '6:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/uttar pradesh/Agra/garden.jpg',
    city: 'agra',
  },

  // ── Lucknow ─────────────────────────────────────────────────────────────────
  {
    id: 37,
    name: 'Rumi Darwaza',
    location: 'Lucknow City',
    fee: 'Free',
    timing: '9:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/uttar pradesh/lucknow/rumi darwaza.jpg',
    city: 'lucknow',
  },
  {
    id: 38,
    name: 'Bada Imambara',
    location: 'Lucknow City',
    fee: '50',
    timing: '9:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/uttar pradesh/lucknow/imambara.jpg',
    city: 'lucknow',
  },
  {
    id: 39,
    name: 'Lucknow Zoo',
    location: 'Lucknow',
    fee: '30',
    timing: '9:00 AM - 5:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/uttar pradesh/lucknow/zoo.jpg',
    city: 'lucknow',
  },

  // ── Varanasi ────────────────────────────────────────────────────────────────
  {
    id: 40,
    name: 'Ganga Aarti',
    location: 'Dashashwamedh Ghat, Varanasi',
    fee: 'Free',
    timing: '6:00 AM - 7:00 AM, 6:00 PM - 7:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/uttar pradesh/varanasi/ghat.jpg',
    city: 'varanasi',
  },
  {
    id: 41,
    name: 'Kashi Vishwanath Temple',
    location: 'Varanasi City',
    fee: 'Free',
    timing: '3:30 AM - 11:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/uttar pradesh/varanasi/temple.jpg',
    city: 'varanasi',
  },
  {
    id: 42,
    name: 'Assi Ghat',
    location: 'Varanasi',
    fee: 'Free',
    timing: 'Open 24 hrs',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/uttar pradesh/varanasi/assi ghat.jpg',
    city: 'varanasi',
  },

  // ── Nagpur ──────────────────────────────────────────────────────────────────
  {
    id: 43,
    name: 'Deekshabhoomi',
    location: 'Nagpur City',
    fee: 'Free',
    timing: '6:00 AM - 8:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/maharashtra/nagpur/deekshabhoomi.jpg',
    city: 'nagpur',
  },
  {
    id: 44,
    name: 'Ramtek Temple',
    location: 'Nagpur',
    fee: 'free',
    timing: '10:00 AM - 6:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/maharashtra/nagpur/ramtektemple.jpg',
    city: 'nagpur',
  },
  {
    id: 45,
    name: 'Ambazari Lake',
    location: 'Nagpur',
    fee: 'Free',
    timing: '6:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/maharashtra/nagpur/lake.jpg',
    city: 'nagpur',
  }
  ,

  // ── Konkan ──────────────────────────────────────────────────────────────────
  {
    id: 47,
    name: 'Sindhudurg Fort',
    location: 'Malvan, Konkan',
    fee: '100',
    timing: '9:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/maharashtra/konkan/fort.jpg',
    city: 'konkan',
  },
  {
    id: 48,
    name: 'Malvan Beach',
    location: 'Malvan, Konkan',
    fee: 'Free',
    timing: 'Open 24 hrs',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/maharashtra/konkan/beach.jpg',
    city: 'konkan',
  },
  {
    id: 49,
    name: 'Tarkarli Beach',
    location: 'Konkan Coast',
    fee: 'Free',
    timing: '8:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐✶',
    img: 'pictures/location/tour spots/tour spots/maharashtra/konkan/tarkarli.jpg',
    city: 'konkan',
  },
  {
    id: 50,
    name: 'Ratnagiri Lighthouse',
    location: 'Ratnagiri, Konkan',
    fee: '30',
    timing: '9:00 AM - 5:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/maharashtra/konkan/lighthouse.jpg',
    city: 'konkan',
  },

  // ── Kashmir ─────────────────────────────────────────────────────────────────
  {
    id: 51,
    name: 'Dal Lake',
    location: 'Srinagar, Kashmir',
    fee: '200',
    timing: '6:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kashmir/srinagar/dal lake.jpg',
    city: 'srinagar',
  },
  {
    id: 52,
    name: 'Mughal Gardens',
    location: 'Srinagar',
    fee: '100',
    timing: '9:00 AM - 5:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kashmir/srinagar/mughal gardens.jpg',
    city: 'srinagar',
  },
  {
    id: 53,
    name: 'Gulmarg Meadows',
    location: 'Gulmarg, Kashmir',
    fee: '150',
    timing: '8:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kashmir/gulmarg/meadows.jpg',
    city: 'gulmarg',
  },
  {
    id: 54,
    name: 'Gondola Ropeway',
    location: 'Gulmarg',
    fee: '500',
    timing: '9:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kashmir/gulmarg/ropeway.jpg',
    city: 'gulmarg',
  },
  {
    id: 55,
    name: 'Pahalgam Valley',
    location: 'Pahalgam, Kashmir',
    fee: 'Free',
    timing: '8:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kashmir/pahalgam/valley.jpg',
    city: 'pahalgam',
  },

  // ── Kerala ──────────────────────────────────────────────────────────────────
  {
    id: 56,
    name: 'Backwaters',
    location: 'Alleppey, Kerala',
    fee: '500',
    timing: '6:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kerala/alleppey/backwaters.jpg',
    city: 'alleppey',
  },
  {
    id: 57,
    name: 'Houseboat Cruise',
    location: 'Alleppey',
    fee: '2000',
    timing: '9:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kerala/alleppey/houseboat.jpg',
    city: 'alleppey',
  },
  {
    id: 58,
    name: 'Chinese Fishing Nets',
    location: 'Kochi, Kerala',
    fee: '10',
    timing: '7:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kerala/kochi/fishing nets.jpg',
    city: 'kochi',
  },
  {
    id: 59,
    name: 'Fort Kochi',
    location: 'Kochi, Kerala',
    fee: 'Free',
    timing: '9:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/kerala/kochi/fort.jpg',
    city: 'kochi',
  },
  {
    id: 60,
    name: 'Munnar Tea Gardens',
    location: 'Munnar, Kerala',
    fee: '150',
    timing: '8:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kerala/munnar/tea gardens.jpg',
    city: 'munnar',
  },
  {
    id: 61,
    name: 'Eravikulam National Park',
    location: 'Munnar',
    fee: '100',
    timing: '7:00 AM - 5:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/kerala/munnar/national park.jpg',
    city: 'munnar',
  },

  // ── Goa ─────────────────────────────────────────────────────────────────────
  {
    id: 62,
    name: 'Baga Beach',
    location: 'Goa',
    fee: 'Free',
    timing: 'Open 24 hrs',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/goa/baga beach.jpg',
    city: 'goa',
  },
  {
    id: 63,
    name: 'Anjuna Beach',
    location: 'Goa',
    fee: 'Free',
    timing: '7:00 AM - 7:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/goa/anjuna beach.jpg',
    city: 'goa',
  },
  {
    id: 64,
    name: 'Basilica of Bom Jesus',
    location: 'Old Goa',
    fee: 'Free',
    timing: '9:30 AM - 6:30 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/goa/basilica.jpg',
    city: 'goa',
  },

  // ── Himachal Pradesh ────────────────────────────────────────────────────────
  {
    id: 65,
    name: 'Manali Valley',
    location: 'Manali, Himachal Pradesh',
    fee: 'Free',
    timing: '8:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/himachal/manali/valley.jpg',
    city: 'manali',
  },
  {
    id: 66,
    name: 'Solang Valley',
    location: 'Manali',
    fee: '200',
    timing: '8:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/himachal/manali/solang.jpg',
    city: 'manali',
  },
  {
    id: 67,
    name: 'Shimla Ridge',
    location: 'Shimla, Himachal Pradesh',
    fee: 'Free',
    timing: '9:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/himachal/shimla/ridge.jpg',
    city: 'shimla',
  },

  // ── Uttarakhand ────────────────────────────────────────────────────────────
  {
    id: 68,
    name: 'Mussoorie Mall Road',
    location: 'Mussoorie, Uttarakhand',
    fee: 'Free',
    timing: '8:00 AM - 8:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/uttarakhand/mussoorie/mall.jpg',
    city: 'mussoorie',
  },
  {
    id: 69,
    name: 'Nainital Lake',
    location: 'Nainital, Uttarakhand',
    fee: '100',
    timing: '6:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/uttarakhand/nainital/lake.jpg',
    city: 'nainital',
  },
  {
    id: 70,
    name: 'Haridwar Ghat',
    location: 'Haridwar, Uttarakhand',
    fee: 'Free',
    timing: '5:00 AM - 10:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/uttarakhand/haridwar/ghat.jpg',
    city: 'haridwar',
  },

  // ── West Bengal ─────────────────────────────────────────────────────────────
  {
    id: 71,
    name: 'Victoria Memorial',
    location: 'Kolkata, West Bengal',
    fee: '50',
    timing: '10:00 AM - 6:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/west bengal/kolkata/victoria memorial.jpg',
    city: 'kolkata',
  },
  {
    id: 72,
    name: 'Howrah Bridge',
    location: 'Kolkata',
    fee: 'Free',
    timing: 'Open 24 hrs',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/west bengal/kolkata/howrah bridge.jpg',
    city: 'kolkata',
  },
  {
    id: 73,
    name: 'Darjeeling Tea Estate',
    location: 'Darjeeling, West Bengal',
    fee: '200',
    timing: '8:00 AM - 5:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/west bengal/darjeeling/tea estate.jpg',
    city: 'darjeeling',
  },

  // ── Andaman & Nicobar ───────────────────────────────────────────────────────
  {
    id: 74,
    name: 'Radhanagar Beach',
    location: 'Havelock Island, Andaman',
    fee: 'Free',
    timing: '8:00 AM - 6:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/andaman/havelock/radhanagar.jpg',
    city: 'havelock',
  },
  {
    id: 75,
    name: 'Ross Island',
    location: 'Port Blair, Andaman',
    fee: '300',
    timing: '8:30 AM - 5:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/andaman/port blair/ross island.jpg',
    city: 'port blair',
  },
  {
    id: 76,
    name: 'Cellular Jail',
    location: 'Port Blair',
    fee: '100',
    timing: '9:00 AM - 1:00 PM, 2:00 PM - 5:00 PM',
    closed: 'Monday',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/andaman/port blair/cellular jail.jpg',
    city: 'port blair',
  },

  // ── Tamil Nadu ──────────────────────────────────────────────────────────────
  {
    id: 77,
    name: 'Meenakshi Temple',
    location: 'Madurai, Tamil Nadu',
    fee: 'Free',
    timing: '5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/tamil nadu/madurai/meenakshi temple.jpg',
    city: 'madurai',
  },
  {
    id: 78,
    name: 'Thanjavur Temple',
    location: 'Thanjavur, Tamil Nadu',
    fee: 'Free',
    timing: '6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM',
    closed: 'Open all days',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/tamil nadu/thanjavur/temple.jpg',
    city: 'thanjavur',
  },

  // ── Hyderabad ───────────────────────────────────────────────────────────────
  {
    id: 79,
    name: 'Charminar',
    location: 'Hyderabad, Telangana',
    fee: '25',
    timing: '9:30 AM - 5:30 PM',
    closed: 'Friday',
    rating: '⭐⭐⭐⭐⭐',
    img: 'pictures/location/tour spots/tour spots/hyderabad/charminar.jpg',
    city: 'hyderabad',
  },
  {
    id: 80,
    name: 'Chowmahalla Palace',
    location: 'Hyderabad',
    fee: '100',
    timing: '9:30 AM - 5:00 PM',
    closed: 'Friday',
    rating: '⭐⭐⭐⭐☆',
    img: 'pictures/location/tour spots/tour spots/hyderabad/palace.jpg',
    city: 'hyderabad',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Seed Spots
    await Spot.deleteMany({});
    console.log('🗑  Cleared existing spots');

    await Spot.insertMany(spots);
    console.log(`🌱 Seeded ${spots.length} spots successfully`);

    // Seed Hotels
    const hotels = [
      // Amravati hotels
      { name: 'Grand Samrat Hotel Amravati', city: 'amravati', address: 'City Center, Amravati', rating: '⭐ 4.3', pricePerNight: 3500, stars: 4, img: 'pictures/hotels/grandplace.png', description: 'Comfortable 4-star hotel with AC rooms' },
      { name: 'Hotel Shree', city: 'amravati', address: 'Railway Station Road', rating: '⭐ 4.0', pricePerNight: 2200, stars: 3, img: 'pictures/hotels/comfortR.png', description: 'Budget-friendly option near station' },
      { name: 'Amar Resort', city: 'amravati', address: 'Chikhaldara Road', rating: '⭐ 4.5', pricePerNight: 5000, stars: 5, img: 'pictures/hotels/royalStay.png', description: 'Luxury resort with hill views' },
      { name: 'Hotel Anurag', city: 'amravati', address: 'Khamla Road', rating: '⭐ 3.8', pricePerNight: 1800, stars: 2, img: 'pictures/hotels/grandplace.png', description: 'Good value hotel' },
      { name: 'Midtown Hotel', city: 'amravati', address: 'Main Bazaar', rating: '⭐ 4.1', pricePerNight: 2800, stars: 3, img: 'pictures/hotels/royalStay.png', description: '3-star hotel in city center' },

      // Pune hotels
      { name: 'Taj Blue Diamond', city: 'pune', address: 'Koregaon Park', rating: '⭐ 4.6', pricePerNight: 8000, stars: 5, img: 'pictures/hotels/royalStay.png', description: 'Premium 5-star luxury hotel' },
      { name: 'Hotel Sinha', city: 'pune', address: 'Camp, Pune', rating: '⭐ 4.2', pricePerNight: 3500, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star comfort hotel' },
      { name: 'Stay Inn Pune', city: 'pune', address: 'FC Road', rating: '⭐ 3.9', pricePerNight: 2000, stars: 3, img: 'pictures/hotels/comfortR.png', description: 'Budget hotel near Osho Ashram' },
      { name: 'Lotus Hotel', city: 'pune', address: 'Shivaji Nagar', rating: '⭐ 4.0', pricePerNight: 2500, stars: 3, img: 'pictures/hotels/royalStay.png', description: '3-star with good amenities' },
      { name: 'Pune Residency', city: 'pune', address: 'Viman Nagar', rating: '⭐ 4.3', pricePerNight: 4200, stars: 4, img: 'pictures/hotels/grandplace.png', description: 'Business hotel with conference facilities' },

      // Mumbai hotels
      { name: 'Taj Mahal Palace', city: 'mumbai', address: 'Colaba', rating: '⭐ 4.9', pricePerNight: 15000, stars: 5, img: 'pictures/hotels/royalStay.png', description: 'Iconic 5-star luxury hotel' },
      { name: 'The Oberoi Mumbai', city: 'mumbai', address: 'Nariman Point', rating: '⭐ 4.7', pricePerNight: 12000, stars: 5, img: 'pictures/hotels/grandplace.png', description: 'Premium beachfront property' },
      { name: 'Hotel Sahara Star', city: 'mumbai', address: 'Vile Parle', rating: '⭐ 4.4', pricePerNight: 5500, stars: 4, img: 'pictures/hotels/comfortR.png', description: 'Modern 4-star near airport' },
      { name: 'Residency Hotel', city: 'mumbai', address: 'Fort, Mumbai', rating: '⭐ 4.1', pricePerNight: 3200, stars: 3, img: 'pictures/hotels/royalStay.png', description: 'Good budget option in Fort' },
      { name: 'Hotel Pearl', city: 'mumbai', address: 'Bandra', rating: '⭐ 4.2', pricePerNight: 4000, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star in trendy Bandra' },

      // Nagpur hotels
      { name: 'Orange City Hotel', city: 'nagpur', address: 'South Ambazari Road', rating: '⭐ 4.3', pricePerNight: 3800, stars: 4, img: 'pictures/hotels/royalStay.png', description: '4-star hotel in Nagpur' },
      { name: 'The Retreat', city: 'nagpur', address: 'Ramdaspeth', rating: '⭐ 4.0', pricePerNight: 2300, stars: 3, img: 'pictures/hotels/comfortR.png', description: 'Good value 3-star hotel' },
      { name: 'Sapna Hotel', city: 'nagpur', address: 'Itwari', rating: '⭐ 4.1', pricePerNight: 2600, stars: 3, img: 'pictures/hotels/grandplace.png', description: 'Central location 3-star' },
      { name: 'Nagpur Grand', city: 'nagpur', address: 'Civil Lines', rating: '⭐ 4.4', pricePerNight: 4500, stars: 4, img: 'pictures/hotels/royalStay.png', description: 'Premium 4-star property' },
      { name: 'Budget Inn Nagpur', city: 'nagpur', address: 'Sitabuldi', rating: '⭐ 3.7', pricePerNight: 1500, stars: 2, img: 'pictures/hotels/comfortR.png', description: 'Economy option near station' },

      // Nashik hotels
      { name: 'Sula Vineyards', city: 'nashik', address: 'Nashik Wine Country', rating: '⭐ 4.6', pricePerNight: 7000, stars: 5, img: 'pictures/hotels/royalStay.png', description: 'Luxury resort in wine region' },
      { name: 'Sterling Hotel', city: 'nashik', address: 'Nashik Road', rating: '⭐ 4.2', pricePerNight: 3000, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star hotel with vineyard views' },
      { name: 'Hotel Tara', city: 'nashik', address: 'Grand Road', rating: '⭐ 3.9', pricePerNight: 1900, stars: 3, img: 'pictures/hotels/comfortR.png', description: 'Budget hotel in city center' },
      { name: 'Nashik Pride', city: 'nashik', address: 'Nashik City', rating: '⭐ 4.0', pricePerNight: 2400, stars: 3, img: 'pictures/hotels/royalStay.png', description: '3-star with good facilities' },
      { name: 'Valley View Resort', city: 'nashik', address: 'Godavari Valley', rating: '⭐ 4.3', pricePerNight: 4500, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star with valley views' },

      // Konkan hotels
      { name: 'Malvan Paradise Resort', city: 'konkan', address: 'Malvan Beach', rating: '⭐ 4.4', pricePerNight: 5000, stars: 4, img: 'pictures/hotels/royalStay.png', description: '4-star beachfront resort' },
      { name: 'Coastal Retreat', city: 'konkan', address: 'Tarkarli', rating: '⭐ 4.2', pricePerNight: 3500, stars: 4, img: 'pictures/hotels/grandplace.png', description: 'Beach resort with water sports' },
      { name: 'Ratnagiri Inn', city: 'konkan', address: 'Ratnagiri', rating: '⭐ 3.9', pricePerNight: 2200, stars: 3, img: 'pictures/hotels/comfortR.png', description: 'Comfortable 3-star hotel' },

      // Kashmir - Srinagar hotels
      { name: 'Dal View Resort', city: 'srinagar', address: 'Dal Lake', rating: '⭐ 4.6', pricePerNight: 6500, stars: 5, img: 'pictures/hotels/royalStay.png', description: 'Luxury houseboat on Dal Lake' },
      { name: 'Shikara Palace', city: 'srinagar', address: 'Srinagar City', rating: '⭐ 4.3', pricePerNight: 4000, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star traditional hotel' },
      { name: 'Lake View Inn', city: 'srinagar', address: 'Srinagar', rating: '⭐ 3.8', pricePerNight: 2500, stars: 3, img: 'pictures/hotels/comfortR.png', description: 'Budget hotel with lake views' },

      // Kashmir - Gulmarg hotels
      { name: 'Gulmarg Alpine Resort', city: 'gulmarg', address: 'Gulmarg', rating: '⭐ 4.7', pricePerNight: 8000, stars: 5, img: 'pictures/hotels/royalStay.png', description: 'Luxury mountain resort' },
      { name: 'Snow View Hotel', city: 'gulmarg', address: 'Gulmarg', rating: '⭐ 4.2', pricePerNight: 3800, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star with mountain views' },

      // Kerala - Alleppey hotels
      { name: 'Backwater Houseboat', city: 'alleppey', address: 'Alleppey Backwaters', rating: '⭐ 4.8', pricePerNight: 7500, stars: 5, img: 'pictures/hotels/royalStay.png', description: 'Luxury houseboat experience' },
      { name: 'Alleppey Grand', city: 'alleppey', address: 'Alleppey', rating: '⭐ 4.3', pricePerNight: 4200, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star hotel with backwater views' },
      { name: 'Budget Resthouse', city: 'alleppey', address: 'Alleppey', rating: '⭐ 3.7', pricePerNight: 1800, stars: 2, img: 'pictures/hotels/comfortR.png', description: 'Budget option' },

      // Kerala - Kochi hotels
      { name: 'Fort Kochi Palace', city: 'kochi', address: 'Fort Kochi', rating: '⭐ 4.5', pricePerNight: 5500, stars: 5, img: 'pictures/hotels/royalStay.png', description: 'Luxury heritage hotel' },
      { name: 'Marina Hotel', city: 'kochi', address: 'Kochi Waterfront', rating: '⭐ 4.2', pricePerNight: 3500, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star with harbor views' },

      // Kerala - Munnar hotels
      { name: 'Tea Garden Estate', city: 'munnar', address: 'Munnar', rating: '⭐ 4.6', pricePerNight: 6000, stars: 5, img: 'pictures/hotels/royalStay.png', description: 'Resort in tea plantations' },
      { name: 'Munnar View Hotel', city: 'munnar', address: 'Munnar', rating: '⭐ 4.1', pricePerNight: 3000, stars: 3, img: 'pictures/hotels/grandplace.png', description: '3-star with valley views' },

      // Goa hotels
      { name: 'Baga Beach Resort', city: 'goa', address: 'Baga Beach', rating: '⭐ 4.5', pricePerNight: 5000, stars: 4, img: 'pictures/hotels/royalStay.png', description: '4-star beachfront resort' },
      { name: 'Seaside Paradise', city: 'goa', address: 'Anjuna Beach', rating: '⭐ 4.3', pricePerNight: 4000, stars: 4, img: 'pictures/hotels/grandplace.png', description: 'Beach shack and room combinations' },

      // Himachal Pradesh - Manali hotels
      { name: 'Manali Mountain Resort', city: 'manali', address: 'Manali', rating: '⭐ 4.4', pricePerNight: 4500, stars: 4, img: 'pictures/hotels/royalStay.png', description: '4-star in valley' },
      { name: 'Adventure Camp', city: 'manali', address: 'Solang Valley', rating: '⭐ 4.2', pricePerNight: 3500, stars: 3, img: 'pictures/hotels/grandplace.png', description: 'Budget adventure camp' },

      // Himachal Pradesh - Shimla hotels
      { name: 'Shimla Palace Hotel', city: 'shimla', address: 'Shimla Ridge', rating: '⭐ 4.3', pricePerNight: 4000, stars: 4, img: 'pictures/hotels/royalStay.png', description: '4-star heritage hotel' },
      { name: 'Budget Inn Shimla', city: 'shimla', address: 'Shimla', rating: '⭐ 3.8', pricePerNight: 2000, stars: 2, img: 'pictures/hotels/comfortR.png', description: 'Budget friendly option' },

      // Uttarakhand - Mussoorie hotels
      { name: 'Mussoorie Hilltop Resort', city: 'mussoorie', address: 'Mussoorie', rating: '⭐ 4.4', pricePerNight: 4500, stars: 4, img: 'pictures/hotels/royalStay.png', description: '4-star resort' },

      // Uttarakhand - Nainital hotels
      { name: 'Lake Nainital Resort', city: 'nainital', address: 'Nainital', rating: '⭐ 4.3', pricePerNight: 4200, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star with lake view' },

      // Uttarakhand - Haridwar hotels
      { name: 'Haridwar Ghat Hotel', city: 'haridwar', address: 'Haridwar', rating: '⭐ 4.0', pricePerNight: 2500, stars: 3, img: 'pictures/hotels/comfortR.png', description: '3-star near holy ghat' },

      // West Bengal - Kolkata hotels
      { name: 'Victoria Palace', city: 'kolkata', address: 'Kolkata', rating: '⭐ 4.3', pricePerNight: 4000, stars: 4, img: 'pictures/hotels/royalStay.png', description: '4-star heritage hotel' },

      // West Bengal - Darjeeling hotels
      { name: 'Tea Estate Resort', city: 'darjeeling', address: 'Darjeeling', rating: '⭐ 4.4', pricePerNight: 4800, stars: 4, img: 'pictures/hotels/grandplace.png', description: '4-star in tea gardens' },

      // Andaman - Port Blair hotels
      { name: 'Island Resort', city: 'port blair', address: 'Port Blair', rating: '⭐ 4.2', pricePerNight: 3800, stars: 4, img: 'pictures/hotels/royalStay.png', description: '4-star island resort' },

      // Andaman - Havelock hotels
      { name: 'Beach Paradise Havelock', city: 'havelock', address: 'Havelock Island', rating: '⭐ 4.5', pricePerNight: 5500, stars: 5, img: 'pictures/hotels/royalStay.png', description: '5-star beach resort' },

      // Tamil Nadu hotels
      { name: 'Madurai Temple View', city: 'madurai', address: 'Madurai', rating: '⭐ 4.1', pricePerNight: 3000, stars: 3, img: 'pictures/hotels/grandplace.png', description: '3-star near temple' },
      { name: 'Thanjavur Heritage', city: 'thanjavur', address: 'Thanjavur', rating: '⭐ 4.0', pricePerNight: 2800, stars: 3, img: 'pictures/hotels/comfortR.png', description: 'Heritage hotel' },

      // Hyderabad hotels
      { name: 'Hyderabad Grand', city: 'hyderabad', address: 'Hyderabad', rating: '⭐ 4.4', pricePerNight: 4500, stars: 4, img: 'pictures/hotels/royalStay.png', description: '4-star luxury hotel' },
    ];

    await Hotel.deleteMany({});
    console.log('🗑  Cleared existing hotels');

    await Hotel.insertMany(hotels);
    console.log(`🌱 Seeded ${hotels.length} hotels successfully`);

    await mongoose.disconnect();
    console.log('✅ Done — you can now start the server');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
