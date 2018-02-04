This website is running on github.io, using [static HTML export](https://github.com/zeit/next.js/#static-html-export) of next.js.

I configured the github repo to use the source from `/docs` and lucleray.me as a custom domain.

I configured next.js to export to `/docs` folder :
`next export -o docs`

I also need to recreate `CNAME` et `.nojekyll` in the `/docs` folder because they get deleted during the export :
`cp CNAME docs/ && cp .nojekyll docs/`

The configuration is in package.json :
```json
{
  "scripts": {
    "dev": "next",
    "build": "next build && next export -o docs && cp CNAME docs/ && cp .nojekyll docs/"
  }
}
```

**Running this repo locally** :
clone, `npm install`, `npm run dev`

**Deploy** : `npm run build`, commit, push
