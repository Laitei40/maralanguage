# Mara Language Learner

A comprehensive, content-first website for learning the Mara language (Tlosai dialect), inspired by W3Schools. Built with Astro and Tailwind CSS, deployable on Cloudflare Pages.

## 🌟 Features

- **Phase-Based Curriculum**: Structured learning path from beginner to mastery (Phase I-IV).
- **Markdown-Driven Content**: Lessons stored as MDX files for easy editing and versioning.
- **Responsive Design**: Mobile-friendly layout with sidebar navigation.
- **SEO-Optimized**: Fast static generation with semantic HTML.
- **Unicode Support**: Proper rendering of Mara characters (â, ô, ch).
- **Dark Theme**: Modern, accessible design with custom branding.

## 📚 Curriculum Overview

### Phase I: The Foundation (Beginner)
- **Module 1**: Introduction & Phonics (Alphabet, Pronunciation)
- **Module 2**: Survival Mara (Greetings, Numbers, Family, Sentences)
- **Module 3**: Everyday Life (Days, Time, Colors, Body Parts)

### Future Phases
- **Phase II**: Functional Fluency (Grammar, Reading, Culture)
- **Phase III**: Proficiency (Rhetoric, Literature, Dialects)
- **Phase IV**: Mastery (Linguistics, Research, Documentation)

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generator)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom config
- **Content**: Astro Content Collections (Markdown/MDX)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Icons**: Inline SVG
- **Fonts**: Work Sans & IBM Plex Mono (Google Fonts)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
git clone https://github.com/Laitei40/maralanguage.git
cd maralanguage
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📦 Deployment

### Cloudflare Pages
1. Connect your GitHub repo to Cloudflare Pages.
2. Set build settings:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy!

The site is optimized for Cloudflare's edge network with static generation.

## 📝 Adding Content

Lessons are stored in `src/content/lessons/` as Markdown files.

### Frontmatter Schema
```yaml
---
title: "Lesson Title"
phase: "Phase I: The Foundation"
module: "Module 1: Introduction & Phonics"
level: "Beginner"
order: 1
description: "Brief lesson description"
---
```

### Example Lesson
```markdown
---
title: "Basic Greetings"
phase: "Phase I: The Foundation"
module: "Module 2: Survival Mara"
level: "Beginner"
order: 1
description: "Start with Mara sounds and everyday greetings."
---

Mara uses Latin script with diacritics...

## Essential Phrases
| Mara | Pronunciation | English |
| --- | --- | --- |
| Na y ma? | na yuh mah | Hello? |
| Ei tlâh my | ay tlah mue | I am fine |
```

Lessons auto-generate pages at `/lessons/[slug]`.

## 🎨 Customization

### Branding
Update colors in `tailwind.config.cjs`:
```js
colors: {
  brand: {
    primary: '#0f766e', // Teal
    accent: '#f59e0b',  // Amber
  }
}
```

### Fonts
Modify `src/styles/global.css` to change fonts.

### Layout
Edit `src/layouts/BaseLayout.astro` for global changes.

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/new-lesson`
3. Add lessons or improvements.
4. Commit: `git commit -m 'Add new lesson'`
5. Push: `git push origin feature/new-lesson`
6. Open a Pull Request.

### Content Guidelines
- Use accurate Mara (Tlosai dialect) vocabulary.
- Include IPA phonetics where helpful.
- Follow the curriculum structure.
- Test builds locally before submitting.

## 📄 License

This project is open-source. Feel free to use and adapt for educational purposes.

## 🔗 Links

- **Live Site**: [maralearning.pages.dev](https://maralearning.pages.dev) (example)
- **Curriculum**: [/curriculum](https://maralearning.pages.dev/curriculum)
- **Lessons**: [/lessons](https://maralearning.pages.dev/lessons)
- **About Mara**: [/about](https://maralearning.pages.dev/about)

## 🙏 Acknowledgments

- Mara language community for linguistic guidance.
- Astro and Tailwind teams for excellent tools.
- Inspired by W3Schools' clean, content-focused design.

---

Built with ❤️ for preserving and teaching the Mara language.