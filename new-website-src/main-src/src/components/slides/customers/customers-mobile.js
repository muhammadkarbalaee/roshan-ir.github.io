import './customers-mobile.scss';
import customersAnimation from "../../../animations/customers-mobile";
import {ReactComponent as Keshvar} from "../../../assets/images/mobile/customers/row1/couple1/Keshvar.svg";
import {ReactComponent as Naft} from "../../../assets/images/mobile/customers/row1/couple2/Naft.svg";
import {ReactComponent as Ketabkhaneh} from "../../../assets/images/mobile/customers/row1/couple3/Ketabkhaneh.svg";
import {ReactComponent as Setad} from "../../../assets/images/mobile/customers/row2/couple1/Setad.svg";
import {ReactComponent as Astan} from "../../../assets/images/mobile/customers/row2/couple2/Astan.svg";
import {ReactComponent as Mokhaberat} from "../../../assets/images/mobile/customers/row2/couple3/Mokhaberat.svg";
import {ReactComponent as Parsian} from "../../../assets/images/mobile/customers/row3/couple1/Parsian.svg";
import {ReactComponent as Irandoc} from "../../../assets/images/mobile/customers/row3/couple2/Irandoc.svg";
import {ReactComponent as Azmoon} from "../../../assets/images/mobile/customers/row3/couple3/Azmoon.svg";
import {ReactComponent as Tamasha} from "../../../assets/images/mobile/customers/row4/couple1/Tamasha.svg";
import {ReactComponent as Taghche} from "../../../assets/images/mobile/customers/row4/couple2/Taghche.svg";
import {ReactComponent as Varzesh} from "../../../assets/images/mobile/customers/row4/couple1/Varzesh.svg";
import {ReactComponent as Jahad} from "../../../assets/images/mobile/customers/row1/couple1/Jahad.svg";
import {ReactComponent as Bimeh} from "../../../assets/images/mobile/customers/row1/couple2/Bimeh.svg";
import {ReactComponent as Nazdika} from "../../../assets/images/mobile/customers/row1/couple3/Nazdika.svg";
import {ReactComponent as Amin} from "../../../assets/images/mobile/customers/row2/couple1/Amin.svg";
import {ReactComponent as Ammar} from "../../../assets/images/mobile/customers/row2/couple2/Ammar.svg";
import {ReactComponent as Farabi} from "../../../assets/images/mobile/customers/row2/couple3/Farabi.svg";
import {ReactComponent as Fars} from "../../../assets/images/mobile/customers/row3/couple1/Fars.svg";
import {ReactComponent as Tabeii} from "../../../assets/images/mobile/customers/row3/couple2/Tabeii.svg";
import {ReactComponent as Civilica} from "../../../assets/images/mobile/customers/row3/couple3/Civilica.svg";
import {ReactComponent as Bimarestan} from "../../../assets/images/mobile/customers/row4/couple2/Bimarestan.svg";
import {ReactComponent as Text} from '../../../assets/images/mobile/customers/text.svg'
import CustomerBox from "./box";

const couple11Man = customersAnimation(10, 0, 1, 0);
const couple11Woman = customersAnimation(10, 0, 0, 1);
const couple12Man = customersAnimation(10, 4, 1, 0);
const couple12Woman = customersAnimation(10, 4, 0, 1);
const couple13Man = customersAnimation(10, 10, 1, 0);
const couple13Woman = customersAnimation(10, 10, 0, 1);
const couple21Man = customersAnimation(5, 2, 1, 0);
const couple21Woman = customersAnimation(5, 2, 0, 1);
const couple22Man = customersAnimation(15, 7, 1, 0);
const couple22Woman = customersAnimation(15, 7, 0, 1);
const couple23Man = customersAnimation(6, 10, 1, 0);
const couple23Woman = customersAnimation(6, 10, 0, 1);
const couple31Man = customersAnimation(5, 3, 1, 0);
const couple31Woman = customersAnimation(5, 3, 0, 1);
const couple32Man = customersAnimation(5, 14, 1, 0);
const couple32Woman = customersAnimation(5, 14, 0, 1);
const couple33Man = customersAnimation(20, 3, 1, 0);
const couple33Woman = customersAnimation(20, 3, 0, 1);
const couple41Man = customersAnimation(13, 0, 1, 0);
const couple41Woman = customersAnimation(13, 0, 0, 1);
const couple42Man = customersAnimation(10, 4, 1, 0);
const couple42Woman = customersAnimation(10, 4, 0, 1);
const couple43Man = customersAnimation(10, 9, 1, 0);
const couple43Woman = customersAnimation(10, 9, 0, 1);

function CustomersMobile(props){
    return(
        <div id={'customers'}>
            <div id={'text'}>
                <Text/>
            </div>
            <div id={'table stack'}>
                <div className={'row'}>
                    <CustomerBox
                        animationMan={couple11Man}
                        animationWoman={couple11Woman}
                        boxID={'box-left'}
                        manComponent={<Keshvar/>}
                        womanComponent={<Jahad/>}
                    />
                    <CustomerBox
                        animationMan={couple12Man}
                        animationWoman={couple12Woman}
                        boxID={'box-middle'}
                        manComponent={<Naft/>}
                        womanComponent={<Bimeh/>}
                    />
                    <CustomerBox
                        animationMan={couple13Man}
                        animationWoman={couple13Woman}
                        boxID={'box-right'}
                        manComponent={<Ketabkhaneh/>}
                        womanComponent={<Nazdika/>}
                    />
                </div>
                <div className={'row'}>
                    <CustomerBox
                        animationMan={couple21Man}
                        animationWoman={couple21Woman}
                        boxID={'box-left'}
                        manComponent={<Setad/>}
                        womanComponent={<Amin/>}
                    />
                    <CustomerBox
                        animationMan={couple22Man}
                        animationWoman={couple22Woman}
                        boxID={'box-middle'}
                        manComponent={<Astan/>}
                        womanComponent={<Ammar/>}
                    />
                    <CustomerBox
                        animationMan={couple23Man}
                        animationWoman={couple23Woman}
                        boxID={'box-right'}
                        manComponent={<Mokhaberat/>}
                        womanComponent={<Farabi/>}
                    />
                </div>
                <div className={'row'}>
                    <CustomerBox
                        animationMan={couple31Man}
                        animationWoman={couple31Woman}
                        boxID={'box-left'}
                        manComponent={<Parsian/>}
                        womanComponent={<Fars/>}
                    />
                    <CustomerBox
                        animationMan={couple32Man}
                        animationWoman={couple32Woman}
                        boxID={'box-middle'}
                        manComponent={<Irandoc/>}
                        womanComponent={<Tabeii/>}
                    />
                    <CustomerBox
                        animationMan={couple33Man}
                        animationWoman={couple33Woman}
                        boxID={'box-right'}
                        manComponent={<Azmoon/>}
                        womanComponent={<Civilica/>}
                    />
                </div>
                <div className={'row'}>
                    <CustomerBox
                        animationMan={couple41Man}
                        animationWoman={couple41Woman}
                        boxID={'box-left'}
                        manComponent={<Tamasha/>}
                        womanComponent={<Ketabkhaneh/>}
                    />
                    <CustomerBox
                        animationMan={couple42Man}
                        animationWoman={couple42Woman}
                        boxID={'box-middle'}
                        manComponent={<Taghche/>}
                        womanComponent={<Bimarestan/>}
                    />
                    <CustomerBox
                        animationMan={couple43Man}
                        animationWoman={couple43Woman}
                        boxID={'box-right'}
                        manComponent={<Varzesh/>}
                        womanComponent={<Azmoon/>}
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomersMobile;
