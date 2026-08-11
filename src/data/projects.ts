export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  category: string
  technologies: string[]
  githubUrl: string
  liveDemoUrl?: string
  coverImage: string
  features: string[]
  status: 'completed' | 'in-progress'
  featured: boolean
  learningObjectives: string[]
  mainObjective: string
  uiUxHighlights: string[]
  challengesSolved: string[]
  whatILearned: string[]
  currentStatus: string
}

export const projects: Project[] = [
  {
    id: 'ai-fitness',
    title: 'AI Fitness',
    shortDescription:
      'A Flutter fitness practice application exploring AI-assisted workout planning, BMI calculation, and modern mobile UI patterns with Supabase backend integration.',
    fullDescription:
      'AI Fitness is a personal Flutter practice project that combines mobile development with AI experimentation. Built to explore authentication, user management, workout tracking, and modern UI, the app provides workout planning, BMI calculation, and fitness recommendations. This project served as a learning exercise in integrating AI APIs with a clean Flutter frontend and Supabase backend.',
    category: 'AI • Health • Flutter',
    technologies: ['Flutter', 'Dart', 'GetX', 'Gemini API', 'Supabase'],
    githubUrl: 'https://github.com/ShahbazDevv/Ai-Fitness',
    coverImage:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    features: [
      'AI-powered workout recommendations via Gemini API',
      'BMI calculation and tracking',
      'User authentication with Supabase Auth',
      'Workout data management with Supabase Database',
      'Clean and responsive UI with GetX state management',
    ],
    status: 'completed',
    featured: true,
    learningObjectives: [
      'Integrating AI APIs with Flutter applications',
      'Building responsive fitness UI components',
      'Implementing state management with GetX',
      'Supabase backend integration for user data',
    ],
    mainObjective:
      'To explore the integration of artificial intelligence with Flutter mobile development by building a fitness application that provides AI-powered workout recommendations, BMI tracking, and personalized suggestions.',
    uiUxHighlights: [
      'Clean, minimalist interface with gradient accent cards inspired by modern fitness applications',
      'Animated progress rings for BMI visualization and workout completion tracking',
      'Smooth page transitions and bottom navigation for intuitive multi-screen flow',
      'Dark theme optimized for gym and low-light usage environments',
      'Responsive layouts that adapt across phone and tablet screen sizes',
    ],
    challengesSolved: [
      "Integrating the Gemini AI API with Flutter's async architecture while keeping the UI responsive during API calls",
      'Designing a flexible workout recommendation approach that adapts to user preferences',
      'Implementing data synchronization between Supabase Database and local GetX state management',
      'Creating accurate BMI calculations with proper unit conversions and visual progress indicators',
    ],
    whatILearned: [
      'How to integrate and consume AI APIs effectively within Flutter applications',
      'Advanced state management patterns using GetX for complex data flows across screens',
      'Building responsive fitness UI components with smooth animations and transitions',
      'Implementing Supabase authentication flows and database integration',
      'Designing user-centric health tracking interfaces with accessibility in mind',
    ],
    currentStatus:
      'This project was developed as part of my Flutter learning journey and portfolio. It demonstrates my understanding of Flutter development, AI API integration, Supabase backend services, and responsive UI. While it is not intended as a production-ready application, it reflects the practical skills I gained during development.',
  },
  {
    id: 'shopon',
    title: 'ShopOn',
    shortDescription:
      'A personal Flutter e-commerce practice project built to learn clean UI design, authentication, state management, and backend integration with Supabase.',
    fullDescription:
      'ShopOn is a personal Flutter e-commerce practice project developed to learn modern Flutter architecture and backend integration. The app features product listings with categories, a shopping cart system, product detail views, favorites, and user authentication. Built with Supabase for backend services, this project served as a deep dive into building complex UI structures, managing application state with GetX, and creating intuitive user flows for a shopping experience.',
    category: 'E-Commerce',
    technologies: ['Flutter', 'Dart', 'GetX', 'Supabase'],
    githubUrl: 'https://github.com/ShahbazDevv/Shopons',
    coverImage:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    features: [
      'User login and signup with Supabase Authentication',
      'Product browsing with category filters',
      'Shopping cart with add/remove functionality',
      'Favorites and wishlist management',
      'Responsive UI with GetX state management',
    ],
    status: 'completed',
    featured: true,
    learningObjectives: [
      'Building complex e-commerce UI structures in Flutter',
      'Managing cart and favorites state across multiple screens',
      'Integrating Supabase backend for authentication and data',
      'Implementing responsive layouts for different screen sizes',
    ],
    mainObjective:
      'To learn modern Flutter architecture and backend integration by building an e-commerce application with Supabase authentication, product management, shopping cart functionality, and responsive UI.',
    uiUxHighlights: [
      'Modern card-based product grid with smooth loading animations and image fade-ins',
      'Intuitive shopping cart with swipe-to-delete gestures and real-time quantity controls',
      'Clean product detail pages with expandable descriptions and image gallery navigation',
      'Streamlined checkout flow with step-by-step progress indicator and form validation',
      'Consistent branding with purple accent color scheme and clean typography throughout',
    ],
    challengesSolved: [
      'Managing complex cart state across multiple interdependent screens with real-time total recalculations',
      'Integrating Supabase Authentication for secure user login and registration flows',
      'Implementing efficient product filtering and categorization for catalog navigation',
      'Handling favorites persistence and user session state with Supabase Database backend',
    ],
    whatILearned: [
      'Building complex e-commerce UI structures following reusable component patterns',
      'Managing global application state across multiple interdependent screens with GetX',
      'Integrating Supabase for authentication, data storage, and real-time backend services',
      'Implementing user authentication flows with email and password credential management',
      'Optimizing long list performance with lazy loading and efficient rebuild prevention',
    ],
    currentStatus:
      'This project was developed as part of my Flutter learning journey and portfolio. It demonstrates my understanding of Flutter development, Supabase backend integration, responsive UI, and clean application structure. While it is not intended as a production-ready commercial application, it reflects the practical skills I gained during development.',
  },
  {
    id: 'foodlicious',
    title: 'Foodlicious',
    shortDescription:
      'A Flutter food delivery practice project built to learn Firebase integration, CRUD operations, image upload, and responsive UI design.',
    fullDescription:
      'Foodlicious is a Flutter practice project developed to learn Flutter and Firebase integration. The app allows users to browse restaurants, explore menus, and place food orders. Built with Firebase for backend services, this project focuses on CRUD operations, Firebase backend integration, image upload with Firebase Storage, and responsive UI. Food images and application data are stored in Cloud Firestore and Firebase Storage, demonstrating practical cloud-integrated mobile development.',
    category: 'Food Delivery',
    technologies: ['Flutter', 'Dart', 'GetX', 'Firebase'],
    githubUrl: 'https://github.com/ShahbazDevv/foodelicious',
    coverImage:
      'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80',
    features: [
      'Restaurant listings with search and filters',
      'Menu browsing with food items and details',
      'Order placement functionality',
      'User authentication with Firebase Auth',
      'Food images stored in Firebase Storage',
    ],
    status: 'completed',
    featured: true,
    learningObjectives: [
      'Building Flutter applications with Firebase backend',
      'Implementing CRUD operations with Cloud Firestore',
      'Uploading and managing images with Firebase Storage',
      'Creating responsive restaurant discovery interfaces',
    ],
    mainObjective:
      'To practice Flutter and Firebase integration by building a food delivery application that demonstrates CRUD operations, image upload, Firebase Authentication, and responsive UI design patterns.',
    uiUxHighlights: [
      'Visually rich restaurant cards with cuisine badges, rating stars, and distance indicators',
      'Smooth bottom sheet navigation for seamless menu browsing and order customization',
      'Real-time order tracking with animated progress indicators from preparation to delivery',
      'Search and filter interface optimized for quick restaurant discovery with category chips',
      'Appetizing color palette with warm tones that complement food photography and imagery',
    ],
    challengesSolved: [
      'Building real-time order status updates by subscribing to Firestore stream listeners efficiently',
      'Implementing complex nested navigation between restaurant lists, detail menus, and order confirmation screens',
      'Managing food images with Firebase Storage upload and download workflows',
      'Creating efficient search algorithms for restaurant and menu item discovery',
    ],
    whatILearned: [
      'Implementing real-time data synchronization using Firestore snapshot listeners with proper cleanup',
      'Designing complex multi-level navigation patterns for seamless user flows in food delivery apps',
      'Managing hierarchical data structures for restaurant menus with categories and items',
      'Building responsive search and filter components with debounced text input and chip-based filtering',
      'Uploading and retrieving images with Firebase Storage for a media-rich application experience',
    ],
    currentStatus:
      'This project was developed as part of my Flutter learning journey and portfolio. It demonstrates my understanding of Flutter development, Firebase integration, CRUD operations, and responsive UI. While it is not intended as a production-ready application, it reflects the practical skills I gained during development.',
  },
  {
    id: 'hydratrack',
    title: 'HydraTrack',
    shortDescription:
      'A lightweight Flutter hydration tracker practice application focused on UI design, state management, navigation, and responsive layouts without backend dependencies.',
    fullDescription:
      'HydraTrack is a lightweight Flutter practice application built primarily to practice Flutter UI, state management, navigation, and responsive layouts. The app helps users track daily water intake with reminders and progress visualization. Designed without authentication or a backend service, the project intentionally focuses on front-end development skills including local data persistence with Hive, notification scheduling, and clean health-themed UI design.',
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
    mainObjective:
      'To practice Flutter UI development, state management, navigation, and responsive layouts by building a hydration tracking application without backend dependencies.',
    uiUxHighlights: [
      'Clean dashboard with a prominent circular progress indicator showing daily hydration goals at a glance',
      'Animated water droplet fill effects that provide satisfying visual feedback on each intake log',
      'Intuitive notification scheduling interface with easy time picker and repeat interval configuration',
      'Weekly and monthly history views with smooth bar chart animations for trend analysis',
      'Minimalist, distraction-free design focused on glanceable information and quick one-tap logging',
    ],
    challengesSolved: [
      'Implementing reliable local notifications with flutter_local_notifications and custom scheduling logic',
      'Building durable local persistence layer that survives app restarts, using Hive for structured storage',
      'Creating smooth chart animations with fl_chart for hydration history visualization across time ranges',
      'Designing an intuitive goal-setting flow that adapts to user preferences with motivational achievement badges',
    ],
    whatILearned: [
      'Implementing cross-platform local notifications with custom scheduling, repeat intervals, and notification channels',
      'Building a robust local data persistence layer using Hive for structured health data storage and retrieval',
      'Creating animated data visualization components using fl_chart with smooth transitions and interactions',
      'Designing health tracking interfaces focused on user motivation, habit formation, and engagement patterns',
      'Managing application state and background services for reliable notification delivery across app lifecycle states',
    ],
    currentStatus:
      'This project was developed as part of my Flutter learning journey and portfolio. It demonstrates my understanding of Flutter front-end development, state management, local persistence, and responsive UI design. While it is not intended as a production-ready application, it reflects the practical skills I gained during development.',
  },
  {
    id: 'noor-quran',
    title: 'Noor Quran',
    shortDescription:
      'A comprehensive offline Islamic companion app for Quran reading, prayer times, Qibla direction, daily Duas, Tasbeeh, and 99 Names of Allah — built with Flutter and Material 3.',
    fullDescription:
      'Noor Quran is a personal Flutter practice project developed to build a fully offline Islamic companion application. The app provides the complete Holy Quran with Surah and Para/Juz navigation, GPS-based prayer times with 8 calculation methods, a precision Qibla compass with distance to the Kaaba, a tabular Hijri calendar with Islamic events, categorized daily Duas with Arabic, transliteration, and meanings, a digital Tasbeeh counter with history tracking, and the 99 Names of Allah. Built with Flutter 3.22+, Material 3, and GetX for state management, the project focuses on offline-first architecture with local persistence via SharedPreferences, astronomical calculations for prayer times and Qibla direction, and a luxury emerald-and-gold theme with full dark/light mode support. No backend, no accounts, no tracking — everything runs locally on the device.',
    category: 'Islamic • Flutter',
    technologies: [
      'Flutter',
      'Dart',
      'GetX',
      'Material 3',
      'SharedPreferences',
      'Geolocator',
      'Flutter Compass',
      'Timezone',
    ],
    githubUrl: 'https://github.com/ShahbazDevv/Noor-Quran-',
    coverImage: '/projects/noor_quran_banner.jpg',
    features: [
      'Complete Holy Quran with 114 Surahs, Arabic text, and verse-end markers',
      'Para/Juz navigation with 30 validated Paras and seamless cross-Surah reading',
      'GPS-based prayer times with 8 calculation methods (MWL, ISNA, Egypt, Makkah, Karachi, Tehran, Jafari, Gulf) and Hanafi/Standard Asr toggle',
      'Precision Qibla compass with smooth animated dial, bearing, and distance to Kaaba',
      'Tabular Hijri calendar with 30-year cycle algorithm and 10 fixed Islamic events',
      'Categorized daily Duas (6 categories) with Arabic, transliteration, meaning, and source reference',
      'Digital Tasbeeh with 7 dhikr presets, 6 target counts, haptic feedback, and persistent history',
      '99 Names of Allah with Arabic, transliteration, meaning, and search',
      'Unified bookmarks for Surahs, Ayahs, Duas, and Paras with filter-by-type and deep linking',
      'Full dark/light/system theme modes with Material 3 ColorScheme (emerald + gold identity)',
      'Adjustable font scaling (0.75× – 1.8×) persisted locally via SharedPreferences',
      'Auto location with GPS + geocoding for city/country display and auto-refresh on significant moves',
    ],
    status: 'completed',
    featured: true,
    learningObjectives: [
      'Building feature-rich offline-first Flutter applications with Material 3',
      'Implementing astronomical calculations for prayer times and Qibla direction locally',
      'Managing complex local state with GetX reactive controllers and services',
      'Persisting user preferences and data with SharedPreferences',
      'Integrating device sensors (GPS, compass) for location-aware Islamic utilities',
      'Creating accessible Arabic/RTL typography with custom fonts (Amiri, Scheherazade New)',
      'Building smooth custom animations with CustomPaint (Qibla compass dial)',
    ],
    mainObjective:
      'To practice Flutter development, Material 3 theming, GetX state management, and local-first architecture by building a comprehensive Islamic companion app that works entirely offline with GPS-based prayer times, Qibla compass, Quran reading, and daily utilities.',
    uiUxHighlights: [
      'Luxury emerald-and-gold Material 3 color identity consistent across light and dark themes',
      'Mushaf-like Quran reading experience with justified Arabic text in Scheherazade New font and inline verse-end markers (۝)',
      'Smooth 120ms animated Qibla compass dial with dual-layer CustomPaint (rotating degree dial + fixed needle) and shortest-path interpolation',
      'Tabular Hijri calendar with horizontal month strip, today card, and upcoming Islamic events with countdown',
      'Digital Tasbeeh with large tap target, haptic-friendly feedback, phikr presets, and auto-save on target reach',
      'Three-tab Quran layout (Surah list with live search, Para grid, Favorites) with last-read persistence per Surah and per Para',
      'System-aware theme switching with adjustable font scaling applied globally via MediaQuery.textScaler',
    ],
    challengesSolved: [
      'Implementing 8 prayer time calculation methods with coordinate-based IANA timezone lookup and DST handling entirely in Dart',
      'Building a precision Qibla compass fusing magnetic heading from flutter_compass with GPS bearing for true north correction',
      'Creating a tabular Hijri calendar algorithm (30-year cycle) accurate to ±1 day vs Umm al-Qura with fixed Islamic events',
      'Managing unified bookmark storage for four different content types (Surah, Ayah, Dua, Para) with deep-linking navigation',
      'Loading and parsing large Quran JSON assets (114 Surahs with verses) into typed Dart models at runtime',
      'Designing a responsive theme system with emerald/gold identity that adapts to light/dark modes and font scaling',
      'Implementing smooth compass dial animation preventing 360° jumps with shortest-path interpolation',
    ],
    whatILearned: [
      'Implementing complex astronomical calculations (prayer times, Qibla bearing, Hijri conversion) purely in Dart without external APIs',
      'Building offline-first Flutter apps with comprehensive local persistence using SharedPreferences',
      'Advanced GetX patterns: service layer for business logic, reactive controllers for UI state, dependency injection via bindings',
      'Integrating device sensors (geolocator, flutter_compass) with proper permission handling and accuracy detection',
      'Creating custom Material 3 ColorScheme from seed colors with consistent theming across light/dark modes',
      'Working with Arabic typography: RTL layout, custom fonts (Amiri, Scheherazade New), Arabic-Indic numerals',
      'Building smooth custom animations with CustomPaint and interpolating rotation angles for compass dials',
      'Structuring feature-based modular architecture with clear separation of UI, controllers, services, and models',
    ],
    currentStatus:
      'This project was developed as part of my Flutter learning journey and portfolio. It demonstrates my understanding of Flutter development, Material 3 theming, GetX state management, local-first architecture, device sensor integration, and complex algorithmic implementations in Dart. While it is not intended as a production-ready application, it reflects the practical skills I gained during development.',
  },
]
