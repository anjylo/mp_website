import { Link } from "react-router-dom"
import CardsMarquee from "@components/CardsMarquee"
import Category from "@components/Category"

const Projects = () => {

  const categories = [
    {
      title: "Graphic Design",
      link: "graphic design"
    },
    {
      title: "Marketing & Branding",
      link: "marketing & branding"
    },
    {
      title: "Publication & Layout Design",
      link: "publication & layout design"
    },
  ]

  return (
    <>
      <div className="relative isolate px-4 py-6 lg:px-24">
        <div className="flex flex-col justify-center">
          
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-12">
          
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-white uppercase" id="works">works</p>
              <h1 className="text-custom-beige uppercase text-6xl font-extrabold">my <br /> portfolio</h1>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <p className="text-white self-end">2022-2025</p>
              <p className="text-custom-beige md:pl-16 md:self-end">
                My work blends creativity with strategy to deliver impactful design solutions. From striking logos and  engaging digital content to refined print materials. I focus on clear, visually compelling results that elevate brand  presence and drive engagement.
              </p>
            </div>
            
          </div>
          
          <CardsMarquee />

          <div className="flex flex-col lg:flex-row justify-between mt-12">
            
            <p className="text-white mb-4 lg:mb-0 uppercase grow-4">all categories</p>

            <div className="flex flex-col grow-4">
              {categories.map(({ title, link }, key) => {
                return (
                  <div key={key} className="flex flex-col">
                    <hr className="h-px border-0 bg-gray-500 my-4" />
                    <Link to={`/category/${link}`}>
                      <Category title={title} />
                    </Link>

                    {key === (categories.length - 1) ? <hr className="h-px border-0 bg-custom-beige my-4" /> :  ""}
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </div>

      <hr className="h-px border-0 bg-custom-beige" />
    </>
  )
}

export default Projects