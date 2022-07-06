import Game from './pages/Game/Game.vue'
import Intro from './pages/Introductions/Introductions.vue'
import Tutorial from './pages/Tutorial/Tutorial.vue'
import Almanac from './pages/Almanac/Almanac.vue'

export default [
    { path: '/', component: Game, name: 'game' },
    { path: '/intro', component: Intro, name: 'intro' },
    { path: '/tutorial', component: Tutorial, name: 'tutorial' },
    { path: '/almanac', component: Almanac, name: 'almanac' }
]