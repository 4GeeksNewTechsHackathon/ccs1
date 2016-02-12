// demo data
var data = {
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                }
            ]
        }
    ]
};

//Vue.use(require('vue-resource'));
Vue.http.headers.common['Authorization'] = 'Bearer eyJ1c2VyX2F1dGhlbnRpY2F0aW9uX2lkIjozNDA2Mn0:1aTvGC:bzdKugKkTvNisEcJ50lt5BCy7FI';

var taigaProjectUrl = 'https://api.taiga.io/api/v1/milestones?project=107653';
Vue.config.debug = true;
new Vue({
    el: '#app',
    data: {
        projects: [],
        milestones: []
    },
    methods: {
        fetchData: function () {
            this.$http.get(taigaProjectUrl).then(function(response) {
                this.$set('milestones', response.data)
            })
        },
        fetchData2: function () {
            for (var i=0; i<this.projects.length; i++) {

            }
        }
    },
    created : function() {
        this.fetchData()
    },
    watch : {
        projects: 'fetchData2'
    }
});
