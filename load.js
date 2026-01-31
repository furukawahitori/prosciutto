//a modification for Koukou Seikatsu
$gameMessage.add("init successfully loaded from\nMenherafureshia's Prosciutto Modification Load.");
this.setWaitMode('message');
$gameParty.addActor(2);
$gameParty.addActor(3);
$gameParty.addActor(4);
$gameMessage.add("\P[1] has received hitomi nikki (x1)");
this.setWaitMode('message');
$gameParty.gainItem($dataItems[10], 1);
AudioManager.playBgm({name: "hitominikki_milkymilkyocean", volume: 100, pitch: 100, pan: 0});
