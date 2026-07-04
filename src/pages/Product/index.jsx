import Header from "@/shared/ui/Header/Header";
import styles from "./Product.module.css"
import { ways_2 } from "@/data";
import { useState } from "react";
import Link from "next/link";
import Mbl from "@/shared/ui/Mbl";
import Cart from "@/shared/ui/Cart";
import Footer from "@/shared/ui/Footer";

export default function Page(){
const [activeTab, setActiveTab] = useState('description');

function WayToTeach({title}){
    return(
        <li>
           <div className={styles.icn}>
               <img src="./product/plgn.png" alt="" />
           </div>
           {title}
         </li>
    )
}

    return(
        <>
        <main>
            <section className={styles.prdct_back}>
                <div className="container">
                    <Header/>
                    
                    <div className={styles.product_banner}>
                        <p className={styles.txt_pr}>Главная  Каталог  Pro Son</p>
                        <p className={styles.txt_pr_2}>Матрас Lux Duo M/F 80х190 см</p>

                        <div className={styles.pdc_itm}>
                             <div className={styles.prdct_left}>
                                 <div className={styles.pdct_flx}>
                                   <div className={styles.prdct_itm_mni}>
                                    <img src="./product/pr_1.png" alt="" />
                                   </div>

                                    <div className={styles.prdct_itm_mni}>
                                    <img src="./product/pr_2.png" alt="" />
                                   </div>

                                    <div className={styles.prdct_itm_mni}>
                                    <img src="./product/pr_3.png" alt="" />
                                   </div>
                                 </div>

                                   <div className={styles.prdct_itm}>
                                    <img src="./product/bg.png" alt="" />
                                   </div>
                             </div>

                              <div className={styles.pdc_left}>
                                <div className={styles.pr_txt_top}>
                                 <p className={styles.txt_pr_3}>
                                    13 388 ₽ 
                                 </p>

                                 <button className={styles.product_btn}>
                                  В КОРЗИНУ
                                 </button>
                                </div>
                                   
                                   <p className={styles.txt_pr_4}>15 750 ₽ </p>
                                   <div className={styles.txt_line}></div>

                                   <ul className={styles.ul_1}>
                                   <li>Размер 80 х 190 см</li>
                                   <li>Особенности: </li>
                                   </ul>

                                   <ul className={styles.ul_2}>
                                     <WayToTeach title={ways_2[0].title}/>
                                     <WayToTeach {...ways_2[1]}/>
                                     <WayToTeach {...ways_2[2]}/>
                                   </ul>
                             </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className={styles.prdct_back}>
                <div className="container">
                    <div className={styles.info_block}>
                        <div className={styles.tabs_container}>
      {/* 2. Блок с кнопками управления */}
      <div className={styles.tabs_buttons}>
        <button
          className={`${styles.tab_btn} ${activeTab === 'description' ? styles.active : ''}`}
          onClick={() => setActiveTab('description')}
        >
          ОПИСАНИЕ
        </button>
        <button
          className={`${styles.tab_btn} ${activeTab === 'features' ? styles.active : ''}`}
          onClick={() => setActiveTab('features')}
        >
          ХАРАКТЕРИСТИКИ
        </button>
      </div>


      {/* 3. Блок с контентом, который меняется в зависимости от activeTab */}
      <div className={styles.tabs_content}>
        {activeTab === 'description' && (
          <div className={styles.description_text}>
            <p className={styles.txt_pr_5}>
              Матрас с разной жесткостью сторон, каждая из которых обладает своим особенным преимуществом. В основе модели лежит блок независимых пружин EVS1000,  <br />
              обеспечивающий точечную поддержку тела во время сна и отдыха. Среднюю жесткость придает комфортный слой из Ортофом и кокосовой койры, которые равномерно  <br />
              распределяют давление тела и в сочетании с блоком дарит легкость вашим движениям.   
            </p> 

            <p className={styles.txt_pr_6}>
            С другой стороны латексированная кокосовая койра придаст необходимую комфортную жесткость вашему спальному месту.
            </p>

            <p className={styles.txt_pr_7}>
              При покупке матраса коллекции Dream с защитным чехлом действует дополнительная гарантия на матрас 10 лет.
            </p>
          </div>
        )}

        {activeTab === 'features' && (
          <div className={styles.features_list}>
            {/* Здесь контент для характеристик, например, список или таблица */}
            <ul>
              <li><strong>Жесткость:</strong> Выше средней / Средняя</li>
              <li><strong>Наполнитель:</strong> Кокосовая койра, Латекс</li>
              <li><strong>Пружинный блок:</strong> Независимый</li>
              <li><strong>Гарантия:</strong> до 10 лет</li>
            </ul>
          </div>
        )}
      </div>
    </div>
                    </div>
                </div>
            </section>

            <section className={styles.back}>
              <div className="container">
                <div className={styles.cataloc_2_bl}>
                        <div className={styles.cataloc_top}>
                           
                        </div>
 
                         <div className={styles.offers_block}>
                     <p className={styles.catloc_txt_8}>
                           ЛУЧШИЕ ПРЕДЛОЖЕНИЯ
                     </p>

                     <div className={styles.offers_grid}>
                        <div className={styles.offers_itm}>
                        <Link href="/Product">
                         <div className={styles.off_top}>
                        <img src="./catalog_pht/off_1.png" alt="" />
                      </div>
                        </Link>
                            
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
                        <Link href="#">
                         <div className={styles.off_top}>
                        <img src="./catalog_pht/off_1.png" alt="" />
                      </div>
                        </Link>
                            
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
                        <Link href="#">
                         <div className={styles.off_top}>
                        <img src="./catalog_pht/off_1.png" alt="" />
                      </div>
                        </Link>
                            
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
                        <Link href="#">
                         <div className={styles.off_top}>
                        <img src="./catalog_pht/off_1.png" alt="" />
                      </div>
                        </Link>
                            
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
              </div>
            </section>
            
            <section className={styles.mbl_back}>
              <div className="container">
              <Mbl/>  
              </div>
            </section>

            <section className={styles.cart_back}>
              <div className="container">
                <Cart/>
              </div>
            </section>

            <section className={styles.cart_back}>
              <div className="container">
                <Footer/>
              </div>
            </section>
        </main>
        </>
    )
}