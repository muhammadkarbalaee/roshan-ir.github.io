import React from 'react';
import {ReactComponent as JoinUsMobile} from "../../../assets/images/mobile-join-us.svg";
import {ReactComponent as JoinUsText} from "../../../assets/images/join-us-text-group.svg";

import  Jobinja from "../../../assets/images/jobinja.svg";
import Linkedin from "../../../assets/images/linkedin.svg";
import Mail from "../../../assets/images/mail.svg";

import './joinus-page.scss';
import {isMobile,isTablet} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isMobile || isTablet){
        return(
            <div id={ 'mobile-j'}>
                <JoinUsMobile id={'pic'}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'text-group'}>
                    <JoinUsText id={'inner'}/>
                    <div id={'button-row'}>
                        <a
                            className={'join-us-link-button'}
                            href={'https://jobinja.ir/companies/roshan-ai/jobs'}
                            id={'jobinja-button'}
                        >
                        </a>
                        <a
                            className={'join-us-link-button'}
                           href={'https://www.linkedin.com/company/roshan-ai/'}
                            id={'linkedin-button'}
                        >
                        </a>
                        <a
                            className={'join-us-link-button'}
                            href={'mailto:salam@roshan-ai.ir'}
                            id={'mail-button'}
                        >
                        </a>
                    </div>
                </div>
            </div>
        )
    }
};

export default function JoinusPage() {
    return (
        <div className={'join-us-page'}>
            {returnBasedOneDevice()}
        </div>
    )
}
