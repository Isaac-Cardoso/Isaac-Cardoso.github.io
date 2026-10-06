# Isaac Cardoso — Personal Website

Personal portfolio for my work in identity and access management engineering.

**Live site:** [isaac-cardoso.com](https://isaac-cardoso.com)  
**GitHub:** [github.com/Isaac-Cardoso](https://github.com/Isaac-Cardoso)

## Site contents

- Professional introduction and career highlights
- IAM experience, selected projects, technical skills, credentials, and education
- Resume preview and PDF download
- Email and professional profile links

## Updating the site

| To update | Edit or replace |
|---|---|
| Page content, experience, skills, links | `index.html` |
| Colors, typography, spacing, responsive layout | `styles.css` |
| Small browser behavior | `script.js` |
| Resume preview and download | `assets/Isaac_Cardoso.pdf` |

To replace the resume, keep the filename `Isaac_Cardoso.pdf` so the existing preview and download links continue to work. The website content is maintained separately in `index.html`; replacing the PDF does not rewrite the page.

## Previewing locally

Open `index.html` in a browser. This is a static HTML/CSS/JavaScript site with no build step or package installation. Google Fonts are loaded when an internet connection is available; local system fonts are used as fallbacks.

## Publishing

The `Deploy portfolio to GitHub Pages` workflow in `.github/workflows/pages.yml` publishes the repository root whenever a commit is pushed to `main`. It can also be run manually from the repository’s **Actions** tab.

The repository is `Isaac-Cardoso/Isaac-Cardoso.github.io`. GitHub Pages uses `isaac-cardoso.com` as the primary custom domain; DNS is managed through Porkbun. The alternate no-hyphen domain, `isaaccardoso.com`, forwards to the primary domain.
