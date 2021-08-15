/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d6c95f62e03fb580d9b5d2999ffadb02"
  },
  {
    "url": "about/index.html",
    "revision": "55027ec3e937816e6ed2db175e224d03"
  },
  {
    "url": "additional/index.html",
    "revision": "3094ed86e596308e2c3388f5eb43ecb4"
  },
  {
    "url": "aktionen/index.html",
    "revision": "d9b320bbeb93d15d7fc659f1953c9147"
  },
  {
    "url": "assets/css/0.styles.9c4dbd78.css",
    "revision": "22923c56c0b9220873c232f1048e4cdd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0227936b.js",
    "revision": "f3612ca025d64af7d663b2e946981bf5"
  },
  {
    "url": "assets/js/11.c30b573c.js",
    "revision": "b19cb0dff26cb9a17c160f3c6d2cf5dd"
  },
  {
    "url": "assets/js/12.5a2eb8a8.js",
    "revision": "9fc0b98d3ecad83df9babb1bc256ffe2"
  },
  {
    "url": "assets/js/13.43f51f73.js",
    "revision": "90302b90bfc6070a971b8bbf5b5ecb0b"
  },
  {
    "url": "assets/js/14.9c69fe7c.js",
    "revision": "319f72ae17bec2def5823b7a5416b60d"
  },
  {
    "url": "assets/js/15.bca647e7.js",
    "revision": "53913499429b8e95d73f1389389e632f"
  },
  {
    "url": "assets/js/16.d60d6f1c.js",
    "revision": "ad5ca18c29339fa348129f680d3df554"
  },
  {
    "url": "assets/js/17.18f92a47.js",
    "revision": "6e813cf2ac6c25110e4ab4816d89d84c"
  },
  {
    "url": "assets/js/18.45f2b509.js",
    "revision": "4de6b82d8e8b293bffffcd4c929aa043"
  },
  {
    "url": "assets/js/19.7b754d79.js",
    "revision": "3fd8f02d1f7741494b2b812e2b82a6b3"
  },
  {
    "url": "assets/js/2.5b4242cf.js",
    "revision": "a7ccad21ff707b0febeacdfeb5d8f706"
  },
  {
    "url": "assets/js/20.9fc6ebf3.js",
    "revision": "146c33bcba318258e2542afdbc709954"
  },
  {
    "url": "assets/js/21.fa2e2111.js",
    "revision": "dfc6ec31d10c743875566be562167955"
  },
  {
    "url": "assets/js/22.fa3e3c3a.js",
    "revision": "bf94ad1e1ba54bf66adf2519f8fd7fd6"
  },
  {
    "url": "assets/js/23.ef346efb.js",
    "revision": "399897cc1a2e7d7e254560d9dc15dcea"
  },
  {
    "url": "assets/js/24.551eebb7.js",
    "revision": "bf657ecad0cafd5f137f7f725a9b14dd"
  },
  {
    "url": "assets/js/25.909fe7e9.js",
    "revision": "b102da04547bae79ab08c6785325f632"
  },
  {
    "url": "assets/js/26.f8c08e01.js",
    "revision": "eaedd667f677816239a924568a04c1ac"
  },
  {
    "url": "assets/js/27.6140c3af.js",
    "revision": "f4d323ebeff597e38542c3e9db751012"
  },
  {
    "url": "assets/js/28.35f238f9.js",
    "revision": "e32a77b088cde2e629d3181e18d62920"
  },
  {
    "url": "assets/js/29.21bb0e86.js",
    "revision": "488f7f0f649327c65a802a3e116db98a"
  },
  {
    "url": "assets/js/3.82d8ff16.js",
    "revision": "61b8124d372fed0e6c4e8224fb18dbaf"
  },
  {
    "url": "assets/js/30.9a820498.js",
    "revision": "06970014ce9f10b74e504cb6bf5404ad"
  },
  {
    "url": "assets/js/31.497b89c0.js",
    "revision": "2f73e732a3af83af1d2bc06b21867bda"
  },
  {
    "url": "assets/js/32.86d590f9.js",
    "revision": "337e9cc9529a656f50e0401e943fa492"
  },
  {
    "url": "assets/js/33.e0a0b88b.js",
    "revision": "3610b1c78ab4e580de80ce9fc2146aa6"
  },
  {
    "url": "assets/js/34.711ee4cc.js",
    "revision": "9d03893b4c95675e97105c0f1f3a34fe"
  },
  {
    "url": "assets/js/35.2d4e7694.js",
    "revision": "6f04c5bbd4e7af09c6174bdbd43378f2"
  },
  {
    "url": "assets/js/36.ea036633.js",
    "revision": "c4c1081e1d08d48acce2fce281954e69"
  },
  {
    "url": "assets/js/4.4de31e3d.js",
    "revision": "63d7025b32a68595b37b83c8b1d9b93b"
  },
  {
    "url": "assets/js/5.40b83fb8.js",
    "revision": "6fec3b81a4ca4e72891e2cc26eaa7b1b"
  },
  {
    "url": "assets/js/6.fe0d8327.js",
    "revision": "7d3645637438fab46cb16fbe68fd5dba"
  },
  {
    "url": "assets/js/7.d5eb02ac.js",
    "revision": "04ed7aa21cd780d39adf673a92309fb0"
  },
  {
    "url": "assets/js/8.84093283.js",
    "revision": "93b218a43f556bc4a1ce1787e923e0a5"
  },
  {
    "url": "assets/js/9.8b09fd24.js",
    "revision": "64a463a47c56a57e330393786d1a4d0b"
  },
  {
    "url": "assets/js/app.7716c9a1.js",
    "revision": "b6612a3479a1db4b5768953b26e8101e"
  },
  {
    "url": "classes/index.html",
    "revision": "c613e5fac75276e8e9f6421903fbe631"
  },
  {
    "url": "creation/index.html",
    "revision": "69a3fe608dfff43e6821a0629c0d2081"
  },
  {
    "url": "creation/stats/index.html",
    "revision": "9618c362fcda6cd4903485f6b8aeda5c"
  },
  {
    "url": "css/styles.css",
    "revision": "a796ee216099fb1c10ca2cd4902d6b61"
  },
  {
    "url": "eigenschaften/index.html",
    "revision": "fb424d5282fdd508a7b9c35e18de2a9f"
  },
  {
    "url": "gods/index.html",
    "revision": "82317b152c3be64916749525f7d7e93c"
  },
  {
    "url": "icons/icon144.png",
    "revision": "1f2f8976cd93d484bbf66ab358ae279a"
  },
  {
    "url": "icons/icon168.png",
    "revision": "e0faf76b0a52e90c3b61cb66bc00a2c3"
  },
  {
    "url": "icons/icon192.png",
    "revision": "d5abcba1b55bfe49ae300a306c17848f"
  },
  {
    "url": "icons/icon48.png",
    "revision": "4d65889e2f9eedf491e033f6fb59dd83"
  },
  {
    "url": "icons/icon512.png",
    "revision": "c56a0511db9a6680f98fe9e1f6c7d3de"
  },
  {
    "url": "icons/icon72.png",
    "revision": "c9d86df8b55e06caa08a78abf0a1365c"
  },
  {
    "url": "icons/icon96.png",
    "revision": "5282962bf89b37acae7a97dc1e7ced06"
  },
  {
    "url": "images/Pendulum-Logo.png",
    "revision": "d3fabea5ca5ba884347ca41def1b53a3"
  },
  {
    "url": "index.html",
    "revision": "10fdb5821229d875e5d3d6e07d89c263"
  },
  {
    "url": "kunden/index.html",
    "revision": "8bdbeb72e32835059192004d6abcef14"
  },
  {
    "url": "races/index.html",
    "revision": "685aa1dca1276ce0c441b7e588b8086a"
  },
  {
    "url": "shorts/index.html",
    "revision": "e77e89a5adb3a326be3f65fdad689e3f"
  },
  {
    "url": "skills/handwerk/index.html",
    "revision": "677e7add3de90a0ba97202b1d5d72aa3"
  },
  {
    "url": "skills/index.html",
    "revision": "cdb36c7a2094f1a40d468a69d13c437e"
  },
  {
    "url": "skills/kompetenzen/index.html",
    "revision": "7c1b7fce4da13fc4423a5c76da8d37b8"
  },
  {
    "url": "skills/magie/index.html",
    "revision": "50b221597a81eef5b4dcb9ef5f2fcddd"
  },
  {
    "url": "skills/priest/index.html",
    "revision": "1150df3293100dd540b5e6cc2b400c22"
  },
  {
    "url": "skills/quali/index.html",
    "revision": "081586ebacfb61479c8d7ba3d08590f6"
  },
  {
    "url": "skills/weapons/index.html",
    "revision": "3d48e9ff514499ebd1045449806bea77"
  },
  {
    "url": "stats/attributes/index.html",
    "revision": "ee1bed9dc5f61a91356bfac75defec2d"
  },
  {
    "url": "stats/base/index.html",
    "revision": "3ec4efecac39448803bf399b1bd9231d"
  },
  {
    "url": "stats/combat/index.html",
    "revision": "3d98863b54985c6db3e2772b2a361f26"
  },
  {
    "url": "stats/index.html",
    "revision": "474601d1941febd59280f2ddaf2f13be"
  },
  {
    "url": "stats/lifereg/index.html",
    "revision": "e76f7e6169921f348bb937832221050c"
  },
  {
    "url": "stats/magic/index.html",
    "revision": "4c14b6a85eff7839ea7f600b8c37a42b"
  },
  {
    "url": "stats/skills/index.html",
    "revision": "1428f7e7de6f35c923b190e773f8f000"
  },
  {
    "url": "stress/index.html",
    "revision": "8f2291459a2bfa799e90410aabb282a9"
  },
  {
    "url": "tasks/index.html",
    "revision": "86e7836413c8c4fe3fa9b328e750357c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
