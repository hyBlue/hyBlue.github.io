# Hyunyoung Jung

Source for [hyblue.github.io](https://hyblue.github.io/), a personal research website about 3D vision and generative AI.

## Preview

Serve this directory with any static web server, for example `python -m http.server 4173`, then open `http://localhost:4173`. No build step or package installation is required.

## Structure

- `index.html`: biography, publications, experience, and education.
- `stylesheet.css`: responsive portfolio layout and typography.
- `site.js`: viewport-aware playback of animated previews.
- `fonts/`: locally served Lato fonts and their license.
- `images/`: original research media and profile photograph.
- `images/highlights/`: source-based posters, MP4 loops, GIF alternatives, and [media provenance](images/highlights/SOURCES.md) for WorldGen, AssetGen, and AutoPartGen.
- `geo-srf/`: the Geometry Transfer project page and demonstrations.

The site uses an 800px layout with Lato typography. All six publications use the same media layout and retain linked author names. AssetGen highlights cycle through the paper's hero artwork and published result galleries. Silent highlights automatically play and loop when visible, without on-screen controls. They pause offscreen and in hidden tabs, and respect reduced-motion preferences. Figures, video posters, and all publication text remain visible without JavaScript.

AnyFlow and FSRE retain the original before/after interaction: hover over the publication or focus its image or links to show the comparison; moving away and leaving focus restores the original image. This works without JavaScript or additional buttons.

The original portfolio was based on [Jon Barron's website](https://jonbarron.info/). The Geo-SRF page retains its [Nerfies](https://nerfies.github.io/) template attribution and license notice.
