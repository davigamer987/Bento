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
  greetingMorning: '☀️ Gud day Sur',
  greetingAfternoon: '🕒 Gud afternoon,',
  greetingEvening: '🌙 Gud evening,',
  greetingNight: '💤 Gudd Night Suur,',

  // Weather
  weatherKey: '3465d17feb9ef0f2efaabac0d7ea99cb',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '42.361145',
  defaultLongitude: '-71.057083',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Google',
      icon: 'search',
      link: 'https://searx.be/',
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
      name: 'Gmail',
      icon: 'inbox',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'reddit',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Google Cloud',
      icon: 'server',
      link: 'https://cloud.google.com/',
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
        link: 'https://music.youtube.com',
      },
      {
        name: 'Boppies Playlist',
        link: 'https://music.youtube.com/playlist?list=PLgGa7baMZopQ7FNb81CzpwA7GhikR2xY6',
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
        {
        name: 'A12 Manifest',
        link: 'https://raw.githubusercontent.com/davigamer987/local_manifests/main/TP1803/A12-Lineage.xml',
      },
    ],
  },
};
