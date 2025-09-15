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
const ExecPlusEyeExamUI = Loadable(lazy(() => import('../NECPages/ExecPlusEyeExam.jsx')));
//Other Packages import
const Biometry = Loadable(lazy(() => import('../NECPages/Other Packages/Biometry.jsx')));
const CycloplegicEyedrops = Loadable(lazy(() => import('../NECPages/Other Packages/CycloplegicEyedrops.jsx')));
const ForeignBodiesRemoval = Loadable(lazy(() => import('../NECPages/Other Packages/ForeignBodiesRemoval.jsx')));
const FSAirDoc = Loadable(lazy(() => import('../NECPages/Other Packages/FSAirDoc.jsx')));
const FSKanghua = Loadable(lazy(() => import('../NECPages/Other Packages/FSKanghua.jsx')));
const IntraOcularPressureAssessment = Loadable(lazy(() => import('../NECPages/Other Packages/IntraOcularPressureAssessment.jsx')));
const IshiharaColVisTest = Loadable(lazy(() => import('../NECPages/Other Packages/IshiharaColVisTest.jsx')));
const IshiharaWFarnsworth = Loadable(lazy(() => import('../NECPages/Other Packages/IshiharaWFarnsworth.jsx')));
const OrthoKeratologyLens = Loadable(lazy(() => import('../NECPages/Other Packages/OrthoKeratologyLens.jsx')));
const OrthoKeratologyLensFitting = Loadable(lazy(() => import('../NECPages/Other Packages/OrthoKeratologyLensFitting.jsx')));
const PerimetryVisFieldTest = Loadable(lazy(() => import('../NECPages/Other Packages/PerimetryVisFieldTest.jsx')));
const Topography = Loadable(lazy(() => import('../NECPages/Other Packages/Topography.jsx')));
const VisionTherapy = Loadable(lazy(() => import('../NECPages/Other Packages/VisionTherapy.jsx')));
const VisPerfAssessment = Loadable(lazy(() => import('../NECPages/Other Packages/VisPerfAssessment.jsx')));

//ServicePageui
const ServicePageUI = Loadable(lazy(() => import('../NECPages/Components/ServicePageUI.jsx')));


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
        },
        {
            path: '/premiumeyeexam',
            element: <PremiumEyeExamUI />
        },
        {
            path: '/pediatriceyeexam',
            element: <PediatricEyeExamUI />
        },
        {
            path: '/followupeyeexam',
            element: <FollowUpEyeExamUI/>
        },
        {
          path: '/executiveeyeexam',
          element: <ExecutiveEyeExamUI />
        },
        {
            path: '/execpluseyeexam',
            element: <ExecPlusEyeExamUI />
        },
        {
          path: '/biometry',
          element: <Biometry />
        },
        {
            path: '/cycloplegiceyedrops',
            element: <CycloplegicEyedrops />
        },
        {
            path: '/foreignbodiesremoval',
            element: <ForeignBodiesRemoval />
        },
        {
            path: '/fsairdoc',
            element: <FSAirDoc />
        },
        {
            path: '/fskanghua',
            element: <FSKanghua />
        },
        {
            path: '/intraocularpressureassessment',
            element: <IntraOcularPressureAssessment />
        },
        {
            path: '/ishiharacolvistest',
            element: <IshiharaColVisTest />
        },
        {
            path: '/ishiharawfarnsworth',
            element: <IshiharaWFarnsworth />
        },
        {
            path: '/orthokeratologylens',
            element: <OrthoKeratologyLens />
        },
        {
            path: '/orthokeratologylensfitting',
            element: <OrthoKeratologyLensFitting />
        },
        {
            path: '/perimetryvisfieldtest',
            element: <PerimetryVisFieldTest />
        },
        {
            path: '/topography',
            element: <Topography />
        },
        {
            path: '/visiontherapy',
            element: <VisionTherapy />
        },
        {
            path: '/visperfassessment',
            element: <VisPerfAssessment />
        },
        {
            path: "/services",
            element: <ServicePageUI />
        }




    ]
};

export default DefaultRoutes;