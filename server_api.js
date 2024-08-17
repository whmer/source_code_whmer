//   db   d8b   db db   db .88b  d88. d88888b d8888b.      .d8888.  .d88b.   .o88b. d888888b d88888b d888888b db    db 
//   88   I8I   88 88   88 88'YbdP`88 88'     88  `8D      88'  YP .8P  Y8. d8P  Y8   `88'   88'     `~~88~~' `8b  d8' 
//   88   I8I   88 88ooo88 88  88  88 88ooooo 88oobY'      `8bo.   88    88 8P         88    88ooooo    88     `8bd8'  
//   Y8   I8I   88 88~~~88 88  88  88 88~~~~~ 88`8b          `Y8b. 88    88 8b         88    88~~~~~    88       88    
//   `8b d8'8b d8' 88   88 88  88  88 88.     88 `88.      db   8D `8b  d8' Y8b  d8   .88.   88.        88       88    
//    `8b8' `8d8'  YP   YP YP  YP  YP Y88888P 88   YD      `8888Y'  `Y88P'   `Y88P' Y888888P Y88888P    YP       YP    


const fs = require('fs');

const links = [
    {
        title: 'Art Thou A Demon King by MSConstruction',
        url: 'https://html-classic.itch.zone/html/10268667/web4.7/index.html'
    },
    {
        title: 'BJ Quest by Hotpink',
        url: 'https://html-classic.itch.zone/html/4249873/BJQuest_Web/index.html'
    },
    // -- server_apis
    {
        title: 'Catmorphosis',
        url: 'https://html-classic.itch.zone/html/9990143/index.html'
    },
    {
        title: 'Death Moon',
        url: 'https://html-classic.itch.zone/html/10625682/index.html'
    },
    {
        title: 'Ganyu - StN [v1.3]',
        url: 'https://html-classic.itch.zone/html/6748455/demo/index.html'
    },
    {
        title: 'Genshin',
        url: 'https://html-classic.itch.zone/html/7225282/Genshin%20-%20NSFW%201.1%20(Web)/index.html'
    },
    {
        title: 'Hentai Slime',
        url: 'https://html.itch.zone/html/9855399/index.html'
    },
    {
        title: 'Hinata - Naruto',
        url: 'https://html-classic.itch.zone/html/10334926/AnimeCream/index.html'
    },
    {
        title: 'Htopia',
        url: 'https://html-classic.itch.zone/html/8962839/index.html'
    },
    {
        title: 'Life in Teyvat is a sex simulator with visual novel elements',
        url: 'https://html-classic.itch.zone/html/6631617/index.html'
    },
    {
        title: 'Nemurimouto',
        url: 'https://html-classic.itch.zone/html/10321630/nemurimouto_v0.05_web_cen/index.html'
    },
    {
        title: 'Nymphomania',
        url: 'https://html-classic.itch.zone/html/10614830/index.html'
    },
    {
        title: 'Sxx machine',
        url: 'https://html-classic.itch.zone/html/10644627/www/index.html'
    },
    {
        title: 'Power ❤️❤️ Chainsaw Man',
        url: 'https://html-classic.itch.zone/html/9890419/AnimeCream/index.html'
    },
    {
        title: 'Tentacle Pool',
        url: 'https://html-classic.itch.zone/html/9284509/index.html'
    },
    {
        title: 'Touch The Girl! - Hard version',
        url: 'https://html-classic.itch.zone/html/10334926/AnimeCream/index.html'
    },
    {
        title: 'Truth or Drink by Mr.Hotter',
        url: 'https://html-classic.itch.zone/html/9903081/index.html'
    }
];

fs.writeFile('./server/whmer/api/links_whmer.json', JSON.stringify(links, null, 2), (err) => {
    if (err) throw err;
    console.log('gg!');
});
