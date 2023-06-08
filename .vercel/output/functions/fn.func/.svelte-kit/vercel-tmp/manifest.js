export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8c77e3e4.js","app":"_app/immutable/entry/app.583aff0f.js","imports":["_app/immutable/entry/start.8c77e3e4.js","_app/immutable/chunks/index.838feb98.js","_app/immutable/chunks/singletons.932209fc.js","_app/immutable/entry/app.583aff0f.js","_app/immutable/chunks/index.838feb98.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/historical",
				pattern: /^\/api\/historical\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/historical/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
