import Image from 'next/image'
import styles from './page.module.css'
import Banner from './Components/Banner'

export default function Home() {
  return (
    <>   
    <Banner/>
    <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">© 2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
         </div>
      </div>
    </>
  )
}
