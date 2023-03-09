import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent< JSXComponent > | JSXComponent;
    name: string;
}

const LazyLayout = lazy( () => import('../01-lazyload/layout/LazyLayout') );
const Lazy2 = lazy( () => import('../01-lazyload/pages/LazyPage2') );
const Lazy3 = lazy( () => import('../01-lazyload/pages/LazyPage3') );

export const routes: Route[] = [ //Clase 37
    {
        Component: LazyLayout,
        name: 'Lazy Dashboard',
        path: '/lazyload/*',
        to: '/lazyload/',
    },
    {
        Component: NoLazy,
        name: 'No Lazy',
        path: 'no-lazy',
        to: '/no-lazy',
    }
]
