import '../../../stylesheets/slides/footer-web.scss';
import { ReactComponent as Logo } from '../../../assets/images/روشن.svg';

const FooterWeb = () => {
    return (
        <div id={'footer'}>
            <div id={'email-footer'}>
                <p id={'company'}>شرکت دانش‌بنیان «راهکار پردازش ژرف»</p>
                <a
                    href={
                        'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=salam@roshan-ai.ir'
                    }
                    target={'_blank'}
                    rel="noreferrer"
                >
                    <p id={'email'}>salam@roshan-ai.ir</p>
                </a>
            </div>
            <div id={'contact-footer'}>
                <a
                    href={'https://www.roshan-ai.ir/contact-us/'}
                    target={'_blank'}
                    rel="noreferrer"
                >
                    <p id={'contact-text'}>تماس با ما</p>
                </a>
                <a
                    href={'https://www.roshan-ai.ir/join-us/'}
                    target={'_blank'}
                    rel="noreferrer"
                >
                    <p id={'join-text'}>همکاری با ما</p>
                </a>
            </div>
            <div id={'icon-title-footer'}>
                <div>
                    <Logo id={'icon-footer'} />
                </div>
            </div>
        </div>
    );
};

export default FooterWeb;
