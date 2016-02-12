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

var ProjectMilestones = Vue.extend({
    template: '#project-milestones-template',
    data: {
        projects: [],
        milestones: []
    },
    created : function() {
        this.fetchData()
    },
    methods: {
        fetchData: function () {
            this.$resource(taigaUrls.milestones).get({id: 107653}).then(function (response) {
                this.$set('milestones', response.data)
            })
        }
    }
})

Vue.config.debug = true;
Vue.component('project-milestones', ProjectMilestones)
new Vue({el: '#app'});

Vue.component('modal', {
  template: '#menu-template',
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true    
    }
  }
})


new Vue({
  el: '#menu',
  data: {
    showMenu: false
  }
})

