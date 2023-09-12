import Image from 'next/image'
import styles from './page.module.css'
import Banner from './Components/Banner'

export default function Home() {
  return (
    <>   
    <Banner/>
    <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">© 2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
         </div>
      </div>
    </>
  )
}
