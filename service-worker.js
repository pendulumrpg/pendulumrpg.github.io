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
    "revision": "035cc9942404a79b2efe5d3d76101c5c"
  },
  {
    "url": "about/index.html",
    "revision": "7d369b3b7d89788466ef6465d42c08e5"
  },
  {
    "url": "additional/index.html",
    "revision": "1f5f0774a88e938ce325e8e24e8d5f7c"
  },
  {
    "url": "aktionen/index.html",
    "revision": "c631be408f569c5f5a011127b47fcc36"
  },
  {
    "url": "assets/css/0.styles.81a8cb24.css",
    "revision": "fdc51e6160c99d963893c9342c360379"
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
    "url": "assets/js/11.1fe1a3c1.js",
    "revision": "288373b271dbac0a08bc10ff33613d7b"
  },
  {
    "url": "assets/js/12.a9c3f0a2.js",
    "revision": "e5a40b991a3910192268aba68ae25434"
  },
  {
    "url": "assets/js/13.2c8387b8.js",
    "revision": "fb7777f9f8067f7ae7a4895eec5c617e"
  },
  {
    "url": "assets/js/14.9e1a217f.js",
    "revision": "71b2fc5323f3ca8d006abff8bb8ba252"
  },
  {
    "url": "assets/js/15.f349631c.js",
    "revision": "8a6fde622a4afd35b1d0d70d6f5a7d63"
  },
  {
    "url": "assets/js/16.44107e03.js",
    "revision": "c5e0c5811d03a7598f575edff1d64958"
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
    "url": "assets/js/20.3220eccd.js",
    "revision": "c5a1a1fce1d560e821197ef64878d97d"
  },
  {
    "url": "assets/js/21.dfd7936b.js",
    "revision": "4c38848d5f8919bdd19b1bb5beb11df0"
  },
  {
    "url": "assets/js/22.72a9a81f.js",
    "revision": "9432a846582bae4952369f5b61d932f6"
  },
  {
    "url": "assets/js/23.0d115d4e.js",
    "revision": "45e3a695a7ee0e1621739182c56192d5"
  },
  {
    "url": "assets/js/24.551eebb7.js",
    "revision": "bf657ecad0cafd5f137f7f725a9b14dd"
  },
  {
    "url": "assets/js/25.9d7753c9.js",
    "revision": "6273a2cbcda68abb743bbb382da19bd7"
  },
  {
    "url": "assets/js/26.86007932.js",
    "revision": "94151ddf3084aaa278af7af121e88b98"
  },
  {
    "url": "assets/js/27.c5ce41b7.js",
    "revision": "9f921ca8491eced3ab90eacaf059bc1e"
  },
  {
    "url": "assets/js/28.4cc84268.js",
    "revision": "08ac30633dd3cfa175ddb58fe1e7d727"
  },
  {
    "url": "assets/js/29.87299029.js",
    "revision": "5f17644e51da39d7cfac373d6a081e0b"
  },
  {
    "url": "assets/js/3.82d8ff16.js",
    "revision": "61b8124d372fed0e6c4e8224fb18dbaf"
  },
  {
    "url": "assets/js/30.b21cdd42.js",
    "revision": "0c6e3d90929d350289eb0a0c7231118c"
  },
  {
    "url": "assets/js/31.ca7cfba4.js",
    "revision": "be74558e7ff76cc25d76125382dc048f"
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
    "url": "assets/js/34.7e437962.js",
    "revision": "17fb8a6e74ed99ef51751e9ba087397b"
  },
  {
    "url": "assets/js/35.891e53a5.js",
    "revision": "458783677ca5be4f3bac84f89b90f219"
  },
  {
    "url": "assets/js/36.ea036633.js",
    "revision": "c4c1081e1d08d48acce2fce281954e69"
  },
  {
    "url": "assets/js/4.dc1a739f.js",
    "revision": "e18fde9b412e3e73119d551a02cb5de4"
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
    "url": "assets/js/8.84093283.js",
    "revision": "93b218a43f556bc4a1ce1787e923e0a5"
  },
  {
    "url": "assets/js/9.8b09fd24.js",
    "revision": "64a463a47c56a57e330393786d1a4d0b"
  },
  {
    "url": "assets/js/app.3d848ba0.js",
    "revision": "b1f2248394a84e4180eb32d649bb1475"
  },
  {
    "url": "classes/index.html",
    "revision": "ab893722de2d2f83497510f64f2e6e3c"
  },
  {
    "url": "creation/index.html",
    "revision": "7a1d6dffa6afe65130ebaf3c9253d743"
  },
  {
    "url": "creation/stats/index.html",
    "revision": "dbfee3a28b7bcb9e176b3702e3924760"
  },
  {
    "url": "css/styles.css",
    "revision": "a796ee216099fb1c10ca2cd4902d6b61"
  },
  {
    "url": "eigenschaften/index.html",
    "revision": "86f90a907fbe155f0601d979af00ea00"
  },
  {
    "url": "gods/index.html",
    "revision": "59356a8de25c6f02da687b2edeff2054"
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
    "revision": "e39df279d62b23a0fe87e224869a2eb7"
  },
  {
    "url": "kunden/index.html",
    "revision": "bbc913b1c7d63bb1965a898e844147fa"
  },
  {
    "url": "races/index.html",
    "revision": "54f5bfec6ea21a51f5d98e6d771594cc"
  },
  {
    "url": "shorts/index.html",
    "revision": "4d1120aa41746f5ad7e2c40ee8f4a77d"
  },
  {
    "url": "skills/handwerk/index.html",
    "revision": "2dada7fc19768e351fcf4db2141b608c"
  },
  {
    "url": "skills/index.html",
    "revision": "f1abc86ed167b03260721243b68b09b4"
  },
  {
    "url": "skills/kompetenzen/index.html",
    "revision": "171681494601c8aaef46365bc8d90c4d"
  },
  {
    "url": "skills/magie/index.html",
    "revision": "a853d492f7201c059efdcccbed03d87e"
  },
  {
    "url": "skills/priest/index.html",
    "revision": "3df66f9d3103a3eeae156b94eb49b147"
  },
  {
    "url": "skills/quali/index.html",
    "revision": "8c82f287223a86da0d5fcb725f58cf12"
  },
  {
    "url": "skills/weapons/index.html",
    "revision": "466025a5721d3fae675a64d543a49e5c"
  },
  {
    "url": "stats/attributes/index.html",
    "revision": "ff77bb24c4a0a89355fa175ca79e7a63"
  },
  {
    "url": "stats/base/index.html",
    "revision": "85d372dd5a412a1b795a2c7cb1ab0f9f"
  },
  {
    "url": "stats/combat/index.html",
    "revision": "129bcbf1c0ec5cf621827699c5b20f25"
  },
  {
    "url": "stats/index.html",
    "revision": "4af175c81fec70baa8794b195e5eb0a8"
  },
  {
    "url": "stats/lifereg/index.html",
    "revision": "eb4902858bf541bcebf94ba979b4c564"
  },
  {
    "url": "stats/magic/index.html",
    "revision": "15765a3ef821b719f2460134279cde49"
  },
  {
    "url": "stats/skills/index.html",
    "revision": "b65b30b090fe6ddddc94c1cca953803e"
  },
  {
    "url": "stress/index.html",
    "revision": "0b62b1461593f7058fb341361cbaf972"
  },
  {
    "url": "tasks/index.html",
    "revision": "4bf8289eb289d09969d5b25a9088fdb1"
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
