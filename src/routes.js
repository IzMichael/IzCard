// https://github.com/jorgegorka/svelte-router/blob/master/README.md

import Index from './routes/Index.svelte'
import Mobile from './routes/Mobile.svelte'

const routes = [
    {
        name: '/',
        component: Index,
    },
    {
        name: '/mobile',
        component: Mobile,
    }
]

export {
    routes
}