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
    "revision": "d9de4178a3f08493d1d4650fb58b6d52"
  },
  {
    "url": "about/index.html",
    "revision": "f2c942552712ebb2041965d8c4fb166a"
  },
  {
    "url": "aktionen/index.html",
    "revision": "65f1df6072014defd778e87cd042321f"
  },
  {
    "url": "assets/css/0.styles.2f5046f2.css",
    "revision": "2819c6e1473eee2dc6ce8861d1ea45ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f24a0872.js",
    "revision": "865b4ea81a749b32611e9f1a497b7d23"
  },
  {
    "url": "assets/js/11.4c347722.js",
    "revision": "7323dd4c826be7f556abfb05d1675f7f"
  },
  {
    "url": "assets/js/12.e90a6f63.js",
    "revision": "bb7b595fad3dc8d1229261e83641bb88"
  },
  {
    "url": "assets/js/13.23b102d7.js",
    "revision": "03d4744ad5ff168d06a15c09f4924a5c"
  },
  {
    "url": "assets/js/14.bea9e16d.js",
    "revision": "89f592726605a8a8d16ee45d97b3479d"
  },
  {
    "url": "assets/js/15.2c6e3b31.js",
    "revision": "cede8d2c86a1de4af0bc590e1e36a0c8"
  },
  {
    "url": "assets/js/16.d250005f.js",
    "revision": "43d81df66807bea8c24863d68047b119"
  },
  {
    "url": "assets/js/17.5575c1a1.js",
    "revision": "1518d7d2885892c1075599518fb9ae04"
  },
  {
    "url": "assets/js/18.eb74c6f6.js",
    "revision": "1b3f47a84972de16bfe2b91c2f1bcbca"
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
    "url": "assets/js/21.c1381542.js",
    "revision": "507908346923c8fed6cc3da9ccec6108"
  },
  {
    "url": "assets/js/22.09e1486b.js",
    "revision": "2d17e822d2a46343d95f936c355dbab0"
  },
  {
    "url": "assets/js/23.9174b870.js",
    "revision": "723ff08f34d1c50647095a8b502f302d"
  },
  {
    "url": "assets/js/24.80fe840e.js",
    "revision": "d7b9b7664f1e0c4a4383947103011187"
  },
  {
    "url": "assets/js/25.316901fe.js",
    "revision": "2f9f37a01ee641438476098aa0237144"
  },
  {
    "url": "assets/js/26.72360d5a.js",
    "revision": "7a415f38a67d3ad230b377a128c13ce1"
  },
  {
    "url": "assets/js/27.5a71a864.js",
    "revision": "6d135043db53eca24e49e2f572308709"
  },
  {
    "url": "assets/js/28.677845e4.js",
    "revision": "fe9059a52328eeb30cddde2f4c335a91"
  },
  {
    "url": "assets/js/29.dce9ea86.js",
    "revision": "9f737b3ea1a3ef08e70f480e94588578"
  },
  {
    "url": "assets/js/3.f84cca16.js",
    "revision": "7edcac8a6d265a795d24f27ea3a05a80"
  },
  {
    "url": "assets/js/30.71921bdd.js",
    "revision": "f4b468469115bbb78a64cb2910b8f790"
  },
  {
    "url": "assets/js/31.7e8f52bf.js",
    "revision": "ddc64fd85b40089ec8212c98d9f4a823"
  },
  {
    "url": "assets/js/32.014d108b.js",
    "revision": "c463deb0ff0c99fd99a4cf61e7509794"
  },
  {
    "url": "assets/js/4.4c9b7ad6.js",
    "revision": "491e0d0c5d1f37d9d2e9575aa6592238"
  },
  {
    "url": "assets/js/5.3dca96c9.js",
    "revision": "d44c45c08873effd89ebcea2cab6e4b8"
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
    "url": "assets/js/app.13fa1e5f.js",
    "revision": "983f6c4573c64ec12ebdf1df5bca93d9"
  },
  {
    "url": "creation/classes/index.html",
    "revision": "e74364e3bf427769485911cacf8303d8"
  },
  {
    "url": "creation/index.html",
    "revision": "bd0dc57936b36f8ea9ca04a7aa9e211e"
  },
  {
    "url": "creation/races/index.html",
    "revision": "937f850d70ddaecc94392c5b7acdd8e0"
  },
  {
    "url": "css/styles.css",
    "revision": "a796ee216099fb1c10ca2cd4902d6b61"
  },
  {
    "url": "eigenschaften/index.html",
    "revision": "faf50625745f623cf9fe96da01df83be"
  },
  {
    "url": "gods/index.html",
    "revision": "5032184608a4c86d27d770d71c8cc000"
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
    "revision": "7f8740435277fd8374da490bffcb8acd"
  },
  {
    "url": "kunden/index.html",
    "revision": "3ac2762a57d9c807a1780909e010d978"
  },
  {
    "url": "shorts/index.html",
    "revision": "2d0fc89d0f31f5135bfc44f70de60906"
  },
  {
    "url": "skills/handwerk/index.html",
    "revision": "bbaa9bbec406c35097b93c7615b82d12"
  },
  {
    "url": "skills/index.html",
    "revision": "339cb67d8b1229a0077f39fbe497273e"
  },
  {
    "url": "skills/kompetenzen/index.html",
    "revision": "2355a7e10df2bcbd71caaef79a49abe4"
  },
  {
    "url": "skills/magie/index.html",
    "revision": "33fba5b4b0875957ca7908e8d874926f"
  },
  {
    "url": "skills/priest/index.html",
    "revision": "dd8ea934069ff495476cf5fe937ac9b2"
  },
  {
    "url": "skills/quali/index.html",
    "revision": "423c7f0bfc478a0be933f005cc8d3a4e"
  },
  {
    "url": "stats/attributes/index.html",
    "revision": "e007751b0891571785bd9367427ee2c0"
  },
  {
    "url": "stats/base/index.html",
    "revision": "8842c0300e6896f23c2ba27bc1c19cb1"
  },
  {
    "url": "stats/combat/index.html",
    "revision": "d7861f0a7aea763196b5b4cf54560922"
  },
  {
    "url": "stats/index.html",
    "revision": "4c0a69144230c3c905573602ee909ab4"
  },
  {
    "url": "stats/lifereg/index.html",
    "revision": "bdefd2340574aaabb1a0dd20421c5e65"
  },
  {
    "url": "stats/magic/index.html",
    "revision": "343cafa3b740f3c93e35b427d5067b69"
  },
  {
    "url": "stats/skills/index.html",
    "revision": "2093448cf953683d4bfc9dd0bf1e9f70"
  },
  {
    "url": "stress/index.html",
    "revision": "d1b75c59ffd5ca2944375995d50e2e95"
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
