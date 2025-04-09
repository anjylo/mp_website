const categories = [
  "graphic_design",
  "marketing_branding",
  "publication_layout_design"
]

const images = {}

const metas = {
  "graphic_design": import.meta.glob(`@assets/images/projects/graphic_design/**/*.jpg`, { eager: true }),
  "marketing_branding": import.meta.glob(`@assets/images/projects/marketing_branding/**/*.jpg`, { eager: true }),
  "publication_layout_design": import.meta.glob(`@assets/images/projects/publication_layout_design/**/*.jpg`, { eager: true })
}

for (let [key, data] of Object.entries(metas)){
  images[key] = Object.values(data).map((mod) => mod.default)
}

export default images