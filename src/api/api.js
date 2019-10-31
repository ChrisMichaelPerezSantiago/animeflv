const cheerio = require('cheerio');
const fetch = require('node-fetch');
const {BASE_URL , SEARCH_URL , BROWSE_URL , ANIME_VIDEO_URL} = require('./urls');


const search = async(query) =>{
  const res = await fetch(`${SEARCH_URL}${query}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.Container ul.ListAnimes li article').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.Description a.Button').attr('href');
    const title = $element.find('a h3').text();
    const poster = BASE_URL + $element.find('a div.Image figure img').attr('src')
    const type = $element.find('div.Description p span.Type').text();
    const synopsis = $element.find('div.Description p').text().trim();
    const rating = $element.find('div.Description p span.Vts').text();
    const debut = $element.find('a span.Estreno').text().toLowerCase();
    promises.push(animeEpisodesHandler(id).then(extra => ({
      title: title || null,
      //id: id || null,
      poster: poster || null,
      synopsis: synopsis || null,
      debut: debut || null,
      type: type || null,
      rating: rating || null,
      episodes: extra || null
    })))
  })
  return Promise.all(promises);
};

const animeByState = async(state , order , page ) => {
  const res = await fetch(`${BROWSE_URL}type%5B%5D=tv&status%5B%5D=${state}&order=${order}&page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.Container ul.ListAnimes li article').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.Description a.Button').attr('href');
    const title = $element.find('a h3').text();
    const poster = BASE_URL + $element.find('a div.Image figure img').attr('src')
    const type = $element.find('div.Description p span.Type').text();
    const synopsis = $element.find('div.Description p').text().trim();
    const rating = $element.find('div.Description p span.Vts').text();
    const debut = $element.find('a span.Estreno').text().toLowerCase();
    promises.push(animeEpisodesHandler(id).then(extra => ({
      title: title || null,
      //id: id || null,
      poster: poster || null,
      synopsis: synopsis || null,
      debut: debut || null,
      type: type || null,
      rating: rating || null,
      episodes: extra || null
    })))
  })
  return Promise.all(promises);
};

const tv = async(order , page) => {
  const res = await fetch(`${BROWSE_URL}type%5B%5D=tv&order=${order}&page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.Container ul.ListAnimes li article').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.Description a.Button').attr('href');
    const title = $element.find('a h3').text();
    const poster = BASE_URL + $element.find('a div.Image figure img').attr('src')
    const type = $element.find('div.Description p span.Type').text();
    const synopsis = $element.find('div.Description p').text().trim();
    const rating = $element.find('div.Description p span.Vts').text();
    const debut = $element.find('a span.Estreno').text().toLowerCase();
    promises.push(animeEpisodesHandler(id).then(extra => ({
      title: title || null,
      //id: id || null,
      poster: poster || null,
      synopsis: synopsis || null,
      debut: debut || null,
      type: type || null,
      rating: rating || null,
      episodes: extra || null
    })))
  })
  return Promise.all(promises);
};

const ova = async(order , page ) => {
  const res = await fetch(`${BROWSE_URL}type%5B%5D=ova&order=${order}&page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.Container ul.ListAnimes li article').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.Description a.Button').attr('href');
    const title = $element.find('a h3').text();
    const poster = BASE_URL + $element.find('a div.Image figure img').attr('src')
    const type = $element.find('div.Description p span.Type').text();
    const synopsis = $element.find('div.Description p').text().trim();
    const rating = $element.find('div.Description p span.Vts').text();
    const debut = $element.find('a span.Estreno').text().toLowerCase();
    promises.push(animeEpisodesHandler(id).then(extra => ({
      title: title || null,
      //id: id || null,
      poster: poster || null,
      synopsis: synopsis || null,
      debut: debut || null,
      type: type || null,
      rating: rating || null,
      episodes: extra || null
    })))
  })
  return Promise.all(promises);
};

const special = async(order , page) => {
  const res = await fetch(`${BROWSE_URL}type%5B%5D=special&order=${order}&page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.Container ul.ListAnimes li article').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.Description a.Button').attr('href');
    const title = $element.find('a h3').text();
    const poster = BASE_URL + $element.find('a div.Image figure img').attr('src')
    const type = $element.find('div.Description p span.Type').text();
    const synopsis = $element.find('div.Description p').text().trim();
    const rating = $element.find('div.Description p span.Vts').text();
    const debut = $element.find('a span.Estreno').text().toLowerCase();
    promises.push(animeEpisodesHandler(id).then(extra => ({
      title: title || null,
      //id: id || null,
      poster: poster || null,
      synopsis: synopsis || null,
      debut: debut || null,
      type: type || null,
      rating: rating || null,
      episodes: extra || null
    })))
  })
  return Promise.all(promises);
};

const movies = async(order , page) => {
  const res = await fetch(`${BROWSE_URL}type%5B%5D=movie&order=${order}&page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.Container ul.ListAnimes li article').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.Description a.Button').attr('href');
    const title = $element.find('a h3').text();
    const poster = BASE_URL + $element.find('a div.Image figure img').attr('src')
    const type = $element.find('div.Description p span.Type').text();
    const synopsis = $element.find('div.Description p').text().trim();
    const rating = $element.find('div.Description p span.Vts').text();
    const debut = $element.find('a span.Estreno').text().toLowerCase();
    promises.push(animeEpisodesHandler(id).then(extra => ({
      title: title || null,
      //id: id || null,
      poster: poster || null,
      synopsis: synopsis || null,
      debut: debut || null,
      type: type || null,
      rating: rating || null,
      episodes: extra || null
    })))
  })
  return Promise.all(promises);
};

