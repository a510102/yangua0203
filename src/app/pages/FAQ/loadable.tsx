import { lazyLoad } from '../../../utils/loadable';

export default lazyLoad(
	() => import('.'),
	module => module.FAQ,
);