export interface IShowSection {
  id: string;
  title?: string;
  description?: string;
  img: string;
}

const ShowSections: IShowSection[] = [
  {
    id: 'ss-8ee2353d',
    img: '/images/home_tab.png'
  },
  {
    id: 'ss-89a37837',
    title: 'Versions',
    description: 'Get access to almost all versions and switch between them in an instant.',
    img: '/images/version_chooser_full.png'
  },
  {
    id: 'ss-412b6f3d',
    title: 'Version Management',
    description: 'Add as many versions as you wish with ease!',
    img: '/images/version_manager.png'
  },
  {
    id: 'ss-f36353e8',
    title: 'Settings',
    description: "Tweak every nook and cranny to your heart's content",
    img: '/images/general_settings_tab.png'
  },
  {
    id: 'ss-d59132d7',
    title: 'Themes',
    description: 'Your launcher, your theme!',
    img: '/images/themes.png'
  }
];

export default ShowSections;
