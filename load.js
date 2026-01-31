//a modification for Koukou Seikatsu using the init file from the project root directory
$gameMessage.add("init successfully loaded from\nMenherafureshia's Prosciutto Modification Load.");
interpreter.setWaitMode('message');
$gameParty.addActor(2);
$gameParty.addActor(3);
$gameParty.addActor(4);
var text = "\\P[1] has received hitomi nikki (x1)"; 
$gameMessage.add(Window_Base.prototype.convertEscapeCharacters(text));
interpreter.setWaitMode('message');
$gameParty.gainItem($dataItems[10], 1);
AudioManager.playBgm({name: "hitominikki_milkymilkyocean", volume: 100, pitch: 100, pan: 0});
