Vue.http.headers.common['Authorization'] = 'Bearer eyJ1c2VyX2F1dGhlbnRpY2F0aW9uX2lkIjozNDA2Mn0:1aTvGC:bzdKugKkTvNisEcJ50lt5BCy7FI';

var taigaUrls = {
    milestones: 'https://api.taiga.io/api/v1/milestones?project={id}',
    project: 'https://api.taiga.io/api/v1/projects/{id}',
    project_userstories:  'https://api.taiga.io/api/v1/userstories?project={id}',
    project_tasks: 'https://api.taiga.io/api/v1/tasks?project={id}',
    milestone_userstories:  'https://api.taiga.io/api/v1/userstories?milestone={id}',
    milestone_tasks: 'https://api.taiga.io/api/v1/tasks?milestone={id}',
    user_story_tasks: 'https://api.taiga.io/api/v1/tasks?user_story={id}'
}

Vue.config.debug = true;
new Vue({
    el: '#app',
    data: {
        projects: [],
        milestones: []
    },
    methods: {
        fetchData: function () {
            this.$resource(taigaUrls.milestones).get({id: 107653}).then(function (response) {
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
        milestones: 'fetchData2'
    }
});
