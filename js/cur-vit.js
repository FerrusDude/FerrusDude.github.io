document.addEventListener("DOMContentLoaded", loadData, 'once');

function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", loadVue);
    xhr.open("GET", "./data/site-data.json");
    xhr.responseType = "json";
    xhr.send();
}

function loadVue(res) {
    if (res.currentTarget.status === 200 && Vue) {
        // Vue is loaded
        Vue.component('entry-simple',{
            props: ['item'],
            template: '<li><span>{{item}}</span></li>',
        });
        Vue.component('entry-compound',{
            props: ['item','heading'],
            template: '<li><span>{{heading}}<ul><li v-for="entry in item"><component :is="entry.type" :item="entry.entry" :heading="entry.heading"></component></li></ul></span></li>',
        });
        Vue.component('entry-work',{
            props: ['item'],
            template: '<dl><dt>{{item.company}}</dt><dd>{{item.entry}}</dd></dl>',
        });
        Vue.component('entry-simple-hyperlink',{
            props: ['item'],
            template: '<li><a :href="item.url"><span>{{item.message}}</span></a></li>',
        });
        const siteData = JSON.parse(res.currentTarget.response),
        resumeOverview = new Vue({
            el: '#resume-overview',
            data: function() {
                return siteData.resumeOverview;
            }
        }),
        curiculumVitae = new Vue({
            el: '#resume-curiculum-vitae',
            data: function() {
                return siteData.curiculumVitae;
            },
        });
    } else {
        console.warn("Vue failed to load.\n",res.responseText);
    }
}