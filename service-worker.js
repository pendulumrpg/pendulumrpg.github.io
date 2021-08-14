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
    "revision": "5fc9e8de17168c79dbd80a04502aa255"
  },
  {
    "url": "about/index.html",
    "revision": "4d25a8704de4180bf8312eb36d3f2b3c"
  },
  {
    "url": "aktionen/index.html",
    "revision": "e5d24060e417e46af74183e14ab5b371"
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
    "url": "assets/js/10.6f8e0136.js",
    "revision": "9f4c7865a11b6144ef0489b0c1801d01"
  },
  {
    "url": "assets/js/11.f7618228.js",
    "revision": "b2e9bb4f0456c8ee8d0f288c4d6f04b9"
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
    "url": "assets/js/14.98177c02.js",
    "revision": "36fdca9dffca0edeb94b58089b585946"
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
    "url": "assets/js/21.4f1f0d11.js",
    "revision": "b948a39767e964011572506fb5f8f953"
  },
  {
    "url": "assets/js/22.667cae58.js",
    "revision": "3a1308066dc5ac8dc728b14b33a18a16"
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
    "url": "assets/js/25.0154f843.js",
    "revision": "418bd9310d2eb0072d02ab9468774278"
  },
  {
    "url": "assets/js/26.e032985f.js",
    "revision": "bebc97d832b93c4b33fc7d2f85c48cb5"
  },
  {
    "url": "assets/js/27.9b32fded.js",
    "revision": "49cee90fe4e7fb86eecc11a581e0fd07"
  },
  {
    "url": "assets/js/28.ca1bf1ba.js",
    "revision": "6730e9911a120f47f9fe308a140cbf40"
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
    "url": "assets/js/9.b3fc6cc2.js",
    "revision": "9f4ecaad3393a5cd181261c4cd198de7"
  },
  {
    "url": "assets/js/app.e785bad8.js",
    "revision": "7a54136daeccae9d7df4cbf2047b1982"
  },
  {
    "url": "creation/classes/index.html",
    "revision": "da690051c6de77d8d72f29fe0b6b5716"
  },
  {
    "url": "creation/index.html",
    "revision": "93e177dde5c493a129aa4f4a8096f79d"
  },
  {
    "url": "creation/races/index.html",
    "revision": "7990e0dade08d13e12cc14726496a567"
  },
  {
    "url": "css/styles.css",
    "revision": "a796ee216099fb1c10ca2cd4902d6b61"
  },
  {
    "url": "eigenschaften/index.html",
    "revision": "db6f3e440139dfc3b27ca45ac8be258d"
  },
  {
    "url": "gods/index.html",
    "revision": "82c92acf7406b749db0850801af04247"
  },
  {
    "url": "icons/icon144.png",
    "revision": "eee1a02db51a97e38bee7766aece40b3"
  },
  {
    "url": "icons/icon168.png",
    "revision": "012676e1ca355d6785914432ea1851d7"
  },
  {
    "url": "icons/icon192.png",
    "revision": "9d8fe638010bc54a4b6b8aa46b1f52a3"
  },
  {
    "url": "icons/icon48.png",
    "revision": "fe02f51f012f0158cab7090ad56cdacb"
  },
  {
    "url": "icons/icon512.png",
    "revision": "0150351895cfd599b545bbb5854a9628"
  },
  {
    "url": "icons/icon72.png",
    "revision": "1edb98c44293c1fdb0a1a0da35a4a08a"
  },
  {
    "url": "icons/icon96.png",
    "revision": "679ba9b76924c03a0a7811b0156d5f25"
  },
  {
    "url": "images/Pendulum-Logo.svg",
    "revision": "d9a8ef366a63ea814064aafd4c43e282"
  },
  {
    "url": "index.html",
    "revision": "300de97ca1d6dcb1b710859156561817"
  },
  {
    "url": "kunden/index.html",
    "revision": "dd5707c693dc4dad22ea4da98b119be5"
  },
  {
    "url": "shorts/index.html",
    "revision": "7a9b71c21607eef926650543aac68068"
  },
  {
    "url": "skills/handwerk/index.html",
    "revision": "527b7318d39ed6bc34b211774b56ede8"
  },
  {
    "url": "skills/index.html",
    "revision": "235418db3a14f95ddf960db109f5ff4c"
  },
  {
    "url": "skills/kompetenzen/index.html",
    "revision": "08bf27cc53fa2d926458533256517245"
  },
  {
    "url": "skills/magie/index.html",
    "revision": "e4b74fd46e2794387d0e36c0668d40f4"
  },
  {
    "url": "skills/priest/index.html",
    "revision": "2ba484dcf8f2f00fc5d6b57ce3e47e0f"
  },
  {
    "url": "skills/quali/index.html",
    "revision": "a611fdac1162d003cc47640bfb3ad01d"
  },
  {
    "url": "stats/attributes/index.html",
    "revision": "48b2d7cffadbdf5783c8d30bfe0c699c"
  },
  {
    "url": "stats/base/index.html",
    "revision": "95bcda15396251b5e9c934954106ec84"
  },
  {
    "url": "stats/combat/index.html",
    "revision": "e847dc002207af8c4bbb3203f677de43"
  },
  {
    "url": "stats/index.html",
    "revision": "76eefea952e1c6369b595dea4bc8ddb7"
  },
  {
    "url": "stats/lifereg/index.html",
    "revision": "a112699776568531edbe006eb11c9bc7"
  },
  {
    "url": "stats/magic/index.html",
    "revision": "950e7a07de4d705445d9310cda5efabd"
  },
  {
    "url": "stats/skills/index.html",
    "revision": "8c8277d4790c1654515807a480639564"
  },
  {
    "url": "stress/index.html",
    "revision": "b9972d96c359ea9da2a7e90f569c600d"
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
