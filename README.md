# Portfolio - Ignacio Muñoz

Personal portfolio website showcasing my projects, skills, and professional experience as a Software Engineer.

## 🚀 Features

- ✨ Modern and responsive design
- 🌓 Dark/Light theme toggle with persistent preferences
- 🌍 Bilingual support (Spanish/English)
- 📱 Mobile-first responsive layout
- ♿ Accessibility features
- 🎨 Smooth animations and transitions
- 🎯 SEO optimized

## 🛠️ Technologies Used

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Language:** JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/WinterMute32/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AboutMe.jsx
│   ├── Content.jsx
│   ├── LanguageButton.jsx
│   ├── NavBar.jsx
│   ├── ProfileSidebar.jsx
│   ├── Projects.jsx
│   ├── Resumen.jsx
│   ├── Skills.jsx
│   └── ThemeToggle.jsx
├── context/            # Context API for global state
│   └── AppContext.jsx
├── hooks/              # Custom React hooks
│   └── useTranslation.js
├── locales/            # Internationalization files
│   ├── es.json
│   └── en.json
├── App.css            # Global styles and CSS variables
├── App.jsx            # Main App component
└── main.jsx           # App entry point
```

## 🎨 Theme System

The portfolio uses CSS variables for a scalable theming system:

- `--bg-primary`, `--bg-secondary`, `--bg-tertiary` - Background colors
- `--text-primary`, `--text-secondary`, `--text-tertiary` - Text colors
- `--accent-primary`, `--accent-hover` - Accent colors
- `--border-primary`, `--border-secondary` - Border colors

Themes are automatically persisted in localStorage and applied on load.

## 🌍 Internationalization

The app supports Spanish and English through a custom translation system:

- Translations stored in JSON files (`src/locales/`)
- Custom `useTranslation` hook for accessing translations
- Language preference persisted in localStorage

## 📱 Responsive Design

- **Mobile** (< 768px): Vertical stack layout with horizontal compact sidebar
- **Tablet** (768px - 1024px): Narrower sidebar with adjusted spacing
- **Desktop** (> 1024px): Full two-column layout

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The build output will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 👤 Author

**Ignacio Muñoz Otárola**
- Email: winternacho@gmail.com
- LinkedIn: [linkedin.com/in/winternacho](https://www.linkedin.com/in/winternacho)
- GitHub: [@WinterNacho](https://github.com/WinterNacho)
- X (Twitter): [@WinterNacho](https://x.com/WinterNacho)

## 📄 License

This project is open source and available under the MIT License.
