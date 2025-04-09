import { HashLink } from 'react-router-hash-link';

function NavigationBar() {
  return (
    <>
      <header>
        <nav className="px-4 py-6 lg:px-24 flex justify-between">
         
         <h1 className="text-custom-beige">maryprincess<span className="font-bold">designs</span> </h1> 
          
          <ul className="flex justify-end">
            <li>
              <HashLink
                to="/#works"
                smooth 
              >
                <span className="text-xs text-custom-beige px-4 md:text-base sm:text-sm hover:text-white">Work</span>
              </HashLink>
            </li>
            <li>
            <HashLink
                to="/#about"
                smooth 
              >
                <span className="text-xs text-custom-beige px-4 md:text-base sm:text-sm hover:text-white">About</span>
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                smooth 
              >
                <span className="text-xs text-custom-beige px-4 md:text-base sm:text-sm hover:text-white">Contact</span>
              </HashLink>
            </li>
          </ul>
        </nav>
    </header>
    </>
  )
}
  
export default NavigationBar
  