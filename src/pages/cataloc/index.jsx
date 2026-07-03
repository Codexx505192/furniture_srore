import Header from "@/shared/ui/Header/Header";
import styles from "./cataloc.module.css"
import Cart from "@/shared/ui/Cart";
import Footer from "@/shared/ui/Footer";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section id="page-cataloc" className={styles.ctl}>
            <div className="container">
                <Header/>

                <div className={styles.cataloc_banner}>

                   <div className={styles.bnr_ft}>
                    <p className={styles.catloc_txt}>
                         PRO SON
                    </p>

                    <p className={styles.catloc_txt_2}>
                         Компания PROSON выпускает коллекции <br />
                         качественных товаров и систематизировали  <br />
                         ассортимент, сделав выбор максимально  <br />
                         удобным и прозрачным. Среди продукции <br />
                         бренда PROSON вы найдёте все ключевые <br />
                         категории для обустройства взрослого и <br />
                         детского спального места. Системность <br />
                         надежность, честность - ключевые ценности <br />
                         бренда PROSON
                    </p>
                    </div> 
                </div>
            </div>
        </section>

        <section className={styles.matt_bl}>
            <div className="container">
                <div className={styles.mattresses_block}>
                    <div className={styles.mattresses_grid}>
                        <Link href="#">
                        <div className={styles.mattresses_elm}>
                            <div className={styles.mtr}>
                                <img src="./catalog_pht/mattress.png" alt="" />
                            </div>

                            <div className={styles.mattresses_cntr}>
                               <p className={styles.catloc_txt_3}>
                                Матрасы
                               </p>

                               <div className={styles.line_2}></div>

                               <ul className={styles.ul_1}>
                                <li>Коллекция Start</li>
                                <li>Коллекция Twist</li>
                                <li>Коллекция Original</li>
                                <li>Коллекция Dream</li>
                                <li>Коллекция Prestige</li>
                                <li>Коллекция Elysium</li>
                                <li>Коллекция ORTOMEDIC</li>
                               </ul>
                            </div>

                        </div>
                        </Link>
                     

                      <div className={styles.mattresses_elm}>
                            <div className={styles.mtr}>
                                <img src="./catalog_pht/mattress2.png" alt="" />
                            </div>

                            <div className={styles.mattresses_cntr}>
                               <p className={styles.catloc_txt_3}>
                                Подушки
                               </p>

                               <div className={styles.line_2}></div>

                               <ul className={styles.ul_1}>
                                <li>Коллекция Air</li>
                                <li>Коллекция Terra</li>
                                <li>Коллекция Flow</li>
                                <li>Коллекция Sleepy</li>
                                
                               </ul>
                            </div>

                        </div>

                         <div className={styles.mattresses_elm}>
                            <div className={styles.mtr}>
                                <img src="./catalog_pht/mattress3.png" alt="" />
                            </div>

                            <div className={styles.mattresses_cntr}>
                               <p className={styles.catloc_txt_3}>
                                Спальня
                               </p>

                               <div className={styles.line_2}></div>

                               <ul className={styles.ul_1}>
                                <li>Спальные системы Elysium</li>
                                <li>Коллекция ProSon</li>
                                <li>Коллекция Geometry</li>
                                <li>Коллекция Puzzle</li>
                                <li>Коллекция Sleepy</li>
                                <li>Коллекция Europe</li>
                                <li>Коллекция Level</li>
                                <li>Основания</li>
                                <li>Комоды</li>
                                <li>Тумбы</li>
                               </ul>
                            </div>

                        </div>

                         <div className={styles.mattresses_elm}>
                            <div className={styles.mtr}>
                                <img src="./catalog_pht/mattress4.png" alt="" />
                            </div>

                            <div className={styles.mattresses_cntr}>
                               <p className={styles.catloc_txt_3}>
                                Детям
                               </p>

                               <div className={styles.line_2}></div>

                               <ul className={styles.ul_1}>
                                <li>Матрасы</li>
                                <li>Кровати</li>
                                <li>Мебель</li>
                                <li>Подушки</li>
                                <li>Защитные чехлы</li>
                                <li>Пледы</li>
                        
                               </ul>
                            </div>

                        </div>

                          <div className={styles.mattresses_elm}>
                            <div className={styles.mtr}>
                                <img src="./catalog_pht/mattress5.png" alt="" />
                            </div>

                            <div className={styles.mattresses_cntr}>
                               <p className={styles.catloc_txt_3}>
                                Аксесуары
                               </p>

                               <div className={styles.line_2}></div>

                               <ul className={styles.ul_1}>
                                <li>Коллекция Start</li>
                                <li>Коллекция Twist</li>
                                <li>Коллекция Original</li>
                                <li>Коллекция Dream</li>
                                <li>Коллекция Prestige</li>
                                <li>Коллекция Elysium</li>
                                <li>Коллекция ORTOMEDIC</li>
                               </ul>
                            </div>

                        </div>

                         <div className={styles.mattresses_elm}>
                            <div className={styles.mtr}>
                                <img src="./catalog_pht/mattress6.png" alt="" />
                            </div>

                            <div className={styles.mattresses_cntr}>
                               <p className={styles.catloc_txt_3}>
                                Топеры
                               </p>

                               <div className={styles.line_2}></div>

                               {/* <ul className={styles.ul_1}>
                                <li>Коллекция Start</li>
                                <li>Коллекция Twist</li>
                                <li>Коллекция Original</li>
                                <li>Коллекция Dream</li>
                                <li>Коллекция Prestige</li>
                                <li>Коллекция Elysium</li>
                                <li>Коллекция ORTOMEDIC</li>
                               </ul> */}
                            </div>

                        </div>
                    </div> 
                </div>
            </div>
        </section>

        <section className={styles.off_back}>
            <div className="container">
                <div className={styles.offers_block}>
                     <p className={styles.catloc_txt_8}>
                           ЛУЧШИЕ ПРЕДЛОЖЕНИЯ
                     </p>

                     <div className={styles.offers_grid}>
                        <div className={styles.offers_itm}>
                      <div className={styles.off_top}>
                        <img src="./catalog_pht/off_1.png" alt="" />
                      </div>
                            
                        <div className={styles.offers_bottom}>
                           <div className={styles.txt_b_1}>
                            <p className={styles.catloc_txt_4}>
                             Матрас Base S Roll <br />
                             80х190 см
                            </p>

                            <div className={styles.lft_txt}>
                            <p className={styles.catloc_txt_5}>
                              9 520 ₽
                            </p>

                            <p className={styles.catloc_txt_6}>
                              10 580 ₽
                            </p>
                            </div>
                           </div>

                           <p className={styles.catloc_txt_7}>
                              Снимает мышечное напряжение <br />
                              Разная жесткость сторон  <br />
                              Максимальное количество пружин
                           </p>

                       
                            <div className={styles.bottom_btn}>
                                 <button className={styles.btn}>
                              в корзину
                           </button>
                            </div>
                          
                        </div>
                        </div>

                         <div className={styles.offers_itm}>
                      <div className={styles.off_top}>
                        <img src="./catalog_pht/off_1.png" alt="" />
                      </div>
                            
                        <div className={styles.offers_bottom}>
                           <div className={styles.txt_b_1}>
                            <p className={styles.catloc_txt_4}>
                             Матрас Base S Roll <br />
                             80х190 см
                            </p>

                            <div className={styles.lft_txt}>
                            <p className={styles.catloc_txt_5}>
                              9 520 ₽
                            </p>

                            <p className={styles.catloc_txt_6}>
                              10 580 ₽
                            </p>
                            </div>
                           </div>

                           <p className={styles.catloc_txt_7}>
                              Снимает мышечное напряжение <br />
                              Разная жесткость сторон  <br />
                              Максимальное количество пружин
                           </p>

                       
                            <div className={styles.bottom_btn}>
                                 <button className={styles.btn}>
                              в корзину
                           </button>
                            </div>
                          
                        </div>
                        </div>

                        <div className={styles.offers_itm}>
                      <div className={styles.off_top}>
                        <img src="./catalog_pht/off_1.png" alt="" />
                      </div>
                            
                        <div className={styles.offers_bottom}>
                           <div className={styles.txt_b_1}>
                            <p className={styles.catloc_txt_4}>
                             Матрас Base S Roll <br />
                             80х190 см
                            </p>

                            <div className={styles.lft_txt}>
                            <p className={styles.catloc_txt_5}>
                              9 520 ₽
                            </p>

                            <p className={styles.catloc_txt_6}>
                              10 580 ₽
                            </p>
                            </div>
                           </div>

                           <p className={styles.catloc_txt_7}>
                              Снимает мышечное напряжение <br />
                              Разная жесткость сторон  <br />
                              Максимальное количество пружин
                           </p>

                       
                            <div className={styles.bottom_btn}>
                                 <button className={styles.btn}>
                              в корзину
                           </button>
                            </div>
                          
                        </div>
                        </div>


                        <div className={styles.offers_itm}>
                      <div className={styles.off_top}>
                        <img src="./catalog_pht/off_1.png" alt="" />
                      </div>
                            
                        <div className={styles.offers_bottom}>
                           <div className={styles.txt_b_1}>
                            <p className={styles.catloc_txt_4}>
                             Матрас Base S Roll <br />
                             80х190 см
                            </p>

                            <div className={styles.lft_txt}>
                            <p className={styles.catloc_txt_5}>
                              9 520 ₽
                            </p>

                            <p className={styles.catloc_txt_6}>
                              10 580 ₽
                            </p>
                            </div>
                           </div>

                           <p className={styles.catloc_txt_7}>
                              Снимает мышечное напряжение <br />
                              Разная жесткость сторон  <br />
                              Максимальное количество пружин
                           </p>

                       
                            <div className={styles.bottom_btn}>
                                 <button className={styles.btn}>
                              в корзину
                           </button>
                            </div>
                          
                        </div>
                        </div>

                     </div>
                </div>
            </div>
        </section>

        <section className={styles.mbl_back}>
          <div className="container">
            <div className={styles.mbl_block}>
               <div className={styles.mbl_left}>
              <p className={styles.catloc_txt_9}>
                 Не нашли того, <br />
                 что искали?
              </p>

              <p className={styles.catloc_txt_10}>
                Оставьте свой номер и мы подберём для Вас всё, что нужно.
              </p>

                <div className={styles.mbl_inp_block}>
                 <div className={styles.tel_n}>
                   <input type="tel" placeholder="Телефон"/>
                 </div>
                   <button className={styles.btn_2}>
                      ОТПРАВИТЬ
                   </button>
                </div>
               </div>

                <div className={styles.mbl_rigth}>
                  <img src="./catalog_pht/mbl.png" alt="" />
                </div>
            </div>
          </div>
        </section>

        <section className={styles.crt}>
          <div className="container">
            <Cart/>
          </div>
        </section>


        <section className={styles.frr}>
          <div className="container">
           <Footer/>
          </div>
        </section>
        </>
    )
}