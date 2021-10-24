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
    "revision": "c8dbca282a7e1fde3a1c282d2be279c8"
  },
  {
    "url": "about/index.html",
    "revision": "373df9ad7e2a275cd49a0a389f437ad6"
  },
  {
    "url": "about/README.EN.html",
    "revision": "0b399b96c6fc74949a9938a65bca0a91"
  },
  {
    "url": "additional/index.html",
    "revision": "13f51ebbd10368272a82173d5b311a08"
  },
  {
    "url": "additional/README.EN.html",
    "revision": "5baa53432b647a8eccd09a5e69681a83"
  },
  {
    "url": "aktionen/index.html",
    "revision": "7ac31c02e21c3fddac6e6232324d6ae4"
  },
  {
    "url": "aktionen/README.EN.html",
    "revision": "25c8a31779fce8ca9062b1780de4d89c"
  },
  {
    "url": "assets/css/0.styles.bb84fbbc.css",
    "revision": "04c8785aa099114e047e6d26ec3b2612"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e86f09ff.js",
    "revision": "70670e390dce5ed546b96dfb744ae82f"
  },
  {
    "url": "assets/js/100.76f0a3e9.js",
    "revision": "d526437e14d38acd782b5e604e1f80a1"
  },
  {
    "url": "assets/js/101.14f99ced.js",
    "revision": "d0a85e992e44925028f8c78e7918604f"
  },
  {
    "url": "assets/js/102.a59e99ef.js",
    "revision": "b07948f74b4ff33e500f8e9e82b2b327"
  },
  {
    "url": "assets/js/103.816b0c3e.js",
    "revision": "52c797a5b8103f93b407dc2aaa2fd004"
  },
  {
    "url": "assets/js/104.aed990c3.js",
    "revision": "eaaa523dff0b8dc046b45d30f8f5fb60"
  },
  {
    "url": "assets/js/105.3a6026e0.js",
    "revision": "43b339f26d95938618f84181b5026f0e"
  },
  {
    "url": "assets/js/106.22f8fb3a.js",
    "revision": "96c3697611e5e95296057675f0958ef0"
  },
  {
    "url": "assets/js/107.983b70ea.js",
    "revision": "f9a0066131de87e42b94c3cbdd78a651"
  },
  {
    "url": "assets/js/108.fa2c8724.js",
    "revision": "3c2a338b3f7c4384725d721331e65221"
  },
  {
    "url": "assets/js/109.af4a7380.js",
    "revision": "5d047270afdfb54f6b81c69b6f1a822e"
  },
  {
    "url": "assets/js/11.89716ec1.js",
    "revision": "5a9b89b23a5b6d16e9cafba0659c821c"
  },
  {
    "url": "assets/js/110.6e8f2886.js",
    "revision": "67055da02e60534b03a7e76bfad7f84e"
  },
  {
    "url": "assets/js/111.8c1aef30.js",
    "revision": "2e353893e8bda3a5819ae3c0ecb320ee"
  },
  {
    "url": "assets/js/112.02ca7b35.js",
    "revision": "31610a1faff976ac28259c3469ae4fa2"
  },
  {
    "url": "assets/js/113.7ec54f90.js",
    "revision": "8624c81594b5c3e813edeac6ba408a46"
  },
  {
    "url": "assets/js/12.872f700a.js",
    "revision": "7bc33b57cb8b95319ebf84ed96cd49bb"
  },
  {
    "url": "assets/js/13.6e0d0a4c.js",
    "revision": "6c9d107b8d450e7445ab53b92dc0e127"
  },
  {
    "url": "assets/js/14.afe7e9d9.js",
    "revision": "656aa9ed8115fc603061b4cd3105ed55"
  },
  {
    "url": "assets/js/15.0a4c96bb.js",
    "revision": "3b28a22a584ed20bff1b8f45c0aaf933"
  },
  {
    "url": "assets/js/16.8d3fd164.js",
    "revision": "22c8dcb3bc9009781da88bed99d7a136"
  },
  {
    "url": "assets/js/17.bf319c8f.js",
    "revision": "303a641eb30802445852ad08db588f0f"
  },
  {
    "url": "assets/js/18.5590d3fe.js",
    "revision": "186482ccea3eff61c08898a4fc110b40"
  },
  {
    "url": "assets/js/19.656ea599.js",
    "revision": "ee1459705511f3f9337dced290e31636"
  },
  {
    "url": "assets/js/2.5b4242cf.js",
    "revision": "a7ccad21ff707b0febeacdfeb5d8f706"
  },
  {
    "url": "assets/js/20.b18f4896.js",
    "revision": "15af86a6fc7f91a8b2f8c1f047694967"
  },
  {
    "url": "assets/js/21.3a9456bc.js",
    "revision": "d83b9b7cdedf26abf10d7e492710c8b0"
  },
  {
    "url": "assets/js/22.ed9f1084.js",
    "revision": "fea256add843b6d3bd51ab7fffc293cf"
  },
  {
    "url": "assets/js/23.c0fe1195.js",
    "revision": "b7b90dd0629943f33089e15dab3ebb5c"
  },
  {
    "url": "assets/js/24.1634ed9f.js",
    "revision": "d2914ade9cde65de42a5c4faaa5c94c4"
  },
  {
    "url": "assets/js/25.00a1b4c0.js",
    "revision": "d1f5f694fb5a7de33f1dcb4d14ec0b4e"
  },
  {
    "url": "assets/js/26.563baf12.js",
    "revision": "44f762302c43362dccb0d24d192c7eb9"
  },
  {
    "url": "assets/js/27.6ab2ae3c.js",
    "revision": "5b61a25b67d5a393139120f0110bb06c"
  },
  {
    "url": "assets/js/28.afe4772f.js",
    "revision": "53991aa4faca6af3625391f60af2635f"
  },
  {
    "url": "assets/js/29.a92419b4.js",
    "revision": "867f7bf87761f975da761be6227545ab"
  },
  {
    "url": "assets/js/3.82d8ff16.js",
    "revision": "61b8124d372fed0e6c4e8224fb18dbaf"
  },
  {
    "url": "assets/js/30.76fc9998.js",
    "revision": "f3aa83e76e5b29ec6786b7ff9eb4ee4b"
  },
  {
    "url": "assets/js/31.68eba4dd.js",
    "revision": "7bc51d353835bb2875deb19d6e072351"
  },
  {
    "url": "assets/js/32.7c0dcd91.js",
    "revision": "0a8d5fa20b2c46ae54a0cee3883d433c"
  },
  {
    "url": "assets/js/33.7585c1ab.js",
    "revision": "af22f082981f33ca85791209cf8af44c"
  },
  {
    "url": "assets/js/34.036ef0dd.js",
    "revision": "905960767a9ae5c1735fffef51a087df"
  },
  {
    "url": "assets/js/35.ec8faf98.js",
    "revision": "3aa8d14cf02f69c13c3e3b5c388f01b3"
  },
  {
    "url": "assets/js/36.5d40f60a.js",
    "revision": "c9855a0ea4919e8da982c5987cd57be6"
  },
  {
    "url": "assets/js/37.d80497bd.js",
    "revision": "45afde1d1b59ec41ed1646fce1054f19"
  },
  {
    "url": "assets/js/38.18272350.js",
    "revision": "8cb4b66660f577f17f385cbd8ed80c90"
  },
  {
    "url": "assets/js/39.e7ed6907.js",
    "revision": "ccdab302f82971adab4d30195c431832"
  },
  {
    "url": "assets/js/4.0ad6a459.js",
    "revision": "896e8e108867ebbdfbf3bffaeea6fd87"
  },
  {
    "url": "assets/js/40.015e240c.js",
    "revision": "6688e4a75f1644731d5eed1a287f2528"
  },
  {
    "url": "assets/js/41.76289f82.js",
    "revision": "5e13ba2713936141bb6d4991f5b05669"
  },
  {
    "url": "assets/js/42.39a9fa6a.js",
    "revision": "e873141f699dd1f999c39707404b22a8"
  },
  {
    "url": "assets/js/43.86927740.js",
    "revision": "054484f9883ef7549fae39bf273e7ab7"
  },
  {
    "url": "assets/js/44.ad6f550d.js",
    "revision": "7ea59863670a7840c493d73be9b2a4a7"
  },
  {
    "url": "assets/js/45.c04eea2b.js",
    "revision": "477c0ef6f6b9c24a47d906d15b33174c"
  },
  {
    "url": "assets/js/46.d36c7a36.js",
    "revision": "8d0b3171f0680f680cacccb2c2fbf45b"
  },
  {
    "url": "assets/js/47.fed61455.js",
    "revision": "176f60ad92cd1b962fcefba4ed5d2be2"
  },
  {
    "url": "assets/js/48.1084468b.js",
    "revision": "18114d3b65a4acd826fb66758a1a6afd"
  },
  {
    "url": "assets/js/49.db5e8d7f.js",
    "revision": "76cea658bda52a221dba7ff3e9044de1"
  },
  {
    "url": "assets/js/5.40b83fb8.js",
    "revision": "6fec3b81a4ca4e72891e2cc26eaa7b1b"
  },
  {
    "url": "assets/js/50.4cebcb4a.js",
    "revision": "72b466e06085807eaa7a21a292080d55"
  },
  {
    "url": "assets/js/51.fcffb4a5.js",
    "revision": "e729db9deb2540f082bb3111cd7562a7"
  },
  {
    "url": "assets/js/52.ab3906e1.js",
    "revision": "c63f78f39822c0d346f472ed55d341a5"
  },
  {
    "url": "assets/js/53.2ebd25d8.js",
    "revision": "ea2d3da5979d589202a6ab3fbe8463d9"
  },
  {
    "url": "assets/js/54.e363f398.js",
    "revision": "dbc2d29e74322b47b10711d15d2733d5"
  },
  {
    "url": "assets/js/55.001b08a8.js",
    "revision": "5b67b8d9531722045486c65d07d9182e"
  },
  {
    "url": "assets/js/56.6dbbb5f0.js",
    "revision": "353975315b2756d8a2cc0946026ffd58"
  },
  {
    "url": "assets/js/57.ca9f3192.js",
    "revision": "b958f55fa3c0383e733520ed0aeaa23e"
  },
  {
    "url": "assets/js/58.b8308572.js",
    "revision": "ff3820eca11bab8a3db3960b39fea715"
  },
  {
    "url": "assets/js/59.a8fde45a.js",
    "revision": "3f47a8c49aa1e28d41316f9927ff6957"
  },
  {
    "url": "assets/js/6.fe0d8327.js",
    "revision": "7d3645637438fab46cb16fbe68fd5dba"
  },
  {
    "url": "assets/js/60.3c120d5d.js",
    "revision": "7e03018f8c0388e74b49b4a84df4a522"
  },
  {
    "url": "assets/js/61.a4408638.js",
    "revision": "c53a5f2ad605c0105e57468a16733f4f"
  },
  {
    "url": "assets/js/62.52a03c4e.js",
    "revision": "600b97df7558dbf6a4fd6fc051493ba3"
  },
  {
    "url": "assets/js/63.198bd222.js",
    "revision": "c9417b1e2d33c0d1cef23a8d7e8e800e"
  },
  {
    "url": "assets/js/64.3bdcfff1.js",
    "revision": "5b7fcd37ad92705a68f5dbf71b2e7f6a"
  },
  {
    "url": "assets/js/65.26842988.js",
    "revision": "99dcbef6b3658daa1269b77a664c5e06"
  },
  {
    "url": "assets/js/66.f6430cd6.js",
    "revision": "1f6ff7a86476937186502ef0d447d276"
  },
  {
    "url": "assets/js/67.247925f9.js",
    "revision": "8888dd96252e9107e2c272abad4b31aa"
  },
  {
    "url": "assets/js/68.14ac9353.js",
    "revision": "49f8b7088997f81d3f5ab1c714daf3e4"
  },
  {
    "url": "assets/js/69.869e1db0.js",
    "revision": "0e2b6803bd6f9736213a3fe0d519a2e7"
  },
  {
    "url": "assets/js/7.d5eb02ac.js",
    "revision": "04ed7aa21cd780d39adf673a92309fb0"
  },
  {
    "url": "assets/js/70.6a09df58.js",
    "revision": "8af6f67898c94f1064386b5810c6f912"
  },
  {
    "url": "assets/js/71.05179348.js",
    "revision": "b0f45f064e19167abce3b490637fe66d"
  },
  {
    "url": "assets/js/72.41df9415.js",
    "revision": "4ceeaea6b74a0fb8c0c2ccd91109f4cf"
  },
  {
    "url": "assets/js/73.bc993c55.js",
    "revision": "cb183950c156ef8c78fb453e6325a3cb"
  },
  {
    "url": "assets/js/74.fa671718.js",
    "revision": "7f4851d1ef4a6df1ec51aa1337084452"
  },
  {
    "url": "assets/js/75.dc9d2a42.js",
    "revision": "ca7acb30da52c587bb1555935780d8f1"
  },
  {
    "url": "assets/js/76.c03183e4.js",
    "revision": "6c33419e2469dbee2d21cd6242cdf65b"
  },
  {
    "url": "assets/js/77.de23e447.js",
    "revision": "b6cfbb8d415cb3ab824bb8183776b10e"
  },
  {
    "url": "assets/js/78.e58cccd7.js",
    "revision": "c03b298bf00ab943b1475fa5c4806bd3"
  },
  {
    "url": "assets/js/79.93dfe54e.js",
    "revision": "9e591dff285f591da9569206b30e1b46"
  },
  {
    "url": "assets/js/8.10573771.js",
    "revision": "bba5cce58f3d3ec94f6dc3494196f99a"
  },
  {
    "url": "assets/js/80.8ae5dd9d.js",
    "revision": "b7e76780a4e55bbabae8a5ad624b5790"
  },
  {
    "url": "assets/js/81.41c5e425.js",
    "revision": "970a117e29aad3eb9389dc2865bc9a4b"
  },
  {
    "url": "assets/js/82.5caf48ac.js",
    "revision": "0d8dec5a025b28492b1b141258795130"
  },
  {
    "url": "assets/js/83.9712ead4.js",
    "revision": "61b74beed06bd997232088aa27e0c303"
  },
  {
    "url": "assets/js/84.a3d66b06.js",
    "revision": "15260e081bb9f54200c1e122e557537e"
  },
  {
    "url": "assets/js/85.f1ae7c90.js",
    "revision": "a7b591ee5393200d6199cdb8fd2b42b6"
  },
  {
    "url": "assets/js/86.b89665e0.js",
    "revision": "7924820392c59746b4373399b8b6641d"
  },
  {
    "url": "assets/js/87.75274f8e.js",
    "revision": "c6dea842489f9decd20a06ecd8dad100"
  },
  {
    "url": "assets/js/88.332c22e8.js",
    "revision": "53620384dad2225720d2467325da881b"
  },
  {
    "url": "assets/js/89.1a071d2c.js",
    "revision": "8906f0f8a5a9b8c7244a16509227bbfe"
  },
  {
    "url": "assets/js/9.8739093c.js",
    "revision": "3af2e8c68cbf3a3b780480f6fd1404e0"
  },
  {
    "url": "assets/js/90.794b2235.js",
    "revision": "fcc5ac4099afa371cbc31cfa7f3538d0"
  },
  {
    "url": "assets/js/91.afa009bb.js",
    "revision": "b10d192912dc4fa2b011cc5a48dacbff"
  },
  {
    "url": "assets/js/92.5661fe98.js",
    "revision": "e6645a80924e503d4cb40dc651c686dd"
  },
  {
    "url": "assets/js/93.8be81ed3.js",
    "revision": "a58f7ecad99282817187d0aefce5fa02"
  },
  {
    "url": "assets/js/94.4c0a4d8a.js",
    "revision": "ca143ae20ddc0e23ea5580bcd762e60e"
  },
  {
    "url": "assets/js/95.9edfff77.js",
    "revision": "077801db08738bdc5a67bbb843bbf0ef"
  },
  {
    "url": "assets/js/96.392ae698.js",
    "revision": "5844dfa7dc9ec2aea6700b671b8f722f"
  },
  {
    "url": "assets/js/97.0897564a.js",
    "revision": "6f3c9d07ecb92e916b0adaddb43d1748"
  },
  {
    "url": "assets/js/98.d608ee17.js",
    "revision": "5deb378b0bb35d2b16c6e622ec99d5f7"
  },
  {
    "url": "assets/js/99.fedfbd9c.js",
    "revision": "1536cada9fd67ffa10458c61f6a621e4"
  },
  {
    "url": "assets/js/app.c4db3d19.js",
    "revision": "cce0518f60e8b6f13a592a27bafa7cd7"
  },
  {
    "url": "classes/index.html",
    "revision": "5a14a4fda96b8da3ac27844b47f9731f"
  },
  {
    "url": "classes/README.EN.html",
    "revision": "233a2c9be241fc467b498cfea219fa2e"
  },
  {
    "url": "creation/index.html",
    "revision": "4ce153ac63ada91b57657d95f1076ed0"
  },
  {
    "url": "creation/README.EN.html",
    "revision": "ffe200b7d91fdb44658ea39f80ed6d89"
  },
  {
    "url": "creation/stats/index.html",
    "revision": "4e50c637c871da3f43b1b88a0af6c407"
  },
  {
    "url": "creation/stats/README.EN.html",
    "revision": "76f0c95062bc29906df8075a8c185860"
  },
  {
    "url": "css/styles.css",
    "revision": "a796ee216099fb1c10ca2cd4902d6b61"
  },
  {
    "url": "eigenschaften/index.html",
    "revision": "383ab584b9eb5ac961100d4520a83650"
  },
  {
    "url": "eigenschaften/README.EN.html",
    "revision": "8a125440547ed4b3ca1813ba9027f00d"
  },
  {
    "url": "en/about/index.html",
    "revision": "845c2bac49ce381aba139f4152df8793"
  },
  {
    "url": "en/additional/index.html",
    "revision": "ff61e4bbe1536635cbc9fe96556913d2"
  },
  {
    "url": "en/aktionen/index.html",
    "revision": "079e16e8e3a360a26523dd835d05e643"
  },
  {
    "url": "en/classes/index.html",
    "revision": "2c2932884f598fe8abede26065038949"
  },
  {
    "url": "en/creation/index.html",
    "revision": "bd203af36fe187a4a61d4db4ed29394a"
  },
  {
    "url": "en/creation/stats/index.html",
    "revision": "1884f92e4cf68332ba037ed844e6027e"
  },
  {
    "url": "en/eigenschaften/index.html",
    "revision": "c1bddd019b7faf4c661552f0b285a4c7"
  },
  {
    "url": "en/equipment/Ausrüstung_Allgemein_9/Ausrüstung_Allgemein_9.html",
    "revision": "5e99e50672192d86b0baa6b3ca5dcbe2"
  },
  {
    "url": "en/equipment/Ausrüstung_Gewand & Rüstungen_5/Ausrüstung_Gewand & Rüstungen_5.html",
    "revision": "057305e505b3d37e285c8c8051335eb2"
  },
  {
    "url": "en/equipment/Gadgets_Tränke, Elixiere, Gifte_8/Gadgets_Tränke, Elixiere, Gifte_8.html",
    "revision": "afa1314cce41d764bd018b86f581683e"
  },
  {
    "url": "en/equipment/Preise_8/Preise_8.html",
    "revision": "f23b29975a57399a04156e6f91be673a"
  },
  {
    "url": "en/equipment/Runen und Siegel_4/Runen und Siegel_4.html",
    "revision": "1b654f11568d458ba195a6b2bb9720fb"
  },
  {
    "url": "en/equipment/Verwendbares_Arzneien/Verwendbares_Arzneien.html",
    "revision": "c194623a962df03d58620f392ba4d0b8"
  },
  {
    "url": "en/equipment/Verwendbares_Bomben_4/Verwendbares_Bomben_4.html",
    "revision": "f30539fb9a93cd6f67f2fb46518fbf91"
  },
  {
    "url": "en/equipment/Verwendbares_Kristalle_1/Verwendbares_Kristalle_1.html",
    "revision": "2c690fa3e5d90b751dba93442139a6ab"
  },
  {
    "url": "en/equipment/Waffen_Fernkampf_5/Waffen_Fernkampf_5.html",
    "revision": "9f6f08b200ce77c2d69396d82bb3f664"
  },
  {
    "url": "en/equipment/Waffen_Munition_5/Waffen_Munition_5.html",
    "revision": "ab1cd8e677850a8e3cb51b86783557e1"
  },
  {
    "url": "en/equipment/Waffen_Nahkampf_10/Waffen_Nahkampf_10.html",
    "revision": "67cbfd25bfb9ff30ededf92d4b601145"
  },
  {
    "url": "en/equipment/Waffen_Schilde_4/Waffen_Schilde_4.html",
    "revision": "ff1ac2da6e510181537740f1d9f1e110"
  },
  {
    "url": "en/gods/index.html",
    "revision": "3c7e4affd6585cc8cccc1b2c0036508d"
  },
  {
    "url": "en/index.html",
    "revision": "48529e590b372fcebe4a679361f234ab"
  },
  {
    "url": "en/kunden/index.html",
    "revision": "165d9e24ab00c98a4892ae5a2580beef"
  },
  {
    "url": "en/races/index.html",
    "revision": "a3a6da88040a17f022dbd6b33d44fac2"
  },
  {
    "url": "en/shorts/index.html",
    "revision": "b86dfdf9016fb700073129896c93ed97"
  },
  {
    "url": "en/skills/handwerk/index.html",
    "revision": "993a3a225d6ca7aafc3e014cf029bd85"
  },
  {
    "url": "en/skills/index.html",
    "revision": "4eba85bddf248c3c8cb46b9fa6a9b4fa"
  },
  {
    "url": "en/skills/kompetenzen/index.html",
    "revision": "ea582dcbdafa159cedbf7c2fa5e239a7"
  },
  {
    "url": "en/skills/magie/index.html",
    "revision": "9d1fcaa7e4483b4f73d0765cb3e494dd"
  },
  {
    "url": "en/skills/priest/index.html",
    "revision": "37bf79a32687f1d32d0bcabc31962450"
  },
  {
    "url": "en/skills/quali/index.html",
    "revision": "d56381f833d2aff36c363cee0af93ee8"
  },
  {
    "url": "en/skills/weapons/index.html",
    "revision": "1f426b70dca0b31320ed7bcd24c094a0"
  },
  {
    "url": "en/stats/attributes/index.html",
    "revision": "57f6cf7969fb43ddb3dba2556bc5226d"
  },
  {
    "url": "en/stats/base/index.html",
    "revision": "570ec3597bd71a09381352b98901edaf"
  },
  {
    "url": "en/stats/combat/index.html",
    "revision": "68efdf1c81cdc3ef6d539881214318c3"
  },
  {
    "url": "en/stats/index.html",
    "revision": "93718c371b95665b5f7940466cdbb27a"
  },
  {
    "url": "en/stats/lifereg/index.html",
    "revision": "95da50a17874cd418a9d6d95a2586f77"
  },
  {
    "url": "en/stats/magic/index.html",
    "revision": "b607bf5e4035782e20a211e2a066a974"
  },
  {
    "url": "en/stats/skills/index.html",
    "revision": "5c227512e126b2ca5788730f0fb27175"
  },
  {
    "url": "en/stress/index.html",
    "revision": "ac262f58a8ac70c994e77b1d0131e913"
  },
  {
    "url": "en/tasks/index.html",
    "revision": "de9dfb0d7d8fab5f096a493175a84b2b"
  },
  {
    "url": "equipment/Ausrüstung_Allgemein_9/Ausrüstung_Allgemein_9.html",
    "revision": "28bcf3750a710e228a94b341e89301e0"
  },
  {
    "url": "equipment/Ausrüstung_Gewand & Rüstungen_5/Ausrüstung_Gewand & Rüstungen_5.html",
    "revision": "fa99e157336427c94bce91ed246834ba"
  },
  {
    "url": "equipment/Gadgets_Tränke, Elixiere, Gifte_8/Gadgets_Tränke, Elixiere, Gifte_8.html",
    "revision": "7534e7c0c8e71d3d84266538e8c10153"
  },
  {
    "url": "equipment/Preise_8/Preise_8.html",
    "revision": "3db0b7fbbfcedb5c9a99e58556d9ebf8"
  },
  {
    "url": "equipment/Runen und Siegel_4/Runen und Siegel_4.html",
    "revision": "24b9a6364cec5d617196d0aef42b0eaf"
  },
  {
    "url": "equipment/Verwendbares_Arzneien/Verwendbares_Arzneien.html",
    "revision": "5199c1afe1d5ca1ab246f01629f3cb97"
  },
  {
    "url": "equipment/Verwendbares_Bomben_4/Verwendbares_Bomben_4.html",
    "revision": "a0465c86f294c43b9013a5375b368a88"
  },
  {
    "url": "equipment/Verwendbares_Kristalle_1/Verwendbares_Kristalle_1.html",
    "revision": "41e0efdb341c4ea42c11aa00298cb48c"
  },
  {
    "url": "equipment/Waffen_Fernkampf_5/Waffen_Fernkampf_5.html",
    "revision": "f73fd33f2fbb0afff2c83c51af1bbd76"
  },
  {
    "url": "equipment/Waffen_Munition_5/Waffen_Munition_5.html",
    "revision": "78ee84b1c060543a989b49dabe10c7a9"
  },
  {
    "url": "equipment/Waffen_Nahkampf_10/Waffen_Nahkampf_10.html",
    "revision": "dd560ca1fa8c50495dee21f76929b899"
  },
  {
    "url": "equipment/Waffen_Schilde_4/Waffen_Schilde_4.html",
    "revision": "9a625104359823e30431eaf7734b2c52"
  },
  {
    "url": "gods/index.html",
    "revision": "2b37b1ac2e821b2e2ec89eb783ce226e"
  },
  {
    "url": "gods/README.EN.html",
    "revision": "47158cf6c90b49659e0603ec014ae6e9"
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
    "revision": "0296e2b0520110f7d19f87ca09526ec7"
  },
  {
    "url": "kunden/index.html",
    "revision": "2f3b3734e142605415cbd08467251cbc"
  },
  {
    "url": "kunden/README.EN.html",
    "revision": "2bb636a0aaed8e0eaa5b7e882200e7a5"
  },
  {
    "url": "races/index.html",
    "revision": "7d40134a4fd8343969541875ef71eda1"
  },
  {
    "url": "races/README.EN.html",
    "revision": "b0680a0a9e6cf91dcb3fe329861ca9fa"
  },
  {
    "url": "shorts/index.html",
    "revision": "a95a688778bb324c08a49110db9e5d60"
  },
  {
    "url": "shorts/README.EN.html",
    "revision": "64e6b63404698cc7f880948e81a296e3"
  },
  {
    "url": "skills/handwerk/index.html",
    "revision": "e5d44c47706400e9b72f7a31bdf7ff7a"
  },
  {
    "url": "skills/handwerk/README.EN.html",
    "revision": "f849ca8503f4745aced471ed88ea2b67"
  },
  {
    "url": "skills/index.html",
    "revision": "9e2e06d9a8955e8af72d366bcd53aae4"
  },
  {
    "url": "skills/kompetenzen/index.html",
    "revision": "bd6b7f776d85f8934c65c9b80b5e58e2"
  },
  {
    "url": "skills/kompetenzen/README.EN.html",
    "revision": "2e81ac1a381f6cc46d9e766edce59c72"
  },
  {
    "url": "skills/magie/index.html",
    "revision": "0bc6dd129a8422c47f036d50f656d05b"
  },
  {
    "url": "skills/magie/README.EN.html",
    "revision": "009c5a169517c8bb3e7fc750303cb0fb"
  },
  {
    "url": "skills/priest/index.html",
    "revision": "6686d25560c98418da9e8c567a983c24"
  },
  {
    "url": "skills/priest/README.EN.html",
    "revision": "551057f66faa997df878d3a59f1b1e01"
  },
  {
    "url": "skills/quali/index.html",
    "revision": "1234cce7779e35f631904741c2d252c2"
  },
  {
    "url": "skills/quali/README.EN.html",
    "revision": "f2130d71deeeb93aed95cee830565b3f"
  },
  {
    "url": "skills/README.EN.html",
    "revision": "c696e215df1da5c6fa687f9ddeb31c91"
  },
  {
    "url": "skills/weapons/index.html",
    "revision": "53232a9df718d0ba200b52d41a6a7aff"
  },
  {
    "url": "skills/weapons/README.EN.html",
    "revision": "e9b07e5cf4ac9a8ba8e7410a17f8cb20"
  },
  {
    "url": "stats/attributes/index.html",
    "revision": "ed27d5a480954e7e6c446497d399dfb4"
  },
  {
    "url": "stats/attributes/README.EN.html",
    "revision": "07685566661e96b8dd8116d9853fc11c"
  },
  {
    "url": "stats/base/index.html",
    "revision": "33b917204b7bd54382311d87f1ce54dd"
  },
  {
    "url": "stats/base/README.EN.html",
    "revision": "1c73415d5fa6e8835ef67598be33e45b"
  },
  {
    "url": "stats/combat/index.html",
    "revision": "d6a30a2e83e98021265899ede60932c8"
  },
  {
    "url": "stats/combat/README.EN.html",
    "revision": "ca607aec3dff1ff05f2459844f3f97de"
  },
  {
    "url": "stats/index.html",
    "revision": "f0ddd0451a3277db807f1eedffe1daf6"
  },
  {
    "url": "stats/lifereg/index.html",
    "revision": "aaffe52e685d4f6a65eb371e01392f45"
  },
  {
    "url": "stats/lifereg/README.EN.html",
    "revision": "e99dd6bbd777e53baef53cdcd76ae025"
  },
  {
    "url": "stats/magic/index.html",
    "revision": "6bc3afe0c271f474587151aa3126a2d5"
  },
  {
    "url": "stats/magic/README.EN.html",
    "revision": "52eba8d962402bd0c122863c1362135a"
  },
  {
    "url": "stats/README.EN.html",
    "revision": "77ae0334b880882fe268db6df16c4881"
  },
  {
    "url": "stats/skills/index.html",
    "revision": "a4b9e353660f4fadc05dc17b3d3902f7"
  },
  {
    "url": "stats/skills/README.EN.html",
    "revision": "13386cbbfa8154a0a3a3baf0c75293bf"
  },
  {
    "url": "stress/index.html",
    "revision": "a8e20f6bd7a2d8f8a5acca1ae0d3762a"
  },
  {
    "url": "tasks/index.html",
    "revision": "8b10ff925176fa0f822c5f9b059ab77c"
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