const animeByGenres = async(genre , order , page) => {
  const res = await fetch(`${BROWSE_URL}genre%5B%5D=${genre}&order=${order}&page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.Container ul.ListAnimes li article').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.Description a.Button').attr('href');
    const title = $element.find('a h3').text();
    const poster = BASE_URL + $element.find('a div.Image figure img').attr('src')
    const type = $element.find('div.Description p span.Type').text();
    const synopsis = $element.find('div.Description p').text().trim();
    const rating = $element.find('div.Description p span.Vts').text();
    const debut = $element.find('a span.Estreno').text().toLowerCase();
    promises.push(animeEpisodesHandler(id).then(extra => ({
      title: title || null,
      //id: id || null,
      poster: poster || null,
      synopsis: synopsis || null,
      debut: debut || null,
      type: type || null,
      rating: rating || null,
      episodes: extra || null
    })))
  })
  return Promise.all(promises);
};

const latestEpisodesAdded = async() =>{
  const res = await fetch(`${BASE_URL}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];
  $('div.Container ul.ListEpisodios li').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('a').attr('href').replace('/ver/' , '').trim();
    const title = $element.find('a strong.Title').text();
    const poster = BASE_URL + $element.find('a span.Image img').attr('src');
    const episode = parseInt($element.find('a span.Capi').text().match(/\d+/g) , 10);
    promises.push(getAnimeServers(id).then(servers => ({
      title: title || null,
      //id: id || null,
      poster: poster || null,
      episode: episode || null,
      servers: servers || null,
    })))
  })
  return await Promise.all(promises);
};

const latestAnimeAdded = async() =>{
  const res = await fetch(`${BASE_URL}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];
  $('div.Container ul.ListAnimes li article').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.Description a.Button').attr('href');
    const title = $element.find('a h3').text();
    const poster = BASE_URL + $element.find('a div.Image figure img').attr('src')
    const type = $element.find('div.Description p span.Type').text();
    const synopsis = $element.find('div.Description p').text().trim();
    const rating = $element.find('div.Description p span.Vts').text();
    const debut = $element.find('a span.Estreno').text().toLowerCase();
    promises.push(animeEpisodesHandler(id).then(extra => ({
      title: title || null,
      //id: id || null,
      poster: poster || null,
      synopsis: synopsis || null,
      debut: debut || null,
      type: type || null,
      rating: rating || null,
      episodes: extra || null
    })))
  })
  return await Promise.all(promises);
};

const animeEpisodesHandler = async(id) =>{
  const res = await fetch(`${BASE_URL}${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const scripts = $('script');
  const anime_info_ids = [];
  const anime_eps_data = [];
  let listByEps;

  try{
    Array.from({length: scripts.length} , (v , k) =>{
      const $script = $(scripts[k]);
      const contents = $script.html();
      if((contents || '').includes('var anime_info = [')) {
        let anime_info = contents.split('var anime_info = ')[1].split(';')[0];
        let dat_anime_info = JSON.parse(anime_info);
        anime_info_ids.push(dat_anime_info);
      }
      if((contents || '').includes('var episodes = [')) {
        let episodes = contents.split('var episodes = ')[1].split(';')[0];
        let eps_data = JSON.parse(episodes)
        anime_eps_data.push(eps_data);
      }
    });
    const animeId = anime_info_ids[0][2];
    let nextEpisodeDate = anime_info_ids[0][3] || null
    const amimeTempList = [];
    for(const [key , value] of Object.entries(anime_eps_data)){
      let episode = anime_eps_data[key].map(x => x[0]);
      let episodeId = anime_eps_data[key].map(x => x[1]);
      amimeTempList.push(episode , episodeId);
    }
    const animeListEps = [{nextEpisodeDate: nextEpisodeDate}];
    Array.from({length: amimeTempList[1].length} , (v , k) =>{
      let data = amimeTempList.map(x => x[k]);
      let episode = data[0];
      let id = data[1];
      let link = `${id}/${animeId}-${episode}`
      animeListEps.push({
        episode: episode,
        id: link
      })
    })
    listByEps = animeListEps.reduce((id , episodes) =>{
      id[episodes.episode] = episodes;
      return id;
    })
  }catch(err){
    console.error(err)
  }
  return listByEps;
};

const getAnimeServers = async(id) =>{
  const res = await fetch(`${ANIME_VIDEO_URL}${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const scripts = $('script');
  const servers = [];
  
  Array.from({length: scripts.length} , (v , k) =>{
    const $script = $(scripts[k]);
    const contents = $script.html();
    if((contents || '').includes('var videos = {')) {
      let videos = contents.split('var videos = ')[1].split(';')[0];
      let data = JSON.parse(videos)
      let serverList = data.SUB;
      servers.push(serverList)
    }
  });
  return servers[0];
};


module.exports = {
  latestAnimeAdded,
  latestEpisodesAdded,
  getAnimeServers,
  animeByGenres,
  animeByState,
  search,
  movies,
  special,
  ova,
  tv
};
