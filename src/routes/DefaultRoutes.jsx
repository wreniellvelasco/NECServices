import { lazy } from 'react';

// project import
import DefaultLayout from '../layout/DefaultLayout.jsx';
import PageNotFound from "./PageNotFound.jsx";
import Loadable from "../components/Loadable.jsx";

const TestUI = Loadable(lazy(() => import('../SamplecompNEC/MainBody.jsx')));
const CorpEyeCareProgUI = Loadable(lazy(() => import('../NECPages/CorpEyeCareProg.jsx')));
const StandardEyeExamUI = Loadable(lazy(() => import('../NECPages/StandardEyeExam.jsx')));
const PremiumEyeExamUI = Loadable(lazy(() => import('../NECPages/PremiumEyeExam.jsx')));
const PediatricEyeExamUI = Loadable(lazy(() => import('../NECPages/PediatricEyeExam.jsx')));
const FollowUpEyeExamUI = Loadable(lazy(() => import('../NECPages/FollowUpEyeExam.jsx')));
const ExecutiveEyeExamUI = Loadable(lazy(() => import('../NECPages/ExecutiveEyeExam.jsx')));


const DefaultRoutes = {
    path: '/',
    element: <DefaultLayout />,
    children: [
        {
            path: '*',
            element: <PageNotFound />
        },
        {
            path: '/',
            element: <TestUI />
        },
        {
            path: '/corpeyecareprog',
            element: <CorpEyeCareProgUI />
        },
        {
            path: '/standardeyeexam',
            element: <StandardEyeExamUI />
        }



    ]
};

export default DefaultRoutes;