const Footer = () => {
  return (
    <>
      <div className="relative isolate py-6 px-4 lg:px-24 bg-custom-beige">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="uppercase font-semibold" id="contact">contact</p>
            <h1 className="text-1xl lg:text-4xl font-semibold">hello@maryprincessdesigns.com</h1>
          </div>
          <div>
            <p className="uppercase font-semibold">social media</p>
          </div>
        </div>

        <hr className="h-px border-t-2 my-4" />

        <div className="flex gap-4">
          <p>&copy; <span className="font-semibold">{new Date().getFullYear()}</span></p>
          <p>maryprincess <span className="font-semibold">designs</span></p>
        </div>
      </div>
    </>
  )
}

export default Footer