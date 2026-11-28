# Isaac Cardoso | Personal Portfolio

Personal portfolio showcasing my experience in software development, APIs, enterprise systems integration, automation, and identity management.

## Links

- Live website: [https://isaac-cardoso.com](https://isaac-cardoso.com)
- GitHub: [https://github.com/Isaac-Cardoso](https://github.com/Isaac-Cardoso)
- LinkedIn: [https://www.linkedin.com/in/cardosoisaac/](https://www.linkedin.com/in/cardosoisaac/)

## Site contents

- Professional introduction and career experience
- Experience across RPA, Unix, application provisioning, and identity management
- Technical skills, technologies, and enterprise systems
- Areas of focus, including software architecture, application security, and AI-assisted development
- Education, certifications, and SailPoint knowledge badges
- Resume preview and PDF download

## Updating the site

| To update                                      | Edit or replace            |
| ---------------------------------------------- | -------------------------- |
| Page content, experience, skills, links        | `index.html`               |
| Colors, typography, spacing, responsive layout | `styles.css`               |
| Small browser behavior                         | `script.js`                |
| Resume preview and download                    | `assets/Isaac_Cardoso.pdf` |

To replace the resume, keep the filename `Isaac_Cardoso.pdf` so the existing preview and download links continue to work. The website content is maintained separately in `index.html`; replacing the PDF does not rewrite the page.

## Previewing locally

Open `index.html` in a browser. This is a static HTML, CSS, and JavaScript site with no build step or package installation. Google Fonts are loaded when an internet connection is available; local system fonts are used as fallbacks.

## Publishing

The `Deploy portfolio to GitHub Pages` workflow in `.github/workflows/pages.yml` publishes the repository root whenever a commit is pushed to `main`. It can also be run manually from the repository's **Actions** tab.

The repository is `Isaac-Cardoso/Isaac-Cardoso.github.io`. GitHub Pages uses `isaac-cardoso.com` as the primary custom domain; DNS is managed through Porkbun. The alternate domain, `isaaccardoso.com`, forwards to the primary domain.
