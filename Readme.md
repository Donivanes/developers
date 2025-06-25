# Movie Search Application

This application provides an intuitive interface to search for movies and view detailed information using The Movie Database (TMDb) API.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd developers
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory with your TMDb API credentials:
   ```env
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   VITE_TMDB_API_KEY=your_api_key_here
   VITE_ENABLE_MSW=false # Set to true to enable MSW mocking
   ```
   
   > **Note:** Get your free API key from [The Movie Database (TMDb)](https://www.themoviedb.org/settings/api)

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 🎯 Features

### Core Functionality
- **Movie Search**: Real-time search with debounced input for optimal performance
- **Movie Details**: Comprehensive movie information including ratings, genres, and descriptions
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile
- **Pagination**: Efficient navigation through search results
- **Loading States**: Skeleton screens and loading indicators for better UX
- **Error Handling**: Comprehensive error handling with user-friendly messages

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **State Management**: React Query for efficient server state management
- **Styled Components**: Component-scoped CSS with theming support
- **Performance Optimization**: Code splitting, memoization, and efficient re-renders
- **Testing**: Comprehensive unit and integration tests
- **E2E Testing**: Cypress for end-to-end testing
- **Code Quality**: BiomeJS for linting and formatting

## 🛠️ Technology Stack

### Frontend Framework
- **React 19** - Latest React with modern hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### State Management & Data Fetching
- **TanStack React Query** - Server state management and caching
- **Axios** - HTTP client with interceptors

### Styling & UI
- **Styled Components** - CSS-in-JS with theming
- **Lucide React** - Modern icon library
- **Responsive Design** - Mobile-first approach

### Testing & Quality
- **Vitest** - Fast unit testing framework
- **Testing Library** - Component testing utilities
- **Cypress** - End-to-end testing
- **MSW (Mock Service Worker)** - API mocking for tests
- **BiomeJS** - Linting and formatting

### Development Tools
- **Husky** - Git hooks for code quality
- **Lint-staged** - Pre-commit linting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── __tests__/      # Component tests
│   ├── ErrorMessage.tsx
│   ├── MovieCard.tsx
│   ├── MovieGrid.tsx
│   ├── Pagination.tsx
│   └── SearchInput.tsx
├── constants/          # Application constants
│   ├── errors.ts       # Error messages and codes
│   └── routes.ts       # Route definitions
├── hooks/              # Custom React hooks
│   ├── __tests__/      # Hook tests
│   ├── useDebounce.ts
│   ├── useMovies.ts
│   ├── usePagination.ts
│   └── useSearchState.ts
├── lib/                # External library configurations
│   └── api.ts          # Axios configuration
├── pages/              # Page components
│   ├── MovieDetailPage.tsx
│   ├── NotFoundPage.tsx
│   └── SearchPage.tsx
├── services/           # API service layer
│   └── movieService.ts # TMDb API integration
├── styles/             # Global styles and theming
│   ├── GlobalStyles.ts
│   ├── theme.ts
│   └── styled.d.ts
├── test/               # Test configuration and mocks
│   ├── mocks/          # MSW handlers and fixtures
│   └── setup.ts        # Test setup
├── types/              # TypeScript type definitions
│   ├── movie.ts        # Movie-related types
│   └── env.d.ts        # Environment types
├── utils/              # Utility functions
│   └── movieUtils.ts   # Movie-related utilities
└── main.tsx            # Application entry point
```

## 🎬 Application Flow

### Search Page (`/`)
- **Search Input**: Debounced search with real-time results
- **Popular Movies**: Default view showing trending movies
- **Movie Grid**: Responsive grid layout with movie cards
- **Pagination**: Navigate through multiple pages of results
- **Loading States**: Skeleton cards during data fetching

### Movie Detail Page (`/movie/:id`)
- **Detailed Information**: Complete movie details including runtime, genres, and production info
- **High-Quality Images**: Backdrop and poster images from TMDb
- **Rating System**: User ratings and vote counts
- **Navigation**: Back to search functionality

## 🔧 Available Scripts

### Development
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### Testing
```bash
pnpm test         # Run unit tests in watch mode
pnpm test:run     # Run unit tests once
pnpm test:ui      # Open Vitest UI
pnpm test:coverage # Generate test coverage report
```

### End-to-End Testing
```bash
pnpm cypress:open # Open Cypress test runner
pnpm cypress:run  # Run Cypress tests headlessly
pnpm e2e          # Alias for cypress:run
```

### Code Quality
```bash
pnpm lint         # Check code with BiomeJS
pnpm lint:fix     # Fix linting issues
pnpm format       # Format code
pnpm check        # Run all quality checks
```

## 🔌 API Integration

This application integrates with [The Movie Database (TMDb) API](https://developer.themoviedb.org/docs/getting-started) to fetch movie data:


### Endpoints Used
- `GET /movie/popular` - Fetch popular movies
- `GET /search/movie` - Search movies by query
- `GET /movie/{id}` - Get detailed movie information

## 🧪 Testing Strategy

### Unit Tests
- **Components**: Testing component behavior and rendering
- **Hooks**: Testing custom hook logic and state management
- **Services**: Testing API integration and error handling
- **Utilities**: Testing helper functions

### Integration Tests
- **Page Components**: Testing complete page functionality
- **API Integration**: Testing service layer with mocked responses

### E2E Tests
- **User Flows**: Complete user journey testing with Cypress
- **Cross-browser**: Ensuring compatibility across different browsers

## 🔄 State Management

### React Query Implementation
- **Caching**: Intelligent caching of API responses
- **Background Updates**: Automatic data refreshing
- **Error Boundaries**: Graceful error handling
- **Loading States**: Built-in loading state management

### Custom Hooks
- **useMovies**: Movie search and fetching logic
- **useDebounce**: Input debouncing for search optimization
- **usePagination**: Pagination state management
- **useSearchState**: Search input and results state

## 🎨 Design System

### Theme Configuration
- **Colors**: Consistent color palette throughout the application
- **Typography**: Responsive font sizes and weights
- **Spacing**: Consistent spacing scale
- **Breakpoints**: Mobile-first responsive design

### Styling Architecture
- **Co-located Styles**: Styled components are kept within the same files as their React components rather than being split into separate style files. This decision was made to maintain better component cohesion, improve developer experience by keeping related code together, and reduce the overhead of managing multiple files for simple component styling. This approach works well for this application's scope and complexity.

### Bundle Analysis
```bash
pnpm build
pnpm preview
```

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_TMDB_BASE_URL` | TMDb API base URL | Yes |
| `VITE_TMDB_API_KEY` | Your TMDb API key | Yes |
| `VITE_ENABLE_MSW` | Enable MSW mocking | No |

## 📝 License

This project is part of a technical assessment and is for demonstration purposes.

## 🔗 Useful Links

- [The Movie Database API](https://www.themoviedb.org/documentation/api)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Styled Components](https://styled-components.com/)
- [Vite Documentation](https://vitejs.dev/)

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
