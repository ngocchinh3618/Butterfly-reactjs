import assets from "../../assets"

const NAV = [
    {
        "name": "HOME",
        "link": "/",
        "act": "active"
    },
    {
        "name": "ABOUT",
        "link": "#about"
    },
    {
        "name": "SERVICES",
        "link": "#services"
    },
    {
        "name": "PORTFOLIO",
        "link": "#portfolio"
    },
    {
        "name": "TEAM",
        "link": "#team"
    },
    {
        "name": "DROP DOWN",
        "link": "#gropdown",
        "classDown": "bi bi-chevron-down",
        "submenu": [
            {
                "id": 1,
                "name": "Drop Down1",
                "link": "/"
            },
            {
                "id": 2,
                "name": "Deep Drop Down",
                "link": "",
                "classRight": "bi bi-chevron-right",
                "submenu":[
                    {
                        "id": 5,
                        "name": "Deep Drop Down",
                        "link": "/"
                    },
                    {
                        "id": 6,
                        "name": "Deep Drop Down",
                        "link": "/"
                    },
                    {
                        "id": 7,
                        "name": "Deep Drop Down",
                        "link": "/"
                    },
                    {
                        "id": 8,
                        "name": "Deep Drop Down",
                        "link": "/"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Drop Down1",
                "link": "/"
            },
            {
                "id": 4,
                "name": "Drop Down1",
                "link": "/"
            },
            {
                "id": 5,
                "name": "Drop Down1",
                "link": "/"
            },
        ]
    },
    {
        "name": "CONTACT",
        "link": "#contact"
    },
]

const ABOUT_DATA=[
    {
        "title": "Lorem Ipsum",
        "desc": "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        "class": "bx bx-fingerprint"
    },
    {
        "title": "Nemo Enim",
        "desc": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
        "class": "bx bx-gift"
    },
    {
        "title": "Dine Pad",
        "desc": "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis",
        "class": "bx bx-atom"
    },
]

const COUNT_DATA=[
    {
        "title": "Clients",
        "end": "232"
    },
    {
        "title": "Projects",
        "end": "521"
    },
    {
        "title": "Hours Of Suppor",
        "end": "1463"
    },
    {
        "title": "Hard Workers",
        "end": "15"
    },
]

const CLIENT_DATA=[
    {
        "client": assets.client1
    },
    {
        "client": assets.client2
    },
    {
        "client": assets.client3
    },
    {
        "client": assets.client4
    },
    {
        "client": assets.client5
    },
    {
        "client": assets.client6
    },
    {
        "client": assets.client7
    },
    {
        "client": assets.client8
    }
]

const SERVICE_DATA = [
    {
        "icon":"bi bi-cash-stack",
        "color":"#ff689b",
        "title":"Lorem Ipsum",
        "desc":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
    },
    {
        "icon":"bi bi-calendar4-week",
        "color":"#e9bf06",
        "title":"Dolor Sitema",
        "desc":"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
    },
    {
        "icon":"bi bi-chat-text",
        "color":"#3fcdc7",
        "title":"Sed ut perspiciatis",
        "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        "icon":"bi bi-credit-card-2-front",
        "color":"#41cf2e",
        "title":"Magni Dolores",
        "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        "icon":"bi bi-globe",
        "color":"#d6ff22",
        "title":"Nemo Enim",
        "desc":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
    },
    {
        "icon":"bi bi-clock",
        "color":"#4680ff",
        "title":"Eiusmod Tempor",
        "desc":"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"
    },
]

const PORTFOLIO_DATA = [ 
    {
        "id":1,
        "img":assets.portfolio1,
        "title":"App 1",
        "name":"App",
        "linkImg":assets.portfolio1
    },  
    {
        "id":2,
        "img":assets.portfolio2,
        "title":"App 2",
        "name":"App",
        "linkImg":assets.portfolio2
    },  
    {
        "id":3,
        "img":assets.portfolio3,
        "title":"App 3",
        "name":"App",
        "linkImg":assets.portfolio3
    },  
    {
        "id":4,
        "img":assets.portfolio4,
        "title":"App 4",
        "name":"App",
        "linkImg":assets.portfolio4
    },  
    {
        "id":5,
        "img":assets.portfolio5,
        "title":"App 5",
        "name":"App",
        "linkImg":assets.portfolio5
    },  
    {
        "id":6,
        "img":assets.portfolio6,
        "title":"App 6",
        "name":"App",
        "linkImg":assets.portfolio6
    },  
    {
        "id":7,
        "img":assets.portfolio7,
        "title":"App 7",
        "name":"App",
        "linkImg":assets.portfolio7
    },  
    {
        "id":8,
        "img":assets.portfolio8,
        "title":"App 8",
        "name":"App",
        "linkImg":assets.portfolio8
    },  
    {
        "id":9,
        "img":assets.portfolio9,
        "title":"App 9",
        "name":"App",
        "linkImg":assets.portfolio9
    },  
    
]

const TESTIMONIAL_DATA = [ 
    {
        "id":1,
        "img":assets.testimonial1,
        "name": "Saul Goodman",
        "pos": "Ceo &amp; Founder",
        "quote": "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
        "id":2,
        "img":assets.testimonial2,
        "name": "Sara Wilsson",
        "pos": "Designer",
        "quote": "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
    },
    {
        "id":3,
        "img":assets.testimonial3,
        "name": "Jena Karlis",
        "pos": "Store Owner",
        "quote": "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
    },
    {
        "id":4,
        "img":assets.testimonial4,
        "name": "Matt Brandon",
        "pos": "Freelancer",
        "quote": "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
    },
    {
        "id":5,
        "img":assets.testimonial5,
        "name": "John Larson",
        "pos": "Entrepreneur",
        "quote": "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
    },
]

const TEAM_DATA = [ 
    {
        "id":1,
        "img":assets.team1,
        "name":"Walter White",
        "pos":"Chief Executive Officer"
    },
    {
        "id":2,
        "img":assets.team2,
        "name":"Sarah Jhonson",
        "pos":"Product Manager"
    },
    {
        "id":3,
        "img":assets.team3,
        "name":"William Anderson",
        "pos":"CTO"
    },
    {
        "id":4,
        "img":assets.team4,
        "name":"Amanda Jepson",
        "pos":"Accountant"
    },
]

const SOCIAL_CLASS = [
    'bi bi-twitter',
    'bi bi-facebook',
    'bi bi-instagram',
    'bi bi-linkedin'
]

const GALLERY_DATA = [
    {
        linkImg: assets.gallery1,
        img:assets.gallery1,
    },
    {
        linkImg: assets.gallery2,
        img:assets.gallery2,
    },
    {
        linkImg: assets.gallery3,
        img:assets.gallery3,
    },
    {
        linkImg: assets.gallery4,
        img:assets.gallery4,
    },
    {
        linkImg: assets.gallery5,
        img:assets.gallery5,
    },
    {
        linkImg: assets.gallery6,
        img:assets.gallery6,
    },
    {
        linkImg: assets.gallery7,
        img:assets.gallery7,
    },
    {
        linkImg: assets.gallery8,
        img:assets.gallery8
    },
]

const FOOTER_DATA = [
    {
        "name":"Home",
        "link":"#"
    },
    {
        "name":"About us",
        "link":"#"
    },
    {
        "name":"Services",
        "link":"#"
    },
    {
        "name":"Terms of service",
        "link":"#"
    },
    {
        "name":"Privacy policy",
        "link":"#"
    },
]

const FOOTER_DATA_SERVICES = [
    {
        "name":"Web Design",
        "link":"#"
    },
    {
        "name":"Web Development",
        "link":"#"
    },
    {
        "name":"Product Management",
        "link":"#"
    },
    {
        "name":"Marketing",
        "link":"#"
    },
    {
        "name":"Graphic Design",
        "link":"#"
    },
]
const FOOTER_DATA_SOCIAL = [
    {
        "className":"twitter",
        "name":"bx bxl-twitter",
        "link":"#"
    },
    {
        "className":"facebook",
        "name":"bx bxl-facebook",
        "link":"#"
    },
    {
        "className":"instagram",
        "name":"bx bxl-instagram",
        "link":"#"
    },
    {
        "className":"google-plus",
        "name":"bx bxl-skype",
        "link":"#"
    },
    {
        "className":"linkedin",
        "name":"bx bxl-linkedin",
        "link":"#"
    },
]
export { 
    NAV,
    ABOUT_DATA,
    COUNT_DATA,
    CLIENT_DATA,
    SERVICE_DATA,
    PORTFOLIO_DATA,
    TESTIMONIAL_DATA,
    TEAM_DATA,
    SOCIAL_CLASS,
    GALLERY_DATA,
    FOOTER_DATA,
    FOOTER_DATA_SERVICES,
    FOOTER_DATA_SOCIAL
};