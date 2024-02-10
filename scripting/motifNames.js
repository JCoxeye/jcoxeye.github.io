function motifNames()
{
	/*
		enclose a motif like so:
			<span class="motifName" id="LINKTYPE">MOTIF NAME</span>
		where LINKTYPE is
			none
		for no link, or the target value otherwise
		
		a switch statement defines key variables to each motifName, based on their textContent, stored in tempName
		tempColor is will act as the id of the element, unless set to "multi" or "white"
		tempLink is inserted into the href="" parameter, like so:
			href="tempLink"
	*/
	for (var elem of document.getElementsByClassName("motifName"))
	{
		var tempName = elem.textContent;
		var tempNameLower = tempName.toLowerCase();
		var tempLinkType = elem.id;
		var tempLink = ``;
		var tempLinkStart = ``;
		var tempLinkEnd = ``;
		var tempColor = ``;
		var tempContent = ``;
		switch (tempNameLower)
		{
			case `flowey`:
			case `your best friend`:
				tempColor = `r`;
				tempLink = `motifs-5b.html`;
			break;
			
			case `toriel`:
			case `toriel's theme`:
			case `toriel's theme, part 1`:
			case `toriel's theme, part 2`:
				tempColor = `r`;
				tempLink = `motifs-5a.html`;
			break;
			
			case `sans and papyrus`:
			case `sans.`:
			case `sans backing.`:
			case `sans`:
			case `sans' backing`:
			case `papyrus!`:
			case `papyrus' backing!`:
				tempColor = `b`;
				tempLink = `motifs-5c.html`;
			break;
			
			case `undyne`:
				tempColor = `g`;
				tempLink = `motifs-5c.html`;
			break;
			
			case `undyne (tense)`:
				tempColor = `r`;
				tempLink = `motifs-5c.html`;
			break;
			
			case `alphys`:
			case `alphys, part 1`:
			case `alphys, part 2`:
			case `alphys, part 3`:
				tempColor = `y`;
				tempLink = `motifs-5c.html`;
			break;
			
			case `mettaton`:
			case `it's showtime!`:
			case `metal crusher`:
			case `oh!`:
			case `hotel`:
			case `hotel (bassline)`:
				tempColor = `y`;
				tempLink = `motifs-5e.html`;
			break;
			
			case `asgore`:
			case `asgore's theme`:
				tempColor = `r`;
				tempLink = `motifs-5a.html`;
			break;
			
			case `asriel`:
			case `asriel's theme`:
				tempColor = `r`;
				tempLink = `motifs-5b.html`;
			break;
			
			case `susie`:
				tempColor = `o`;
				tempLink = `motifs-5d.html`;
			break;
			
			case `noelle`:
			case `noelle and dess`:
			case `girl next door`:
			case `girl next door, part 1`:
			case `girl next door, part 2`:
			case `girl next door (extra)`:
			case `girl next door (backing)`:
				tempColor = `c`;
				tempLink = `motifs-5d.html`;
			break;
			
			case `berdly`:
			case `berdly, part 1`:
			case `berdly, part 2`:
			case `berdly's battle bassline`:
				tempColor = `p`;
				tempLink = `motifs-5d.html`;
			break;
			
			case `lancer`:
			case `lancer (alt)`:
			case `lancer (extra, rising)`:
			case `lancer (extra, falling)`:
				tempColor = `b`;
				tempLink = `motifs-5f.html`;
			break;
			
			case `rouxls kaard`:
			case `rouxls kaard's backing`:
				tempColor = `b`;
				tempLink = `motifs-5f.html`;
			break;
			
			case `queen`:
			case `queen (intro)`:
			case `queen (main)`:
			case `queen (mixtape)`:
				tempColor = `c`;
				tempLink = `IDK`;
			break;
			
			case `sweet cap'n cakes`:
				tempColor = `multi`;
				tempContent = `<span id="gray">Sweet</span> <span id="b">Cap'n</span> <span id="g">Cakes</span>`;
				tempLink = `motifs-8.html`;
			break;
			
			case `sweet cap'n cakes, part 1`:
				tempColor = `multi`;
				tempContent = `<span id="gray">Sweet</span> <span id="b">Cap'n</span> <span id="g">Cakes</span>, Part 1`;
				tempLink = `motifs-8.html`;
			break;
			
			case `sweet cap'n cakes, part 2`:
				tempColor = `multi`;
				tempContent = `<span id="gray">Sweet</span> <span id="b">Cap'n</span> <span id="g">Cakes</span>, Part 2`;
				tempLink = `motifs-8.html`;
			break;
			
			case `cool beat`:
				tempColor = `multi`;
				tempContent = `<span id="b">Cool</span> <span id="g">Beat</span>`;
				tempLink = `motifs-8.html`;
			break;
			
			case `hey every !`:
				tempColor = `multi`;
				tempContent = `<span id="pink">HEY</span> <span id="y">EVERY</span> !`;
				tempLink = `motifs-5e.html`;
			break;
			
			case `spamton`:
				tempColor = `multi`;
				tempContent = `<span id="pink">SPAM</span><span id="y">TON</span>`;
				tempLink = `motifs-5e.html`;
			break;
			
			case `spamton, part 1`:
				tempColor = `multi`;
				tempContent = `<span id="pink">SPAM</span><span id="y">TON</span>, PART 1`;
				tempLink = `motifs-5e.html`;
			break;
			
			case `spamton, part 2`:
				tempColor = `multi`;
				tempContent = `<span id="pink">SPAM</span><span id="y">TON</span>, PART 2`;
				tempLink = `motifs-5e.html`;
			break;
			
			case `spamton (bassline)`:
				tempColor = `multi`;
				tempContent = `<span id="pink">SPAM</span><span id="y">TON</span> (BASSLINE)`;
				tempLink = `motifs-5e.html`;
			break;
			
			case `now's your chance to be a`:
				tempColor = `pink`;
				tempLink = `motifs-5e.html`;
			break;
			
			case `big shot`:
				tempColor = `y`;
				tempLink = `motifs-5e.html`;
			break;
			
			case `once upon a time`:
				tempColor = `white`;
				tempLink = `motifs-1a.html`;
			break;
			
			case `once upon a time, part 1`:
				tempColor = `multi`;
				tempContent = `Once Upon a Time, <span id="g">Part 1</span>`;
				tempLink = `motifs-1a.html`;
			break;
			
			case `once upon a time, part 2`:
				tempColor = `multi`;
				tempContent = `Once Upon a Time, <span id="r">Part 2</span>`;
				tempLink = `motifs-1a.html`;
			break;
			
			case `once upon a time, part 3`:
				tempColor = `multi`;
				tempContent = `Once Upon a Time, <span id="y">Part 3</span>`;
				tempLink = `motifs-1a.html`;
			break;
			
			case `once upon a time, part 1 (backing)`:
				tempColor = `multi`;
				tempContent = `Once Upon a Time, <span id="g">Part 1</span> (Backing)`;
				tempLink = `motifs-1x.html`;
			break;
			
			case `once upon a time, part 2 (backing)`:
				tempColor = `multi`;
				tempContent = `Once Upon a Time, <span id="r">Part 2</span> (Backing)`;
				tempLink = `motifs-1x.html`;
			break;
			
			case `home`:
				tempColor = `white`;
				tempLink = `motifs-1a.html`;
			break;
			
			case `ruins`:
			case `ruins ostinato`:
			case `ruins, part 1`:
			case `alternate ruins, part 1`:
			case `ruins, part 2`:
				tempColor = `p`;
				tempLink = `motifs-7.html`;
			break;
			
			case `another medium`:
				tempColor = `o`;
				tempLink = `motifs-7.html`;
			break;
			
			case `ghost fight`:
			case `ghost fight, part 1`:
			case `ghost fight, part 2`:
			case `ghost fight, part 3`:
			case `ghost fight (backing)`:
			case `ghost fight (bassline)`:
			case `ghost fight (extra)`:
			case `ghost fight (extras)`:
				tempColor = `gray`;
				tempLink = `motifs-3.html`;
			break;
			
			case `dummy!`:
			case `dummy! (coda)`:
			case `dummy! (bridge)`:
			case `spooktune`:
				tempColor = `gray`;
				tempLink = `motifs-3.html`;
			break;
			
			case `imminent death`:
			case `your best nightmare`:
				tempColor = `r`;
				tempLink = `motifs-5b.html`;
			break;
			
			case `hopes and dreams`:
				tempColor = `multi`;
				tempContent = `<span id="r">H</span><span id="o">o</span><span id="y">p</span><span id="g">e</span><span id="c">s</span> <span id="b">a</span><span id="p">n</span><span id="r">d</span> <span id="o">D</span><span id="y">r</span><span id="g">e</span><span id="c">a</span><span id="b">m</span><span id="p">s</span>`;
				tempLink = `motifs-1b.html`;
			break;
			
			case `don't forget`:
				tempColor = `white`;
				tempLink = `motifs-1c.html`;
			break;
			
			case `don't forget, part 1`:
				tempColor = `multi`;
				tempContent = `Don't Forget, <span id="y">Part 1</span>`;
				tempLink = `motifs-1c.html`;
			break;
			
			case `don't forget, part 2`:
				tempColor = `multi`;
				tempContent = `Don't Forget, <span id="b">Part 2</span>`;
				tempLink = `motifs-1c.html`;
			break;
			
			case `don't forget (extra)`:
				tempColor = `multi`;
				tempContent = `Don't Forget (<span id="g">Extra</span>)`;
				tempLink = `motifs-1c.html`;
			break;
			
			case `dogsong`:
			case `dogroom`:
				tempColor = `white`;
				tempLink = `motifs-2.html`;
			break;
			
			case `menu beat`:
				tempColor = `white`;
				tempLink = `motifs-1x.html`;
			break;
			
			case `uwa!!`:
				tempColor = `p`;
				tempLink = `IDK`;
			break;
			
			case `anticipation`:
			case `enemy approaching`:
			case `anticipation and enemy approaching`:
			case `enemy approaching (intro)`:
			case `enemy approaching (extra)`:
			case `enemy approaching (ending)`:
			case `stronger monsters`:
				tempColor = `r`;
				tempLink = `motifs-2.html`;
			break;
			
			case `determination`:
				tempColor = `y`;
				tempLink = `motifs-9.html`;
			break;
			
			case `darkness falls`:
				tempColor = `gray`;
				tempLink = `motifs-9.html`;
			break;
			
			case `magic`:
				tempColor = `y`;
				tempLink = `motifs-9.html`;
			break;
			
			case `heartache`:
			case `heartache, part 1`:
			case `heartache, part 2`:
				tempColor = `r`;
				tempLink = `motifs-5a.html`;
			break;
			
			case `snowdin`:
			case `snowy`:
			case `snowdin town`:
				tempColor = `white`;
				tempLink = `motifs-1b.html`;
			break;
			
			case `dating bassline`:
			case `dating bassline!`:
				tempColor = `r`;
				tempLink = `motifs-2.html`;
			break;
			
			case `hotland`:
			case `hotland, part 1`:
			case `hotland, part 2`:
			case `alternate hotland, part 1`:
				tempColor = `o`;
				tempLink = `motifs-7.html`;
			break;
			
			case `core`:
				tempColor = `c`;
				tempLink = `motifs-7.html`;
			break;
			
			case `power of neo`:
			case `battle against a true hero`:
				tempColor = `y`;
				tempLink = `motifs-4.html`;
			break;
			
			case `save the world`:
				tempColor = `multi`;
				tempContent = `<span id="y">SAVE</span> <span id="pink">the World</span>`;
				tempLink = `motifs-1b.html`;
			break;
			
			case `megalovania`:
			case `megalovania (backing)`:
			case `megalovania, part 1`:
			case `megalovania, part 2`:
			case `megalovania, part 2a`:
			case `megalovania, part 2b`:
			case `megalovania, part 3`:
			case `megalovania, part 3a`:
			case `megalovania, part 3b`:
			case `megalovania, part 4`:
			case `megalovania, part 4a`:
			case `megalovania, part 4b`:
				tempColor = `white`;
				tempLink = `motifs-4.html`;
			break;
			
			case `hometown`:
			case `hometown (extra)`:
				tempColor = `white`;
				tempLink = `motifs-1c.html`;
			break;
			
			case `the legend`:
			case `the legend, part 1`:
			case `the legend, part 2`:
			case `the legend, part 3`:
				tempColor = `gray`;
				tempLink = `motifs-10.html`;
			break;
			
			case `the world revolving`:
			case `the world revolving, part 1`:
			case `the world revolving, part 2`:
			case `freedom`:
			case `freedom, part 1`:
			case `freedom, part 2`:
				tempColor = `white`;
				tempLink = `motifs-4.html`;
			break;
			
			case `the card kingdom`:
				tempColor = `multi`;
				tempContent = `<span id="p">The</span> <span id="r">Card</span> <span id="b">Kingdom</span>`;
				tempLink = `motifs-1c.html`;
			break;
			
			case `scarlet forest`:
				tempColor = `r`;
				tempLink = `motifs-8.html`;
			break;
			
			case `card castle`:
				tempColor = `b`;
				tempLink = `motifs-5f.html`;
			break;
			
			case `the cyber world`:
				tempColor = `multi`;
				tempContent = `<span id="g">THE</span> <span id="c">CYBER</span> <span idd="b">WORLD</span>`;
				tempLink = `motifs-8.html`;
			break;
			
			case `the cyber world, part 1`:
				tempColor = `multi`;
				tempContent = `<span id="g">THE</span> <span id="c">CYBER</span> <span idd="b">WORLD</span>, PART 1`;
				tempLink = `motifs-8.html`;
			break;
			
			case `the cyber world, part 2`:
				tempColor = `multi`;
				tempContent = `<span id="g">THE</span> <span id="c">CYBER</span> <span idd="b">WORLD</span>, PART 2`;
				tempLink = `motifs-8.html`;
			break;
			
			case `burn in despair!`:
				tempColor = `fire`;
				tempLink = `motifs-5b.html`;
			break;
			
			case `the door`:
				tempColor = `gray`;
				tempLink = `motifs-10.html`;
			break;
			
			case `the holy`:
			case `the holy (main)`:
			case `the holy (backing)`:
				tempColor = `y`;
				tempLink = `motifs-10.html`;
			break;
			
			case `jingle bells`:
				tempColor = `multi`;
				tempContent = `<span id="g">Jingle</span> <span id="r">Bells</span>`;
				tempLink = `motifs-6.html`;
			break;
			
			case `the bassline`:
				tempColor = `white`;
				tempLink = `motifs-6.html`;
			break;
			
			case `quiet`:
				tempColor = `b`;
				tempLink = `motifs-6.html`;
			break;
			
			case `woofenstein`:
				tempColor = `gray`;
				tempLink = `motifs-6.html`;
			break;
			
			case `grandpa semi`:
				tempColor = `multi`;
				switch (Math.ceil(Math.random() * 10))
				{
					case 1:
						tempContent = `<span id="gray">█ra███a █e█i</span>`;
					break;
					
					case 2:
						tempContent = `<span id="gray">Gr███p█ █e█i</span>`;
					break;
					
					case 3:
						tempContent = `<span id="gray">██a█d█a S██i</span>`;
					break;
					
					case 4:
						tempContent = `<span id="gray">G██nd██ █e██</span>`;
					break;
					
					case 5:
						tempContent = `<span id="gray">G██████ S███</span>`;
					break;
					
					case 6:
						tempContent = `<span id="gray">G██████ ████</span>`;
					break;
					
					case 7:
						tempContent = `<span id="gray">G██n█p█ S█m█</span>`;
					break;
					
					case 8:
						tempContent = `<span id="gray">█r█n██a ███i</span>`;
					break;
					
					case 9:
						tempContent = `<span id="gray">G██nd█a ██m█</span>`;
					break;
					
					case 10:
						tempContent = `<span id="gray">█ra█d██ ██mi</span>`;
					break;
				};
				tempLink = `motifs-5e.html`;
			break;
			
			case `gaster's theme`:
			case `him`:
			case `???`:
				tempColor = `gray`;
				tempLink = `motifs-6.html`;
			break;
		};
		if (tempLinkType !== `none`)
		{
			tempLinkStart = (`<a href="` + tempLink + `" target="_` + tempLinkType + `">`);
			tempLinkEnd = `</a>`;
		};
		switch (tempColor)
		{
			case `white`:
				tempContent = tempName;
			break;
			
			case `multi`:
			break;
			
			default:
				tempContent = (`<span id="` + tempColor + `">` + tempName + `</span>`);
			break;
		};
		elem.innerHTML = (`'` + tempLinkStart + tempContent + tempLinkEnd + `'`);
	};
};