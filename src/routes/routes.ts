import { LazyExoticComponent } from 'react';

import { FormikBasicPage, FormikComponentAbstractation, FormikComponentsPage, FormikYupPage, RegisterPage } from '../03-forms/pages'

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
    },
    {
        to: '/formik-basic',
        path: '/formik-basic',
        Component: FormikBasicPage,
        name: 'Formik Basic Page',
    },
    {
        to: '/formik-yup',
        path: '/formik-yup',
        Component: FormikYupPage,
        name: 'Formik Yup Page',
    },
    {
        to: '/formik-components',
        path: '/formik-components',
        Component: FormikComponentsPage,
        name: 'Formik Components Page',
    },
    {
        to: '/formik-components-abstractation',
        path: '/formik-components-abstractation',
        Component: FormikComponentAbstractation,
        name: 'Formik Abstractation Page',
    }
]
