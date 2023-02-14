'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1e77c2e151b147c7fcd24f76d45c840c",
"assets/assets/bookmark_button/bookmark.gif": "b6407ee9730bd783eeb2970416a61643",
"assets/assets/card_rotation/mcdonalds.png": "338791bac733d52744b70c930e4ea339",
"assets/assets/card_rotation/photo.png": "5fb01897f9f0e624a5e6db51ad892cd9",
"assets/assets/dart_logo.svg": "3d8a1ad122a912ac97cb758bc23f776b",
"assets/assets/fb_reactions/angry.gif": "efed90c29fecac39fbfdc675968910c6",
"assets/assets/fb_reactions/haha.gif": "7c733ee18376f25da1f83a917826a82b",
"assets/assets/fb_reactions/like.gif": "0237a6c8b21db2a2cf77a795195424be",
"assets/assets/fb_reactions/sad.gif": "8a9ea9b09d7e663ac222ee44211a800f",
"assets/assets/fb_reactions/wow.gif": "60c511e3cdde60da8470a5f7c0e68816",
"assets/assets/fb_reactions/yay.gif": "8928f7e3d1be9e2ed954e3de056a188d",
"assets/assets/fonts/pressstart.ttf": "2c404fd06cd67770807d242b2d2e5a16",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "e38804ae070b58fbf4fdd88fd6853929",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "0134dd8fe6fe708de73909a71d842780",
"assets/assets/github_logo.svg": "a65a3fe32f7639794d3f29ed84334262",
"assets/assets/globe_3d/world_texture.jpg": "af75efcb416b7063928f8b17d0eb7bcb",
"assets/assets/graphx_logo.svg": "d99f9f6cb09dd4f955cae6b623c893da",
"assets/assets/heart_reaction/background_photo.jpeg": "392d8fb1a66703aa28394d62fe53f3a6",
"assets/assets/isma_chart/chart_data.json": "1091622dd9aedb63906e92f949745550",
"assets/assets/murat_coffee/espresso.png": "382ee9dfcf195fc879401562cbc2d535",
"assets/assets/pizza_box/pizza.png": "adac9aabce0c9675a9d74392529ac480",
"assets/assets/run_hero/jump_outline.png": "da4bbe8fc6ec99677009d5be3f3f8ca5",
"assets/assets/run_hero/landing_outline.png": "f0913d7227690e215363e1d05a047cd0",
"assets/assets/run_hero/midair_outline.gif": "9881e31e4d04f19f8c07244465c68d27",
"assets/assets/run_hero/parallax/layer_01.png": "554fdf4c70c6e7630b774a742a198fd0",
"assets/assets/run_hero/parallax/layer_02.png": "467d4a87ee29bab078290cd5d7fc3705",
"assets/assets/run_hero/parallax/layer_03.png": "0e5735b1ee6c96d23ae79770a2276bb8",
"assets/assets/run_hero/parallax/layer_04.png": "557fcca4d8eea3e2c13994764d75d26d",
"assets/assets/run_hero/parallax/layer_05.png": "8f461ab5faa380130de3d7f581c51f05",
"assets/assets/run_hero/run_outline.gif": "6d73e03fa2b1d539b7a7ca7ddb44fd32",
"assets/assets/thumbs/cryptericon-logo-dot3.surge.sh.png": "6c53ddaf16f238a59318c176ae912987",
"assets/assets/thumbs/example_3drot.png": "93cbeaf446aca84adde638869e784493",
"assets/assets/thumbs/example_altitud_indicator.png": "e351a2cf3624c6fe61eb982f0de184f7",
"assets/assets/thumbs/example_ball_vs_line.png": "954726829ac76c6d72479739f2f89b41",
"assets/assets/thumbs/example_bezier_chart.png": "1c0a8af7982ddc19aaeb14db00e0d953",
"assets/assets/thumbs/example_bookmark_button.png": "f5c5868cf3b5c50c5263a46b6750a959",
"assets/assets/thumbs/example_breakout.png": "1f41b1dff9f92346ae4e64b66b71b166",
"assets/assets/thumbs/example_chart.png": "bd1c7e877e30a1557332da470d97e3ba",
"assets/assets/thumbs/example_clipper.png": "6bf3c4f7717027acbd8ef408236384f6",
"assets/assets/thumbs/example_colorful_loader.png": "e1fef310ba5214537702ffcf81bced19",
"assets/assets/thumbs/example_colorful_shaders.png": "e8d3d91017d23dccb9fd28b1a7063c19",
"assets/assets/thumbs/example_color_picker.png": "df59a0501f2458ad24725977bbb1bcc2",
"assets/assets/thumbs/example_dialer.png": "889e03823262a042be44ae172b8e630d",
"assets/assets/thumbs/example_dna.png": "475eb8b4bd631c1120ad3eb330607545",
"assets/assets/thumbs/example_drawing_pad_bezier.png": "d77681af6db352a1335855a54fc5e87c",
"assets/assets/thumbs/example_dripping.png": "0a052a36dd26ed892dd68284559b028f",
"assets/assets/thumbs/example_elastic_band.png": "8c5d5c75f70ed0632b92c343cd19d8e3",
"assets/assets/thumbs/example_expander_fab.png": "123973726749b7d70f0ccd5faeb03881",
"assets/assets/thumbs/example_fb.png": "d24eb0783662c2cd856aca86f8141015",
"assets/assets/thumbs/example_feeling_switch.png": "552556c0fe3795e52f5ebd568c8a35f5",
"assets/assets/thumbs/example_gauge.png": "a828dbef700a2df485d9c006b136b4a0",
"assets/assets/thumbs/example_globe_3d.png": "32caaa8c7cb7536305f1830184a4146b",
"assets/assets/thumbs/example_glowing.png": "fd499e0bcf2efa7e6fa14769b5458170",
"assets/assets/thumbs/example_gradient_flower.png": "bf4c1e074f9fa0d2f26ab5b1544c0320",
"assets/assets/thumbs/example_heart_reaction.png": "ac84166a6b28b665068ad8bcc9f95fa8",
"assets/assets/thumbs/example_isma_chart.png": "0e3b5430aa73e95429b1f06bb7582062",
"assets/assets/thumbs/example_jelly.png": "254241f71a7c8225d7b66faec475a239",
"assets/assets/thumbs/example_lined_button.png": "a9e01ecd726c1d99539e5a5843dc3d30",
"assets/assets/thumbs/example_lines_repulsion.png": "017f225f856af814888614bdc9959f17",
"assets/assets/thumbs/example_lungs.png": "7111a8c1a1cda3c417504b33a9078fc3",
"assets/assets/thumbs/example_murat_coffee.png": "d7be052b72d350299508c189a0413c47",
"assets/assets/thumbs/example_nico_loading.png": "84f200e7829611a310d1a448ebbe69cb",
"assets/assets/thumbs/example_nokia_snake.png": "eb9a01dea6d8e09aad7fdff63fe27bba",
"assets/assets/thumbs/example_page_indicator.png": "7fa77d224bd9a8f0fd83e01c07b27cb5",
"assets/assets/thumbs/example_pie_chart.png": "2cc69044805a88d4c8828f4f58cb442a",
"assets/assets/thumbs/example_pizza.png": "6d8d10e4fae7bc66896ac2cf65010bbe",
"assets/assets/thumbs/example_radial_menu.png": "7fba637eda32e5b1b9525ddb9e903bd3",
"assets/assets/thumbs/example_raster_draw.png": "1d463c048a565df1033ddff63a2cdcaf",
"assets/assets/thumbs/example_run_hero.png": "383aa04caf921e2b3b49599fe3dc933c",
"assets/assets/thumbs/example_simple_interactions.png": "81ecea574df724717c4c32cc13bfe6a7",
"assets/assets/thumbs/example_simple_shapes.png": "e8ab04f511885578d2032abb4dc9aca9",
"assets/assets/thumbs/example_sorting_list.png": "3adbb376737707ed83d0647a05ebfa5b",
"assets/assets/thumbs/example_spiral_loader.png": "e9a51ff5d707af9c52e8459b3151935b",
"assets/assets/thumbs/example_splash_intro.png": "353e5b4abffc7fdd2412ad8fc3c447c2",
"assets/assets/thumbs/example_stars.png": "d33bf156953fcec209fd56ede39eeb16",
"assets/assets/thumbs/example_submit.png": "38bc6254563425d5831058427acf1d88",
"assets/assets/thumbs/example_svg.png": "b3f74a3fb654c8ff45db66b2e737a4b9",
"assets/assets/thumbs/example_toast.png": "4adbf5647128af340d75333644193e56",
"assets/assets/thumbs/example_tri_grid.png": "26d810e202e0bde70a013ab1a9d6db20",
"assets/assets/thumbs/example_tween.png": "1c54afe367d755df7045c7d035919e0c",
"assets/assets/thumbs/example_universo_flutter.png": "21e8abd3d8a529efc1be0583dd281845",
"assets/assets/thumbs/example_xmas.png": "5cd14d3f112fdc3ef6bbefbefa5286d0",
"assets/assets/thumbs/example_zoom_gesture.png": "cca1d134bdd38811c8b03083963156a7",
"assets/assets/thumbs/example_zoom_pivot.png": "8dff5f5b5b42c2ae63e108a356e1c142",
"assets/assets/thumbs/graphx-burn-boxes.surge.sh.png": "997df1bf44cb972f6bf666f84529bd4c",
"assets/assets/thumbs/graphx-dash-game.surge.sh.png": "06e4a4ef1884bf93eae3a744aa7f7c61",
"assets/assets/thumbs/graphx-drawpad2.surge.sh.png": "0806b8407e71ffe9ea6f71f41daf17de",
"assets/assets/thumbs/graphx-gesture-sample.surge.sh.png": "acd8ef9b9dedd8fdeb1bb31513d14196",
"assets/assets/thumbs/graphx-gesture-simple.surge.sh.png": "9017f9f5dc9ca1ff4b2d491bd2d7b307",
"assets/assets/thumbs/graphx-hh.surge.sh.png": "527c5ea4853981167f20123ce6a72b94",
"assets/assets/thumbs/graphx-hugeinc.surge.sh.png": "27163a554068d2e0eadf38a5a94019f5",
"assets/assets/thumbs/graphx-lost-clock-skia.surge.sh.png": "68a702fa4b8a393e09461872f6c19f8c",
"assets/assets/thumbs/graphx-meteor-shower.surge.sh.png": "be71d6ede4d6f065a15ce4b3c2888593",
"assets/assets/thumbs/graphx-minimalcomps.surge.sh.png": "8bc039577044c097c56f56f846dcd1db",
"assets/assets/thumbs/graphx-node-garden.surge.sh.png": "4f4f1a36ef6fed7d4a527ff555275ae2",
"assets/assets/thumbs/graphx-openmaps2.surge.sh.png": "8d86d2ec40cf7d36cc6c21c6fd03a5c2",
"assets/assets/thumbs/graphx-perlin-map.surge.sh.png": "50aace44eb6476d717ef555d85b889ef",
"assets/assets/thumbs/graphx-puzzle-ref.surge.sh.png": "812e918da650b0de33a648a134ae4af5",
"assets/assets/thumbs/graphx-raster1.surge.sh.png": "3382b91c97873d0e5df2d9a7a56f1ce6",
"assets/assets/thumbs/graphx-runnermark.surge.sh.png": "18060eacfc02d46222f4c7e733e56778",
"assets/assets/thumbs/graphx-simple-particles.surge.sh.png": "dd1e7c73f756da702bf67e36838ec4fe",
"assets/assets/thumbs/graphx-snake-game.surge.sh.png": "e88c0bd11eb8aab5dca19ce51e486b4d",
"assets/assets/thumbs/graphx-sphere-dots-rotation.surge.sh.png": "fd0acbffb77a160d1339e82e50e45449",
"assets/assets/thumbs/graphx-sunburst-chart.surge.sh.png": "0b697014155038620df9b36a6fbe7334",
"assets/assets/thumbs/graphx-trees.surge.sh.png": "31415c6db95fe7edf0b130be243a7695",
"assets/assets/thumbs/graphx-weird-displacement.surge.sh.png": "3638a67e37d613aefc858521d353525c",
"assets/assets/thumbs/roi-fp5-waltz-circ-bmp.surge.sh.png": "6d25098f6a6a029feefbae0445f3ba0b",
"assets/assets/thumbs/roi-fp5-waltz-circ.surge.sh.png": "69644d7150df42c266fa060688c153d5",
"assets/assets/thumbs/roi-graphx-cells.surge.sh.png": "b67542a71ec3e806e4d88b3a86b3cea5",
"assets/assets/thumbs/roi-graphx-dotchain.surge.sh.png": "0d4fffd16afcd4d4c34a813ee8898d42",
"assets/assets/thumbs/roi-graphx-fisheyeparticles.surge.sh.png": "e4a12bee24d8d83a71a738cf8dc48895",
"assets/assets/thumbs/roi-graphx-fisheyetext.surge.sh.png": "718ae501658de6c6297dfbbb2c6ce0f2",
"assets/assets/thumbs/roi-graphx-hittest.surge.sh.png": "503818c870447d9681be11537f3a45f4",
"assets/assets/thumbs/roi-graphx-particles-input.surge.sh.png": "6e603b612c9ce5dba8287823c9c46706",
"assets/assets/thumbs/roi-graphx-particles2.surge.sh.png": "2952fc952475b918f7882d6494f13273",
"assets/assets/thumbs/roi-graphx-pingpong.surge.sh.png": "735166bf6180008e4740acabcd4c015a",
"assets/assets/thumbs/roi-graphx-rgbsplit.surge.sh.png": "284141f4815d2d31cc5fef0907fd03a7",
"assets/assets/thumbs/roi-graphx-sample-masking.surge.sh.png": "42dc3b99201e7b816d36c42426b63bcf",
"assets/assets/thumbs/roi-graphx-shapemaker.surge.sh.png": "293bcd25eb8d49c30d16a1bf85320c16",
"assets/assets/thumbs/roi-graphx-spaceshooter.surge.sh.png": "2e4b3ecf8a1bd760593027aedf4ec721",
"assets/assets/thumbs/roi-graphx-spritesheet.surge.sh.png": "bd5e81503157917f4de73ddcb7a850fe",
"assets/assets/thumbs/roi-graphx-textpivot.surge.sh.png": "bd4cefb2bb3eabdf158963ef2f841953",
"assets/assets/thumbs/roi-graphx-web-image-stack-grid.surge.sh.png": "7bb98fcf02a75a1caeab10823644f7b5",
"assets/assets/thumbs/roi-graphx-widgetmix.surge.sh.png": "e05944951622dc301c0851fcd78956cd",
"assets/assets/thumbs/roi-particles-manu-painter2.surge.sh.png": "36751d1dd49e26d3b0dc187a74d5d67e",
"assets/assets/thumbs/roi-puzzle-v2.surge.sh.png": "df267540538cb422adedac3449d14b86",
"assets/assets/thumbs/roi-swr3d-stars.surge.sh.png": "2ac5830f5c560c603dfa037d98ba8f9c",
"assets/assets/thumbs/roi-taso-chart19.surge.sh.png": "eabae476179e50317e9d150c5f05c0cb",
"assets/assets/thumbs/ss-fun.png": "ec0c8ac04a157608f548ddf1f72e0ed7",
"assets/assets/trash/data.json": "562450274e12d430ddec12b591362477",
"assets/assets/trash/game/exp2.jpg": "230a47bf7bf99db32381e59c2c59ec2e",
"assets/assets/trash/game/flare/aura.png": "f929730d6228715693e26af7eee1364e",
"assets/assets/trash/game/flare/corona.png": "f5129ae2357a2c1a4cdc051c1d59c864",
"assets/assets/trash/game/flare/darkball.png": "95838540ed81ebb0875108235befa94a",
"assets/assets/trash/game/flare/divine.png": "54ce4efbe36c7d7702cc990bc10e3769",
"assets/assets/trash/game/flare/extend.png": "186146d03388996a9d2c2bee80c6cb3b",
"assets/assets/trash/game/flare/extendring.png": "4df562f869c7c8d68ec7d67ce6808f52",
"assets/assets/trash/game/flare/flaredouble.png": "11cc74a8d540c3cb93ff41b3cb36f913",
"assets/assets/trash/game/flare/flarefour.png": "8152da07b3bf65e1a6f071d386150c43",
"assets/assets/trash/game/flare/hexagon.png": "5c88b7da7f902ff59065e8b3e5dc1713",
"assets/assets/trash/game/flare/hexangle.png": "4ddd20853f0fa6f6927d297c85f2064c",
"assets/assets/trash/game/flare/i0.png": "fe3788f77b9cdaf62b1e317ecce51699",
"assets/assets/trash/game/flare/iris.png": "1816e4c4cc287f26c74eaa48b46eb456",
"assets/assets/trash/game/flare/nova.png": "28af7203d960cd19e847cc8b6dcb6f48",
"assets/assets/trash/game/flare/pearl.png": "e02990a44796c0663da6ebda2da43a96",
"assets/assets/trash/game/flare/pearlring.png": "ce628e142315101ef7468a082dd9e3db",
"assets/assets/trash/game/flare/pollen.png": "a509c2f3ab85e20ee91cd227d9587de9",
"assets/assets/trash/game/flare/quadangle.png": "0e3898169587e1061164dd4480fa000d",
"assets/assets/trash/game/flare/quadragon.png": "1023021af372c4932704f1d23c0da684",
"assets/assets/trash/game/flare/ring.png": "b1ddccda46453c0c2f64631f4a44b044",
"assets/assets/trash/game/flare/sparkle.png": "3c83be31f85609f0b7dd3e69f7334519",
"assets/assets/trash/game/flare/star.png": "31fef8903a30b61994ebb9fbdfae6cbd",
"assets/assets/trash/game/flare/starring.png": "35bb846a73f2b13630c807f618ada7c6",
"assets/assets/trash/game/flare/sun.png": "5bf521d911abe7a61a056e0ad3011112",
"assets/assets/trash/game/flare/triangle.png": "bc2feabfada1b345c0c592269349a349",
"assets/assets/trash/game/flare/trigon.png": "a0fa96361c063ecf55ad1d613b98c6a4",
"assets/assets/trash/game/flare/tunel.png": "65de75668b6168a7f2e7fad8d44866b8",
"assets/assets/trash/game/flare/tunelring.png": "f93af135a3b60fbe69fd7728198932e4",
"assets/assets/trash/game/flare/wave.png": "35998437f96cf7187ef1500ee6a154af",
"assets/assets/trash/game/flare/wavering.png": "b8a1f72c1d5b51091a227249e95b5449",
"assets/assets/trash/game/flare/x0.png": "01c25690cd434824d2cfa22cbe9dee29",
"assets/assets/trash/game/flare/x1.png": "3b65e7c9850a3ea181ed89969cd59f91",
"assets/assets/trash/game/flare/x2.png": "b2ed093abfaf996b5f4d5a3859242ac4",
"assets/assets/trash/game/flare/x3.png": "edf04e7e9635ca3d288f3336221f2cf8",
"assets/assets/trash/game/flare/x4.png": "c86c3a152a1886d0415c3e83eb771a7a",
"assets/assets/trash/game/flare/x5.png": "5c7fdec1ad771d4ebdb58ab932a9f5b1",
"assets/assets/trash/game/flare/x6.png": "780c5d5436e61890d1860a475cf0d522",
"assets/assets/trash/pumpit-s.json": "163a60a2f9bd27962be03cbbf6d30d6e",
"assets/assets/trash/pumpit.json": "c51b9f1bdc220725ea7fba60e7c7b273",
"assets/assets/trash/santorini.jpg": "e14de82902951dcca83cb5c1e8f749da",
"assets/assets/trash/sharona.json": "f1c5e00037f064aec454363fcfba683b",
"assets/assets/trash/space.png": "6ec93bf5c30c1424da2fb2fef91dd180",
"assets/assets/trash/_pumpit.json": "349aa53fc586374e243327045b316ee1",
"assets/assets/trigrid/cute_dog.png": "480e364fe65fb3b36a9722a4eb6afa1f",
"assets/assets/xmas/flake_1.png": "b0cba206fe48e49d751844329ac707e1",
"assets/assets/xmas/flake_2.png": "d124dcd546e820b74ecb0078931c8e78",
"assets/assets/xmas/flake_3.png": "60c8cc63a54d3bfd5708b3ab094893f4",
"assets/assets/xmas/flake_4.png": "a82573cecaf1d9c1cf9e4734101c910d",
"assets/assets/xmas/flake_5.png": "91bb2bc1661d583f7faea420420ba248",
"assets/assets/xmas/flake_6.png": "9694992d258544ae70ef604ea3b503ee",
"assets/assets/xmas/xmas_bg.jpg": "bb9410f5db3c115cd34586676784a3bc",
"assets/FontManifest.json": "5f414c47887061ae47cd6c97a6694c2e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "2dc04de405b9f18f70daf3c749100d18",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "a23f94458d5a43656553d98ba7000262",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "d24d01aee95ed582feeec3268c8f9fac",
"icons/Icon-512.png": "5872bcd517f1ad3412996e181480caa5",
"icons/Icon-maskable-192.png": "d7192325ce15085172ead3d412b760a7",
"icons/Icon-maskable-512.png": "7262441a4002fe102a5d4cb9de9ea3c0",
"index.html": "7ebb11b6925220472f9761b3993a4fcd",
"/": "7ebb11b6925220472f9761b3993a4fcd",
"main.dart.js": "254b9d95154efbefffd46ab439fc34c2",
"manifest.json": "ab5612b861c80ae62981f4d984f806f0",
"version.json": "af49bf7a05fb829087fabf890256ed7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
