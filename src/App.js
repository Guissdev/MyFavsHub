import { useState, useEffect } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';
import Rodape from './Componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Livros',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Esportes',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Filmes',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Séries',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Cartoons',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Games',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Animes',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const coloboradoresIniciais = [
    {
      nome: 'As 48 leis do poder',
      imagem: 'https://m.media-amazon.com/images/I/617iS--XOQL._AC_UF1000,1000_QL80_.jpg',
      time: 'Livros',
    },
    {
      nome: 'Meditações - Marcus Aurelius',
      imagem: 'https://m.media-amazon.com/images/I/51cQEdN9KuL._AC_UF1000,1000_QL80_.jpg',
      time: 'Livros',
    },
    {
      nome: 'O poder do agora',
      imagem: 'https://m.media-amazon.com/images/I/714FbKtXS+L._AC_UF1000,1000_QL80_.jpg',
      time: 'Livros',
    },
    {
      nome: 'Musculação',
      imagem: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/02/26/1009107347-musculacao-1.jpg',
      time: 'Esportes',
    },
    {
      nome: 'Natação',
      imagem: 'https://d1cx2112giyqkv.cloudfront.net/images/banners/488x579_GoldenYears_HeroImage5.2303271458260.webp',
      time: 'Esportes',
    },
    {
      nome: 'Muay Thai',
      imagem: 'https://decathlonpro.vtexassets.com/arquivos/ids/2691543/muay-thai-short-900-xl-3g8.jpg?v=637481390247030000',
      time: 'Esportes',
    },
    {
      nome: 'Interestellar',
      imagem: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      time: 'Filmes',
    },
    {
      nome: 'Top Gun',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg',
      time: 'Filmes',
    },
    {
      nome: 'Forest Gump',
      imagem: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f94723a60a5fa943bbb519e7e7e2c5704b97df23c040ba2294d69cce5ebcb225._RI_TTW_.jpg',
      time: 'Filmes',
    },
    {
      nome: 'Peaky Blinders',
      imagem: 'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg',
      time: 'Séries',
    },
    {
      nome: 'Lucifer',
      imagem: 'https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw',
      time: 'Séries',
    },
    {
      nome: 'La Casa de Papel',
      imagem: 'https://portalpopline.com.br/wp-content/uploads/2021/11/la-casa-de-papel-toquio.jpg',
      time: 'Séries',
    },
    {
      nome: 'Hora de Aventura',
      imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/14/04/22/09/03/422873.jpg',
      time: 'Cartoons',
    },
    {
      nome: 'Pica-Pau',
      imagem: 'https://br.web.img3.acsta.net/pictures/17/01/05/16/37/506795.jpg',
      time: 'Cartoons',
    },
    {
      nome: 'O Incrível Mundo de Gumball',
      imagem: 'https://media.fstatic.com/5vnBmg6aK4y8bXGqw1ZfWWIcKFk=/322x478/smart/filters:format(webp)/media/movies/covers/2021/11/The_Amazing_World_of_Gumball_Season_5.jpg',
      time: 'Cartoons',
    },
    {
      nome: 'Valorant',
      imagem: 'https://img.redbull.com/images/c_crop,x_572,y_0,h_1440,w_1080/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2020/6/2/akoqciwp4hrh5fhrbuba/games-valorant-capa',
      time: 'Games',
    },
    {
      nome: 'Minecraft',
      imagem: 'https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png',
      time: 'Games',
    },
    {
      nome: 'Crash Bandicoot',
      imagem: 'https://image.api.playstation.com/vulcan/img/rnd/202111/1918/psoOkDbYuMdr1RsJo6TpU6bg.png',
      time: 'Games',
    },
    {
      nome: 'Naruto - Shippuden',
      imagem: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/01ec367b44f0a568430a957e042639af.jpe',
      time: 'Animes',
    },
    {
      nome: 'Kimetsu no Yaiba',
      imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/2ZfAUG5CTXdM34S1OhmMW1zF.jpg',
      time: 'Animes',
    },
    {
      nome: 'Jujutsu Kaisen',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
      time: 'Animes',
    },
  ]

  const [colaboradores, setColaboradores] = useState([])
    useEffect(() => {
      setColaboradores(coloboradoresIniciais);
    }, []);


  const aoNovoColaboradorAdicionado = (colaborador) => {
    //    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />
    </div>

  );
}

export default App;
