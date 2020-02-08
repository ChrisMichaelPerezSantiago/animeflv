const app = require('../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

describe('> server ...' , () =>{
  it('Welcome user to animeflv api' , ok =>{
    chai
      .request(app)
      .get('/')
      .end((err , res) =>{
        expect(res).to.have.status(200);
        expect(res.headers['content-type']).contains('application/json');
        ok();
      });
  });
  it('MAIN ENTRY - GET Method /api/v1/' , ok =>{
    chai
      .request(app)
      .get('/api/v1/')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.entries).to.be.an('array');
        ok();
      });
  });
});

describe('> entries ...' , () =>{
  it('GET Method /api/v1/LatestAnimeAdded' , ok =>{
    chai
      .request(app)
      .get('/api/v1/LatestAnimeAdded')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.animes).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/LatestEpisodesAdded' , ok =>{
    chai
      .request(app)
      .get('/api/v1/LatestEpisodesAdded')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.episodes).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/GetAnimeServers/:[id]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/GetAnimeServers/26103/tokyo-ghoul-1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.servers).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/Genres/accion/rating/1' , ok =>{
    chai
      .request(app)
      .get('/api/v1/Genres/:[genre]/:[sortBy]/:[page]')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.animes).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/Movies/:[sortBy]/:[page]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/Movies/title/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.movies).to.be.an('array');
      })
      ok();
  });
  it('/api/v1/Special/:[sortBy]/:[page]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/Special/added/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.special).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/Ova/:[sortBy]/:[page]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/Ova/default/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.ova).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/TV/:[sortBy]/:[page]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/TV/default/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.tv).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/AnimeByState/:[state]/:[order]/:[page]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/AnimeByState/1/default/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.animes).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/Search/:[query]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/Search/tokyo')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.search).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/AnimeCharacters/:[title]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/AnimeCharacters/Tokyo Ghoul')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.characters).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/AnimeTrailers/:[title]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/AnimeTrailers/Tokyo Ghoul')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.trailers).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/GetAnimeInfo/:[id]/:[title]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/GetAnimeInfo/anime/5226/tokyo-ghoul/Tokyo Ghoul')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.info).to.be.an('array');
      })
      ok();
  });
  it('GET Method /api/v1/DownloadLinksByEpsId/:[epsId]' , ok =>{
    chai
      .request(app)
      .get('/api/v1/DownloadLinksByEpsId/28800/tokyo-ghoul-12')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.downloads).to.be.an('array');
      })
      ok();
  });
});