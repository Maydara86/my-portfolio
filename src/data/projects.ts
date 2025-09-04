export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies: string[];
  category: Array<'web' | 'mobile' | 'SaaS' | 'e-commerce' | 'chrome-extension'>;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Fourpins - E-Commerce Platform',
    description: 'Modern e-commerce solution with Wordpress and WooCommerce, Flatesome theme, and Elementor builder, Newsletter subscription, and SEO optimization',
    image: '/images/fourpins.jpg',
    link: 'https://www.fourpins.com.tn/',
    github: 'https://github.com/mohamed-cherif/ecommerce-platform',
    technologies: ['Wordpress', 'WooCommerce', 'Elementor', 'Flatsome', 'PHP', 'MySQL'],
    category: ['web', 'e-commerce']
  },
  {
    id: 'news-website',
    title: 'Tunisie Telegraph - News Website',
    description: 'Modern Tunisian news website with ASBAAAAAAAAA Wordpress and Newspaper theme, Elementor builder, Newsletter subscription, and SEO optimization',
    image: '/images/tunisie-telegraph.jpg',
    link: 'https://tunisie-telegraph.com/',
    github: 'https://github.com/mohamed-cherif/task-manager',
    technologies: ['Wordpress', 'Newspaper', 'Elementor', 'PHP', 'MySQL', 'SEO', 'i18n'],
    category: [ 'web' ]
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Website',
    description: 'Beautiful restaurant website with online ordering',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center',
    link: 'https://demo-restaurant.com',
    github: 'https://github.com/mohamed-cherif/restaurant-site',
    technologies: ['React', 'Firebase', 'Framer Motion', 'CSS3'],
    category: ['web', 'chrome-extension']
  },
  {
    id: 'real-estate',
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center',
    link: 'https://demo-realestate.com',
    github: 'https://github.com/mohamed-cherif/real-estate',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
    category: ['web']
  },
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Dashboard',
    description: 'Medical data visualization and patient management',
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&h=400&fit=crop&crop=center',
    link: 'https://demo-healthcare.com',
    github: 'https://github.com/mohamed-cherif/healthcare-dashboard',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB', 'Chart.js'],
    category: ['web']
  },
  {
    id: 'finance-app',
    title: 'Finance App',
    description: 'Personal finance tracker with analytics',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center',
    link: 'https://demo-finance.com',
    github: 'https://github.com/mohamed-cherif/finance-app',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Plaid API'],
    category: ['mobile']
  }
];