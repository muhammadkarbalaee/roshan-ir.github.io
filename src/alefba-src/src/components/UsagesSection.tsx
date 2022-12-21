import '../stylesheets/usages-section.scss';
import BusinessImage from '../assets/images/usages/businesses.png';
import OrganizationsImage from '../assets/images/usages/organizations.png';
import LibrariesImage from '../assets/images/usages/libraries.png';
import PDFsImage from '../assets/images/usages/pdfs.png';
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';

const UsagesSection = () => {
    const observerOptions = {
        delay: 1000,
        triggerOnce: true,
    };

    const beforeFade = isMobile ? { opacity: 1 } : { opacity: 0 };

    const afterFade = {
        opacity: 1,
    };

    const [businessesRef, businessesInView] = useInView(observerOptions);
    const [organizationsRef, organizationsInView] = useInView(observerOptions);
    const [librariesRef, librariesInView] = useInView(observerOptions);
    const [pdfsRef, pdfsInView] = useInView(observerOptions);

    return (
        <div>
            <p id={'usages-title'}>گوشه‌ای از کاربردهای الفبا</p>
            <div className='usage-title-space' />
            <div id={'usages-section'}>
                <div
                    id={'in-businesses'}
                    ref={businessesRef}
                    style={businessesInView ? afterFade : beforeFade}
                >
                    <img src={BusinessImage} id={'business-image'} alt={''} />
                    <p className={'orange-text-usages'}>در کسب‌و‌کار‌ها</p>
                    <p className={'white-text-usages'}>
                        تهیهٔ نسخهٔ متنی اسناد و امکان جستجو در آن‌ها،
                        سودمندی این داده‌ها را برای کسب‌وکارها افزایش می‌دهد.
                    </p>
                </div>
                <div>
                    <div id={'space-1'} />
                    <div
                        id={'in-organizations'}
                        ref={organizationsRef}
                        style={organizationsInView ? afterFade : beforeFade}
                    >
                        <img
                            src={OrganizationsImage}
                            id={'organization-image'}
                            alt={''}
                        />
                        <p className={'orange-text-usages'}>در سازمان‌ها</p>
                        <p className={'white-text-usages'}>
                            تبدیل اسناد موجود در اتاق‌های بایگانی به نسخه‌های
                            متنیِ دیجیتال، قدم بزرگی در تحقق دنیای بدون کاغذ است.
                        </p>
                    </div>
                </div>
                <div>
                    <div id={'space-2'} />
                    <div
                        id={'in-libraries'}
                        ref={librariesRef}
                        style={librariesInView ? afterFade : beforeFade}
                    >
                        <img
                            src={LibrariesImage}
                            id={'library-image'}
                            alt={''}
                        />
                        <p className={'orange-text-usages'}>در کتابخانه‌ها</p>
                        <p className={'white-text-usages'}>
                            تهیهٔ نسخهٔ متنی کتاب‌ها و امکان جستجو در آن‌ها،
                            کمک بزرگی برای تسریع کارهای پژوهشی در دنیای پرشتابِ امروز
                            است.
                        </p>
                    </div>
                </div>
                <div>
                    <div id={'space-3'} />
                    <div
                        id={'in-pdfs'}
                        ref={pdfsRef}
                        style={pdfsInView ? afterFade : beforeFade}
                    >
                        <img
                            src={PDFsImage}
                            id={'pdf-image'}
                            alt={''}
                        />
                        <p className={'orange-text-usages'}>در فایل‌های پی‌دی‌اف</p>
                        <p className={'white-text-usages'}>
                            در بسیاری از پی‌دی‌اف‌های فارسی، امکان جستجو در متن، وجود ندارد. الفبا می‌تواند با فراهم‌کردن این امکان، استفاده از این فایل‌ها را تسهیل کند.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsagesSection;
