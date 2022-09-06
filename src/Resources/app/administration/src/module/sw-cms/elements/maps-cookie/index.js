import './component';
import './config';
import './preview';
Shopware.Service('cmsService').registerCmsElement({
    name: 'maps-cookie',
    label: 'Google Maps mit Cookie Consent',
    component: 'sw-cms-el-maps-cookie',
    configComponent: 'sw-cms-el-config-maps-cookie',
    previewComponent: 'sw-cms-el-preview-maps-cookie',
    defaultConfig: {
        cookie: {
            source: 'static',
            value: 'maps-cookie'
        },
        source: {
            source: 'static',
            value: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21238.71747965582!2d10.888232!3d48.2867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e98b2402d37fb%3A0xd49837289f833ec2!2sHunnenstra%C3%9Fe%2024%2C%2086343%20K%C3%B6nigsbrunn!5e0!3m2!1sde!2sde!4v1650955528877!5m2!1sde!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        previewMedia: {
            source: 'static',
            value: null,
            entity: {
                name: 'media',
            },
        }
    }
});
