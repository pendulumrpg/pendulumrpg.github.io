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
    "revision": "acf7ee518de1705bb6ffeba9a0449c72"
  },
  {
    "url": "about/index.html",
    "revision": "b360813ee497a7392d39ff5a85e76c67"
  },
  {
    "url": "aktionen/index.html",
    "revision": "41c1a1bcc4f3140143e4676ccaea39f9"
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
    "url": "assets/js/19.0eb10b65.js",
    "revision": "6fbe06718e22daffb3d4947907dba98d"
  },
  {
    "url": "assets/js/2.5b4242cf.js",
    "revision": "a7ccad21ff707b0febeacdfeb5d8f706"
  },
  {
    "url": "assets/js/20.99c28ab8.js",
    "revision": "c54e908af269ee63c4af832c3568b1cb"
  },
  {
    "url": "assets/js/21.6fe94525.js",
    "revision": "e3a1491cd8c7129d6d27ba5b7ebc660b"
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
    "url": "assets/js/28.bab14861.js",
    "revision": "8cbf364cc44286c9fb4ef50164e9d8f6"
  },
  {
    "url": "assets/js/29.08e9668a.js",
    "revision": "e19bed476df04b553af6a0c82a394fde"
  },
  {
    "url": "assets/js/3.f84cca16.js",
    "revision": "7edcac8a6d265a795d24f27ea3a05a80"
  },
  {
    "url": "assets/js/30.54be583b.js",
    "revision": "084a4264d5ea52d0b70af1a724f67412"
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
    "url": "assets/js/app.cfcd4ad0.js",
    "revision": "5e1e521279cc42392b023cfb35a42621"
  },
  {
    "url": "creation/classes/index.html",
    "revision": "3a90668e511df820ef3688550242be4c"
  },
  {
    "url": "creation/index.html",
    "revision": "5cf2a5240422294ca7183d0c70f2ff2a"
  },
  {
    "url": "creation/races/index.html",
    "revision": "f94d1d46967de15933a83e4f9c67a5f1"
  },
  {
    "url": "css/styles.css",
    "revision": "a796ee216099fb1c10ca2cd4902d6b61"
  },
  {
    "url": "eigenschaften/index.html",
    "revision": "4982dc0c54ce9ea5541514640592bd98"
  },
  {
    "url": "gods/index.html",
    "revision": "4b17a7f0837453436e70fab9ebd6a9d7"
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
    "revision": "7b52465e66c88c1e4aba8d292de9660d"
  },
  {
    "url": "kunden/index.html",
    "revision": "39072c8d94c476b02ccd94badc10eff4"
  },
  {
    "url": "shorts/index.html",
    "revision": "b5f412d05299460cb96f9ea4137ce0a9"
  },
  {
    "url": "skills/handwerk/index.html",
    "revision": "b7321649962b2d299c4507c829924e31"
  },
  {
    "url": "skills/index.html",
    "revision": "6904315d9a27e4edd7a87256f19edbe4"
  },
  {
    "url": "skills/kompetenzen/index.html",
    "revision": "aed1fea076934ec0994b81409e0dd865"
  },
  {
    "url": "skills/magie/index.html",
    "revision": "635c47dace183c5818bcc13ae270405c"
  },
  {
    "url": "skills/priest/index.html",
    "revision": "f73c563f5b50b3c11ffa77fff31161be"
  },
  {
    "url": "skills/quali/index.html",
    "revision": "229857c0ba09563c1718357bf5f692e7"
  },
  {
    "url": "stats/attributes/index.html",
    "revision": "e819b6c711fa919e998b0669fc97b58e"
  },
  {
    "url": "stats/base/index.html",
    "revision": "f1c35d374f73cf335f434d35ce4434e6"
  },
  {
    "url": "stats/combat/index.html",
    "revision": "5da7bfddb1fe07a3539f5034681e9f4d"
  },
  {
    "url": "stats/index.html",
    "revision": "9a59e4e1705ea67be8c131f334c0ec6f"
  },
  {
    "url": "stats/lifereg/index.html",
    "revision": "a06ecd6523f9000b31f570346792085e"
  },
  {
    "url": "stats/magic/index.html",
    "revision": "f3d064d64cc018e753a086983dfa797f"
  },
  {
    "url": "stats/skills/index.html",
    "revision": "ab2fdcb31bb81e4d2c59b87e15577fe4"
  },
  {
    "url": "stress/index.html",
    "revision": "052cb3b8fe6e3775be0ad40896327ee2"
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
