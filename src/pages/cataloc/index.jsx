import Header from "@/shared/ui/Header/Header";
import styles from "./cataloc.module.css"

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
                        <div className={styles.mattresses_elm}>
                            <div className="mtr">
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
                     

                      <div className={styles.mattresses_elm}>
                            <div className="mtr">
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
        <section>
            <div className="container">
                <div className={styles.offers_block}>
                    
                </div>
            </div>
        </section>
        </>
    )
}