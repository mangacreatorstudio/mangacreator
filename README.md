# MangaCreator

<div align="center">

  <img src="assets/logo.jpg" alt="MangaCreator Logo" width="100" height="100" style="border-radius:16px"/>

  <h3>Turn Your Story Into Manga — Instantly.</h3>

  <p>AI-powered manga generator. Write your idea in plain words.<br/>We handle the panels, art, and dialogue.</p>

  <a href="https://orynth.dev/projects/manga-creator" target="_blank">
    <img src="https://orynth.dev/api/badge/manga-creator?theme=light&style=default" alt="Featured on Orynth" width="200" height="62"/>
  </a>

  <br/><br/>

  [![Twitter](https://img.shields.io/badge/@mangacreatorai-000?logo=x&logoColor=white&style=flat-square)](https://twitter.com/mangacreatorai)
  [![License](https://img.shields.io/badge/license-MIT-c8102e?style=flat-square)](LICENSE)
  [![Status](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)](#)
  [![Version](https://img.shields.io/badge/version-1.0.0-0d0d0d?style=flat-square)](#)

</div>

---

## ✦ What is MangaCreator?

**MangaCreator** is an AI-powered platform that transforms written story prompts into fully illustrated manga — complete with panels, dialogue bubbles, character art, and chapter flow.

No drawing skills. No art degree. Just your imagination.

> *"Every story deserves to be seen."*

---

## 🖼 Preview

| Prompt to Panel | Mobile App | Pricing |
|:-:|:-:|:-:|
| ![Feature](assets/product_01_prompt_to_panel.jpg) | ![Mobile](assets/product_02_mobile_app.jpg) | ![Pricing](assets/product_03_pricing.jpg) |

---

## ⚡ Features

- **Prompt-to-Panel** — Describe your story, get manga panels in seconds
- **Multiple Art Styles** — Shonen, Shojo, Seinen, Josei, and more
- **Chapter Continuation** — AI maintains plot, characters, and tone across chapters
- **Smart Dialogue** — Character-consistent speech bubbles and inner monologues
- **Mobile Friendly** — Fully optimized for phone and tablet
- **Export Anywhere** — Download as high-res PDF or PNG
- **API Access** — Integrate MangaCreator into your own apps (Pro/Studio)

---

## 🗺 Roadmap — 2026

| Month | Milestone | Status |
|-------|-----------|--------|
| **March 2026** | 🚀 Launch on [Orynth](https://orynth.dev/projects/manga-creator) | ✅ Live |
| **April 2026** | ✦ Full Feature Launch — all styles, API, mobile app | 🔄 In Progress |
| **May 2026** | 🔍 Security & Quality Audit | ⏳ Upcoming |
| **June 2026** | 📈 Exchange Listing | ⏳ Upcoming |

---

## 💰 Pricing

| Plan | Price | Chapters | Styles | Export |
|------|-------|----------|--------|--------|
| **Free** | $0/mo | 5/month | 2 | PNG |
| **Pro** | $12/mo | Unlimited | All 6 | PDF + PNG |
| **Studio** | $39/mo | Unlimited | All + Custom | PDF + PNG + API |

[→ See full pricing details](https://mangacreator.ai/#pricing)

---

## 🚀 Getting Started

### Landing Page (Local)

The landing page is a single self-contained Python file:

```bash
# Clone the repo
git clone https://github.com/mangacreatorai/mangacreator.git
cd mangacreator

# Run the landing page generator
python mangacreator_landing.py
# → Opens mangacreator_landing.html in your browser automatically
```

**Requirements:** Python 3.x (no extra dependencies for the landing page)

### Generate Assets

```bash
# Install Pillow for image generation
pip install Pillow

# Generate logo + cover image
python mangacreator_logo.py

# Generate all 3 product images
python gen_products.py
```

---

## 📁 Project Structure

```
mangacreator/
├── mangacreator_landing.py       # Landing page generator → outputs HTML
├── mangacreator_landing.html     # Generated landing page (open in browser)
├── gen_products.py               # Product image generator
├── assets/
│   ├── logo.jpg                  # 800×800 logo
│   ├── cover_x.jpg               # 1500×500 X/Twitter cover
│   ├── product_01_prompt_to_panel.jpg
│   ├── product_02_mobile_app.jpg
│   └── product_03_pricing.jpg
├── README.md
└── LICENSE
```

---

## 🧑‍💻 Tech Stack

| Layer | Technology |
|-------|------------|
| Landing Page | HTML5, CSS3, Vanilla JS (single file) |
| Asset Generation | Python 3, Pillow (PIL) |
| AI Engine | Proprietary LLM + diffusion pipeline |
| Fonts | Cormorant Garamond, DM Sans (Google Fonts) |
| Deployment | Static hosting / CDN |

---

## 🌐 Links

| | |
|-|-|
| 🌍 Website | [mangacreator.ai](https://mangacreator.ai) |
| 🐦 Twitter / X | [@mangacreatorai](https://twitter.com/mangacreatorai) |
| 🏆 Orynth | [orynth.dev/projects/manga-creator](https://orynth.dev/projects/manga-creator) |
| 📧 Contact | hello@mangacreator.ai |

---

## 👥 Team

| Name | Role |
|------|------|
| **Aiko Kuroda** | Co-Founder · Art Direction |
| **Ren Nakamura** | Co-Founder · AI Engineering |
| **Sara Lim** | Head of Story |
| **Jin Wei** | Lead Engineer |

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

  <a href="https://orynth.dev/projects/manga-creator">
    <img src="https://orynth.dev/api/badge/manga-creator?theme=light&style=default" alt="Featured on Orynth" width="200" height="62"/>
  </a>

  <br/>
  <sub>Built with ♥ by <a href="https://twitter.com/mangacreatorai">@mangacreatorai</a> · © 2026 MangaCreator</sub>

</div>
