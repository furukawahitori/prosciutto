//a modification for Koukou Seikatsu
$gameMessage.add("init successfully loaded from\nhttps://raw.githubusercontent.com/furukawahitori/prosciutto/refs/heads/main/load.js");
$gameParty.addActor(2);
$gameParty.addActor(3);
$gameParty.addActor(4);
$gameParty.gainItem($dataItems[10], 1);

AudioManager.playBgm({name: "hitominikki_milkymilkyocean", volume: 100, pitch: 100, pan: 0});
