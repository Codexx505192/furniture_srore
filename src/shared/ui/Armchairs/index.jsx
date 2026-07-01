import Link from "next/link";

export default function Armchairs(){
    return(
        <div className="armchairs_block">
                 <div className="armchairs_grid">
                  <div className="lm">
                    <img src="./img/arm_1.png" alt="" />
                    <div className="lm_cn">
                    
                       <p className="txt_7">
                        Кресла Vancouver <br />
                       4 по цене 3
                       </p>

                       <p className="txt_8">
                        Покупая 3 кресла Vancouver <br />
                        получаете четвертое  в подарок. <br />
                        Для участия в акции достаточно <br />
                        добавить в заказ 3 кресла и при <br />
                        оформлении наш менеджер <br />
                        уточнить желаете ли вы <br />
                        получить четвертое.
                       </p>


                       <Link href="#">
                       <div className="v">
                        <img src="./img/v.png" alt="" />
                       </div>
                       </Link>

                    </div>
                  </div>

                  <div className="lm lm_1">
                    {/* <img src="./img/arm_1.png" alt="" /> */}
                    <div className="lm_cn lm_1">
                    
                       <p className="txt_7">
                         Пуф в подарок
                       </p>

                       <p className="txt_8">
                        При покупке дивана от 150 000 ₽ <br />
                        вы получаете пуф в подарок
                       </p>


                       <Link href="#">
                       <div className="v">
                        <img src="./img/v.png" alt="" />
                       </div>
                       </Link>

                        <div className="sofa_itm">
                        <img src="./img/sofa.png" alt="" />
                       </div>
                    </div>
                  </div>

                  <div className="lm lm_1">
                    <img src="./img/russ.png" alt="" />
                    <div className="lm_cn lm_1">
                    
                       <p className="txt_7">
                        Скидки <br />
                        ко Дню России
                       </p>

                        <div className="russ_bl">
                          <p className="txt_9">3%</p>
                          <p className="txt_10">на все</p>
                        </div>

                       <Link href="#">
                       <div className="v">
                        <img src="./img/v.png" alt="" />
                       </div>

                       
                       </Link>
                    </div>
                  </div>

                  <div className="lm lm_2">
                    {/* <img src="./img/russ.png" alt="" /> */}
                    <div className="lm_cn lm_1">
                    
                       <p className="txt_7">
                         Кресла <br />
                          Vancouver
                       </p>

                          <p className="txt_9">
                            33 400 ₽ 
                          </p>
                           
                           <div className="txt_10">
                            Недорогие и стильные <br />
                             кресла с множеством <br />
                              вариантов обивки
                           </div>

                           <div className="chair_itm">
                            <img src="./img/chair_1.png" alt="" />
                           </div>
                     
                       <div className="v">
                        <img src="./img/v.png" alt="" />
                       </div>
                    </div>
                  </div>

                 </div>
              </div>
    )
}