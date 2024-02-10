function elements()
{
	/*
		automatically colors and/or styles elements with the 'color' class
		i color so much stuff because it makes reading easier by creating visual landmarks
		helps a ton with reading comprehension, and especially dyslexia
		sorry, colorblind people (-.-)
	*/
	for (var elem of document.getElementsByClassName("color"))
	{
		switch (elem.textContent.toLowerCase())
		{
			
			/* element IDs, colored the way i think they correspond to the elements */
			
			case "element 0":
				elem.innerHTML = `<span id="gray">Ele</span><span id="gray">ment</span> 0`;
			break;
			
			case "element 1":
				elem.innerHTML = `<span id="elec">Ele</span><span id="holy">ment</span> 1`;
			break;
			
			case "element 2":
				elem.innerHTML = `<span id="gray">Ele</span><span id="gray">ment</span> 2`;
			break;
			
			case "element 3":
				elem.innerHTML = `<span id="gray">Ele</span><span id="gray">ment</span> 3`;
			break;
			
			case "element 4":
				elem.innerHTML = `<span id="gray">Ele</span><span id="gray">ment</span> 4`;
			break;
			
			case "element 5":
				elem.innerHTML = `<span id="gray">Ele</span><span id="gray">ment</span> 5`;
			break;
			
			case "element 6":
				elem.innerHTML = `<span id="cat">Ele</span><span id="puppet">ment</span> 6`;
			break;
			
			case "element 7":
				elem.innerHTML = `<span id="mouse">Ele</span><span id="gray">ment</span> 7`;
			break;
			
			case "element 8":
				elem.innerHTML = `<span id="gray">Ele</span><span id="gray">ment</span> 8`;
			break;
			
			case "element 9":
				elem.innerHTML = `<span id="gray">Ele</span><span id="gray">ment</span> 9`;
			break;
			
			case "element 10":
				elem.innerHTML = `<span id="dark">Ele</span><span id="star">ment</span> 10`;
			break;
			
			/* random important words, colored whatever way i want them to be */
			
			case "element":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span>`;
			break;
			
			case "elements":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ents</span>`;
			break;
			
			case "elemental":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span><span id="star">al</span>`;
			break;
			
			case "resistance":
				elem.innerHTML = `<span id="fight">Resistance</span>`;
			break;
			
			case "resistances":
				elem.innerHTML = `<span id="fight">Resistances</span>`;
			break;
			
			case "elemental resistance":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span><span id="star">al</span> <span id="fight">Resistance</span>`;
			break;
			
			case "elemental resistances":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span><span id="star">al</span> <span id="fight">Resistances</span>`;
			break;
			
			case "index":
				elem.innerHTML = `<span id="chaos">In</span><span id="order">dex</span>`;
			break;
			
			case "element index":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span> <span id="chaos">In</span><span id="order">dex</span>`;
			break;
			
			case "system":
				elem.innerHTML = `<span id="chaos">Sys</span><span id="order">tem</span>`;
			break;
			
			case "element system":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span> <span id="chaos">Sys</span><span id="order">tem</span>`;
			break;
			
			case "pair":
				elem.innerHTML = `<span id="cat">Pa</span><span id="puppet">ir</span>`;
			break;
			
			case "pairs":
				elem.innerHTML = `<span id="cat">Pa</span><span id="puppet">irs</span>`;
			break;
			
			case "elemental pair":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span><span id="star">al</span> <span id="cat">Pa</span><span id="puppet">ir</span>`;
			break;
			
			case "elemental pairs":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span><span id="star">al</span> <span id="cat">Pa</span><span id="puppet">irs</span>`;
			break;
			
			case "id":
				elem.innerHTML = `<span id="order">ID</span>`;
			break;
			
			case "ids":
				elem.innerHTML = `<span id="order">IDs</span>`;
			break;
			
			case "element id":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span> <span id="order">ID</span>`;
			break;
			
			case "element ids":
				elem.innerHTML = `<span id="elec">El</span><span id="ice">em</span><span id="fire">ent</span> <span id="order">IDs</span>`;
			break;
			
			/*
				items, colored the first way applicable:
				what elements they say they defend against
				what element id they defend against
			*/
			
			case "frayed bowtie":
				elem.innerHTML = `<span id="cat">Frayed</span> <span id="puppet">Bowtie</span>`;
			break;
			
			case "frayedbowtie":
				elem.innerHTML = `<span id="cat">Frayed</span><span id="puppet">Bowtie</span>`;
				break;
			
			case "mannequin":
				elem.innerHTML = `<span id="cat">Manne</span><span id="puppet">quin</span>`;
			break;
			
			case "dealmaker":
				elem.innerHTML = `<span id="cat">Deal</span><span id="puppet">maker</span>`;
			break;
			
			case "sky mantle":
				elem.innerHTML = `<span id="holy">Sky</span> <span id="elec">Mantle</span>`;
			break;
			
			case "skymantle":
				elem.innerHTML = `<span id="holy">Sky</span><span id="elec">Mantle</span>`;
			break;
				
			case "shadow mantle":
				elem.innerHTML= `<span id="dark">Shadow</span> <span id="star">Mantle</span>`;
			break;
			
			/*
				characters, colored the first way applicable:
				what their recruits info says
				what element id they use
			*/
			
			case "tasque":
				elem.innerHTML = `<span id="cat">Tas</span><span id="elec">que</span>`;
			break;
			
			case "tasques":
				elem.innerHTML = `<span id="cat">Tas</span><span id="elec">ques</span>`;
				break;
			
			case "tasque manager":
				elem.innerHTML = `<span id="cat">Tasque</span> <span id="order">Manager</span>`;
			break;
			
			case "spamton neo":
				elem.innerHTML = `<span id="puppet">Spamton</span> <span id="cat">NEO</span>`;
			break;
			
			case "rudinn ranger":
				elem.innerHTML = `<span id="jewel">Rudinn</span> <span id="blade">Ranger</span>`;
			break;
			
			case "head hathy":
				elem.innerHTML = `<span id="ice">Head</span> <span id="heart">Hathy</span>`;
			break;
			
			case "ambyu-lance":
				elem.innerHTML = `<span id="elec">Ambyu</span>-<span id="order">Lance</span>`;
			break;
			
			case "rabbick":
				elem.innerHTML = `<span id="rabbit">Rabb</span><span id="dust">ick</span>`;
			break;
			
			case "werewerewire":
				elem.innerHTML = `<span id="fight">Were</span><span id="elec">werewire</span>`;
			break;
			
			case "jigsawry":
				elem.innerHTML = `<span id="puzzle">Jig</span><span id="mouse">sawry</span>`;
			break;
			
			case "maus":
				elem.innerHTML = `<span id="mouse">Ma</span><span id="elec">us</span>`;
				break;
			
			/* stuff that only has one element; sets the class of the span as opposed to adding a span inside the span */
			
			case "fires":
			case "warm":
			case "half-warm":
			case "burn":
			case "burning":
				elem.className = `fire`;
			break;
			
			case "cold":
			case "half-cold":
			case "freeze":
			case "freezing":
			case "noelle":
			case "ice shock":
			case "snowgrave":
				elem.className = `ice`;
			break;
			
			case "electric":
			case "electricity":
			case "lightning":
			case "thunder":
			case "werewire":
				elem.className = `elec`;
			break;
			
			case "angel":
			case "heaven":
			case "angel's heaven":
				elem.className = `holy`;
			break;
			
			case "night":
			case "ralsei":
			case "knight":
			case "knights":
			case "seam":
			case "king":
			case "queen":
			case "dark world":
			case "dark knight":
			case "dark energy":
			case "prince of darkness":
				elem.className = `dark`;
			break;
			
			case "day":
			case "stars":
				elem.className = `star`;
			break;
			
			case "deaths":
				elem.className = `death`;
			break;
			
			case "scythes":
				elem.className = `scythe`;
			break;
			
			case "rudinn":
			case "jewels":
				elem.className = `jewel`;
			break;
			
			case "hathy":
			case "hearts":
				elem.className = `heart`;
				break;
			
			case "jevil":
			case "energy":
			case "laissez faire attitudes":
			case "disorganization":
			case "unpredictability":
			case "destruction":
			case "chaotic":
				elem.className = `chaos`;
			break;
			
			case "ponman":
			case "calmness":
			case "strictness":
			case "organization":
			case "predictability":
			case "stability":
			case "orderly":
			case "orders":
				elem.className = `order`;
			break;
			
			case "fights":
			case "bloxer":
			case "bloxers":
			case "fighting":
				elem.className = `fight`;
			break;
			
			case "puzzles":
			case "puzzling":
				elem.className = `puzzle`;
			break;
			
			case "cats":
				elem.className = `cat`;
			break;
			
			case "spamton":
			case "puppets":
				elem.className = `puppet`;
			break;
			
			case "mauswheel":
			case "mousetoken":
			case "mouse token":
			case "mice":
			case "maice":
				elem.className = `mouse`;
			break;
			
			case "rabbits":
				elem.className = `rabbit`;
			break;
			
			case "poppup":
			case "virovirokun":
			case "viruses":
				elem.className = `virus`;
			break;
			
			case "":
				elem.className = `dust`;
			break;
			
			case "kris":
			case "blades":
				elem.className = `blade`;
			break;
			
			case "susie":
			case "susiezilla":
			case "rude buster":
				elem.className = `rude`;
			break;
			
			case "hope":
			case "hopes":
				elem.className = `hope`;
			break;
			
			case "dream":
			case "dreams":
				elem.className = `dreams`;
			break;
			
			/* Color needs to have multiple colors, so it needs a special case as opposed the default below. */
			
			case "color":
				elem.innerHTML = `<span id="colorR">C</span><span id="colorY">o</span><span id="colorG">l</span><span id="colorB">o</span><span id="colorP">r</span>`;
			break;
			
			case "colors":
				elem.innerHTML = `<span id="colorR">C</span><span id="colorO">o</span><span id="colorY">l</span><span id="colorG">o</span><span id="colorB">r</span><span id="colorP">s</span>`;
				break;
			
			case "swatch":
				elem.innerHTML = `<span id="colorR">S</span><span id="colorO">w</span><span id="colorY">a</span><span id="colorG">t</span><span id="colorB">c</span><span id="colorP">h</span>`;
			break;
			
			case "swatchling":
				elem.innerHTML = `<span id="colorR">S</span><span id="colorY">w</span><span id="colorG">a</span><span id="colorB">t</span><span id="colorP">c</span><span id="colorR">h</span><span id="colorY">l</span><span id="colorG">i</span><span id="colorB">n</span><span id="colorP">g</span>`;
			break;
			
			case "swatchlings":
				elem.innerHTML = `<span id="colorR">S</span><span id="colorO">w</span><span id="colorY">a</span><span id="colorG">t</span><span id="colorB">c</span><span id="colorP">h</span><span id="colorR">l</span><span id="colorY">i</span><span id="colorG">n</span><span id="colorB">g</span><span id="colorP">s</span>`;
			break;
			
			/* default is used for element names, i.e. 'fire', 'Ice', 'STAR' etc. */
			
			default:
				elem.className = elem.textContent.toLowerCase();
			break;
			
			case "":
				elem.innerHTML = ``;
			break;
			
			case "":
				elem.className = ``;
			break;
		};
	};
};