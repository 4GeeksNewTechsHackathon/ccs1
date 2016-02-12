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
}

var taigaProjectUrl = 'https://api.taiga.io/api/v1/milestones?project=107653';
Vue.config.debug = true
new Vue({
    el: '#app',
    data: {
        projects: [],
        milestones: []
    },
    methods: {
        fetchData: function () {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', taigaProjectUrl)
            xhr.setRequestHeader("Authorization", "Bearer eyJ1c2VyX2F1dGhlbnRpY2F0aW9uX2lkIjozNDA2Mn0:1aTvGC:bzdKugKkTvNisEcJ50lt5BCy7FI")

            xhr.onload = function () {
                self.projects = JSON.parse(xhr.responseText)
            }
            xhr.send()
        },
        fetchData2: function () {
            for (var i=0; i<this.projects.length; i++) {
                console.log(this.projects[i].user_stories)
            }
        },
    },
    created : function() {
        this.fetchData()
    },
    watch : {
        projects: 'fetchData2'
    }
    /*created: function () {
     this.fetchData()
     }*/
})

// define the item component
/*Vue.component('item', {
 template: '#item-template',
 props: {
 model: Object
 },
 data: {
 'userhistories': this.methods.fetchData,
 },
 computed: {
 isFolder: function () {
 return this.model.children &&
 this.model.children.length
 }
 },
 methods: {
 fetchData: function () {
 var xhr = new XMLHttpRequest()
 var self = this
 xhr.open('GET', taigaProjectUrl)
 xhr.onload = function () {
 self.commits = JSON.parse(xhr.responseText)
 }
 xhr.send()
 },
 toggle: function () {
 if (this.isFolder) {
 this.open = !this.open
 }
 },
 changeType: function () {
 if (!this.isFolder) {
 Vue.set(this.model, 'children', [])
 this.addChild()
 this.open = true
 }
 },
 addChild: function () {
 this.model.children.push({
 name: 'new stuff'
 })
 }
 }
 })

 // boot up the demo
 var demo = new Vue({
 el: '#demo',
 data: {
 treeData: data
 }
 })*/