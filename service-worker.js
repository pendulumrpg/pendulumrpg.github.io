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
    "revision": "b3d1449d51235825674aeff13ade54bb"
  },
  {
    "url": "about/index.html",
    "revision": "d8658168be83670a539f366eb885b62c"
  },
  {
    "url": "aktionen/index.html",
    "revision": "73904acc17cd00fb861182b9ad54a847"
  },
  {
    "url": "assets/css/0.styles.430f5097.css",
    "revision": "51362322b425e22eae99a07de816f306"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.690d704f.js",
    "revision": "97d12578d5c6b26645b637f93368491e"
  },
  {
    "url": "assets/js/11.5bb4fd02.js",
    "revision": "288373b271dbac0a08bc10ff33613d7b"
  },
  {
    "url": "assets/js/12.5edf7262.js",
    "revision": "dbc6012e4f3364888f53e03c31816399"
  },
  {
    "url": "assets/js/13.6c825a89.js",
    "revision": "254f0beec1876a044f2db2980182af08"
  },
  {
    "url": "assets/js/14.98177c02.js",
    "revision": "36fdca9dffca0edeb94b58089b585946"
  },
  {
    "url": "assets/js/15.2c6e3b31.js",
    "revision": "cede8d2c86a1de4af0bc590e1e36a0c8"
  },
  {
    "url": "assets/js/16.3c176ed5.js",
    "revision": "be4b81a526a2322de0b3a595c12f6442"
  },
  {
    "url": "assets/js/17.a8734a3b.js",
    "revision": "ec4ae9d822d84232952ffe73d82822ac"
  },
  {
    "url": "assets/js/18.579d44be.js",
    "revision": "73a72c01a62f820ede4cdfedc5335743"
  },
  {
    "url": "assets/js/19.24a8948a.js",
    "revision": "4504c367eb04f973d40978f029d97ab1"
  },
  {
    "url": "assets/js/2.5b4242cf.js",
    "revision": "a7ccad21ff707b0febeacdfeb5d8f706"
  },
  {
    "url": "assets/js/20.dad94004.js",
    "revision": "2d68cea9724ea23146359b0c9c5ae7e7"
  },
  {
    "url": "assets/js/21.ba9e2a26.js",
    "revision": "38f8d9a42de726c550a8450d093520c2"
  },
  {
    "url": "assets/js/22.50c30a33.js",
    "revision": "8cc74305aa33290b3637bf010af7a6f1"
  },
  {
    "url": "assets/js/23.9174b870.js",
    "revision": "723ff08f34d1c50647095a8b502f302d"
  },
  {
    "url": "assets/js/24.91ab3a83.js",
    "revision": "44336bc5e7b17f2d149df24dfe335088"
  },
  {
    "url": "assets/js/25.0154f843.js",
    "revision": "418bd9310d2eb0072d02ab9468774278"
  },
  {
    "url": "assets/js/26.c0cf193d.js",
    "revision": "19d13cc167db42db2155e33525a352fa"
  },
  {
    "url": "assets/js/27.9b32fded.js",
    "revision": "49cee90fe4e7fb86eecc11a581e0fd07"
  },
  {
    "url": "assets/js/28.d7f61730.js",
    "revision": "5231c000c82d3553dc5bced533bead2f"
  },
  {
    "url": "assets/js/29.7dafb9e0.js",
    "revision": "99bc33e9a2ac84400a16d3f7b41f1d33"
  },
  {
    "url": "assets/js/3.f84cca16.js",
    "revision": "7edcac8a6d265a795d24f27ea3a05a80"
  },
  {
    "url": "assets/js/30.49de7b72.js",
    "revision": "b0ebc427a0a4875930577e90e214700d"
  },
  {
    "url": "assets/js/31.fea224fe.js",
    "revision": "21a1d63a64ea87c6cbf183182fc576c7"
  },
  {
    "url": "assets/js/32.014d108b.js",
    "revision": "c463deb0ff0c99fd99a4cf61e7509794"
  },
  {
    "url": "assets/js/4.6a145823.js",
    "revision": "d233a222fb938e81c4760af73b35f67e"
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
    "url": "assets/js/8.5aba599c.js",
    "revision": "94ec19f735c875bc78fda8189851dd45"
  },
  {
    "url": "assets/js/9.73470884.js",
    "revision": "871c56ca9a1cd922944420afa49b347b"
  },
  {
    "url": "assets/js/app.d10b1d81.js",
    "revision": "db8894d9f2dfb3c66911b13558432d56"
  },
  {
    "url": "creation/classes/index.html",
    "revision": "ba093f19ddef29d4e90700119e1931bd"
  },
  {
    "url": "creation/index.html",
    "revision": "d293a185c678032e766314ccb50adb17"
  },
  {
    "url": "creation/races/index.html",
    "revision": "78c8985fd912dbf79150f0efbd41f9b2"
  },
  {
    "url": "css/styles.css",
    "revision": "a796ee216099fb1c10ca2cd4902d6b61"
  },
  {
    "url": "eigenschaften/index.html",
    "revision": "6477b4c012698f6f8c53d62b7d1004bb"
  },
  {
    "url": "gods/index.html",
    "revision": "31d7be392f6845e34c92d76e47c76f5d"
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
    "url": "images/Pendulum-Logo.svg",
    "revision": "d9a8ef366a63ea814064aafd4c43e282"
  },
  {
    "url": "index.html",
    "revision": "6e5cc6fb119529b3c79e269594b0559f"
  },
  {
    "url": "kunden/index.html",
    "revision": "a2eb5d71805e100e2dad99c0ed7fd2b3"
  },
  {
    "url": "shorts/index.html",
    "revision": "2bc4cbd052c03fb90647154ddffbc938"
  },
  {
    "url": "skills/handwerk/index.html",
    "revision": "8d97c3d57082e37401159c8cf0439398"
  },
  {
    "url": "skills/index.html",
    "revision": "ae273a7f34dc554a6a5687a7ec6f5420"
  },
  {
    "url": "skills/kompetenzen/index.html",
    "revision": "4e5fb9e73cd3b932fdd767d14bb30fcd"
  },
  {
    "url": "skills/magie/index.html",
    "revision": "8336a678799b04b5f2d2390669674291"
  },
  {
    "url": "skills/priest/index.html",
    "revision": "387d0037eab5c57cf527a3a461839d15"
  },
  {
    "url": "skills/quali/index.html",
    "revision": "3467157c45d786cf232c9a33f622631d"
  },
  {
    "url": "stats/attributes/index.html",
    "revision": "3107d89ff381b00660bd7928ceafb736"
  },
  {
    "url": "stats/base/index.html",
    "revision": "f830f3688a71f386a0c2a44fd50945ab"
  },
  {
    "url": "stats/combat/index.html",
    "revision": "b393426d9fcbf612f3b99f6222ff547d"
  },
  {
    "url": "stats/index.html",
    "revision": "65e6b081e335480262b639233e1cce5f"
  },
  {
    "url": "stats/lifereg/index.html",
    "revision": "6af0f929cedfcede53cdb12bbff9f846"
  },
  {
    "url": "stats/magic/index.html",
    "revision": "57021e7b623e600846051f7e92c69324"
  },
  {
    "url": "stats/skills/index.html",
    "revision": "40ca338f9ce392f0ed3285c9192e2b8b"
  },
  {
    "url": "stress/index.html",
    "revision": "538b8c3ccfa245520b88605efa1d2281"
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
