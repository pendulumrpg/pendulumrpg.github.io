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
    "revision": "bd41abf53cb3e2ec4d79945f88a24a27"
  },
  {
    "url": "about/index.html",
    "revision": "77f959dbf4aa6a164ac06a5268733514"
  },
  {
    "url": "aktionen/index.html",
    "revision": "de5501cd8f1b80a7fdde4901040a0228"
  },
  {
    "url": "assets/css/0.styles.84e3fdfd.css",
    "revision": "93d2ed1c0c87115de08f41c68dc7c3a5"
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
    "url": "assets/js/12.13097742.js",
    "revision": "c378e28da361c3c185f4f3eed06672b9"
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
    "url": "assets/js/15.9aaa35d4.js",
    "revision": "3d0e5c6996f6b226652bfffb351cd4fa"
  },
  {
    "url": "assets/js/16.e2cd8de9.js",
    "revision": "7704ee9e8d8d340eeaffba6af19084ae"
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
    "url": "assets/js/23.c296eecc.js",
    "revision": "1f2f22e9577510eac31fc821cf4a0d7e"
  },
  {
    "url": "assets/js/24.c706b8ab.js",
    "revision": "316ea97bf83ca955ad69455b8987ee5b"
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
    "url": "assets/js/app.88623284.js",
    "revision": "96516069837805b6ad267a0668353a4c"
  },
  {
    "url": "creation/classes/index.html",
    "revision": "22aded5206448d4bf7331f2f9a318ab4"
  },
  {
    "url": "creation/index.html",
    "revision": "eaff6f6bc987c817ae6b032a6b0dbc26"
  },
  {
    "url": "creation/races/index.html",
    "revision": "207a43ea9d828cfd082152dc77acfc72"
  },
  {
    "url": "css/styles.css",
    "revision": "a796ee216099fb1c10ca2cd4902d6b61"
  },
  {
    "url": "eigenschaften/index.html",
    "revision": "339f28393cb89299126ec1b7822715ec"
  },
  {
    "url": "gods/index.html",
    "revision": "6d80c21fdaea7709654e04abac2b0559"
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
    "revision": "e505da53c2365589c68ea5a0fa6860ab"
  },
  {
    "url": "kunden/index.html",
    "revision": "16b71ca67caceb6c8dd536af3d9da25b"
  },
  {
    "url": "shorts/index.html",
    "revision": "ecf9e6319a940d171c18e34607a235ff"
  },
  {
    "url": "skills/handwerk/index.html",
    "revision": "e0c4ec8730028085d817970f4fbc71e9"
  },
  {
    "url": "skills/index.html",
    "revision": "e70cce4a590990cb4a01888f1fc38c67"
  },
  {
    "url": "skills/kompetenzen/index.html",
    "revision": "e9ec2e25deb679a41a94313d7be8da71"
  },
  {
    "url": "skills/magie/index.html",
    "revision": "b792c2d5dafae8799ec25542ad2b448b"
  },
  {
    "url": "skills/priest/index.html",
    "revision": "f99139247ec2c9a54da6c216539901fb"
  },
  {
    "url": "skills/quali/index.html",
    "revision": "746768f8f2ebbf678b5543b7a5d8f136"
  },
  {
    "url": "stats/attributes/index.html",
    "revision": "75696222e66d6ac3a1a3b5ce5162ee3f"
  },
  {
    "url": "stats/base/index.html",
    "revision": "3ed323fbf5ae0b8044d389d3617bddd8"
  },
  {
    "url": "stats/combat/index.html",
    "revision": "5a1603a593f61996cff12bae8f55727d"
  },
  {
    "url": "stats/index.html",
    "revision": "9acad484d5c37eab30342bce14375640"
  },
  {
    "url": "stats/lifereg/index.html",
    "revision": "0c768b74c02929c6c192131c66591c71"
  },
  {
    "url": "stats/magic/index.html",
    "revision": "1523de4ab9391ff88a01b07c80ef6858"
  },
  {
    "url": "stats/skills/index.html",
    "revision": "c0fbee24678f2ded616f11a341cd1be7"
  },
  {
    "url": "stress/index.html",
    "revision": "d36c7ce23d674801271958bd43615020"
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
