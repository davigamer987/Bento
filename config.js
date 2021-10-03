// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Davi',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: '☀️ G\'day,',
  greetingAfternoon: '🕒 Good afternoon,',
  greetingEvening: '🌙 Good evening,',
  greetingNight: '💤 Good Night,',

  // Weather
  weatherKey: '3465d17feb9ef0f2efaabac0d7ea99cb',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '0',
  defaultLongitude: '0',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'DuckDuckGo',
      icon: 'search',
      link: 'https://duckduckgo.com/',
    },
    {
      id: '2',
      name: 'YouTube',
      icon: 'youtube-play',
      link: 'https://youtube.com/',
    },
    {
      id: '3',
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/davigamer987',
    },
    {
      id: '4',
      name: 'Discord',
      icon: 'message-circle',
      link: 'https://discord.com/login',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'reddit',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Phoronix',
      icon: 'linux',
      link: 'https://phoronix.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'newspaper',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Youtube Music',
        link: 'https://music.youtube..com',
      },
      {
        name: 'Nostalgia Playlist',
        link: 'https://music.youtube.com/playlist?list=PLgGa7baMZopRCAW7lETWdtpTv0VPO7zC0',
      },
      {
        name: 'Netflix',
        link: 'https://netflix.com',
      },
      {
        name: 'AnimixPlay',
        link: 'https://animixplay.to/',
      },
    ],
    secondList: [
      {
        name: 'r/unixporn',
        link: 'https://reddit.com/r/unixporn',
      },
      {
        name: 'r/linux',
        link: 'https://reddit.com/r/linux',
      },
      {
        name: 'GitHub Explore',
        link: 'https://github.com/explore',
      },
    ],
  },
};
