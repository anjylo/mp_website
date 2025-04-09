import Experience from "@components/Experience"
import resume from "@assets/files/resume.pdf"

const Experiences = () => {
  const experiences = [
    {
      company: "Zero One Moto Inc.", 
      position: "Video Editor", 
      role: null, 
      duration: { from: "january 2025", to: "march 2025" },
    },
    {
      company: "Generalized Abby Pro Solution LLC", 
      position: "Video Editor", 
      role: "Project-based", 
      duration: { from: "october 2024", to: "december 2024" },
    },
    {
      company: "Cartruck Ozamiz.", 
      position: "Video Editor", 
      role: "Part-time", 
      duration: { from: "october 2023", to: "march 2024" },
    },
  ]

  const internships = [
    {
      company: "Kreative Studio PH", 
      position: "Email Designer Intern", 
      role: null, 
      duration: { from: "january 2025", to: "february 2025" },
    },
    {
      company: "Blueberry Digital Labs PH, Inc", 
      position: "Graphic Designer Intern", 
      role: null, 
      duration: { from: "september 2023", to: "august 2024" },
    },
  ]

  const downloadResume =  () => {
    const downloadLink = document.createElement("a")

    downloadLink.href = resume
    downloadLink.download = "resume.pdf"
    document.body.appendChild(downloadLink)
    downloadLink.click()
  }

  return (
    <>
      <div className="relative isolate py-6 px-4 lg:px-24">

        <p className="text-white uppercase mb-4" id="about">about</p>

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between mb-12">
          <h1 className="text-custom-beige uppercase text-4xl lg:text-6xl font-extrabold flex-6">my <br /> Experience</h1>
          
          <div className="flex flex-col gap-4 flex-4">

            <p className="text-custom-beige">
              I'm a Graphic Designer with a passion for learning new design skills and exploring various design aspects. 
              Eager to take on new challenges and advance my career. 
              Looking to join a creative team where i can apply my knowledge in Adobe Creative Suite to produce impactful and engaging projects.
            </p>

            <button className="text-white w-30 h-10 p-4 border-2 border-solid rounded-full flex items-center gap-4">
              <span onClick={downloadResume}>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between mb-12">
          <p className="text-white uppercase flex-1 mb-4 md:mb-0">work</p>

          <div className="flex-2">
            {experiences.map((experience, key) => {
              return (
                <div key={key}>
                  <hr className="h-px border-0 bg-custom-beige mb-4" />
                  <Experience data={experience} />
                </div>
              )
            })}
          </div>

        </div>
        
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between mb-12">
          <p className="text-white uppercase flex-1 mb-4 md:mb-0">internship</p>

          <div className="flex-2">
            {internships.map((internship, key) => {
              return (
                <div key={key}>
                  <hr className="h-px border-0 bg-custom-beige mb-4" />
                  <Experience data={internship} />
                </div>
              )
            })}
          </div>

        </div>
     
      </div>
    </>
  )
}

export default Experiences