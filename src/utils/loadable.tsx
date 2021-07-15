import React, { lazy, Suspense } from 'react';

interface Opts {
  fallback: React.ReactNode;
}

export const lazyLoad = (importFnc, selectFnc?, opts: Opts = { fallback: null }) => {
	let lazyFactory = importFnc;
	if (selectFnc) {
		lazyFactory = () => importFnc().then(module => ({default: selectFnc(module)}));
	}
	const LazyComponent = lazy(lazyFactory);

	return props => (
		<Suspense fallback={opts.fallback}>
			<LazyComponent {...props} />
		</Suspense>
	)
};
 