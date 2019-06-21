if (Vue) {
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
    var resumeOverview = new Vue({
        el: '#resume-overview',
        data: function() {
            return {
                message: 'Overview',
                cards: [
                    {
                        title: 'Focus',
                        list: [
                            {
                                type: 'entry-simple',
                                entry: 'Applying Advanced Skills to Common Problems',
                            },
                        ],
                    },
                    {
                        title: 'Curriculum Vitae',
                        list: [
                            {
                                type: 'entry-simple',
                                entry: '~4 years in web application development',
                            },
                            {
                                type: 'entry-simple',
                                entry: '10+ years creative design digital / print',
                            },
                        ],
                    },
                    {
                        title: 'Skillsets',
                        list: [
                            {
                                type: 'entry-compound',
                                heading: 'Rust Lang',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: 'A*, Dijkstra, Graph Data Structures',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Utilities',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Heuristic, MCMC AI Bots',
                                    },
                                ],
                            },
                            {
                                type: 'entry-compound',
                                heading: 'Advanced ECMAScipt + Common Libs',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: 'VueJS 2',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Angular 1',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'BackboneJS + JQuery',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Languages",
                        list: [
                            {
                                type: 'entry-simple',
                                entry: 'Javascript',
                            },
                            {
                                type: 'entry-simple',
                                entry: 'Rust',
                            },
                            {
                                type: 'entry-simple',
                                entry: 'JAVA',
                            },
                            {
                                type: 'entry-simple',
                                entry: 'C#',
                            },
                            {
                                type: 'entry-simple',
                                entry: 'Python',
                            },
                        ],
                    },
                    {
                        title: "Personal Development",
                        list: [
                            {
                                type: 'entry-compound',
                                heading: 'Codingame.com',
                                entry: [
                                    {
                                        type: 'entry-simple-hyperlink',
                                        entry: {
                                            message: 'My Profile',
                                            url: 'https://www.codingame.com/profile/280e093fc48d227173715ab32a0a6dde0241731',
                                        }
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Mentor Ranked',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Rust Lang',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Javascript',
                                    },
                                ],
                            },
                            {
                                type: 'entry-simple',
                                entry: 'Bot Challenges',
                            },
                            {
                                type: 'entry-simple',
                                entry: 'Algorithm Puzzles',
                            },
                        ],
                    },
                ],
                shortWH: [
                    {
                        title: "Front End / Middleware / CMS-ECOM Dev",
                        list: [
                            {
                                type: 'entry-simple',
                                company: 'Fossil Group',
                                entry: '3 years : 6 months - UI Developer II • ECOM CMS (Adobe AEM, Shopify, Salesforce)',
                            },
                        ],
                    },
                    {
                        title: "Web / Email Development Contracts",
                        list: [
                            {
                                type: 'entry-simple',
                                company: 'AAFES',
                                entry: '4 months',
                            },
                            {
                                type: 'entry-simple',
                                company: 'Neiman Marcus',
                                entry: '4 months',
                            },
                        ],
                    },
                    {
                        title: "Creative Positions",
                        list: [
                            {
                                type: 'entry-work',
                                company: 'Wasteland Daydreams',
                                entry: '7 years - Author / Self-Publisher',
                            },
                            {
                                type: 'entry-work',
                                company: 'Iron Sight Entertainment (startup)',
                                entry: '11 months - Concept Artist (environment / creature)',
                            },
                            {
                                type: 'entry-work',
                                company: 'Progressive Laboratories',
                                entry: '7 years - Creative Director (web / print)',
                            },
                            {
                                type: 'entry-work',
                                company: 'Tandy Brands Accessories',
                                entry: '2 years - Graphic Designer (web / product photography)',
                            },
                            {
                                type: 'entry-work',
                                company: 'Amarillo Globe News',
                                entry: '3 months - Graphic Artist (print)',
                            },
                        ],
                    }
                ],
            }
        }
    }),
    curiculumVitae = new Vue({
        el: '#resume-curiculum-vitae',
        data: function() {
            return {
                message: 'Curriculum Vitae',
                cards: [
                    {
                        title: 'Work History',
                        list: [
                            {
                                type: 'entry-compound',
                                heading: 'Fossil • UI Dev 2',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: '~4 yrs',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: '3+ role enhancements',
                                    },
                                    {
                                        type: 'entry-compound',
                                        heading: 'Timeline',
                                        entry: [
                                            {
                                                type: 'entry-compound',
                                                heading: 'April 2018 - Now',
                                                entry: [
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'Salesforce Vendor Oversight & Code Review',
                                                    },
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'Salesforce Integration',
                                                    },
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'Lead - Shopify site portfolio',
                                                    },
                                                ],
                                            },
                                            {
                                                type: 'entry-compound',
                                                heading: 'March 2018 - April 2018',
                                                entry: [
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'JAVA Middleware - AEM',
                                                    },
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'Javascript Frontend - AEM',
                                                    },
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'Adobe Experience Manager Component work',
                                                    },
                                                ],
                                            },
                                            {
                                                type: 'entry-compound',
                                                heading: 'April 2017 - March 2018',
                                                entry: [
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'Adobe Experience Manager Component work',
                                                    },
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'Flexible page components to enhance site experience (Media Tile, Video Tile)',
                                                    },
                                                ],
                                            },
                                            {
                                                type: 'entry-compound',
                                                heading: 'December 2015 - April 2017',
                                                entry: [
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'Adobe Experience Manager Component Configuration',
                                                    },
                                                    {
                                                        type: 'entry-simple',
                                                        entry: 'Minor View Layer Tasks and Front-end Component `overclocking`',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entry-compound',
                                heading: 'Various • Contract Dev',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: '~1 yr',
                                    },
                                    {
                                        type: 'entry-compound',
                                        heading: 'Email Templates, Website Snippets',
                                        entry: [
                                            {
                                                type: 'entry-simple',
                                                entry: 'Neiman Marcus',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'AAFES',
                                            },
                                        ]
                                    },
                                ],
                            },
                            {
                                type: 'entry-compound',
                                heading: 'Nutrition & Fashion Industry • Content Creator',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: '10+ years',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Graphic Design, Art Direction, Print + Web',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'ECOM, Direct Markets, Fashion B2B, Nutrition B2C',
                                    },
                                ],
                            }
                        ],
                    },
                    {
                        title: 'Leadership Moments',
                        list: [
                            {
                                type: 'entry-compound',
                                heading: 'Solo in-house contributor to FOSSIL.com UI components',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: 'Front-end component creation',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Internal User Focused Optimizations',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Interactive JS',
                                    },
                                ],
                            },
                            {
                                type: 'entry-compound',
                                heading: 'Embraced team/role shift to full FOSSIL.com owner',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: 'Cross Dept Collabs',
                                    },
                                    {
                                        type: 'entry-compound',
                                        heading: 'Code Review Responsibilities',
                                        entry: [
                                            {
                                                type: 'entry-simple',
                                                entry: 'Code Quality',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'Code Execution Time',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'Legacy Maintenance and Replacement',
                                            },
                                        ],
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Middle-ware Developent',
                                    },
                                ],
                            },
                            {
                                type: 'entry-simple',
                                entry: 'Currently assisting Fossil.com to a successfull replatform / relaunch',
                            },
                        ],
                    },
                    {
                        title: 'Learning Moments',
                        list: [
                            {
                                type: 'entry-compound',
                                heading: 'UI Dev - FOSSIL',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: 'Started as pure HTML/JS dev',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Collaborated directly with Creative / Non-Technicals',
                                    },{
                                        type: 'entry-simple',
                                        entry: 'Ended as accomplished CMS component dev',
                                    },
                                ],
                            },
                            {
                                type: 'entry-compound',
                                heading: 'Frontend & CMS Dev - FOSSIL',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: 'Started as front-end',
                                    },
                                    {
                                        type: 'entry-compound',
                                        heading: 'Embraced transition to Middle-ware',
                                        entry: [
                                            {
                                                type: 'entry-simple',
                                                entry: 'Managing Code Integrations',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'Managing Sprint Cycles',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'Managing team development',
                                            },
                                        ],
                                    },
                                    {
                                        type: 'entry-compound',
                                        heading: 'Strengthened JAVA Skills',
                                        entry: [
                                            {
                                                type: 'entry-simple',
                                                entry: 'Test-supported Development',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'Servlets & Exploit Mitigation',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'Consistently Bug-less Deployments',
                                            },
                                        ],
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Ended as accomplished Middle-ware Dev',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: 'Knowledge Pursuit',
                        list: [
                            {
                                type: 'entry-simple',
                                entry: 'Leveraging bot programming to learn important algorithm skills',
                            },
                            {
                                type: 'entry-simple',
                                entry: 'Pivoting algo skills to improve general coding approaches',
                            },
                            {
                                type: 'entry-simple',
                                entry: 'Using core knowledge to remove unnecessary Library weight and excess complexity',
                            },
                            {
                                type: 'entry-compound',
                                heading: 'Languages',
                                entry: [
                                    {
                                        type: 'entry-compound',
                                        heading: 'Detailed',
                                        entry: [
                                            {
                                                type: 'entry-simple',
                                                entry: 'ES2016',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'Rust Lang',
                                            },
                                        ],
                                    },
                                    {
                                        type: 'entry-compound',
                                        heading: 'Competent',
                                        entry: [
                                            {
                                                type: 'entry-simple',
                                                entry: 'ES2017',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'JAVA',
                                            },
                                            {
                                                type: 'entry-simple',
                                                entry: 'C#',
                                            },
                                        ],
                                    },
                                    {
                                        type: 'entry-compound',
                                        heading: 'Cursory',
                                        entry: [
                                            {
                                                type: 'entry-simple',
                                                entry: 'Python',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entry-simple',
                                entry: 'Developed core understanding of languages to demystify libraries and break reliance on them',
                            },
                        ],
                    },
                    {
                        title: 'Chaos Management',
                        list: [
                            {
                                type: 'entry-compound',
                                heading: 'Collaboration with Creative Non-Technicals',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: 'Launched revenue driving features despite shifting targets',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Managed expectations in the face of the "Wants every tool to be able to do everything" perspective',
                                    },
                                ],
                            },
                            {
                                type: 'entry-compound',
                                heading: 'Managed Dev priorities through:',
                                entry: [
                                    {
                                        type: 'entry-simple',
                                        entry: 'Highly oscillating regions of responsibility',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Vague overall objectives',
                                    },
                                    {
                                        type: 'entry-simple',
                                        entry: 'Conflicting areas of responsibility',
                                    },
                                ],
                            }
                        ],
                    },
                ],
            };
        },
    });
} else {
    console.warn("Vue failed to load.")
}