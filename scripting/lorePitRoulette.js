function lorePitRoulette()
{
	let rouletteXOptions = ["Kris Dreemurr", "Susie", "Ralsei", "Noelle Holiday", "Asgore Dreemurr", "Toriel Dreemurr", "Asriel Dreemurr", "Rudy Holiday", "Mayor Holiday", "Dess Holiday", "Sans", "Papyrus", "W.D. Gaster", "Gerson Boom", "Alvin Boom", "Ms. Boom", "Lancer", "Rouxls Kaard", "Seam", "Jevil", "King", "Swatch", "Tasque Manager", "Spamton", "Spamton NEO", "Queen", "Tenna", "Mike", "Berdly", "Catti", "Jockington", "Bratty", "Catty", "Alphys", "QC", "Burgerpants", "Pizzapants", "Bugerpant", "ICE-E", "Everyman", "FRIEND", "The Eggman", "The Player", "The Knight", "The Angel", "The Vessel", "Frisk", "Chara", "Tera", "Acter", "The Third Entity", "Oberon Smog", "The Producer", "Toby Fox"];
	for (var elem of document.getElementsByClassName("rouletteX"))
	{
		elem.innerHTML = rouletteXOptions[Math.floor(Math.random() * rouletteXOptions.length)];
	};
	
	let rouletteYOptions = ["Gaster connections", "biblical connections", "connections to the main cast", "no connection to the main cast", "clear implications for the narrative", "thematic relevance", `"thematic relevance"`, "'Gaster's Theme' as the first melodic content of their theme", "a secret <i>Penumbra Phantasm</i> quote in their theme", "long hands", "a closet-sized body", "boots", "killed Asriel", "killed Dess", "trauma", "died", "extra-textual knowledge", "meta-textual knowledge", "knowledge of Gaster", "knowledge of the Player", "no object permanence", "existed since 2012", "moved between timelines/realities"];
	for (var elem of document.getElementsByClassName("rouletteY"))
	{
		elem.innerHTML = rouletteYOptions[Math.floor(Math.random() * rouletteYOptions.length)];
	};
	
	let rouletteZOptions = ["the Knight", "OBVIOUSLY the Knight", "the Angel", "THE PENUMBRA NEO ANGEL", "Gaster", "the Letter Writer", "the Eggman", "REDACTED", "Mysteryman", "the Third Entity", "UNUSED", "IMAGE_FRIEND", "Mike", "Tenna", "secretly a Dreemurr", "secretly a Holiday", "PILES of DUST", "a dustner", "a goner", "a secret boss", "the secret boss of <i>Chapter 3</i>", "the final secret boss", "the main antagonist", "associated with orange", "associated with Gaster", "a representation of Kris' inner turmoil", "a Toby Fox self-insert", "a Gaster reference", "the demon of Babylon, disguised with the coat of the righteous", "a <i>Homestuck</i> reference", "behind the slaughter", "doomed by the narrative", "evidence for Papyrus Knight", "evidence for Third Entity", "evidence for Friend Letter", "evidence for Kris Knight", "the Player", "lost in the depths", "the true name"];
	for (var elem of document.getElementsByClassName("rouletteZ"))
	{
		elem.innerHTML = rouletteZOptions[Math.floor(Math.random() * rouletteZOptions.length)];
	};
};