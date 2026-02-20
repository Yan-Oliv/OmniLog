'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "1bd2e9574e33b62a088ef425e5345ac2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8ad4b66fe85e32fda49a704bf8b73e63",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "90f32d002e8f68d605730dd64e617c68",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "027b9279f9f50d521e79789fd2cbb72d",
".git/logs/refs/heads/main": "6362355920a05c5029143afbcb941a5a",
".git/logs/refs/remotes/origin/main": "9d15a8e82e75e42b0b149f80e9afa66e",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0b/7a985b2c45a2bbffcb86558a3e493a90c6ec2c": "b5aa3ca817592007f99a3bbd083e0c52",
".git/objects/0c/f90b413d72e7a91822b6fcbcaec0a93a486f07": "09eb6be12c2fdcd971463e270b57d1c9",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/13/6a3e29e396f20a96235c87cfff816a69892410": "9bd4dc3d9d2303184faf9b065cb222d5",
".git/objects/19/ea7473b8b29d4d2c2a7e2f34b049e38983109a": "12e9ed3d0e67858204d38c51f7c6db4b",
".git/objects/1c/ee9636aa5b027bb90832528d9a6e1cd11a9693": "35f2b653c236ae96b0738a4e2bfa13fd",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/ce3b028d8ab26643b044dd1d278e48f49af632": "1f1e68f29b329ae3b740625c95227352",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/28/bbac46784e422a50cc0a77a8eb8082e87090cc": "e7c5903f1ff20ac0332e39be518074ad",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/c0c717c1048b99d0ea23d297cf33d36047d6bd": "c8e78caf10a9f6cd3e2e9d733cdffabd",
".git/objects/2f/cc73a4f15e3776608900ebad75162061c02d6e": "db7ad2b25be5bae4a98035355c486878",
".git/objects/31/104fedf6920586fa8333ee68dc6a1767b20b28": "9176ced2b6bdbd646c3cead824adbbf1",
".git/objects/31/6047cb45d94853d93665c36a7642aa72579a76": "b7d3f2bc7624d678516078cd13f061f9",
".git/objects/33/2f2b4c54c24a82dccc8824bbd366a555eb0ec4": "f9ba673185893f9c12a489163c68d7e8",
".git/objects/33/955b8b9d34a539845515e0cc855fcb153a1d04": "482812f95ccd43c87e6ca3cadcf2f2e2",
".git/objects/38/240190bab7195dd014c6518da2fa253b72a3fd": "17c293c377ebb5b60d51a55cd251a9b7",
".git/objects/3a/b5b4511664ac01e94e6bbec28be1ea9cf0bf38": "f52550e842510934dcfe2682f651cbfd",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/d0325b346fabbd9c249abb088184e1bdb98b7c": "ee3165a695d4cf0da8d8589ad5365cc9",
".git/objects/42/b124b0f5d1aea85880818c0c5560b88d9deb31": "44bdea4c38dbb5186ca7f773d4f6faab",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/87cf62f350df41893bf4271f895ec3717285f0": "d307ac2502de1b1b0758a90c15dcddb7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/bd41faab4a4337c11205ac775138e12a095d8a": "c1425af8576e94edabb9c91803283b5f",
".git/objects/4b/082f4fc1732eccb6432b59ba5cfcbcd71cd458": "8107d87c8a990910df6fdabd4d9be1d0",
".git/objects/4d/363f1f742e10a5d91e84e51b05ce754bc52e3a": "74184d0d8fbe775f4627c7e0281cf7a6",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/1b6844ebb4ec7efd9dd38ec82a2a49c61c81d6": "46e541d20314a22163ae894f32a6d7b6",
".git/objects/51/50c23449d7378bf067829de99096561ddfe061": "81a2b9d4d2aef324ea9af56b5805a60c",
".git/objects/53/76cd0aa3d10ca15db01567f2b6d0c9b5f18244": "56d1f97caede92bb4d51d670bb344e6c",
".git/objects/54/bdfa389c52e3a082391cc53daf9d5e6bdc36d3": "25b77d58dbe3d09b61e1540e580b0341",
".git/objects/56/bcc62a3eff16fff048a5c7e10bfa2ffb9d375c": "8c0a2f36d9ed2c3962860db321acb7ca",
".git/objects/56/f2401c69ab7e3b0d86eecb4231febcd33d34e3": "c2eaaab165b896b254aabda09846c397",
".git/objects/57/8c403aa513cd46c86fa211ea2f34a63812b61a": "af0c47db0e66f651d570bf3e0d321058",
".git/objects/58/413fc431411b812f9c03162b1fbc48514337a9": "3c5a42db959d74b5a21a6de69bb5282f",
".git/objects/5c/0890730e7ee7d274e9b16a9c0dc0f739ee4a16": "97220a785d0681ad74c494e8cd5e762d",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/2f3c2dd97e2922ee94fa641c31d0e4de2b7a08": "8f97f44661ac9c4a8104579e790ebcf0",
".git/objects/5e/597b8b8179d9974049ba1352ae27f278c502a2": "48384639d8590111cb8b29dcb9c9aafa",
".git/objects/5f/9c0558f92a12a97a72a937da917ade794d202f": "828748ae1820b4431942eadfb4e4a40e",
".git/objects/61/1ecc08dbebbe1bb5779556de35fbd740ba4d74": "cd900c0e03d1b68e4be6a1d381ff630b",
".git/objects/62/03c808e5d752c97acbe1cb5c2804865ed26fa4": "07d994b790fa59db95a77f7c44b803b9",
".git/objects/63/1ef1876f6ae3ca189a4e78f43a7009fe62b7af": "5530306924aa696d6ca78efa431c0475",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/993cbd96db782abe6280667a6610d5e76068c4": "11573d7eba5d14849ae7180a3807436f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/51a25d199dc6d77bd1a7c8281e52caa99ad0be": "1434b2a98c4c3048a47c0b07f45344a8",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/69d703fdbbf9aa7b22f30c3430f1716ea0a531": "41d12c414f982683aebece5f5b398123",
".git/objects/75/09c8e8addb7b065b95173e3879e7d4263932c4": "ada3d573c6eab7982e7be57ebc24b10f",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/8121e07e4541b56f905a12f958fa74afcbfed1": "ddf6f2dc9561b334eb1994185a11a24c",
".git/objects/76/942bf1d4596a33bb474456b82cc8e931bebf6f": "d0b9373bfb5d2a795d58e0159a41c846",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/013697be90b6b52da44a1ff55e0f69b6cc7fa2": "35aae7f4e10d36224b3da906e0931afc",
".git/objects/7d/7ad08a7efb5c0be3869499191b0f237a08cb94": "b432b23a3fc7b0a39cc2edf3c75b172a",
".git/objects/7d/9a6c4c32d7e920b549caf531e390733496b6e0": "08fc72bf13310819ae18642e598966de",
".git/objects/7f/9324116f22fb9199bd5462c8a4a2ad1c232565": "74c5f639cff8fef5333c63088d5a625a",
".git/objects/80/0a998e61b4a0d71e40a553012fc6fd6e67bccd": "5da574a4a38ec093a75bdf2370e6f521",
".git/objects/81/f642a27af5405d3e51cb10aba0d2d79b5b0997": "edbc407eef780225f476f32205ca6da7",
".git/objects/85/1e280e585b7f66b26c84308ad6f9c5f89fdf2b": "39fe572e6d7a2c189d4bf929da6f41f7",
".git/objects/88/52b90093b688ee2aa205eeabeb8dc428653fca": "42e2fa339eb7ed1a9c6fafebd9b5ec95",
".git/objects/89/5a44514b5caf8bce69dc3ca8fb071c90b0a9bb": "61ae9b2dacd86cac6971c9494c7ec0c5",
".git/objects/89/96e47e38908dfcc57cf459d98e6429e04c7af4": "fc59e99b9b9c853e4bef096ee87035bd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/6ec7e285c8c9f6c77384c90d5c4734b8120959": "3decd66e3461f4bf321775d0611096c7",
".git/objects/92/707d02fb0847b76e27821cba64a47df58d5cce": "bcedf75d7f7b4747e27a7da42e001c5b",
".git/objects/93/f7d56369900dbe7809e20665031af6a0a0b85a": "65f8a8e34a66d36bec8ddf3c43bad27a",
".git/objects/97/74a0007e032f66a676b7a4ec4de0b814b40a6f": "fd39ee1873dad9f245b9b2a63b933479",
".git/objects/97/84b85235a9802ea424755bb3ae9bf35fb59a53": "581615a2354ddb0310bb67d3b9087720",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/72d2a4efb2bddd3c9ab54ef29c25daf6300d40": "22cc3cf972f0400924958bc68e9914a7",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/e29bdff261d09269f02062eda239ad21bd1da7": "7f99e76ea83e8b3f1c11e0fbea235bed",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a3/3d04d9c953dacd47cad79f64fa7b3120ebb064": "6b56c3c1c8e1fc65efad4bf45f1c6e02",
".git/objects/a3/a7d77b1bcf57ee83d5ec931428fcad8b380d9f": "5ec764ece1b5aeec5b36b060854d96e8",
".git/objects/ac/95ec7743c75f03dcd0a82e4bfc19f95152fd50": "781bfbd942a4fb5bdbe67e316112b2e7",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/b5384910928a867e7d58e15653e364804e7ea1": "bba44128c7564fd711a741d78676a332",
".git/objects/b0/a9a94d249cf0b21054b55824c7b0fa2779ec90": "e9ac3c519218f93fb8f2f7072702210b",
".git/objects/b5/ad2c40b2915dd58835596210247c12cc66c8c3": "142ddec638b6400666ef6f4451b56eb8",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b8/326d002053b1803dbb6dd633103f7767cfa57d": "62a48fd3fec01223caf98e38fa6d32d7",
".git/objects/b8/97b006b0d7883026dd277b16f3414a8d959288": "5894114bb723b72cc222b0a62c2dbfb7",
".git/objects/b9/2a57d5062832858bc9199cbab92875313132eb": "0d70de034965956ec57513010d683bf8",
".git/objects/bd/bad0f968e60d7df5ea717e6e6a127ac403387c": "b067b9d6039a23017aec4418a43007a1",
".git/objects/be/b05a720a3fa3d14d483bbb122ae2e64c765c8e": "0e65b4bc723c267d53f32b9665be1c09",
".git/objects/c2/932fe4b9a8af5b870489bee9150d09a768a34e": "43ca98f6b42258f601356b48b8939532",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/ab4542ea6e635c7400bc36fd1aeeb5fc5fc43d": "195d0192a14cd9390d404e4a184aeca7",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/f48006a659c131f14ff3d317410ff0872754c2": "5abd5b7b6ffb008905a0333b1e3efe01",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/c05b9b14c4f1de4ef5297fca0845088ab83f4a": "74e20ec4d227da9f417339a6b936c908",
".git/objects/cb/c5085a5fc18f6e0e45f7849c03da5eba7932d0": "13849d6b875c1e593fdeb9d7d7db2c51",
".git/objects/cb/c5c1a6dff3af166f31136e55be32c80db2b8c4": "ff821593361f0d730f4248f0ee945228",
".git/objects/ce/2e6b1bbe1cdd568864a829572c9d76948eaedc": "69027a8064aaf4ebbd3792a9a78280c7",
".git/objects/d0/7a6b8bdf62af3ef454959eb800ab73adaf51cb": "60e872841b538b4c7ce7a8fe3a0375a3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a79dce4df8bedb155936bd267203d05f627f04": "849a16502e27a1c7cc415bb02afc3014",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/da/49580d8f8e62a22c5e98a6d8fb7375e2176f3a": "e530624f02160176f0807d32e698b6d8",
".git/objects/dd/b304641b301f3c3e56bad146990252c1342767": "b88f7a2e240d9caf735c80e39863cee2",
".git/objects/df/23e039829fa5cee5b880f17bc132b2f227043c": "07693629153c5a8405c51e45d418d1d6",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e7/9ca1c3e43e191f590745bdfa8efb1a120ba192": "dc26200f5aa7a1cb7b58456fa2966599",
".git/objects/e8/18f24d84986c8af9b61ee671b6f4811dc7112a": "da8b5ff7e02da43936017e7c31480114",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/1ec0223fe55a68e07bce8f77dfa4a4b5f011d6": "100eb4d029ef2f49220fba491fa452a8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8a2e9f6bc725e1694524d7d9f4dc671223b728": "928741cd995d88fec713856f88024a6a",
".git/objects/f3/165d565f672016b473ad5014be4c3cb5848da7": "21b30efb2e951d785a592911d1e31e99",
".git/objects/f3/957ac53613d73ca715bdd319cf237b4c772609": "81aac71aefded7f5f545c969eea6d28e",
".git/objects/f3/e5002d7992503c3174fc1142571c7560ee788d": "0dfe6b54b51693d131c061e9f11d0120",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/00436a3b9c25d75696dc9884484f9c6193c3b8": "fc49674a5d2c9c6d69bc59eb4fc6b254",
".git/objects/f8/57bd9114da050df811413025c9befceea278f5": "f3d8b8a49c3815c84a588a20c17ac261",
".git/objects/f8/b6d1f03ceefd12600604bf1ec0692b65fbf200": "910e3986381b8b0288216d4429e76573",
".git/objects/fd/b53426f1505e24199a3ae7dc9f06dbbadfae22": "c29b1b0a2b4b7c84a81f9e0425b465d3",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/cbf12c3f8a65e39f20a2f8b658872775e602c3": "e2cc4ba6946138d16f12bdae648f2e41",
".git/ORIG_HEAD": "678679041da6cb7974b994d40e5898c1",
".git/refs/heads/main": "678679041da6cb7974b994d40e5898c1",
".git/refs/remotes/origin/main": "678679041da6cb7974b994d40e5898c1",
"assets/AssetManifest.bin": "1450b8801ae87fd62a34e1a69d35bc92",
"assets/AssetManifest.bin.json": "183bc3ae379eb7b5d82683cfa386f42a",
"assets/AssetManifest.json": "5f47c6a42345dfbc40e552d739318bd9",
"assets/assets/fonts/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/assets/gif/loading.gif": "9f5f460f5f4494b5a8e3287c72577e12",
"assets/assets/log/logistica.gif": "bb2d948885d602d62acb9ad2956d7039",
"assets/assets/log/log_branca.png": "03d77469f284870aeaed018dfab4936e",
"assets/assets/logo.png": "33217aded71898b57e261504a68c64a9",
"assets/assets/logo_sys/dark_background.png": "9c970ed20dfe5c72b541a514fd229a19",
"assets/assets/logo_sys/white_background.png": "db7ed5fe3dde8adb0c5165c213d694de",
"assets/assets/logo_sys.png": "64ae2c752f4e2c4ec3e5e5f3caa9bde6",
"assets/assets/lottie/loading.json": "93cc8a057a539413f28b64337958aff1",
"assets/assets/lottie/loading_track.json": "ffd911594290767c6559ffa4cf5d9418",
"assets/assets/lottie/loading_track.lottie": "9ef60f851e7823786fdf64cde0e7fa54",
"assets/assets/lottie/manutencao.json": "41ef2ec00b12925aa1f482a8825125b6",
"assets/assets/lottie/map.json": "297d03f443abd7bd07c6c2f467e2a9bd",
"assets/assets/lottie/map.lottie": "577714bd24b42d9e040c01227907ccec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b61b593bfda945b9a8ab9ac3a11645d0",
"assets/NOTICES": "c91aa3c28e0ce94df52df41a783d3ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "871af95f87e8fe5a58626321eafdce1c",
"icons/app_icon.ico": "7d86cbf5351d23697b54bfa142f4db4e",
"icons/app_icon.png": "949eb750d1d11c6654213b191908231c",
"icons/app_icon_192.png": "ef734bb758bd58f7fcef9ebfa0ac5075",
"icons/app_icon_512.png": "2efaebd5dcd6d5da64e0035c0e2db89e",
"icons/maskable_app_icon.png": "c4ef1907c04e97a9af6ce1ecff68a60d",
"icons/maskable_app_icon_192.png": "b04b35925df75c0a45d9fe5d9d612e82",
"icons/maskable_app_icon_512.png": "4b5fe991916494176165e3e5fc5c1b29",
"index.html": "77de1cd5a303eb0e995e852938d2f6da",
"/": "77de1cd5a303eb0e995e852938d2f6da",
"main.dart.js": "0dcf945b0389118436bf5b78cdcb8222",
"manifest.json": "b4c3a67fb6425abfab445bab6e9e8518",
"offline.html": "65b5b5f7aa74fd145239d0fcf0cf0ac5",
"service-worker.js": "5de8c50c28839c3d39ad1991d5956107",
"splash.css": "825d847d71f284ae91ee87c3b426852c",
"version.json": "4c984eb5c052c37d773a8d15b8e9a738"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
