# 🎨 Creative Market — Human-Made Art Marketplace

**Creative Market** is a full-stack e-commerce platform built to celebrate and protect human-made art. Every product listed is guaranteed to be crafted by a real artist — because we believe art is a language of lived experience, emotion, and soul that no AI can replicate.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-brightgreen?style=for-the-badge&logo=vercel)](https://creative-market-front-end-sprint-2-mu.vercel.app/)
[![Documentation](https://img.shields.io/badge/Project%20Docs-Google%20Docs-4285F4?style=for-the-badge&logo=googledocs&logoColor=white)](https://docs.google.com/document/d/1CdNxqwrQUCS4ei0iBF1PQaGILajpYmAmKfzmL8m9FXM/edit?usp=sharing)
[![Architecture](https://img.shields.io/badge/Architecture-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/board/knELaqlKa8ARUQofT0FwEE/Commit-no-Jutsu?node-id=480-986&t=c1UFc62fAUL5XE5Y-0)
[![Backend Repo](https://img.shields.io/badge/Backend%20Repo-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/AshaJenvasu/creative-market-back-end)

---

## 🧩 The Problem We're Solving

Today's online marketplaces don't distinguish between AI-generated work and human-made art — leaving buyers uncertain and genuine artists buried under a flood of algorithmically-generated content. Creative Market exists to close that gap: a transparent, trust-first platform where every piece has a story, a maker, and a soul.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🖼️ **Market Page** | Browse artworks, crafts, and design items with limited-edition badges |
| 🔍 **Product Detail** | Full artwork info — images, pricing, artist bio — to support confident buying |
| 🛒 **Cart System** | Add, manage quantities, and review items before checkout |
| 💳 **Checkout & Payment** | Seamless end-to-end purchase flow within the platform |
| 🔐 **User Authentication** | Register, login, forgot password, and reset password flows |
| 👤 **User Dashboard** | View profile, track orders, and browse purchase history |
| 🎨 **Artist Drop** | Artists can upload and list new works directly |
| 🛠️ **Admin Dashboard** | Monitor sales, manage orders, and oversee platform health |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Role |
|---|---|
| React.js + Vite | UI framework with lightning-fast build tooling |
| Tailwind CSS | Utility-first styling with custom skew/grid layouts |
| React Router | Client-side routing |
| React Icons | Icon library (FontAwesome + Lucide) |
| Google Fonts | Custom typography — Anuphan, Rock Salt, Arizonia |
| Vercel | Frontend deployment |

### Backend
| Technology | Role |
|---|---|
| Node.js + Express.js | REST API server |
| MongoDB + Mongoose | NoSQL database with schema modeling |
| Cloudinary | Cloud-based image storage |
| Rate Limiting Middleware | API abuse protection |
| Render | Backend deployment |

---

## 📁 Project Structure Highlights

```
creative-market/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Market.jsx          # Featured products with limited-edition badges
│   │   │   ├── ArtistLove.jsx      # Tilted-grid artist showcase section
│   │   │   ├── AboutUs.jsx         # Team section
│   │   │   └── Footer.jsx          # Social-integrated footer
│   │   └── ...
├── backend/
│   ├── routes/                     # API endpoints
│   ├── models/                     # Mongoose schemas
│   ├── middleware/                  # Auth, rate limiting
│   └── ...
```

---

## 🎨 Design Highlights

- **Dark-Themed Artistic UI** — A visual identity built around hand-drawn elements and expressive typography
- **CSS Skew Layouts** — Custom image-slicing techniques for an editorial, gallery-like feel
- **Interactive Hover Effects** — Smooth transitions that bring products to life
- **Dynamic Layouts** — Asymmetric grids that break the mold of typical e-commerce templates

---

## 📄 Documentation

| Resource | Link |
|---|---|
| 📝 Project Documentation (Vision, Goals, Features) | [Google Docs](https://docs.google.com/document/d/1CdNxqwrQUCS4ei0iBF1PQaGILajpYmAmKfzmL8m9FXM/edit?usp=sharing) |
| 🗂️ Software Architecture & System Blueprint | [Figma Board](https://www.figma.com/board/knELaqlKa8ARUQofT0FwEE/Commit-no-Jutsu?node-id=480-986&t=c1UFc62fAUL5XE5Y-0) |
| 🌐 Live Application | [creative-market-front-end-sprint-2-mu.vercel.app](https://creative-market-front-end-sprint-2-mu.vercel.app/) |
| ⚙️ Backend Repository | [creative-market-back-end](https://github.com/AshaJenvasu/creative-market-back-end) |

---

## 👥 The Team

This project was built in a Scrum environment across two sprints by a cross-functional team of six developers:

| GitHub | Role |
|---|---|
| [@lattawanksp](https://github.com/lattawanksp) | Team Member |
| [@Wathisa](https://github.com/Wathisa) | Team Member |
| [@AshaJenvasu](https://github.com/AshaJenvasu) | **Scrum Master** |
| [@devmontri-github](https://github.com/devmontri-github) | Team Member |
| [@jolynestarchaser](https://github.com/jolynestarchaser) | Team Member |
| [@billie89-33](https://github.com/billie89-33) | Team Member |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Cloudinary account

### Installation

```bash
# Clone the repository
git clone https://github.com/AshaJenvasu/creative-market.git
cd creative-market

# Install frontend dependencies
cd frontend
npm install
npm run dev

# Install backend dependencies
cd ../backend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in `/backend`:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret
```

---

> *"Art is not what you see, but what you make others see."*
> — Every pixel here was placed by a human hand. Let's keep it that way. 🎨✨
