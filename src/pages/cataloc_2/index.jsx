import Header from "@/shared/ui/Header/Header";
import styles from "./Cataloc2.module.css"
import Link from "next/link";
import Cart from "@/shared/ui/Cart";
import Mbl from "@/shared/ui/Mbl";
import Footer from "@/shared/ui/Footer";

export default function Page(){
    return(
        <>
        <main>
            <section className={styles.bk}>
                <div className="container">
                    <Header/>

                    <div className={styles.cataloc_2_bl}>
                        <div className={styles.cataloc_top}>
                           <p className={styles.txt_ctl}>Главная  Каталог  Pro Son</p>
                           <p className={styles.txt_ctl_2}>
                                 Матрасы Start
                           </p>

                           
                        </div>
 
                         <div className={styles.offers_block}>
                     {/* <p className={styles.catloc_txt_8}>
                           ЛУЧШИЕ ПРЕДЛОЖЕНИЯ
                     </p> */}

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

            <section className={styles.mb_back}>
              <div className="container">
                <Mbl/>
              </div>
            </section>

            <section className={styles.bk}>
              <div className="container">
                <Cart/>
              </div>
            </section>

            <section className={styles.bk}>
              <div className="container">
                <Footer/>
              </div>
            </section>
        </main>
        </>
    )
}