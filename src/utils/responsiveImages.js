const imageModules = import.meta.glob('../assets/site-content/**/*.webp', {
  eager: true,
  import: 'default',
})

const responsiveWidths = [640, 960, 1280, 1600]
const defaultSizes =
  '(max-width: 767px) calc(100vw - 42px), (max-width: 1480px) calc(100vw - 78px), 1364px'

const imageUrl = (assetPath) => imageModules[`../assets/site-content/${assetPath}.webp`]

export const makeImage = ({ path, alt, width, height, sizes = defaultSizes }) => {
  const src = imageUrl(path)

  if (!src) {
    throw new Error(`Missing image asset: ${path}.webp`)
  }

  const srcset = [
    ...responsiveWidths
      .filter((candidateWidth) => candidateWidth < width)
      .map((candidateWidth) => ({
        width: candidateWidth,
        src: imageUrl(`${path}-${candidateWidth}`),
      }))
      .filter((candidate) => candidate.src),
    { width, src },
  ]
    .map((candidate) => `${candidate.src} ${candidate.width}w`)
    .join(', ')

  return { src, srcset, sizes, alt, width, height }
}
