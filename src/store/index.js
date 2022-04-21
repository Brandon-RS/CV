import { createStore } from 'vuex'

let initUrl = 'https://res.cloudinary.com/test-service/image/upload/'

export default createStore({
  state: {
    projects: [
      { id: 0, name: 'Movies App', description: 'para buscar información sobre peliculas actualmente en cartelera' },
      { id: 1, name: 'MapBox App', description: 'util para revisar direcciones a través de geolocalizacón' },
      { id: 2, name: 'News', description: 'aquí puedes encontrar las noticias mas actuales de lo que pasa en el mundo' },
      { id: 3, name: 'QR Reader', description: 'util si deseas escanear códigos QR, tiene soporte para web y geolocalización' },
      { id: 4, name: 'Weather App', description: 'puedes revisar el clima de cualquier parte del mundo' },
      { id: 5, name: 'Products App', description: 'una herramienta útil para almecenar información basica de productos on-line' },
    ],
    education: [
      { id: 0, name: 'Colegio', description: 'San Francisco' },
      { id: 1, name: 'Universidad', description: 'UNTRM' },
      { id: 2, name: 'Profesión', description: 'Ingeniería de Sistemas' },
      { id: 3, name: 'Otros', description: 'Udemy, Mastermind' },
      { id: 4, name: 'Current', description: 'Actualmente estudio en UNTRM' },
    ],
    skills: [
      { id: 0, name: 'Java', color: '#ffadaf' },
      { id: 1, name: 'HTML', color: '#ffc9a2' },
      { id: 2, name: 'CSS', color: '#a2bcf5' },
      { id: 3, name: 'Dart', color: '#91caeb' },
      { id: 4, name: 'Flutter', color: '#91caeb' },
      { id: 5, name: 'JavaScript', color: '#fdbe9a' },
      { id: 6, name: 'VUE', color: '#86dfb5' },
      { id: 7, name: 'Linux', color: '#d1d6de' },
      { id: 8, name: 'MySQL', color: '#8ce4db' },
      { id: 9, name: 'Sass', color: '#f7a5b2' },
      { id: 10, name: 'PHP', color: '#a1c0f3' },
      { id: 11, name: 'Python', color: '#ffadb0' },
      { id: 12, name: 'Firebase', color: '#fdbe9a' },
      { id: 14, name: 'Shell', color: '#d4d8df' },
    ],
    fav: [
      { id: 0, name: 'Flutter', img: initUrl + 'v1650489246/flutter_logo_eg5eif.png' },
      { id: 1, name: 'Java', img: initUrl + 'v1650491326/java_logo_a8xidr.png' },
      { id: 2, name: 'Vue Js', img: initUrl + 'v1650489246/vue_logo_ut7y14.png' },
      { id: 3, name: 'Linux', img: initUrl + 'v1650489246/linux_logo_il82zn.png' },
    ],
    social: [
      { id: 0, name: 'brandon.rsantillan@gmail.com', img: initUrl + 'v1650491086/email_klfzwo.png' },
      { id: 1, name: 'Brandon-RS', img: initUrl + 'v1650490893/github_zqywxu.png' },
      { id: 2, name: 'brandon_rs', img: initUrl + 'v1650490893/instagram_vjl2io.png' },
      { id: 3, name: 'brandon.dev', img: initUrl + 'v1650490893/url_thkizk.png' },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
