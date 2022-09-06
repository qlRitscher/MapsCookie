import template from './sw-cms-el-maps-cookie.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-maps-cookie', {
    template,

    inject: ['feature'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
    },
    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('maps-cookie');
            this.initElementData('maps-cookie');
        },
    }

});

