
let nav = document.querySelector('nav');
let mobileMenuBtn = document.querySelector('#mobile-menu');

document.addEventListener("DOMContentLoaded", loadData, 'once');
mobileMenuBtn.addEventListener("click", showMobileMenu);
mobileMenuBtn.addEventListener("touch", showMobileMenu);
mobileMenuBtn.addEventListener("keyDown", showMobileMenu);

function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", loadVue, 'once');
    xhr.open("GET", "./data/site-data-detailed.json");
    xhr.responseType = "json";
    xhr.send();
}

function showMobileMenu () {
    nav.classList.toggle('show-menu');
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
        const resumeOverview = new Vue({
            el: '#resume-overview',
            data: function() {
                return res.currentTarget.response.resumeOverview;
            }
        }),
        curiculumVitae = new Vue({
            el: '#resume-curiculum-vitae',
            data: function() {
                return res.currentTarget.response.curiculumVitae;
            },
        });
    } else {
        console.warn("Vue failed to load.\n",res.responseText);
    }
}

document.querySelector('.content')[0].innerText = document.documentElement.clientWidth + ' : ' + document.documentElement.clientHeight;