# SERP Prototypes

A collection of search experience prototypes for UX testing, built with Next.js, React 18, TypeScript, Tailwind CSS, and shadcn/ui.

## 🎯 Purpose

This project contains isolated prototypes for testing different search experience features. Each feature has its own folder with multiple iterations to enable focused user testing.

## 🏗️ Tech Stack

- **Next.js 15** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** for components
- **Vercel** ready for deployment

## 📁 Project Structure

```
/SERP
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── core/            # shared search components
│   │   └── shared/          # reusable prototype components
│   ├── features/            # prototype implementations
│   │   ├── answer/          # AI-generated answer cards
│   │   ├── type-ahead/      # autocomplete suggestions
│   │   ├── spellcheck/      # spell correction UI
│   │   ├── related-questions/ # question suggestions
│   │   ├── enhanced-input/  # input enhancements
│   │   └── enhanced-result-row/ # rich results
│   ├── app/                 # Next.js routes
│   └── data/                # mock data for prototypes
├── public/
│   └── images/              # assets and images
└── docs/                    # documentation
```

## 🚀 Features to Prototype

1. **Answer** - AI-generated answer cards above search results
2. **Type Ahead** - Smart autocomplete with suggestions
3. **Spellcheck** - Intelligent spell correction UI
4. **Related Questions** - Contextual question suggestions
5. **Enhanced Input** - Voice search and smart formatting
6. **Enhanced Result Row** - Rich snippets and interactive elements

## 🔗 URL Structure

Each prototype follows a consistent pattern:
- **Home**: `/{feature}/{version}` (e.g., `/answer/v1`)
- **Results**: `/{feature}/{version}/results?q={query}` (e.g., `/answer/v1/results?q=react`)

## ✅ Current Status

- [x] Project structure and foundation
- [x] Header and navigation components
- [x] Answer v1 prototype (complete)
- [ ] Type Ahead prototypes
- [ ] Spellcheck prototypes
- [ ] Related Questions prototypes
- [ ] Enhanced Input prototypes
- [ ] Enhanced Result Row prototypes

## 🧪 Testing

### Answer v1 Prototype
Visit `/answer/v1` to test:
- Full home page experience with financial services content
- Search functionality via header input
- AI answer cards on results page
- Responsive design and interactions

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/turphAI/SERP.git
   cd SERP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Visit: http://localhost:3000/answer/v1
   - Test the search flow and prototypes

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

Built with a cohesive design system using:
- **shadcn/ui** for base components
- **Tailwind CSS** for styling
- **Lucide Icons** for iconography
- **Custom color palette** matching financial services theme

## 📊 UX Testing

Each prototype is designed for isolated testing:
- Unique URLs for easy sharing with testers
- Self-contained experiences
- Consistent base layout and navigation
- Mock data for realistic interactions

## 🤝 Contributing

1. Create a new feature branch: `git checkout -b feature/new-prototype`
2. Add your prototype in the appropriate `/features/{name}/` directory
3. Create corresponding routes in `/app/`
4. Test your prototype thoroughly
5. Submit a pull request

## 📄 License

Private project for UX prototyping and testing.

---

For questions or feedback, please open an issue in this repository.
