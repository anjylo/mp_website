import hero from "@assets/images/hero.jpg"

function Hero() {
  const emailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=maryprincesslagura@gmail.com"
  const linkedlnLink = "https://www.linkedin.com/in/mary-princess-lagura/"
  const portfolioLink = "https://maryprincesslagura-portfolio.my.canva.site/"

  const onNavigatePortfolio = () => {
    window.open(
      portfolioLink,
      "_blank"
    );
  }

  return (
    <>
      <div className="relative isolate mx-auto max-w-7xl mb-12 p-8 lg:p-16">

        <div className="flex flex-col lg:flex-row lg:gap-32 text-white font-thin">
          <div className="flex flex-col gap-12 lg:gap-28 max-w-md">

            <div className="flex flex-col gap-6">
              <p className="text-lg sm:text-xl/8 text-pretty">
                Hey! <br />
                I'm Mary Princess, a <span className="text-custom-beige">graphic designer</span> who creates eye-catching designs that communicate ideas clearly.
                My work includes digital graphics and print materials.
                I focus on simplicity and effectiveness to make your brand stand out.
              </p>
              <button onClick={onNavigatePortfolio} className="self-center lg:self-start flex gap-4 items-center text-upper text-custom-gunmetal bg-custom-beige focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center hover:cursor-pointer">
                <span>Portfolio</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>

            <div>

              <h1 className="text-lg uppercase">connect</h1>

              <div className="text-custom-beige flex items-center gap-16 mb-2">
                <a href={linkedlnLink} target="_blank">Linkedln</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

              <div className="text-custom-beige flex items-center gap-20">
                <a href={emailLink} target="_blank">Email</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

            </div>

          </div>

          <div className="hidden lg:block w-full lg:w-auto lg:max-w-2xl xl:max-w-3xl max-h-[500px] overflow-hidden">
            <img
              src={hero}
              alt="Dashboard image"
              className="rounded-3xl object-cover w-full h-full max-h-[500px]"
            />
          </div>

        </div>

      </div>

      <hr className="h-px border-0 bg-custom-beige" />
    </>
  )
}
  
export default Hero
  