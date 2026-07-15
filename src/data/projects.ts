export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  category: string
  technologies: string[]
  githubUrl: string
  coverImage: string
  features: string[]
  status: 'completed' | 'in-progress'
  featured: boolean
  learningObjectives: string[]
}

export const projects: Project[] = [
  {
    id: 'ai-fitness',
    title: 'AI Fitness',
    shortDescription:
      'AI-assisted Flutter learning project focused on workout planning, BMI calculation, and experimenting with AI-powered fitness recommendations.',
    fullDescription:
      'AI Fitness is a Flutter learning project that combines mobile development with AI experimentation. The app provides workout planning, BMI calculation, and fitness recommendations powered by AI. Built as a learning exercise to explore how artificial intelligence can enhance mobile fitness applications, this project demonstrates integration of AI APIs with a clean Flutter UI.',
    category: 'AI • Health • Flutter',
    technologies: ['Flutter', 'Dart', 'GetX', 'Gemini API', 'Firebase'],
    githubUrl: 'https://github.com/ShahbazDevv/Ai-Fitness',
    coverImage:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    features: [
      'AI-powered workout recommendations',
      'BMI calculation and tracking',
      'Personalized fitness suggestions',
      'Clean and responsive UI',
      'Firebase authentication and data storage',
    ],
    status: 'completed',
    featured: true,
    learningObjectives: [
      'Integrating AI APIs with Flutter applications',
      'Building responsive fitness UI components',
      'Implementing state management with GetX',
      'Firebase backend integration for user data',
    ],
  },
  {
    id: 'shopon',
    title: 'ShopOn',
    shortDescription:
      'Flutter e-commerce learning project featuring responsive UI, product browsing, shopping cart concepts, and clean application design.',
    fullDescription:
      'ShopOn is a Flutter e-commerce learning project that simulates a complete shopping experience. It features product listings with categories, a shopping cart system, product detail views, and a clean checkout flow. This project served as a deep dive into building complex UI structures, managing application state, and creating intuitive user flows for mobile commerce.',
    category: 'E-Commerce',
    technologies: ['Flutter', 'Dart', 'GetX', 'Firebase', 'Stripe API'],
    githubUrl: 'https://github.com/ShahbazDevv/Shopons',
    coverImage:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    features: [
      'Product browsing with category filters',
      'Shopping cart with add/remove functionality',
      'Product detail page with images and description',
      'Checkout flow with payment integration',
      'User authentication and order history',
    ],
    status: 'completed',
    featured: true,
    learningObjectives: [
      'Building complex e-commerce UI structures in Flutter',
      'Managing cart state across multiple screens',
      'Integrating payment APIs in mobile apps',
      'Implementing user authentication flows',
    ],
  },
  {
    id: 'foodlicious',
    title: 'Foodlicious',
    shortDescription:
      'Flutter food delivery learning project with restaurant listings, menu browsing, and responsive mobile user interface.',
    fullDescription:
      'Foodlicious is a Flutter food delivery learning project that brings restaurant discovery and food ordering to mobile devices. Users can browse restaurants, explore menus, customize orders, and track deliveries. The project focuses on building an engaging food delivery experience with modern UI patterns and smooth navigation.',
    category: 'Food Delivery',
    technologies: ['Flutter', 'Dart', 'GetX', 'Firebase'],
    githubUrl: 'https://github.com/ShahbazDevv/foodelicious',
    coverImage:
      'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80',
    features: [
      'Restaurant listings with search and filters',
      'Menu browsing with food customization',
      'Order placement and tracking',
      'User profiles and favorite restaurants',
      'Real-time order status updates',
    ],
    status: 'completed',
    featured: true,
    learningObjectives: [
      'Building restaurant discovery interfaces',
      'Implementing complex navigation patterns',
      'Managing order state and real-time updates',
      'Creating responsive food delivery UI',
    ],
  },
  {
    id: 'hydratrack',
    title: 'HydraTrack',
    shortDescription:
      'Flutter hydration reminder application designed to help users maintain healthy daily water intake through reminder functionality.',
    fullDescription:
      'HydraTrack is a Flutter hydration reminder app that helps users maintain healthy daily water intake. The app tracks water consumption, sends reminders throughout the day, and visualizes hydration progress. Built as a practical learning project focused on notifications, local data persistence, and engaging UI design for health applications.',
    category: 'Health',
    technologies: ['Flutter', 'Dart', 'GetX', 'Local Storage'],
    githubUrl: 'https://github.com/ShahbazDevv/Hydra-track',
    coverImage:
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80',
    features: [
      'Daily water intake tracking',
      'Customizable reminders and notifications',
      'Progress visualization with charts',
      'History log of daily consumption',
      'Goal setting and achievement tracking',
    ],
    status: 'completed',
    featured: true,
    learningObjectives: [
      'Implementing local notifications in Flutter',
      'Building data persistence with local storage',
      'Creating health tracking UI components',
      'Visualizing data with charts and graphs',
    ],
  },
]
