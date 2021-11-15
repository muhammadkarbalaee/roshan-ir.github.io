import React from 'react';
import './contact-us-page.scss';
import ContactUsMobile from "./mobile/contact-us-mobile";
import ContactUsWeb from "./web/contact-us-web";
import {motion} from 'framer-motion';
import {noneAnimation, startingAnimation} from "../../../animations/main-page";
import {isMobile,isTablet} from "react-device-detect";

const imageAnimationChooser = (props) => {
    if(props.shouldRerender){
        return startingAnimation;
    } else {
        return noneAnimation;
    }
};

const returnBasedOneDevice = () => {
    if(isMobile || isTablet){
        return(
            <div id={'mobile'}>
                <p id={'address-mobile'}>
                    میدان ولیعصر، خیابان کریم خان زند، خیابان به آفرین، پلاک 30، طبقه دوم
                </p>
                <ContactUsMobile id={'body-mobile'}/>
            </div>
        )
    } else {
        return(
            <div>
                <p id={'address'}>
                    میدان ولیعصر، خیابان کریم خان زند، خیابان به آفرین، پلاک 30، طبقه دوم
                </p>
                <ContactUsWeb id={'web'}/>
            </div>
        )
    }
};

export default function ContactUsPage(props) {
    return (
        <motion.div
            className={'contact-us-page'}
            initial={imageAnimationChooser(props).initial}
            animate={imageAnimationChooser(props).animate}
            transition={imageAnimationChooser(props).transition}
        >
            {returnBasedOneDevice()}
        </motion.div>
    )
}
