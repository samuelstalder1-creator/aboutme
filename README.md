# Samuel Stalder | Data Science Homepage

Static frontend homepage for data science job applications, designed to deploy on GitHub Pages without a build step.

## Stack

- `index.html`
- `styles.css`
- `script.js`
- GitHub Pages workflow in `.github/workflows/deploy.yml`

## Personalize

1. Edit the content object in `script.js`.
2. Replace the template project prompts with real projects, metrics, and links.
3. Push to `main`.
4. If GitHub prompts for a Pages source, choose `GitHub Actions`.

## Local Preview

From the repo root:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
