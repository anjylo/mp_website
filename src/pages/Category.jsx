import NavigationBar from '@components/NavigationBar'
import { Link, useParams } from "react-router-dom"

import images from "@js/categories"

const Category = () => {
  const { category } = useParams();

  const categories = {
    "graphic design": {
      items: [
        "flyers", "infographics", "poster", "social media post"
      ],
      images: images.graphic_design
    },
    "marketing & branding": {
      items: [
        "email design", "email drip"
      ],
      images: images.marketing_branding
    },
    "publication & layout design": {
      items: [
        "e-magazine", "presentation"
      ],
      images: images.publication_layout_design
    }
  }

  return (
    <>
      <section className="flex flex-col min-h-screen bg-custom-gunmetal">
        <NavigationBar className="flex-1" />

        <div className="relative isolate px-4 py-6 lg:px-24">

          <Link to={"/"}>
            <div className="text-gray-400 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 19.5 4.5 12l6.75-7.5M4.5 12h15" />
                </svg>
                <p className="uppercase">Back</p>
            </div>
          </Link>

          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-2">
            <div>
              <h1 className="text-custom-beige uppercase text-4xl lg:text-6xl font-extrabold">{category}</h1>
              
              <hr className="hidden lg:block h-px border-0 bg-gray-500 my-6" />
              
              <div className="hidden lg:flex lg:flex-col lg:gap-4 uppercase text-custom-beige">
                {categories[category].items.map((data, key) => <p key={key}>{data}</p>)}
              </div>
            </div>
            
            <div className="flex flex-col gap-10">
              {categories[category].images.map((data, key) => {
                return <img key={key} className="w-120 h-110 rounded-lg  object-cover" src={data} alt="Card Image"/>
              })}
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Category