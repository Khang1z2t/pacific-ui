import Home from '~/pages/Home';
import Destination from '~/pages/Destination';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/destination', component: Destination },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };