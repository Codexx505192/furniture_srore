import styles from "./Mbl.module.css"

export default function Mbl(){
    return(
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
    )
}