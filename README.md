# **:triangular_flag_on_post: ANIMEFLV** (version 1.0.5)

![node version](https://img.shields.io/badge/node->=10.16.x-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg)
          <a href="https://github.com/ChrisMichaelPerezSantiago/animeflv/graphs/commit-activity">
            <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
          </a>
          <a href="https://github.com/ChrisMichaelPerezSantiago/animeflv/blob/master/LICENSE">
            <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
          </a>
          <img src="https://img.shields.io/badge/now.sh-deployed-brightgreen.svg" alt="">
          <img src="https://badgen.net/badge/icon/now?icon=now&label" alt="">
          <img src="https://img.shields.io/badge/animeflv-API-brightgreen.svg" alt="">
          [![Build Status](https://travis-ci.com/ChrisMichaelPerezSantiago/animeflv.svg?branch=master)](https://travis-ci.com/ChrisMichaelPerezSantiago/animeflv)
          <img src="https://img.shields.io/github/stars/ChrisMichaelPerezSantiago/animeflv?style=social" alt="">
          
         


 <a href="https://nodei.co/npm/animeflv/"><img src="https://nodei.co/npm/animeflv.png"></a>


> Animeflv is a custom API that has the entire catalog of the animeflv.net website. You can enjoy all the content with subtitles in Spanish and the latest in the world of anime for free.

---

## *Please, do not download version v1.0.0 from npm, I had made the mistake of leaving the parameters in the functions with predefined values.* ️️️️❗️️️

## :tada: Updates in version v1.0.5 :tada:
- [x] [v1.0.5](https://www.npmjs.com/package/animeflv/v/1.0.5) *npm package publish.*
- [x] `getAnimeInfo([id] , [title])` *function implemented.*
- [x] `downloadLinksByEpsId([epsId])` function implemented.



## :rocket: Custom Animeflv API Link
[Animeflv API](https://animeflv.chrismichael.now.sh/api/v1/)

## <img src="https://img.icons8.com/color/48/000000/graphql.png"> **Animeflv GraphQL**
For those developers who want to choose to use the API by consulting with GraphQL I leave an alternative

[animeflv-gql](https://github.com/ChrisMichaelPerezSantiago/animeflv-gql)


## 📚 **Development Diary**
Describe the purpose of the project and give clues about what the code does. 
For more information go to the following link [Diary Reference](./development_diary/README.md).


## <img src="https://img.icons8.com/color/48/000000/paypal.png"> **Donations**
Animeflv is an open source project licensed by MIT with continuous development. If you want me to continue maintaining this library and you are interested in continuing to use it, you can help me with a monetary help in the following link:


- [One-time donation via PayPal.](https://paypal.me/chrismperezsantiago?locale.x=en_US)

These are projects that take a lot of effort and time to maintain. So with your help I will be more motivated to continue maintaining the animeflv project. :)



## **:wrench: Developer usage**

### **Set up project**

Before cloning the repo **be sure** you have installed:

- [**NODE**](https://www.google.com/search?q=how+to+install+node) (version >= 10.16.x)
- [**NPM**](https://www.google.com/search?q=how+to+install+npm) (version >= 6.9.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder path `git clone https://github.com/ChrisMichaelPerezSantiago/animeflv.git`

---

### **Installation**

In order to install the project and all dependencies, enter in the project folder and run `npm install`

---

### Start the project

```bash
npm start
```

### Test the project

```bash
npm test
```

---


## API Documentation
### 📣Read this please | To get the videos!📣
## getAnimeServers([id])

*First of all I must mention that the url of the videos work only using the iframe element.*
*To get the videos (servers) of each chapter, you only need to use the getAnimeServers function that receives the id of the episode as a parameter.* 
*To verify the id of each episode, look at the episodes property:*

```json
"episodes": [
  {
    "nextEpisodeDate": "2019-10-31"
  },
  {
    "episode": 1,
    "id": "53099/psychopass-3-1",
    "imagePreview": "https://cdn.animeflv.net/screenshots/3225/1/th_3.jpg"
  }
]
```

*You just have to pass the id of the episode*
```javascript
getAnimeServers('53099/psychopass-3-1').then(doc => { console.log(doc) });
```

**output**
```javascript
[ 
  { server: 'm3u8',
    title: 'Streamium',
    allow_mobile: true,
    code:
     'https://streamium.xyz/embed.php?hash=6a2e46c779a8fc2b558ad3eed8c8b71a' },
  { server: 'natsuki',
    title: 'Natsuki',
    allow_mobile: true,
    code:
     'https://s1.animeflv.net/embed.php?s=natsuki&v=RmJwQlJnZ2FTVnhEVUlWQlFaVTI4bGtZeDl5SWNGSi81VXVvampCbExiUWJ2M2VxbnhoOENVclNyTzlnMEY4elppYi9oN2tFU3h5V25FUjJYZkR5bUVzNUpjVU52Um9jckRzNWttTDVuN0hkMm1ZWkNXNGlkakFiNEtpdC8rYm8=' },
  { server: 'vs',
    title: 'Verystream',
    allow_mobile: true,
    code: 'https://verystream.com/e/jJxesD2YJeb/' },
  { server: 'fembed',
    title: 'Fembed',
    allow_mobile: true,
    code: 'https://www.fembed.com/v/py13gum5eq77dwe' },
  { server: 'mega',
    title: 'MEGA',
    url:
     'https://mega.nz/#!6bABAAiA!WSJbevmfuOAJqgOom1ypYb85Ir95Z9aG2xwQUFHv1RI',
    allow_mobile: true,
    code:
     'https://mega.nz/embed#!6bABAAiA!WSJbevmfuOAJqgOom1ypYb85Ir95Z9aG2xwQUFHv1RI' },
  { server: 'streamango',
    title: 'Mango',
    url: 'https://streamango.com/f/mqpemtfrmortdqlt/',
    allow_mobile: true,
    code: 'https://streamango.com/embed/mqpemtfrmortdqlt' },
  { server: 'okru',
    title: 'Okru',
    allow_mobile: true,
    code: 'https://ok.ru/videoembed/1531214301706' },
  { server: 'yu',
    title: 'YourUpload',
    allow_mobile: true,
    code: 'https://www.yourupload.com/embed/V3e21a2MFF4H' },
  { server: 'maru',
    title: 'Maru',
    allow_mobile: true,
    code:
     'https://my.mail.ru/video/embed/8995617145282894610#budyak.rus#6930' },
  { server: 'netu',
    title: 'Netu',
    allow_mobile: true,
    code:
     'https://hqq.tv/player/embed_player.php?vid=MW9SaW94TnNpMm4rb3cyWnhsNDV4dz09' } 
]
```

*Now you just need to use the code property of each server and pass it to the **iframe***
```html
<iframe 
  src="https://streamium.xyz/embed.php?hash=6a2e46c779a8fc2b558ad3eed8c8b71a"
   width="100%"  
   height="100%" 
   frameborder="0" 
   allowfullscreen>
</iframe>
```
<iframe 
  src="https://streamium.xyz/embed.php?hash=6a2e46c779a8fc2b558ad3eed8c8b71a"
   width="100%"  
   height="100%" 
   frameborder="0" 
   allowfullscreen>
</iframe>


## search([query])
```javascript
// 20191030231015
// http://localhost:5000/api/v1/Search/tokyo%20ghoul

{
  "search": [
    {
      "title": "Tokyo Ghoul: Jack",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/2285.jpg",
      "synopsis": "OVA 4.5En Tokyo Ghoul: Jack, seguimos un incidente relacionado con un Ghoul devorador de humanos en el Distrito 13 de Tokio. Para descubrir la verdad de lo ocurrido a su amigo, el estudiante de instituto Taishi Fura persigue al Ghoul conocido como Lantern acompañado del joven investigador Kisho Arima. La historia cuenta cómo Arima y Fura se ...",
      "debut": null,
      "type": "OVA",
      "rating": "4.5",
      "episodes": [
        {
          "nextEpisodeDate": null
        },
        {
          "episode": 1,
          "id": "37923/tokyo-ghoul-jack-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/2285/1/th_3.jpg"
        }
      ]
    },
    {
      "title": "Tokyo Ghoul",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/1415.jpg",
      "synopsis": "Anime 4.5Extraños asesinatos se están sucediendo uno tras otro en Tokyo. Debido a las pruebas encontradas en las escenas, la policía concluye que los ataques son obra de ghouls que se comen a las personas. Kaneki y Hide, dos compañeros de clase, llegan a la conclusión de que si nadie ha visto nunca a esos necrófagos...",
      "debut": null,
      "type": "Anime",
      "rating": "4.5",
      "episodes": [
        {
          "nextEpisodeDate": null
        },
        {
          "episode": 12,
          "id": "28800/tokyo-ghoul-12",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/12/th_3.jpg"
        },
        {
          "episode": 11,
          "id": "28459/tokyo-ghoul-11",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/11/th_3.jpg"
        },
        {
          "episode": 10,
          "id": "28001/tokyo-ghoul-10",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/10/th_3.jpg"
        },
        {
          "episode": 9,
          "id": "27741/tokyo-ghoul-9",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/9/th_3.jpg"
        },
        {
          "episode": 8,
          "id": "27092/tokyo-ghoul-8",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/8/th_3.jpg"
        },
        {
          "episode": 7,
          "id": "26689/tokyo-ghoul-7",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/7/th_3.jpg"
        },
        {
          "episode": 6,
          "id": "26529/tokyo-ghoul-6",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/6/th_3.jpg"
        },
        {
          "episode": 5,
          "id": "26431/tokyo-ghoul-5",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/5/th_3.jpg"
        },
        {
          "episode": 4,
          "id": "26373/tokyo-ghoul-4",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/4/th_3.jpg"
        },
        {
          "episode": 3,
          "id": "26278/tokyo-ghoul-3",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/3/th_3.jpg"
        },
        {
          "episode": 2,
          "id": "26188/tokyo-ghoul-2",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/2/th_3.jpg"
        },
        {
          "episode": 1,
          "id": "26103/tokyo-ghoul-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/1/th_3.jpg"
        }
      ]
    },
  ]
}
```

## latestAnimeAdded()
*It will show N data per page , Total page unknown.*

```javascript
// 20191030104518
// http://localhost:5000/api/v1/LatestAnimeAdded

{
  "animes": [
    {
      "title": "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
      "poster": "https://animeflv.net/uploads/animes/covers/3230.jpg",
      "synopsis": "Película 4.8En Fujisawa, donde los cielos son brillantes y los mares brillan, Sakuta Azusagawa está en su segundo año de secundaria. Sus días felices con su novia y estudiante de último año, Mai Sakurajima, se ven interrumpidos con la aparición de su primer enamoramiento, Shouko Makinohara. Por razones de...",
      "debut": null,
      "type": "Película",
      "rating": "4.8",
      "episodes": [
        {
          "nextEpisodeDate": null
        },
        {
          "episode": 1,
          "id": "53296/seishun-buta-yarou-wa-yumemiru-shoujo-no-yume-wo-minai-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3230/1/th_3.jpg"
        }
      ]
    },
    {
      "title": "Pokemon (2019)",
      "poster": "https://animeflv.net/uploads/animes/covers/3229.jpg",
      "synopsis": "Anime 4.5Nueva temporada de Pokémon, titulada como la serie original de 1997.",
      "debut": "estreno",
      "type": "Anime",
      "rating": "4.5",
      "episodes": [
        {
          "nextEpisodeDate": "2019-11-24"
        },
        {
          "episode": 1,
          "id": "53283/pokemon-2019-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3229/1/th_3.jpg"
        }
      ]
    },
  ]
}
```

## latestEpisodesAdded()
*It will show N data per page , Total page unknown.*

```javascript
// 20191030104703
// http://localhost:5000/api/v1/LatestEpisodesAdded

{
  "episodes": [
    {
      "title": "Radiant 2nd Season",
      "poster": "https://animeflv.net/uploads/animes/thumbs/3184.jpg",
      "episode": 5,
      "servers": [
        {
          "server": "m3u8",
          "title": "Streamium",
          "allow_mobile": true,
          "code": "https://streamium.xyz/embed.php?hash=aac84b2086a995b9bc83fb8eb2d627d9"
        },
        {
          "server": "natsuki",
          "title": "Natsuki",
          "allow_mobile": true,
          "code": "https://s1.animeflv.net/embed.php?s=natsuki&v=TU1Sc0FHRW1CelV6U3FsaDdiYkU0OEpVNUFndDBnYnhCRDRCTFpDTDFVNlFjc0JGcTdrWlM1aFRObXdWd3RoK1VRdUdpT2J3QXlUK0R3Wm94dU1mbHhvN0lsU1BKc3FHbUsycHpQa0pOQUJJbDQ3YmxKdXdvSEFkc2Y4MklxMW96bUdJd2k3aEZBWDFDQzNyYXd0WnZ3PT0="
        },
        {
          "server": "vs",
          "title": "Verystream",
          "allow_mobile": true,
          "code": "https://verystream.com/e/KxLfdtqQGtY/"
        },
        {
          "server": "fembed",
          "title": "Fembed",
          "allow_mobile": true,
          "code": "https://www.fembed.com/v/-z85qtpmljp2j0n"
        },
        {
          "server": "mega",
          "title": "MEGA",
          "url": "https://mega.nz/#!eeREmQDR!35kX8v-mJe0vzW-C4seMvQ1rPGqttj6anYneFOz0m6g",
          "allow_mobile": true,
          "code": "https://mega.nz/embed#!eeREmQDR!35kX8v-mJe0vzW-C4seMvQ1rPGqttj6anYneFOz0m6g"
        },
        {
          "server": "okru",
          "title": "Okru",
          "allow_mobile": true,
          "code": "https://ok.ru/videoembed/1723453344498"
        },
        {
          "server": "yu",
          "title": "YourUpload",
          "allow_mobile": true,
          "code": "https://www.yourupload.com/embed/34qV7t4n2jqk"
        },
        {
          "server": "maru",
          "title": "Maru",
          "allow_mobile": true,
          "code": "https://my.mail.ru/video/embed/8995617145282894650#budyak.rus#6970"
        }
      ]
    },
  ]
}
```

## animeByGenres([genre], [sortBy] , [page])

<table>
<tr><th>Genres</th><th>SortBy</th><th>Page</th></tr>
<tr><td>

|   genres            |                        |                 |
|---------------------|------------------------|-----------------|
|accion               |  infantil              | sobrenatural    |
|artes-marciales      |  josei                 | superpoderes    |
|aventura             |  juegos                | suspenso        |
|carreras             |  magia                 | terror          |
|ciencia-ficcion      |  mecha                 | vampiros        |
|comedia              |  militar               | yaoi            |
|demencia             |  misterio              | yuri            |
|demonios             |  musica                |                 |
|deportes             |  parodia               |                 |
|drama                |  psicologico           |                 |
|ecchi                |  recuentos-de-la-vida  |                 |
|escolares            |  romance               |                 |
|espacial             |  samurai               |                 |
|fantasia             |  seinen                |                 |
|harem                |  shoujo                |                 |
|historico            |  shounen               |                 |

</td><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|
</table>


```javascript
// 20191030121938
// http://localhost:5000/api/v1/Genres/accion/updated/1

{
  "animes": [
  {
      "title": "Azur Lane",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/3192.jpg",
      "synopsis": "Anime 4.2Enemigos llamados Siren aparecieron repentinamente del mar. Para luchar contra ellos, se formó un grupo del ejército, Azur Lane. Tuvieron éxito en repeler el ataque de los Siren utilizando buques de guerra, demostrando los diferentes ideales de las personas que lo formaron. La historia trata sobre las chicas que luchan contra fuertes enemigos mi...",
      "debut": null,
      "type": "Anime",
      "rating": "4.2",
      "episodes": [
        {
          "nextEpisodeDate": "2019-11-28"
        },
        {
          "episode": 7,
          "id": "53310/azur-lane-7",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3192/7/th_3.jpg"
        },
        {
          "episode": 6,
          "id": "53202/azur-lane-6",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3192/6/th_3.jpg"
        },
        {
          "episode": 5,
          "id": "53151/azur-lane-5",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3192/5/th_3.jpg"
        },
        {
          "episode": 4,
          "id": "53096/azur-lane-4",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3192/4/th_3.jpg"
        },
        {
          "episode": 3,
          "id": "53043/azur-lane-3",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3192/3/th_3.jpg"
        },
        {
          "episode": 2,
          "id": "52992/azur-lane-2",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3192/2/th_3.jpg"
        },
        {
          "episode": 1,
          "id": "52945/azur-lane-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3192/1/th_3.jpg"
        }
      ]
    },
  ]
}
```

## movies([sortBy] , [page])
<table>
<tr><th>SortBy</th><th>Page</th></tr>
<tr><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>

```javascript
// 20191030124010
// http://localhost:5000/api/v1/Movies/rating/1

{
  "movies": [
    {
      "title": "Youjo Senki Movie",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/3182.jpg",
      "synopsis": "Película 4.9Año 1926. El Batallón Aéreo de Magos 203 del Ejército Imperial, comandado por la Mayor Tanya von Degurechaff, se alzó con la victoria en la batalla del sur contra la República. Habiendo regresado bañados en gloria y con las mieles del éxito en la boca, esperaban poder descansar un poco, pero el cuartel general les envía nuevas órdenes esp...",
      "debut": null,
      "type": "Película",
      "rating": "4.9",
      "episodes": [
        {
          "nextEpisodeDate": null
        },
        {
          "episode": 1,
          "id": "52790/youjo-senki-movie-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3182/1/th_3.jpg"
        }
      ]
    },
    {
      "title": "Kimi no Suizou wo Tabetai",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/3063.jpg",
      "synopsis": "Película 4.8Un protagonista anónimo encuentra un día un diario en un hospital que pertenece a su compañera de clase Sakura Yamauchi. En él descubre que la chica padece una enfermedad terminal en el páncreas y que le quedan pocos meses de vida. Sakura explica que el protagonista es la única persona ajena a su familia que conoce su condición y este le pro...",
      "debut": null,
      "type": "Película",
      "rating": "4.8",
      "episodes": [
        {
          "nextEpisodeDate": null
        },
        {
          "episode": 1,
          "id": "50979/kimi-no-suizou-wo-tabetai-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3063/1/th_3.jpg"
        }
      ]
    },
  ]
}
```

## ova([sortBy] , [page])
<table>
<tr><th>SortBy</th><th>Page</th></tr>
<tr><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>

```javascript
// 20191030125306
// http://localhost:5000/api/v1/Ova/default/1

{
  "ova": [
     {
      "title": "Gundam Build Divers Re:Rise",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/3212.jpg",
      "synopsis": "OVA 0.0Segunda temporada de Gundam Build Divers",
      "debut": null,
      "type": "OVA",
      "rating": "0.0",
      "episodes": [
        {
          "nextEpisodeDate": "2019-11-28"
        },
        {
          "episode": 8,
          "id": "53307/gundam-build-divers-rerise-8",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3212/8/th_3.jpg"
        },
        {
          "episode": 7,
          "id": "53252/gundam-build-divers-rerise-7",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3212/7/th_3.jpg"
        },
        {
          "episode": 6,
          "id": "53199/gundam-build-divers-rerise-6",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3212/6/th_3.jpg"
        },
        {
          "episode": 5,
          "id": "53148/gundam-build-divers-rerise-5",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3212/5/th_3.jpg"
        },
        {
          "episode": 4,
          "id": "53093/gundam-build-divers-rerise-4",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3212/4/th_3.jpg"
        },
        {
          "episode": 3,
          "id": "53040/gundam-build-divers-rerise-3",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3212/3/th_3.jpg"
        },
        {
          "episode": 2,
          "id": "52990/gundam-build-divers-rerise-2",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3212/2/th_3.jpg"
        },
        {
          "episode": 1,
          "id": "52989/gundam-build-divers-rerise-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3212/1/th_3.jpg"
        }
      ]
    },
  ]
}
```

## special([sortBy] , [page])
<table>
<tr><th>SortBy</th><th>Page</th></tr>
<tr><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>

```javascript
// 20191030124909
// http://localhost:5000/api/v1/Special/added/1

{
  "special": [
     {
      "title": "Granblue Fantasy The Animation Especial",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/3227.jpg",
      "synopsis": "Especial 0.0Especial de la serie",
      "debut": null,
      "type": "Especial",
      "rating": "0.0",
      "episodes": [
        {
          "nextEpisodeDate": null
        },
        {
          "episode": 1,
          "id": "53213/granblue-fantasy-the-animation-especial-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3227/1/th_3.jpg"
        }
      ]
    },
  ]
}
```


## tv([sortBy] , [page])
<table>
<tr><th>SortBy</th><th>Page</th></tr>
<tr><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>

```javascript
// 20191030125732
// http://localhost:5000/api/v1/TV/default/1

{
  "tv": [
    {
      "title": "Pokemon (2019)",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/3229.jpg",
      "synopsis": "Anime 0.0Nueva temporada de Pokémon, titulada como la serie original de 1997.",
      "debut": null,
      "type": "Anime",
      "rating": "0.0",
      "episodes": [
        {
          "nextEpisodeDate": "2019-11-24"
        },
        {
          "episode": 1,
          "id": "53283/pokemon-2019-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3229/1/th_3.jpg"
        }
      ]
    },
  ]
}
```


## animeByState([state] , [sortBy] , [page])
<table>
<tr><th>Status</th><th>SortBy</th><th>Page</th></tr>
<tr><td>

|  state       |  value  |
|--------------|---------|
|  In emission |   1     |
|  Finalized   |   2     |
|  coming soon |   3     |

</td><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>

### In Emission [state = 1]
```javascript
// 20191030132847
// http://localhost:5000/api/v1/AnimeByState/1/default/1

{
  "animes": [
     {
      "title": "Pokemon (2019)",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/3229.jpg",
      "synopsis": "Anime 0.0Nueva temporada de Pokémon, titulada como la serie original de 1997.",
      "debut": null,
      "type": "Anime",
      "rating": "0.0",
      "episodes": [
        {
          "nextEpisodeDate": "2019-11-24"
        },
        {
          "episode": 1,
          "id": "53283/pokemon-2019-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3229/1/th_3.jpg"
        }
      ]
    },
  ]
}
```

### Finalized [state = 2]

```javascript
// 20191030132916
// http://localhost:5000/api/v1/AnimeByState/2/default/1

{
  "animes": [
     {
      "title": "Try Knights",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/3180.jpg",
      "synopsis": "Anime 2.9Akira, el nuevo miembro del club de rugby, recibe el consejo de que no se acerque mucho a Riku, quien es un fanático del rugby pero lo abandonó porque no tenía el físico necesario para practirarlo. A pesar de ello, Akira se interesa por Riku y la pasión por el rugby de este regresa gradualmente. Al unir fuerzas, la pareja consigue practicar un...",
      "debut": null,
      "type": "Anime",
      "rating": "2.9",
      "episodes": [
        {
          "nextEpisodeDate": null
        },
        {
          "episode": 12,
          "id": "53030/try-knights-12",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/12/th_3.jpg"
        },
        {
          "episode": 11,
          "id": "52977/try-knights-11",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/11/th_3.jpg"
        },
        {
          "episode": 10,
          "id": "52929/try-knights-10",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/10/th_3.jpg"
        },
        {
          "episode": 9,
          "id": "52902/try-knights-9",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/9/th_3.jpg"
        },
        {
          "episode": 8,
          "id": "52826/try-knights-8",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/8/th_3.jpg"
        },
        {
          "episode": 7,
          "id": "52780/try-knights-7",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/7/th_3.jpg"
        },
        {
          "episode": 6,
          "id": "52734/try-knights-6",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/6/th_3.jpg"
        },
        {
          "episode": 5,
          "id": "52687/try-knights-5",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/5/th_3.jpg"
        },
        {
          "episode": 4,
          "id": "52637/try-knights-4",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/4/th_3.jpg"
        },
        {
          "episode": 3,
          "id": "52591/try-knights-3",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/3/th_3.jpg"
        },
        {
          "episode": 2,
          "id": "52546/try-knights-2",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/2/th_3.jpg"
        },
        {
          "episode": 1,
          "id": "52498/try-knights-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/3180/1/th_3.jpg"
        }
      ]
    },
  ]
}
```

### Coming Soon [state = 3]
```javascript
// 20191030133002
// http://localhost:5000/api/v1/AnimeByState/3/default/1

{
  "animes": [
    {
      "title": "Ame-iro Cocoa in Hawaii",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/2559.jpg",
      "synopsis": "Anime 4.2¡¿El Cafe Rainy Color se está expandiendo a Hawaii!?\nDe repente un día Nozomu Tokura se designa el gerente de la tienda por orden del propietario. Desconcertado, sin embargo, con la cooperación de todos y el apoyo de nuevos amigos locales, Nozomu ahora tiene una batalla cuesta arriba para abrir la nueva tienda. &i...",
      "debut": null,
      "type": "Anime",
      "rating": "4.2",
      "episodes": {
        "nextEpisodeDate": null
      }
    },
    {
      "title": "Mahou Shoujo? Naria☆Girls",
      "poster": "https://animeflv.nethttps://animeflv.net/uploads/animes/covers/2506.jpg",
      "synopsis": "Anime 4.3La historia gira en torno a unas chicas llamadas Urara, Hanabi y Inaho, que aspiran a alcanzar la fama en todo Japón haciendo versiones anime de ellas mismas. Para atraer a todo el mundo, desde pequeños a adultos, deciden que el género sea magical girls. Ahora tienen como objetivo emitir una temporada de anime.",
      "debut": null,
      "type": "Anime",
      "rating": "4.3",
      "episodes": {
        "nextEpisodeDate": null
      }
    },
  ]
}
```

## getAnimeCharacters([title])
**This function is not yet stable, it may present an error in trying to return some characters. For now it is functional, but not quite stable.❗❗**

*To obtain the photo of the characters of each anime, the `title` property must be passed as a parameter.*

*If you use any API entry point you will see that the title property* 
```JSON
"title": "Tokyo Ghoul"
``` 
*for each anime will be available, you should take the value of the title and pass it to the next url.*
  

`https://animeflv.chrismichael.now.sh/api/v1/AnimeCharacters/${title}`


```json
// 20200129171904
// http://localhost:5000/api/v1/AnimeCharacters/Tokyo%20Ghoul

{
  "characters": [
    {
      "character": {
        "id": 87275,
        "name": "Kaneki, Ken",
        "image": "https://cdn.myanimelist.net/images/characters/9/251339.jpg?s=788e4d76ff697c9ee67b65b68b6e8157",
        "role": "Main"
      }
    },
    {
      "character": {
        "id": 87277,
        "name": "Kirishima, Touka",
        "image": "https://cdn.myanimelist.net/images/characters/16/234699.jpg?s=10ef474344779135236911013b0925fc",
        "role": "Main"
      }
    },
    {
      "character": {
        "id": 113779,
        "name": "Abe, Maiko",
        "image": "https://cdn.myanimelist.net/images/characters/16/259779.jpg?s=67ed4d2dfb07359d050eb3a0ec91ca8d",
        "role": "Supporting"
      }
    },
    {
      "character": {
        "id": 99671,
        "name": "Amon, Koutarou",
        "image": "https://cdn.myanimelist.net/images/characters/13/251453.jpg?s=cf7bdc7cb409357d69720b0aee488ff6",
        "role": "Supporting"
      }
    },
    // .......
  ]
}
```

## getAnimeVideoPromo([title])
**This function is not yet stable, it may present an error in trying to return some trailers. For now it is functional, but not quite stable.❗❗**

*To get the list of trailers for each anime, you must use the `title` property and pass it to the function as a parameter.*

*If you use any API entry point you will see that the title property* 
```JSON
"title": "Tokyo Ghoul"
``` 
*for each anime will be available, you should take the value of the title and pass it to the next url.*
  

`https://animeflv.chrismichael.now.sh/api/v1/AnimeTrailers/${title}`



```json
// 20200129191334
// http://localhost:5000/api/v1/AnimeTrailers/Tokyo%20Ghoul

{
  "trailers": [
    {
      "title": "PV Madman ver.",
      "previewImage": "https://i.ytimg.com/vi/vGuQeQsoRgU/mqdefault.jpg",
      "videoURL": "https://www.youtube.com/embed/vGuQeQsoRgU?enablejsapi=1&wmode=opaque&autoplay=1"
    },
    {
      "title": "PV AnimeLab ver.",
      "previewImage": "https://i.ytimg.com/vi/ETHpMMV8rJU/mqdefault.jpg",
      "videoURL": "https://www.youtube.com/embed/ETHpMMV8rJU?enablejsapi=1&wmode=opaque&autoplay=1"
    }
  ]
}
```

## getAnimeInfo([id] , [title])
**This function is not yet stable, it may present an error in trying to return some anime information. For now it is functional, but not quite stable.❗❗**

*To get the anime info of a particula anime, you must use the `id` and the `title` property and pass it to the function as a parameter.*

*For example:* 
```JSON
"id": "anime/5226/tokyo-ghoul"
"title": "Tokyo Ghoul"
``` 

*You can also use the URL of the api*
`https://animeflv.chrismichael.now.sh/api/v1/GetAnimeInfo/${id}/${title}`

```json
// 20200207123040
// http://localhost:5000/api/v1/GetAnimeInfo/anime/5226/tokyo-ghoul/Tokyo%20Ghoul

{
  "info": [
    {
      "id": "anime/5226/tokyo-ghoul",
      "title": "Tokyo Ghoul",
      "poster": "https://animeflv.net/uploads/animes/covers/1415.jpg",
      "banner": "https://animeflv.net/uploads/animes/banners/1415.jpg",
      "synopsis": "Extraños asesinatos se están sucediendo uno tras otro en Tokyo. Debido a las pruebas encontradas en las escenas, la policía concluye que los ataques son obra de ghouls que se comen a las personas. Kaneki y Hide, dos compañeros de clase, llegan a la conclusión de que si nadie ha visto nunca a esos necrófagos es porque toman la apariencia de seres humanos para ocultarse.\nPoco sabían entonces de que su teoría sería más cierta de lo que pensaban cuando Kaneki es herido de gravedad por un monstruo y comienza a atraerle cada vez más la carne humana…",
      "debut": "Finalizado",
      "type": "Anime",
      "rating": "4.5",
      "genres": [
        "accion",
        "drama",
        "misterio",
        "psicologico",
        "seinen",
        "sobrenatural",
        "terror"
      ],
      "episodes": [
        {
          "nextEpisodeDate": null
        },
        {
          "episode": 12,
          "id": "28800/tokyo-ghoul-12",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/12/th_3.jpg"
        },
        {
          "episode": 11,
          "id": "28459/tokyo-ghoul-11",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/11/th_3.jpg"
        },
        {
          "episode": 10,
          "id": "28001/tokyo-ghoul-10",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/10/th_3.jpg"
        },
        {
          "episode": 9,
          "id": "27741/tokyo-ghoul-9",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/9/th_3.jpg"
        },
        {
          "episode": 8,
          "id": "27092/tokyo-ghoul-8",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/8/th_3.jpg"
        },
        {
          "episode": 7,
          "id": "26689/tokyo-ghoul-7",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/7/th_3.jpg"
        },
        {
          "episode": 6,
          "id": "26529/tokyo-ghoul-6",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/6/th_3.jpg"
        },
        {
          "episode": 5,
          "id": "26431/tokyo-ghoul-5",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/5/th_3.jpg"
        },
        {
          "episode": 4,
          "id": "26373/tokyo-ghoul-4",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/4/th_3.jpg"
        },
        {
          "episode": 3,
          "id": "26278/tokyo-ghoul-3",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/3/th_3.jpg"
        },
        {
          "episode": 2,
          "id": "26188/tokyo-ghoul-2",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/2/th_3.jpg"
        },
        {
          "episode": 1,
          "id": "26103/tokyo-ghoul-1",
          "imagePreview": "https://cdn.animeflv.net/screenshots/1415/1/th_3.jpg"
        }
      ],
      "moreInfo": [
        {
          "titleJapanese": "東京喰種-トーキョーグール-",
          "source": "Manga",
          "totalEpisodes": 12,
          "status": "Finished Airing",
          "aired": {
            "from": "2014-07-04T00:00:00+00:00",
            "to": "2014-09-19T00:00:00+00:00",
            "string": "Jul 4, 2014 to Sep 19, 2014"
          },
          "duration": "24 min per ep",
          "rank": 686,
          "popularity": 6,
          "members": 1373048,
          "favorites": 35697,
          "premiered": "Summer 2014",
          "broadcast": "Fridays at 00:00 (JST)",
          "producers": {
            "names": [
              "Marvelous AQL",
              "TC Entertainment",
              "Shueisha"
            ]
          },
          "licensors": {
            "names": [
              "Funimation"
            ]
          },
          "studios": {
            "names": [
              "Studio Pierrot"
            ]
          },
          "openingThemes": [
            "\"unravel\" by TK from Ling Tosite Sigure (eps 2-11)"
          ],
          "endingThemes": [
            "\"unravel\" by TK from Ling Tosite Sigure (eps 1, 12)",
            "\"Seijatachi (聖者たち)\" by People In The Box (eps 2-11)"
          ]
        }
      ],
      "promoList": [
        {
          "title": "PV Madman ver.",
          "previewImage": "https://i.ytimg.com/vi/vGuQeQsoRgU/mqdefault.jpg",
          "videoURL": "https://www.youtube.com/embed/vGuQeQsoRgU?enablejsapi=1&wmode=opaque&autoplay=1"
        },
        {
          "title": "PV AnimeLab ver.",
          "previewImage": "https://i.ytimg.com/vi/ETHpMMV8rJU/mqdefault.jpg",
          "videoURL": "https://www.youtube.com/embed/ETHpMMV8rJU?enablejsapi=1&wmode=opaque&autoplay=1"
        }
      ],
      "charactersList": [
        {
          "character": {
            "id": 87275,
            "name": "Kaneki, Ken",
            "image": "https://cdn.myanimelist.net/images/characters/9/251339.jpg?s=788e4d76ff697c9ee67b65b68b6e8157",
            "role": "Main"
          }
        },
        {
          "character": {
            "id": 87277,
            "name": "Kirishima, Touka",
            "image": "https://cdn.myanimelist.net/images/characters/16/234699.jpg?s=10ef474344779135236911013b0925fc",
            "role": "Main"
          }
        },
        {
          "character": {
            "id": 113779,
            "name": "Abe, Maiko",
            "image": "https://cdn.myanimelist.net/images/characters/16/259779.jpg?s=67ed4d2dfb07359d050eb3a0ec91ca8d",
            "role": "Supporting"
          }
        },
        {
          "character": {
            "id": 99671,
            "name": "Amon, Koutarou",
            "image": "https://cdn.myanimelist.net/images/characters/13/251453.jpg?s=cf7bdc7cb409357d69720b0aee488ff6",
            "role": "Supporting"
          }
        },
        {
          "character": {
            "id": 111767,
            "name": "Arima, Kishou ",
            "image": "https://cdn.myanimelist.net/images/characters/5/257935.jpg?s=774409608456392dcaca31f53234bb53",
            "role": "Supporting"
          }
        },
      ]
    }
  ]
}
```

*Then you pass the `id` value as an argument of the function.*

```javascript
const id = "28800/tokyo-ghoul-12"
const links = downloadLinksByEpsId(id).then(res =>{
  // ...
})
```

*Or you can choose to use the URL path of the api e.g. :* 

`https://animeflv.chrismichael.now.sh/api/v1/DownloadLinksByEpsId/${id}`


```json
// 20200207225145
// http://localhost:5000/api/v1/DownloadLinksByEpsId/28800/tokyo-ghoul-12

{
  "downloads": [
    {
      "server": "MEGA",
      "url": "http://ouo.io/s/y0d65LCP?s=https%3A%2F%2Fmega.nz%2F%23%2155InSaxI%215JTxVNA29LCFNr7c1Fxg0PUBQPVQyXBo4aVF3e06jN0"
    },
    {
      "server": "Zippyshare",
      "url": "http://ouo.io/s/y0d65LCP?s=https%3A%2F%2Fwww61.zippyshare.com%2Fv%2F4KKPr5XK%2Ffile.html"
    },
    {
      "server": "Openload",
      "url": "http://ouo.io/s/y0d65LCP?s=https%3A%2F%2Fopenload.co%2Ff%2FsPXbBXnFikU%2F"
    }
  ]
}
```



## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---

### **📚 Projects that use the API**

<table>
  <tr>
    <td align="center">
      <a href="https://aruppi.github.io/">
        <img src="https://avatars2.githubusercontent.com/u/38753425?s=200&v=4" width="75px;" alt="Jeluchu"/><br />
          <sub>
            <b>Aruppi</b>
          </sub>
      </a><br/>
        <sub>Anime y Manga</sub>
      </a>
    </td>
  </tr>
</table>


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2020 [Chris Michael](http://personal-porfolio.chrismichael.now.sh).
