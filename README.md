# Burhan Mubarok - Personal Website

This is the source code for [burubur.github.io](https://burubur.github.io), built with **Gatsby**.

This repository is part of my personal monorepo.

## 🛠 Tech Stack

-   **Framework**: [Gatsby](https://www.gatsbyjs.com/) (React-based static site generator)
-   **Content**: Markdown-based blog posts (`src/posts`)
-   **Styling**: Custom CSS and React components
-   **Hosting**: GitHub Pages (served from the `/docs` folder)

To work on the site directly with hot-reloading:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start Dev Server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:8000`.

## 📦 Deployment

The deployment workflow builds the static site into the `docs/` directory, which is configured as the publishing source for GitHub Pages.

To build for production:

```bash
npm run prod
# 1. Cleans cache
# 2. Builds site to /public
# 3. Moves /public contents to /docs
```

After building, commit and push the changes:

```bash
git add .
git commit -m "chore(site): release new version"
git push
```