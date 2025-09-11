import { useRoutes } from 'react-router-dom';

import DefaultRoutes from './DefaultRoutes.jsx';

export default function SystemRoutes() {
    return useRoutes([DefaultRoutes]);
}