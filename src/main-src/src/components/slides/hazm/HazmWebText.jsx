import { motion } from 'framer-motion';
import {
    flowerAndFrameAnimation,
    mainLineAnimation,
    subLineAnimation,
    polygonAnimation,
    dotAnimation,
    textAnimation,
    basicKashfAnimation,
} from '../../../animations/kashf';

import {
    backgroundAnimationHazm,
    bottomLineAnimationHazm,
    boxAnimationHazm,
    aboutAnimationHazm,
} from '../../../animations/hazm';
import {
    noneAnimation,
    noneAnimationHazm,
} from '../../../animations/main-page';
import '../../../stylesheets/buttons.scss';
import '../../../stylesheets/slides/hazm.scss';

const animationChooser = (scrollQuantity) => {
    switch (scrollQuantity) {
        case 4:
            return {
                flowerAndFrameAnimation: flowerAndFrameAnimation,
                mainLineAnimation: mainLineAnimation,
                subLineAnimation: subLineAnimation,
                polygonAnimation: polygonAnimation,
                dotAnimation: dotAnimation,
                textAnimation: textAnimation,
                backgroundAnimationHazm: backgroundAnimationHazm,
                bottomLineAnimationHazm: bottomLineAnimationHazm,
                boxAnimationHazm: boxAnimationHazm,
                aboutAnimationHazm: aboutAnimationHazm,
                basicKashfAnimation: basicKashfAnimation,
            };

        default:
            return {
                flowerAndFrameAnimation: noneAnimation,
                mainLineAnimation: noneAnimation,
                subLineAnimation: noneAnimation,
                polygonAnimation: noneAnimation,
                dotAnimation: noneAnimation,
                textAnimation: noneAnimation,
                backgroundAnimationHazm: noneAnimationHazm,
                bottomLineAnimationHazm: noneAnimationHazm,
                boxAnimationHazm: noneAnimation,
                aboutAnimationHazm: noneAnimationHazm,
                basicKashfAnimation: noneAnimation,
            };
    }
};

