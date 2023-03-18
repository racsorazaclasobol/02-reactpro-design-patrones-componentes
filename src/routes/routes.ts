import { lazy, LazyExoticComponent } from 'react';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent< JSXComponent > | JSXComponent;
    name: string;
}

export const routes: Route[] = [ 
    {
        to: '/register',
        path: '/register',
        Component: RegisterPage,
        name: 'Register Page',
    }
]
