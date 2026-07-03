import Link from "next/link";

export default function Footer(){
    return(
        <section className="frr">
          <footer>
                <div className="footer_top">
                    <div className="footer_left">
                       <div className="logo">
                        <img src="./img/logo.png" alt="" />
                       </div>

                       <p className="txt_18">
                        +7 (4872) 710-150
                       </p>
                    </div>

                    <div className="footer_rigth">
                       <div className="ftr_itm">
                        <p className="txt_19">
                          Каталог
                        </p>

                        <ul className="ul_ftr">
                          <li>
                            <Link href="#" className="lnk_2">
                            Ангажмент
                            </Link>
                            </li> 

                            <li>
                            <Link href="#" className="lnk_2">
                            Фабрика Мирлачева
                            </Link>
                            </li> 

                            <li>
                            <Link href="#" className="lnk_2">
                            Pro Son
                            </Link>
                            </li> 
                        </ul>

                       </div>

                        <div className="ftr_itm">
                        <p className="txt_19">
                          Покупателю
                        </p>

                        <ul className="ul_ftr">
                          <li>
                            <Link href="#" className="lnk_2">
                            Как оплатить
                            </Link>
                            </li> 

                            <li>
                            <Link href="#" className="lnk_2">
                            Как получить
                            </Link>
                            </li> 

                            <li>
                            <Link href="#" className="lnk_2">
                            Гарантия
                            </Link>
                            </li> 
                        </ul>

                       </div>

                        <div className="ftr_itm">
                        <p className="txt_19">
                          О компании
                        </p>

                        <ul className="ul_ftr">
                          <li>
                            <Link href="#" className="lnk_2">
                            О нас
                            </Link>
                            </li> 

                            <li>
                            <Link href="#" className="lnk_2">
                            Контакты
                            </Link>
                            </li> 

                            <li>
                            <Link href="#" className="lnk_2">
                            Статьи
                            </Link>
                            </li> 
                        </ul>

                       </div>
                    </div>
                </div>

                <div className="footer_bottom">
               <p className="txt_20">© Mebello, . 2024.</p>

               <div className="app_block">
                <Link href="#">
                <div className="app_itm">
                  <img src="./img/vk.png" alt="" />
                </div>
                </Link>
                   
                   <Link href="#">
                <div className="app_itm">
                  <img src="./img/YouTube.png" alt="" />
                </div>
                </Link>

                <Link href="#">
                <div className="app_itm">
                  <img src="./img/Telegram.png" alt="" />
                </div>
                </Link>

                <Link href="#">
                <div className="app_itm">
                  <img src="./img/WhatsApp.png" alt="" />
                </div>
                </Link>
               </div>

                </div>

                
              </footer>
        </section>
    )
}