function HazmWebText(props) {
    return (
        <div>
            <motion.div
                id={'hazm-emerging-box'}
                variants={animationChooser(props.status)['textAnimation']}
                initial={'hidden'}
                animate={'visible'}
            >
                <h2 id={'hazm-emerging-title'}>هضم</h2>
            </motion.div>
            <motion.div
                id={'hazm-text-box'}
                variants={animationChooser(props.status)['basicKashfAnimation']}
                initial={'hidden'}
                animate={'visible'}
            >
                <h1 id={'hazm-title-text'}>پردازش متن فارسی</h1>
                <h4 id={'hazm-main-text'}>
                    ابزار هضم، پراستفاده‌ترین کتابخانهٔ متن‌بازِ رایگان برای پردازش متون فارسی است که با درنظرگرفتن ویژگی‌های خاصِ زبان فارسی، مختص این زبان ساخته شده است.
                </h4>
            </motion.div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 450 301"
            >
                <motion.path
                    variants={
                        animationChooser(props.status)[
                            'flowerAndFrameAnimation'
                        ]
                    }
                    initial={'hidden'}
                    animate={'visible'}
                    stroke="#0089FF"
                    d="M423 23.5V31h-6.522M399.522 31H393v-7.5M416.478 1H423v7.5M393 8.5V1h6.522M407.08 21.077a6 6 0 100-12 6 6 0 000 12z"
                />
                <motion.path
                    variants={
                        animationChooser(props.status)[
                            'flowerAndFrameAnimation'
                        ]
                    }
                    initial={'hidden'}
                    animate={'visible'}
                    stroke="#0089FF"
                    strokeLinecap="round"
                    d="M411.28 20.327l3.584 3.688"
                />
                <motion.path
                    variants={
                        animationChooser(props.status)['mainLineAnimation']
                    }
                    initial={'hidden'}
                    animate={'visible'}
                    stroke="#0089FF"
                    d="M247.302 59.5 L 273.86 37.882 L 423.12 37.882"
                />
                <motion.path
                    variants={
                        animationChooser(props.status)['subLineAnimation']
                    }
                    initial={'hidden'}
                    animate={'visible'}
                    stroke="#0089FF"
                    d="M327.85 40.529h-53.114l-9.327 7.592"
                />
                <motion.path
                    variants={
                        animationChooser(props.status)['polygonAnimation']
                    }
                    initial={'hidden'}
                    animate={'visible'}
                    stroke="#0089FF"
                    d="M243.48 50.676h9.2l4.6 7.941-4.6 7.941h-9.2l-4.6-7.94 4.6-7.942z"
                    clipRule="evenodd"
                />
                <motion.path
                    variants={animationChooser(props.status)['dotAnimation']}
                    initial={'hidden'}
                    animate={'visible'}
                    fill="#0089FF"
                    d="M248.14 62.088a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                />
                <a
                    target="_blank"
                    href={'https://www.sobhe.ir/hazm'}
                    id={'link-hazm'}
                    title={'دربارهٔ هضم'}
                    onClick={() => window.amplitude.getInstance().logEvent('clicked-on-hazm')}
                >
                    <rect
                        id="Hidden Layer"
                        y="218"
                        width="153"
                        height="33"
                        fill="black"
                        fillOpacity="0"
                    />
                    <motion.path
                        variants={
                            animationChooser(props.status)[
                                'backgroundAnimationHazm'
                            ]
                        }
                        initial={'hidden'}
                        animate={'visible'}
                        fill="#0089FF"
                        d="M34.29 218L3.11 250H2.008l31.18-32h1.103zm3.118 0l-31.18 32H5.126l31.18-32h1.103zm3.118 0l-31.18 32H8.244l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32H14.48l31.18-32h1.103zm3.118 0L18.7 250h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32H30.07l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32H42.54l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.117 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32H61.25l31.18-32h1.103zm9.354 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32H76.84l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32H89.31l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32H104.9l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.117 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm.228 1.834v1.132L124.71 250h-1.102L153 219.834zm0 3.2v1.132L127.828 250h-1.102L153 223.034zm0 3.2v1.132L130.946 250h-1.102L153 226.234zm0 3.2v1.132L134.064 250h-1.102L153 229.434zm0 3.2v1.132L137.182 250h-1.102L153 232.634zm0 3.2v1.132L140.3 250h-1.102L153 235.834zm0 3.2v1.132L143.418 250h-1.102L153 239.034zm0 3.2v1.132L146.536 250h-1.103l7.567-7.766zm0 3.2v1.132L149.654 250h-1.103l4.45-4.566zm0 3.2v1.132l-.228.234h-1.103l1.331-1.366zM96.65 218l-31.18 32h-1.103l31.18-32h1.103zm3.117 0l-31.18 32h-1.102l31.18-32h1.103zm-68.595 0L1 248.965v-1.131L30.07 218h1.102zm-3.118 0L1 245.765v-1.131L26.951 218h1.103zm-3.118 0L1 242.565v-1.131L23.833 218h1.103zm-3.118 0L1 239.365v-1.131L20.715 218h1.103zm-3.118 0L1 236.165v-1.131L17.597 218H18.7zm-3.118 0L1 232.966v-1.132L14.48 218h1.102zm-3.118 0L1 229.766v-1.132L11.361 218h1.103zm-3.118 0L1 226.566v-1.132L8.243 218h1.103zm-3.118 0L1 223.366v-1.132L5.126 218h1.103zm-3.118 0L1 220.166v-1.132L2.007 218H3.11z"
                        opacity="0.3"
                    />
                    <motion.path
                        variants={
                            animationChooser(props.status)['boxAnimationHazm']
                        }
                        initial={'hidden'}
                        animate={'visible'}
                        d="M189.19 209.5H162.89L123.24 242.5H152.5V274.5H0.5V242.5H116.64"
                        stroke="#0089FF"
                    />
                    <motion.path
                        fill="#fff"
                        id={'text'}
                        variants={
                            animationChooser(props.status)['aboutAnimationHazm']
                        }
                        initial={'hidden'}
                        animate={'visible'}
                        d="M50.737 236.61v.894h-.21a2.984 2.984 0 01-.772-.123 2.186 2.186 0 01-.313-.117 1.734 1.734 0 01-.29-.174c-.088-.068-.168-.148-.24-.24s-.129-.201-.168-.328a2.174 2.174 0 01-.378.473c-.14.131-.29.238-.45.32-.156.083-.318.143-.488.182s-.34.058-.51.058c-.043 0-.099-.005-.167-.014a1.451 1.451 0 01-.261-.051 10.84 10.84 0 01-.379-.117 9.75 9.75 0 01-.538-.211 16.443 16.443 0 01-.53-.225 179.272 179.272 0 01-1.375-.662 50.426 50.426 0 01-1.331-.676c-.19-.102-.344-.187-.466-.255v7.68h-.894v-8.232l.822-.51c.116.068.322.182.618.342.3.16.657.347 1.07.56.12-.63.244-1.158.37-1.585a5.45 5.45 0 01.45-1.098c.229-.408.524-.732.888-.975a2.258 2.258 0 011.287-.371c.432 0 .815.107 1.15.32.334.209.615.48.843.815.233.329.407.7.524 1.112.121.408.182.81.182 1.208 0 .795.174 1.36.523 1.694a.94.94 0 00.226.16c.077.039.152.071.225.095.073.019.14.034.204.043.068.005.123.008.167.008h.211zm-2.924-.328a1.62 1.62 0 00.35-.676 3.61 3.61 0 00.123-.996 3.51 3.51 0 00-.124-.917 2.926 2.926 0 00-.356-.829 2.011 2.011 0 00-.567-.589 1.294 1.294 0 00-.757-.233c-.286 0-.538.061-.756.182-.213.122-.405.323-.575.604s-.322.65-.458 1.105c-.13.451-.254 1.006-.37 1.666.513.252.933.451 1.258.596.33.141.589.247.778.32.194.068.33.112.407.131.083.015.133.022.153.022.126 0 .271-.024.436-.073.165-.053.318-.157.458-.313zm8.107 1.222c-.325 0-.633-.046-.924-.138a2.282 2.282 0 01-.763-.422 1.916 1.916 0 01-.328-.334l-.058.072a.948.948 0 00-.058.066c-.475.504-1.2.756-2.175.756h-1.127v-.894h1.127c.723 0 1.23-.158 1.52-.473.209-.223.313-.524.313-.902v-2.64h.895v2.604c0 .325.07.587.21.785.146.199.325.349.539.451l.487-.793c.286-.47.59-.952.91-1.447.32-.494.666-.953 1.04-1.374.46-.524.913-.912 1.36-1.164a2.708 2.708 0 011.366-.385c.316 0 .597.05.844.152.252.097.475.231.67.4.193.17.358.369.494.597a4.028 4.028 0 01.545 1.534c.044.272.066.541.066.807 0 .437-.061.805-.182 1.106a2.566 2.566 0 01-.422.742h1.905v.894H55.92zm.422-1.396c-.054.082-.107.167-.16.254-.049.083-.1.165-.153.248h4.189c.097-.005.208-.017.335-.037.126-.019.254-.053.385-.101.131-.049.257-.114.378-.197.126-.087.238-.199.335-.334.097-.136.174-.299.232-.488.063-.194.095-.424.095-.691 0-.281-.029-.574-.087-.88-.054-.31-.146-.591-.277-.843s-.308-.461-.53-.626c-.219-.164-.495-.247-.83-.247-.644 0-1.33.415-2.058 1.244-.349.392-.676.826-.982 1.302-.305.475-.596.94-.872 1.396zm2.865-7.644l.931-.945.96.96-.945.945-.946-.96zm9.387 7.651c.223-.082.436-.186.64-.313.208-.13.388-.283.538-.458.155-.174.279-.373.37-.596s.139-.47.139-.742c0-.281-.05-.538-.153-.771-.097-.233-.225-.431-.385-.596s-.342-.291-.546-.378a1.426 1.426 0 00-.603-.139c-.35 0-.643.054-.88.16a1.609 1.609 0 00-.582.408c-.15.165-.26.354-.327.567a2.25 2.25 0 00-.095.64c0 .315.063.596.19.844.13.242.334.475.61.698.15.121.315.237.495.349.184.107.38.216.589.327zm1.702-6.102c.387.413.749.796 1.083 1.149.335.354.64.689.916 1.004.277.31.522.604.735.88.218.272.405.531.56.778.155.252.281.497.378.735.097.237.16.473.19.705.01.088.014.177.014.269 0 .146-.02.318-.058.517a2.576 2.576 0 01-.262.676 1.985 1.985 0 01-.422.546 2.88 2.88 0 01-1.28.632 3.24 3.24 0 01-.742.088 3.6 3.6 0 01-.756-.08 4.936 4.936 0 01-.72-.204 7.708 7.708 0 01-.705-.284 37.09 37.09 0 01-.699-.342c-.46.141-.977.248-1.549.32-.567.068-1.195.102-1.883.102h-1.208v-.894h1.208c.863 0 1.621-.058 2.276-.175a3.35 3.35 0 01-.414-.298 3.098 3.098 0 01-.851-.982 2.659 2.659 0 01-.291-1.258c0-.398.067-.761.203-1.091.14-.33.335-.611.582-.844.247-.232.54-.412.88-.538.34-.131.71-.196 1.113-.196.363 0 .703.078 1.018.233.315.155.587.363.815.625.232.257.414.553.545.887.136.335.204.679.204 1.033 0 .577-.134 1.084-.4 1.52-.267.432-.65.793-1.15 1.084.262.14.546.257.851.349.306.092.618.138.938.138.209 0 .4-.022.575-.065.18-.044.34-.102.48-.175s.26-.155.357-.247c.101-.097.179-.197.232-.298.088-.16.148-.318.182-.473a1.48 1.48 0 00.007-.538 1.512 1.512 0 00-.123-.429 3.107 3.107 0 00-.298-.575c-.287-.456-.699-.979-1.237-1.571a127.382 127.382 0 00-1.942-2.094l.647-.619zm13.478 7.491c-.412 0-.8-.065-1.163-.196a3.152 3.152 0 01-.946-.553 2.743 2.743 0 01-.64-.814 2.243 2.243 0 01-.232-1.004c0-.339.046-.652.138-.938s.206-.548.342-.786c.14-.242.29-.46.45-.654.16-.199.306-.378.437-.538a13.986 13.986 0 01.502-.56c.087-.097.172-.187.254-.269.088-.088.165-.168.233-.24l-.567-.633.654-.597c.005 0 .063.064.175.19.116.121.262.278.436.472a57.449 57.449 0 011.207 1.353c.243.276.468.545.677.807s.388.522.538.778c.155.257.276.517.364.779.087.257.13.526.13.807 0 .364-.08.708-.24 1.033-.155.32-.383.603-.683.851a2.93 2.93 0 01-.946.53 3.412 3.412 0 01-1.12.182zm-.021-5.891c-.068.068-.141.143-.218.226a11.207 11.207 0 00-.677.742l-.385.465a4.17 4.17 0 00-.378.546 3.265 3.265 0 00-.291.632 2.156 2.156 0 00-.117.713c0 .218.051.429.153.633.102.199.247.376.436.531.204.165.434.291.691.378.262.087.531.131.808.131.29 0 .562-.044.814-.131.257-.092.48-.213.67-.364.188-.155.336-.337.443-.545.111-.209.167-.429.167-.662a1.7 1.7 0 00-.094-.553 2.838 2.838 0 00-.284-.589 5.294 5.294 0 00-.466-.662c-.184-.237-.4-.499-.647-.785l-.625-.706zm2.343 9.913v-.887h1.01c1.14 0 1.974-.298 2.503-.895.484-.552.727-1.379.727-2.48v-4.669h.894v4.669c0 1.406-.349 2.468-1.047 3.186-.693.717-1.719 1.076-3.076 1.076h-1.011zm10.087-4.022c-.577 0-1.04-.068-1.39-.203a1.681 1.681 0 01-.792-.604 2.305 2.305 0 01-.364-.982 9.33 9.33 0 01-.087-1.353v-7.236h.91v7.236c0 .451.014.822.043 1.113s.102.521.218.691a.932.932 0 00.516.349c.233.063.548.095.946.095h.102v.894h-.102zm3.576-5.847l.16.691c.058.252.109.514.153.785.049.267.09.539.124.815s.056.541.065.793v.043c0 .33-.051.657-.153.982a2.835 2.835 0 01-.45.88 2.349 2.349 0 01-.735.626 1.996 1.996 0 01-.968.232h-1.89v-.894h1.89c.233-.015.437-.075.611-.182.18-.107.328-.245.444-.415.121-.174.213-.371.276-.589.054-.198.08-.402.08-.611v-.051a6.494 6.494 0 00-.058-.727 9.61 9.61 0 00-.116-.749 14.646 14.646 0 00-.146-.72 49.97 49.97 0 00-.152-.647l.865-.262zm-1.927 8.487l.829-.836.858.851-.844.843-.843-.858zm3.217 1.382v-.887h1.01c1.14 0 1.974-.298 2.503-.895.485-.552.727-1.379.727-2.48v-4.669h.894v4.669c0 1.406-.35 2.468-1.047 3.186-.693.717-1.72 1.076-3.076 1.076h-1.011zm10.174-3.964a7.393 7.393 0 01-2.181-.334 4.622 4.622 0 01-.866-.386l-.385-.225.458-.771.385.233c.204.121.446.225.728.313.28.087.577.155.887.203.31.044.625.066.945.066h.088c.28 0 .545-.022.792-.066.32-.053.589-.148.808-.283a1.09 1.09 0 00.45-.502c.049-.121.073-.25.073-.386 0-.063-.012-.162-.036-.298-.024-.14-.11-.32-.255-.538a595.956 595.956 0 01-2.341-3.527 2.323 2.323 0 00-.124-.182.294.294 0 01-.03-.058l-.24-.379.757-.48c.039.068.083.141.13.219.054.072.12.169.197.291l.299.465c.126.184.28.419.465.705l.684 1.026c.266.398.582.873.945 1.425.233.349.376.701.429 1.055a1.848 1.848 0 01-.131 1.011c-.145.344-.383.63-.712.858-.33.223-.735.376-1.215.458-.305.058-.64.087-1.004.087z"
                    />
                </a>
            </svg>
        </div>
    );
}

export default HazmWebText;
