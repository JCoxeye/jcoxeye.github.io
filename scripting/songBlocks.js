function songBlocks(inputMotifPage)
{
	/*
		enclose a song name like so:
			<span class="songBlock">SONG NAME</span>
		to automatically get a 'song block' with the song's info and motifs
		
		a big switch statement takes the
			SONG NAME
		and outputs a prefabricated template with the song's info
		
		which motifs are presented is based off of the
			inputMotifPage
		argument
		
		new songs are to be added with the following case template:
		
			case `SONG NAME IN LOWERCASE`:
				tempSongIdentity = [`SONG GAME & TRACK NUMBER`, `FORMATTED SONG NAME`, `LINK TO SONG`]
				switch (tempMotifPage.toLowerCase())
				{
					case `PAGE NUMBER`:
						tempMotifInfo = `[<span class"motifName" id="none">MOTIF NAME</span>] TIME:STAMP-TIME:STAMP | TIME:STAMP-TIME:STAMP`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class"motifName" id="none">MOTIF NAME</span>] TIME:STAMP-TIME:STAMP | TIME:STAMP-TIME:STAMP`;
					break;
				};
			break;
		
		If there's only one context in which the song block will be displayed, just put the contents of the
			`full`
		case directly into the main case
		
		the website backups folder also has a rough js script to automatically put info from
			songListings.html
		into the case template
	*/
	for (var elem of document.getElementsByClassName(`songBlock`))
	{
		var tempSongName = elem.textContent;
		var tempMotifPage = inputMotifPage;
		var tempSongIdentity = [`Looks like this space was left blank!`, `Someone should probably fix this...`, ``];
		var tempMotifInfo = `[No Motifs]`;
		switch (tempSongName.toLowerCase())
		{
			case `once upon a time`:
				tempSongIdentity = [`UT #1.`, `Once Upon a Time`, `https://youtu.be/s7RRgF5Ve_E`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:28<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 0:28-0:58<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:28-1:25`;
					break;
					
					case `1x`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:28<br>[<span class="motifName" id="none">Once Upon a Time, Part 1 (Backing)</span>] 0:00-0:28`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:28<br>[<span class="motifName" id="none">Once Upon a Time, Part 1 (Backing)</span>] 0:00-0:28<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 0:28-0:58<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:28-1:25`;
					break;
				};
			break;
			
			case `start menu`:
				tempSongIdentity = [`UT #2.`, `Start Menu`, `https://youtu.be/kRT9vY2f7tg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:20`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:20<br>[<span class="motifName" id="none">Menu Beat</span>] 0:00-0:32`;
					break;
				};
			break;
			
			case `your best friend`:
				tempSongIdentity = [`UT #3.`, `Your Best Friend`, `https://youtu.be/83jGCWCcBzc`];
				tempMotifInfo = `[<span class="motifName" id="none">Your Best Friend</span>] 0:07-0:23`;
			break;
			
			case `fallen down`:
				tempSongIdentity = [`UT #4.`, `Fallen Down`, `https://youtu.be/B69GfSqEZEs`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Toriel's Theme, Part 1</span>] 0:00-0:57<br>[<span class="motifName" id="none">Toriel's Theme, Part 2</span>] 0:25-0:50`;
					break;
				};
			break;
			
			case `ruins`:
				tempSongIdentity = [`UT #5.`, `Ruins`, `https://youtu.be/QyPR77rg1to`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Ruins Ostinato</span>] 0:00-1:17 | 1:25-1:30<br>[<span class="motifName" id="none">Ruins, Part 1</span>] 0:05-0:14 | 0:25-0:35 | 0:46-0:56<br>[<span class="motifName" id="none">Ruins, Part 2</span>] 0:14-0:23 | 0:35-0:44 | 0:56-1:06<br>[<span class="motifName" id="none">Another Medium</span> 1:20-1:29]`;
					break;
				};
			break;
			
			case `uwa!! so temperate♫`:
			case `uwa!! so temperate`:
			case `uwa so temperate`:
				tempSongIdentity = [`UT #6.`, `Uwa!! So Temperate♫`, `https://youtu.be/rHU4rpQUshg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Uwa!!</span>] 0:00-0:26 | 0:40-0:56`;
					break;
				};
			break;
			
			case `anticipation`:
				tempSongIdentity = [`UT #7.`, `Anticipation`, `https://youtu.be/t62zFJATVPM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Anticipation</span>] 0:00-0:22`;
					break;
				};
			break;
			
			case `unnecessary tension`:
				tempSongIdentity = [`UT #8.`, `Unnecessary Tension`, `https://youtu.be/OSPbX0lkTmQ`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[No Motifs]`;
					break;
				};
			break;
			
			case `enemy approaching`:
				tempSongIdentity = [`UT #9.`, `Enemy Approaching`, `https://youtu.be/JRU6GnETSN4`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Anticipation</span>] 0:00-0:56<br>[<span class="motifName" id="none">Enemy Approaching (Intro)</span>] 0:00-0:10<br>[<span class="motifName" id="none">Dogsong</span>] 0:10-0:51<br>[<span class="motifName" id="none">Enemy Approaching (Extra)</span>] 0:20-0:28<br>[<span class="motifName" id="none">Enemy Approaching (Ending)</span>] 0:51-0:54`;
					break;
				};
			break;
			
			case `ghost fight`:
				tempSongIdentity = [`UT #10.`, `Ghost Fight`, `https://youtu.be/Zz1bfhtKsHM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Ghost Fight (Backing)</span>] 0:00-0:33 | 0:51-0:56<br>[<span class="motifName" id="none">Ghost Fight (Bassline)</span>] 0:08-0:50<br>[<span class="motifName" id="none">Ghost Fight, Part 1</span>] 0:16-0:24]<br>[<span class="motifName" id="none">Ghost Fight, Part 2</span>] 0:24-0:33<br>[<span class="motifName" id="none">Ghost Fight, Part 3</span>] 0:33-0:50<br>[<span class="motifName" id="none">Ghost Fight (Extra)</span>] 0:16-0:32`;
					break;
				};
			break;
			
			case `determination`:
				tempSongIdentity = [`UT #11.`, `Determination`, `https://youtu.be/W1i4mTyidOc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Determination</span>] 0:00-0:50`;
					break;
				};
			break;
			
			case `home`:
				tempSongIdentity = [`UT #12.`, `Home`, `https://youtu.be/5_E_y1AWAfc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Home</span>] 0:00-0:33<br>[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:36-1:09<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 1:11-1:44`;
					break;
					
					case `full`:
					default:
						
					break;
				};
			break;
			
			case `home music box`:
			case `home (music box)`:
				tempSongIdentity = [`UT #13.`, `Home (Music Box)`, `https://youtu.be/ANEsXjSiYxI`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Home</span>] 0:00-0:33<br>[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:36-1:09<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 1:11-1:44`;
					break;
					
					case `full`:
					default:
						
					break;
				};
			break;
			
			case `home and home (music box)`:
			case `home and home music box`:
			case `home & home (music box)`:
			case `home & home music box`:
				tempSongIdentity = [`UT #12., UT #13.`, `Home, Home Music Box`, `https://youtu.be/5_E_y1AWAfc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Home</span>] 0:00-0:33<br>[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:36-1:09<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 1:11-1:44`;
					break;
					
					case `full`:
					default:
						
					break;
				};
			break;
			
			case `heartache`:
				tempSongIdentity = [`UT #14.`, `Heartache`, `https://youtu.be/xflkF-sqNaM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Heartache, Part 1</span>] 0:00-0:12 | 0:17-0:30 | 0:50-1:25]<br>[<span class="motifName" id="none">Heartache, Part 2</span>] 0:12-0:15 | 0:30-0:46 | 1:25-1:48<br>[<span class="motifName" id="none">Enemy Approaching (Intro)</span>] 0:54-1:01 | 1:11-1:15`;
					break;
				};
			break;
			
			case `sans.`:
				tempSongIdentity = [`UT #15., DR CH. 2 #42.`, `sans.`, `https://youtu.be/Zzo6L3wsf8c`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">sans.</span>] 0:00-0:44<br>[<span class="motifName" id="none">sans backing.</span>] 0:00-0:44`;
					break;
				};
			break;
			
			case `nyeh heh heh!`:
				tempSongIdentity = [`UT #16.`, `Nyeh Heh Heh!`, `https://youtu.be/FKdtstAo6iU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">PAPYRUS' BACKING!</span>] 0:00-0:29<br>[<span class="motifName" id="none">PAPYRUS!</span>] 0:06-0:32`;
					break;
				};
			break;
			
			case `snowy`:
				tempSongIdentity = [`UT #17.`, `Snowy`, `https://youtu.be/8BIeGdBjJiU`];
				tempMotifInfo = `[<span class="motifName" id="none">Snowy</span>] 0:00-1:34`;
			break;
			
			case `uwa!! so holiday♫`:
			case `uwa!! so holiday`:
			case `uwa so holiday`:
				tempSongIdentity = [`UT #18.`, `Uwa!! So Holiday♫`, `https://youtu.be/XnG7HG8bmkU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Uwa!!</span>] 0:00-0:30`;
					break;
				};
			break;
			
			case `dogbass`:
				tempSongIdentity = [`UT #19.`, `Dogbass`, `https://youtu.be/a1OLiuNLpEs`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Ghost Fight (Bassline)</span>] 0:00-0:06`;
					break;
				};
			break;
			
			case `mysterious place`:
				tempSongIdentity = [`UT #20.`, `Mysterious Place`, `https://youtu.be/gC11HJ99Egs`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Hotland, Part 1 (Alt)</span>] 0:00-0:44`;
					break;
				};
			break;
			
			case `dogsong`:
				tempSongIdentity = [`UT #21.`, `Dogsong`, `https://youtu.be/woPff-Tpkns`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Dogsong</span>] 0:00-0:37`;
					break;
				};
			break;
			
			case `snowdin town`:
				tempSongIdentity = [`UT #22.`, `Snowdin Town`, `https://youtu.be/z6LmMCuGjfA`];
				tempMotifInfo = `[<span class="motifName" id="none">Snowdin Town</span>] 0:00-0:18<br>[<span class="motifName" id="none">Snowy</span>] 0:18-0:56<br>[<span class="motifName" id="none">Hopes and Dreams</span>] 0:56-1:16`;
			break;
			
			case `shop`:
				tempSongIdentity = [`UT #23.`, `Shop`, `https://youtu.be/jCQ_5Gj6jlg`];
				tempMotifInfo = `[<span class="motifName" id="none">Snowy</span>] 0:00-0:24<br>[<span class="motifName" id="none">Hopes and Dreams</span>] 0:24-0:49`;
			break;
			
			case `bonetrousle`:
				tempSongIdentity = [`UT #24.`, `Bonetrousle`, `https://youtu.be/zdeZwAk6ULE`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">PAPYRUS' BACKING!</span>] 0:00-0:53<br>[<span class="motifName" id="none">PAPYRUS!</span>] 0:06-0:57`;
					break;
				};
			break;
			
			case `dating start!`:
				tempSongIdentity = [`UT #25.`, `Dating Start!`, `https://youtu.be/dtYwq4aBr0E`];
				tempMotifInfo = `[<span class="motifName" id="none">Dating Bassline!</span>] 0:16-36 | 0:54–1:12 | 1:15-1:31<br>[<span class="motifName" id="none">Snowy</span>] 0:00-0:15 | 0:37-0:53<br>[<span class="motifName" id="none">Hopes and Dreams</span>] 0:16–0:34 | 0:54-1:31<br>[<span class="motifName" id="none">Snowdin Town</span>] 1:31-1:56`;
			break;
			
			case `dating tense!`:
				tempSongIdentity = [`UT #26.`, `Dating Tense!`, `https://youtu.be/ShK_Tj-Ee3Y`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Dating Bassline!</span>] 0:00-0:26`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Dating Bassline!</span>] 0:00-0:26<br>[<span class="motifName" id="none">Undyne (Tense)</span>] 0:08-0:19<br>[<span class="motifName" id="none"Undyne</span>] 0:17-0:26`;
					break;
				};
			break;
			
			case `dating fight!`:
				tempSongIdentity = [`UT #27.`, `Dating Fight!`, `https://youtu.be/JQ8bpWkoC7A`];
				tempMotifInfo = `[<span class="motifName" id="none">Snowy</span>] 0:00-0:13<br>[<span class="motifName" id="none">Dating Bassline!</span>] 0:13-0:31<br>[<span class="motifName" id="none">Hopes and Dreams</span>] 0:13-0:32`;
			break;
			
			case `premonition`:
				tempSongIdentity = [`UT #28.`, `Premonition`, `https://youtu.be/sQDiDDb1_9k`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[No Motifs]`;
					break;
				};
			break;
			
			case `danger mystery`:
				tempSongIdentity = [`UT #29.`, `Danger Mystery`, `https://youtu.be/FhpJN6Khesw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[No Motifs]`;
					break;
				};
			break;
			
			case `undyne`:
				tempSongIdentity = [`UT #30.`, `Undyne`, `https://youtu.be/VH6HIHmhvQU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Undyne</span>] 0:00-0:45<br>[<span class="motifName" id="none">Undyne (Tense)</span>] 0:12-0:24`;
					break;
				};
			break;
			
			case `waterfall`:
				tempSongIdentity = [`UT #31.`, `Waterfall`, `https://youtu.be/v712NiVK5uY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Another Medium</span>] 0:00-1:06 | 1:56-2:03<br>[<span class="motifName" id="none">Ruins, Part 1</span>] 0:27-1:06<br>[<span class="motifName" id="none">Ruins, Part 2</span>] 1:06-1:47<br>[<span class="motifName" id="none">ruins extra thing????</span>] 1:06-1:47`;
					break;
				};
			break;
			
			case `run!`:
				tempSongIdentity = [`UT #32.`, `Run!`, `https://youtu.be/PPapt88_3aU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Undyne</span>] 0:00-0:15 | 0:22-0:26`;
					break;
				};
			break;
			
			case `quiet water`:
				tempSongIdentity = [`UT #33.`, `Quiet Water`, `https://youtu.be/AsvhQ-soLdg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Ruins, Part 1</span>] 0:05-0:26`;
					break;
				};
			break;
			
			case `memory`:
				tempSongIdentity = [`UT #34.`, `Memory`, `https://youtu.be/eijdNQMYikY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Asriel's Theme</span>] 0:00-1:12`;
					break;
				};
			break;
			
			case `bird that carries you over a disproportionately small gap`:
			case `btcyoadsg`:
				tempSongIdentity = [`UT #35.`, `Bird That Carries You Over a Disproportionately Small Gap`, `https://youtu.be/Z51lfE2k7jU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Alphys, Part 1/span>] 0:06-0:17`;
					break;
				};
			break;
			
			case `dummy!`:
			case `dummy`:
				tempSongIdentity = [`UT #36.`, `Dummy!`, `https://youtu.be/N3epEVMNJdY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Ghost Fight (Backing)</span>] 0:00-0:05 | 0:07-0:22 | 0:30-0:45 | 0:57-1:00 | 1:12-1:16 | 1:54-2:10<br>[<span class="motifName" id="none">Dummy! (Bridge)</span>] 0:05-0:07<br>[<span class="motifName" id="none">Ghost Fight (Bassline)</span>] 0:07-0:20 | 0:22-1:16 | 1:47-2:10<br>[<span class="motifName" id="none">Ghost Fight, Part 1</span>] 0:23-0:30 | 1:48-1:54<br>[<span class="motifName" id="none">Ghost Fight, Part 2</span>] 0:30-0:45 | 1:54-2:10<br>[<span class="motifName" id="none">Ghost Fight, Part 3</span>] 0:53-0:56 | 1:08-1:11<br>[<span class="motifName" id="none">Ghost Fight (Extra)</span>] 0:30-0:44 | 1:54-2:09<br>[<span class="motifName" id="none">Dummy! (Coda)</span>] 2:10-2:14 | 2:18-2:21`;
					break;
				};
			break;
			
			case `pathetic house`:
				tempSongIdentity = [`UT #37.`, `Pathetic House`, `https://youtu.be/nu_ruGyTNEs`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Ghost Fight, Part 2</span>] 0:00-0:34`;
					break;
				};
			break;
			
			case `spooktune`:
				tempSongIdentity = [`UT #38.`, `Spooktune`, `https://youtu.be/K1qjt_1geiI`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Spooktune</span>] 0:00-0:23`;
					break;
				};
			break;
			
			case `spookwave`:
				tempSongIdentity = [`UT #39.`, `Spookwave`, `https://youtu.be/o251comtNfk`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Spooktune</span>] 0:00-0:23`;
					break;
				};
			break;
			
			case `ghouliday`:
			case `ghouliday music`:
				tempSongIdentity = [`UT #40.`, `Ghouliday`, `https://youtu.be/lWP9s44i-YA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Jingle Bells</span>] 0:00-0:11`;
					break;
				};
			break;
			
			case `chill`:
				tempSongIdentity = [`UT #41.`, `Chill`, `https://youtu.be/D4Ximn7nZdc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[No Motifs]`;
					break;
				};
			break;
			
			case `thundersnaill`:
				tempSongIdentity = [`UT #42.`, `Thundersnail`, `https://youtu.be/ewxyxByJPP0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[No Motifs]`;
					break;
				};
			break;
			
			case `temmie village`:
				tempSongIdentity = [`UT #43.`, `Temmie Village`, `https://youtu.be/rNlyF43Te6U`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Dogsong</span>] 0:11-0:16 | 0:22-0:28`;
					break;
				};
			break;
			
			case `tem shop`:
				tempSongIdentity = [`UT #44.`, `Tem Shop`, `https://youtu.be/y_qHuDjE3CQ`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Dogsong</span>] 0:00-0:45`;
					break;
				};
			break;
			
			case `ngahhh!!`:
			case `ngahhh`:
			case `ngahh`:
			case `ngah`:
				tempSongIdentity = [`UT #45.`, `NGAHHH!!`, `https://youtu.be/PLDyWLbuptQ`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Undyne</span>] 0:00-0:33<br>[<span class="motifName" id="none">Ruins, Part 1</span>] 0:34-1:22`;
					break;
				};
			break;
			
			case `spear of justice`:
				tempSongIdentity = [`UT #46.`, `Spear of Justice`, `https://youtu.be/qrBB3_rFPjg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Undyne</span>] 0:00-0:32<br>[<span class="motifName" id="none">Ruins, Part 1</span>] 0:36-0:47 | 0:58-1:08 | 1:20-1:52<br>[<span class="motifName" id="none">Ruins, Part 2</span>] 0:47-0:57 | 1:09-1:20`;
					break;
				};
			break;
			
			case `ooo`:
				tempSongIdentity = [`UT #47.`, `Ooo`, `https://youtu.be/vdE3R3BeH-I`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[No Motifs]`;
					break;
				};
			break;
			
			case `alphys`:
				tempSongIdentity = [`UT #48.`, `Alphys`, `https://youtu.be/xG2AtyD3elY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Alphys, Part 1</span>] 0:07-0:29<br>[<span class="motifName" id="none">Alphys, Part 2</span>] 0:04-0:07 | 0:13-0:14 | 0:20-0:22 | 0:27-1:00<br>[<span class="motifName" id="none">Alphys, Part 3</span>] 1:00-1:25`;
					break;
				};
			break;
			
			case `it's showtime!`:
			case `its showtime`:
				tempSongIdentity = [`UT #49.`, `It's Showtime!`, `https://youtu.be/9uwEAugeH8w`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">It's Showtime!</span>] 0:00-0:28<br>[<span class="motifName" id="none">Hotel (Bassline)</span>] 0:00-0:46`;
				};
			break;
			
			case `metal crusher`:
				tempSongIdentity = [`UT #50.`, `Metal Crusher`, `https://youtu.be/P0PpyUsvT9w`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Grandpa Semi</span>] 0:00-0:03<br>[<span class="motifName" id="none">It's Showtime!</span>] 0:03-0:20 | 0:37-0:53<br>[<span class="motifName" id="none">Metal Crusher</span>] 0:20-0:36`;
					break;
				};
			break;
			
			case `another medium`:
				tempSongIdentity = [`UT #51.`, `Another Medium`, `https://youtu.be/xLsuam9o9BA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Another Medium</span>] 0:00-0:51 | 0:59-1:20 | 1:35-2:11<br>[<span class="motifName" id="none">Hotland, Part 1</span>] 0:22-0:35 | 1:21-2:04<br>[<span class="motifName" id="none">Hotland, Part 2</span>] 0:51-1:15 | 2:05-2:13`;
					break;
				};
			break;
			
			case `uwa!! so heats!!♫`:
			case `uwa!! so heats!!`:
			case `uwa so heats`:
				tempSongIdentity = [`UT #52.`, `Uwa!! So HEATS!!♫`, `https://youtu.be/wyShNqRkQ1I`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Uwa!!</span>] 0:00-0:04 | 0:08-0:12 | 0:16-0:20 | 0:24-0:28`;
					break;
				};
			break;
			
			case `stronger monsters`:
				tempSongIdentity = [`UT #53.`, `Stronger Monsters`, `https://youtu.be/HnmHqWU0z5M`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `hotel`:
				tempSongIdentity = [`UT #54.`, `Hotel`, `https://youtu.be/8wSYwqbp4S4`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:20-0:39<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 0:40-1:17`;
					break;
					
					case `full`:
					default:
						
					break;
				};
			break;
			
			case `cyrctah`:
			case `cyrctahidramompoa`:
			case `can you really call this a hotel`:
			case `can you really call this a hotel, i didnt receive a mint on my pillow or anything`:
				tempSongIdentity = [`UT #55.`, `Can You Really Call This a Hotel, I Didnt Receive a Mint on my Pillow or Anything`, `https://youtu.be/wRUdj1WgwIE`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:14-0:29<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 0:30-0:57`;
					break;
					
					case `full`:
					default:
						
					break;
				};
			break;
			
			case `confession`:
				tempSongIdentity = [`UT #56.`, `Confession`, `https://youtu.be/qzQyP99Q0pE`];
				tempMotifInfo = `[<span class="motifName" id="none">Hopes and Dreams</span>] 0:00-0:42`;
			break;
			
			case `live report`:
				tempSongIdentity = [`UT #57.`, `Live Report`, `https://youtu.be/4oi_XcH2sAw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">It's Showtime!</span>] 0:02-0:06 | 0:08-0:12<br>[<span class="motifName" id="none">Hotel (Bassline)</span>] 0:00-0:17`;
					break;
				};
			break;
			
			case `death report`:
				tempSongIdentity = [`UT #58.`, `Death Report`, `https://youtu.be/Z3ZULqzMutw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">It's Showtime!</span>] 0:02-0:05 | 0:07-0:10 | 0:13-0:16 | 0:18-0:20 | 0:23-0:44<br>[<span class="motifName" id="none">Hotel (Bassline)</span>] 0:00-0:47`;
					break;
				};
			break;
			
			case `spider dance`:
				tempSongIdentity = [`UT #59.`, `Spider Dance`, `https://youtu.be/YZ3XjVVNagU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `wrong enemy !?`:
			case `wrong enemy!?`:
			case `wrong enemy`:
				tempSongIdentity = [`UT #60.`, `Wrong Enemy !?`, `https://youtu.be/gTCSQevpuOg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `oh! one true love`:
			case `oh one true love`:
				tempSongIdentity = [`UT #61.`, `Oh! One True Love`, `https://youtu.be/JlKHChbEcps`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `oh! dungeon`:
			case `oh dungeon`:
				tempSongIdentity = [`UT #62.`, `Oh! Dungeon`, `https://youtu.be/5aRE_J4UvYM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `it's raining somewhere else`:
			case `its raining somewhere else`:
				tempSongIdentity = [`UT #63.`, `It's Raining Somewhere Else`, `https://youtu.be/zNd4apsr3WE`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `core approach`:
				tempSongIdentity = [`UT #64.`, `CORE Approach`, `https://youtu.be/qNi_6kXc2cc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `core`:
				tempSongIdentity = [`UT #65.`, `CORE`, `https://youtu.be/tDuEWw648jo`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `last episode!`:
			case `last episode`:
				tempSongIdentity = [`UT #66.`, `Last Episode!`, `https://youtu.be/pzhYcYwg4vE`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `oh my...`:
			case `oh my`:
				tempSongIdentity = [`UT #67.`, `Oh My...`, `https://youtu.be/r-IvDZ8Wljo`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `death  by glamour`:
				tempSongIdentity = [`UT #68.`, `Death By Glamour`, `https://youtu.be/2TgO-tN5wAM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `for the fans`:
				tempSongIdentity = [`UT #69.`, `For The Fans`, `https://youtu.be/6nOHNgotIPM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `long elevator`:
				tempSongIdentity = [`UT #70.`, `Long Elevator`, `https://youtu.be/XDQGK6ztbLs`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `undertale`:
				tempSongIdentity = [`UT #71.`, `Undertale`, `https://youtu.be/EBhFHJMVfiI`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:37-2:46 | 3:26-5:57<br>[<span class="motifName" id="none">Home</span>] 1:33-2:44 | 3:27-4:41<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 2:49-3:21`;
					break;
					
					case `full`:
					default:
						
					break;
				};
			break;
			
			case `song that might play when you fight sans`:
			case `stmpwyfs`:
				tempSongIdentity = [`UT #72.`, `Song That Might Play When You Fight Sans`, `https://youtu.be/41YOknSl0zw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `the choice`:
				tempSongIdentity = [`UT #73.`, `The Choice`, `https://youtu.be/C4Wv5M9JPao`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-2:12<br>[<span class="motifName" id="none">Home</span>] 0:00-2:12`;
					break;
					
					case `full`:
					default:
						
					break;
				};
			break;
			
			case `small shock`:
				tempSongIdentity = [`UT #74.`, `Small Shock`, `https://youtu.be/EUJA3xRyVVM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `barrier`:
				tempSongIdentity = [`UT #75.`, `Barrier`, `https://youtu.be/nJfzf--xqeQ`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `bergentrückung`:
			case `bergentruckung`:
				tempSongIdentity = [`UT #76.`, `Bergentrückung`, `https://youtu.be/YivzBeEwzWI`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `asgore`:
				tempSongIdentity = [`UT #77.`, `ASGORE`, `https://youtu.be/hMa4hZQbrms`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `you idiot`:
				tempSongIdentity = [`UT #78.`, `You Idiot`, `https://youtu.be/eOqq5kNBVoM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `your best nightmare`:
				tempSongIdentity = [`UT #79.`, `Your Best Nightmare`, `https://youtu.be/eUcThHVbrXY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `finale`:
				tempSongIdentity = [`UT #80.`, `Finale`, `https://youtu.be/yWjavxcGfqM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `an ending`:
				tempSongIdentity = [`UT #81.`, `An Ending`, `https://youtu.be/l3sJ79C1Zyo`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `she's playing piano`:
			case `shes playing piano`:
				tempSongIdentity = [`UT #82.`, `She's Playing Piano`, `https://youtu.be/zEAN2dna9To`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `here we are`:
				tempSongIdentity = [`UT #83.`, `Here We Are`, `https://youtu.be/y49b8aiQVBg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `amalgam`:
				tempSongIdentity = [`UT #84.`, `Amalgam`, `https://youtu.be/71u0i6J-Qes`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `fallen down reprise`:
			case `fallen down (reprise)`:
				tempSongIdentity = [`UT #85.`, `Fallen Down (Reprise)`, `https://youtu.be/cGBMTAGzWPs`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1a`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 1:17-1:43<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 1:44-2:10<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 2:10-2:27`;
					break;
					
					case `full`:
					default:
						
					break;
				};
			break;
			
			case `don't give up`:
			case `dont give up`:
				tempSongIdentity = [`UT #86.`, `Don't Give Up`, `https://youtu.be/B4qdpiad_Q0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `hopes and dreams`:
				tempSongIdentity = [`UT #87.`, `Hopes and Dreams`, `https://youtu.be/tz82xbLvK_k`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:44<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:44-1:29 | 1:52-2:14<br>[<span class="motifName" id="none">Hopes and Dreams</span>] 2:14-3:00`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:44<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:44-1:29 | 1:52-2:14<br>[<span class="motifName" id="none">Hopes and Dreams</span>] 2:14-3:00`;
					break;
				};
			break;
			
			case `burn in despair!`:
			case `burn in despair`:
				tempSongIdentity = [`UT #88.`, `Burn In Despair!`, `https://youtu.be/pumVu-WWhKM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `save the world`:
				tempSongIdentity = [`UT #89.`, `SAVE the World`, `https://youtu.be/mZRP7nQkfrM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:04 | 0:10-0:15 | 1:46-1:50<br>[<span class="motifName" id="none">Home</span>] 0:21-0:23 | 0:31-0:34<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:42-1:46`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:04 | 0:10-0:15 | 1:46-1:50<br>[<span class="motifName" id="none">Home</span>] 0:21-0:23 | 0:31-0:34<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:42-1:46`;
					break;
				};
			break;
			
			case `his theme`:
				tempSongIdentity = [`UT #90.`, `His Theme`, `https://youtu.be/IkOK8tdEsFY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `final power`:
				tempSongIdentity = [`UT #91.`, `Final Power`, `https://youtu.be/6nQbkE1DS0o`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:00-0:18]`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:00-0:18]`;
					break;
				};
			break;
			
			case `reunited`:
				tempSongIdentity = [`UT #92.`, `Reunited`, `https://youtu.be/WgRfPc1lfJk`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:44-1:42<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 1:43-2:42<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 2:57-3:55<br>[<span class="motifName" id="none">Hopes and Dreams</span>] 3:56-4:24`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:44-1:42<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 1:43-2:42<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 2:57-3:55<br>[<span class="motifName" id="none">Hopes and Dreams</span>] 3:56-4:24`;
					break;
				};
			break;
			
			case `menu full`:
			case `menu (full)`:
				tempSongIdentity = [`UT #93.`, `Menu (Full)`, `https://youtu.be/brP9Q08kEfk`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:20<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:20-0:32`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:20<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 0:20-0:32`;
					break;
				};
			break;
			
			case `respite`:
				tempSongIdentity = [`UT #94.`, `Respite`, `https://youtu.be/E-fyLcHg4iM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `biig`:
			case `bring it in guys`:
			case `bring it in, guys!`:
				tempSongIdentity = [`UT #95.`, `Bring It In, Guys!`, `https://youtu.be/x_P5smsopK0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Hopes and Dreams</span>] 1:16-1:28 <br>[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 3:47-4:12`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Hopes and Dreams</span>] 1:16-1:28 <br>[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 3:47-4:12`;
					break;
				};
			break;
			
			case `last goodbye`:
				tempSongIdentity = [`UT #96.`, `Last Goodbye`, `https://youtu.be/5P8V4mP5RLg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 0:02-0:22 | 0:45-1:01<br>[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:23-0:28 | 1:53-2:00<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 1:07-1:33`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 0:02-0:22 | 0:45-1:01<br>[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:23-0:28 | 1:53-2:00<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 1:07-1:33`;
					break;
				};
			break;
			
			case `but the earth refused to die`:
			case `btertd`:
				tempSongIdentity = [`UT #97.`, `But The Earth Refused To Die`, `https://youtu.be/ML6OV8fG74w`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `battle against a true hero`:
			case `baath`:
				tempSongIdentity = [`UT #98.`, `Battle Against a True Hero`, `https://youtu.be/aWBtpBwzzdM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `power of "neo"`:
			case `power of neo`:
				tempSongIdentity = [`UT #99.`, `Power of "NEO"`, `https://youtu.be/mwrUem9vM_A`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `megalovania`:
				tempSongIdentity = [`UT #100.`, `MEGALOVANIA`, `https://youtu.be/c5daGZ96QGU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `good night`:
				tempSongIdentity = [`UT #101.`, `Good Night`, `https://youtu.be/BGpJrPY563A`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:22`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:22`;
					break;
				};
			break;
			
			case `mus_menu1.ogg, mus_menu2.ogg, . . . mus_menu5.ogg`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `mus_menu1.ogg, mus_menu2.ogg, . . . mus_menu5.ogg`, `https://youtu.be/43FsdPvFsG4?t=32`];
				empMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:20<br>[<span class="motifName" id="none">Menu Beat</span>] 0:00-0:32<br>[<span class="motifName" id="none">Once Upon a Time, Part 1 (Backing)</span>] 0:00-0:32`;
			break;
			
			case `mus_toomuch.ogg`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `mus_toomuch.ogg`, `https://youtu.be/08OMWjoCEXY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `happy town`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `Happy Town`, `https://youtu.be/pPeWl_hvarU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `meat factory`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `Meat Factory`, `https://youtu.be/iZRMbMrItco`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `trouble dingle`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `Trouble Dingle`, `https://youtu.be/t6Itihh0o7A`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `gaster's theme`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `Gaster's Theme`, `https://youtu.be/CFn8xs157Gw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_snoresymphony.ogg`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `mus_snoresymphony.ogg`, `https://youtu.be/g5gL8V8EPOs`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_tv.ogg`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `mus_tv.ogg`, `https://youtu.be/kAFfBscjNv0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mysterious shrine`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `Mysterious Shrine`, `assets/audio/mus_dogshrine_1.ogg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `absolutely overfamiliar shrine`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `Absolutely Overfamiliar Shrine`, `assets/audio/mus_dogshrine_2.ogg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `dog casino (xbox)`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `Dog Casino (XBOX)`, `https://youtu.be/rksOYId-cNA?t=614`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `dog casino win jingle`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `Dog Casino Win Jingle`, `assets/audio/dog_casino_win.mp3`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `snd_grandpatemi.wav`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `snd_grandpatemi.wav`, `assets/audio/grandpatemi.wav`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_disturbing.ogg`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `mus_disturbing.ogg`, `https://youtu.be/3tVA0o0I8YM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_woofenstein_loop.ogg`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `mus_woofenstein_loop.ogg`, `https://youtu.be/pIyB2Ni_94o`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mad mew mew`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `Mad Mew Mew`, `https://youtu.be/aeM0EVs1ON8`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_dogroom.ogg`:
				tempSongIdentity = [`UT [Out of Soundtrack]`, `mus_dogroom.ogg`, `https://youtu.be/grGnVeKCcvc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `alphys (early)`:
			case `alphys early`:
			case `alphys (unused)`:
			case `alphys unused`:
			case `alphys lab`:
				tempSongIdentity = [`UT [Early Song]`, `Alphys (Early)`, `https://undertale.tumblr.com/post/150355894665/because-the-anniversary-is-two-days-away-ill`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `undyne battle`:
			case `undyne battle (early)`:
			case `undyne battle early`:
			case `undyne battle (unused)`:
			case `undyne battle unused`:
			case `spear of justice (early)`:
			case `spear of justice early`:
			case `spear of justice (unused)`:
			case `spear of justice unused`:
				tempSongIdentity = [`UT [Early Song]`, `Undyne Battle (Early)`, `https://undertale.tumblr.com/post/150356302775/i-think-this-is-the-most-finished-sounding-of-all`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `dog hole`:
				tempSongIdentity = [`UT [Early Song]`, `Dog Hole`, `https://undertale.tumblr.com/post/150356382980/dog-hole`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `dogtroid`:
				tempSongIdentity = [`UT [Early Song]`, `Dogtroid`, `https://undertale.tumblr.com/post/150356427945/originally-i-was-going-to-make-it-if-you-beat-the`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `undertale (unused)`:
			case `undertale unused`:
				tempSongIdentity = [`UT [Early Song]`, `Undertale (Unused)`, `https://undertale.tumblr.com/post/150356633250/before-the-song-undertale-was-completed-it-went`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:32-2:39<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 2:40-4:00<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 3:12-4:00`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:32-2:39<br>[<span class="motifName" id="none">Once Upon a Time, Part 2</span>] 2:40-4:00<br>[<span class="motifName" id="none">Once Upon a Time, Part 3</span>] 3:12-4:00`;
					break;
				};
			break;
			
			case `mus_f_finale_1`:
				tempSongIdentity = [`UT [Unused]`, `mus_f_finale_1`, `https://youtu.be/7DU-WkLvnD0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `grandpasemi.ogg`:
				tempSongIdentity = [`UT [Unused]`, `grandpasemi.ogg`, `assets/audio/grandpasemi.ogg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_kingdescription.ogg`:
				tempSongIdentity = [`UT [Unused]`, `mus_kingdescription.ogg`, `https://youtu.be/AXI87AFSrNA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_star.ogg`:
				tempSongIdentity = [`UT [Unused]`, `mus_star.ogg`, `https://youtu.be/sCOzuO2EsQQ`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_woofenstein.ogg`:
				tempSongIdentity = [`UT [Unused]`, `mus_woofenstein.ogg`, `https://youtu.be/_0uBrGdyYn8`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `undertale release trailer`:
				tempSongIdentity = [`UT [Trailer Theme]`, `UNDERTALE Release Trailer`, `https://youtu.be/1Hojv0m3TqA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `1b`:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:16 | 0:58-1:04`;
					break;
					
					case `full`:
					default:
						tempMotifInfo = `[<span class="motifName" id="none">Once Upon a Time, Part 1</span>] 0:00-0:16 | 0:58-1:04`;
					break;
				};
			break;
			
			case `undertale – launch trailer | ps4, ps vita`:
			case `undertale ps4 release trailer`:
			case `undertale ps4 trailer`:
				tempSongIdentity = [`UT [Trailer Theme]`, `UNDERTALE – Launch Trailer | PS4, PS Vita`, `https://youtu.be/h5Zh2LEwFCo`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `undertale - release trailer - nintendo switch`:
			case `undertale switch release trailer`:
			case `undertale switch trailer`:
				tempSongIdentity = [`UT [Trailer Theme]`, `Undertale - Release Trailer - Nintendo Switch`, `https://youtu.be/ycsnBIX8wTU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `undertale xbox one announce trailer`:
			case `undertale xbox one announce trailer`:
			case `undertale xbox one trailer`:
			case `undertale xbox release trailer`:
			case `undertale xbox trailer`:
				tempSongIdentity = [`UT [Trailer Theme]`, `UNDERTALE Xbox One Announce Trailer`, `https://youtu.be/oRN6341NB7Y`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_dance_of_dog.ogg`:
				tempSongIdentity = [`UT [Other]`, `mus_dance_of_dog.ogg`, `https://youtu.be/4nHKR9b4NHM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mus_sigh_of_dog.ogg`:
				tempSongIdentity = [`UT [Other]`, `mus_sigh_of_dog.ogg`, `https://youtu.be/9C226vWCyTY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `megalovania (super smash bros. ultimate)`:
				tempSongIdentity = [`UT [Other]`, `MEGALOVANIA (Super Smash Bros. Ultimate)`, `https://youtu.be/FA5irMZy0oY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `annoying dog ps4 theme`:
				tempSongIdentity = [`UT [Other]`, `Annoying Dog PS4 Theme`, `https://youtu.be/rksOYId-cNA?t=415`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `another him`:
				tempSongIdentity = [`DR CH. 1 #1.`, `ANOTHER HIM`, `https://youtu.be/-afAXu2F1RY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `beginning`:
				tempSongIdentity = [`DR CH. 1 #2.`, `Beginning`, `https://youtu.be/L8_h7k5cHtY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `school`:
				tempSongIdentity = [`DR CH. 1 #3.`, `School`, `https://youtu.be/g9DIMqAxtfU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `susie`:
				tempSongIdentity = [`DR CH. 1 #4.`, `Susie`, `https://youtu.be/bdACwUDYmFY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `the door`:
				tempSongIdentity = [`DR CH. 1 #5.`, `The Door`, `https://youtu.be/eOxjNyOa4ZE`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `cliffs`:
				tempSongIdentity = [`DR CH. 1 #6.`, `Cliffs`, `https://youtu.be/0rOqHD8KGPw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `the chase`:
				tempSongIdentity = [`DR CH. 1 #7.`, `The Chase`, `https://youtu.be/D6s6BN0jfv0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `the legend`:
				tempSongIdentity = [`DR CH. 1 #8.`, `The Legend`, `https://youtu.be/o_FH2m7H_dg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `lancer`:
				tempSongIdentity = [`DR CH. 1 #9.`, `Lancer`, `https://youtu.be/D93Dj44UQvI`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `rude buster`:
				tempSongIdentity = [`DR CH. 1 #10.`, `Rude Buster`, `https://youtu.be/WCOEY6tkqtk`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `empty town`:
				tempSongIdentity = [`DR CH. 1 #11.`, `Empty Town`, `https://youtu.be/UN7gdtaOyp8`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `weird birds`:
				tempSongIdentity = [`DR CH. 1 #12.`, `Weird Birds`, `https://youtu.be/Szc8MfciEPk`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `field of hopes and dreams`:
				tempSongIdentity = [`DR CH. 1 #13.`, `Field of Hopes and Dreams`, `https://youtu.be/DAjTXZZP6R8`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `fanfare (from "rose of winter")`:
			case `fanfare from rose of winter`:
			case `fanfare`:
				tempSongIdentity = [`DR CH. 1 #14.`, `Fanfare (from "Rose of Winter")`, `https://youtu.be/bOdQb4qJCtA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `lantern`:
				tempSongIdentity = [`DR CH. 1 #15.`, `Lantern`, `https://youtu.be/h0sanOdqREA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `i'm very bad`:
			case `im very bad`:
				tempSongIdentity = [`DR CH. 1 #16.`, `I'm Very Bad`, `https://youtu.be/70mnrqbp_w4`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `checker dance`:
				tempSongIdentity = [`DR CH. 1 #17.`, `Checker Dance`, `https://youtu.be/wfk4k5j6MXY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `quiet autumn`:
				tempSongIdentity = [`DR CH. 1 #18.`, `Quiet Autumn`, `https://youtu.be/RFE0kawS0Ec`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `scarlet forest`:
				tempSongIdentity = [`DR CH. 1 #19.`, `Scarlet Forest`, `https://youtu.be/_Gq4a7ofumE`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `thrash machine`:
				tempSongIdentity = [`DR CH. 1 #20.`, `Thrash Machine`, `https://youtu.be/SY3oBICUnwU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `vs. lancer`:
			case `vs lancer`:
				tempSongIdentity = [`DR CH. 1 #21.`, `Vs. Lancer`, `https://youtu.be/j0JjPSU_f8w`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `basement`:
				tempSongIdentity = [`DR CH. 1 #22.`, `Basement`, `https://youtu.be/0l2ngkaBlwk`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `imminent death`:
				tempSongIdentity = [`DR CH. 1 #23.`, `Imminent Death`, `https://youtu.be/ETHJDAOa_5I`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `vs. susie`:
			case `vs susie`:
				tempSongIdentity = [`DR CH. 1 #24.`, `Vs. Susie`, `https://youtu.be/lwHczRmVf7M`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `card castle`:
				tempSongIdentity = [`DR CH. 1 #25.`, `Card Castle`, `https://youtu.be/uDOirtr2Mj4`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `rouxls kaard`:
				tempSongIdentity = [`DR CH. 1 #26.`, `Rouxls Kaard`, `https://youtu.be/zErMxsai_lw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `april 2012`:
				tempSongIdentity = [`DR CH. 1 #27.`, `April 2012`, `https://youtu.be/PTDUtLJPNwM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `hip shop`:
				tempSongIdentity = [`DR CH. 1 #28.`, `Hip Shop`, `https://youtu.be/iuJo2Q3XL60`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `gallery`:
				tempSongIdentity = [`DR CH. 1 #29.`, `Gallery`, `https://youtu.be/TzVuZ2CeqK8`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `chaos king`:
				tempSongIdentity = [`DR CH. 1 #30.`, `Chaos King`, `https://youtu.be/tOSmSBcuiCk`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `darkness falls`:
				tempSongIdentity = [`DR CH. 1 #31.`, `Darkness Falls`, `https://youtu.be/SJwhRDfrS5k`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `the circus`:
				tempSongIdentity = [`DR CH. 1 #32.`, `The Circus`, `https://youtu.be/v5NtxjlzjgY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `the world revolving`:
				tempSongIdentity = [`DR CH. 1 #33.`, `THE WORLD REVOLVING`, `https://youtu.be/fHs6oABQW4Y`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `friendship`:
				tempSongIdentity = [`DR CH. 1 #34.`, `Friendship`, `https://youtu.be/dVWFqCmh3qA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `the holy`:
				tempSongIdentity = [`DR CH. 1 #35.`, `THE HOLY`, `https://youtu.be/SIDzMSVlpQY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `your power`:
				tempSongIdentity = [`DR CH. 1 #36.`, `Your Power`, `https://youtu.be/qkzHu-7OVwk`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `a town called hometown`:
				tempSongIdentity = [`DR CH. 1 #37.`, `A Town Called Hometown`, `https://youtu.be/v0G0UORis0E`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `you can always come home`:
				tempSongIdentity = [`DR CH. 1 #38., DR CH. 2 #44`, `You Can Always Come Home`, `https://youtu.be/r3MM65ZwR0E`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `don't forget`:
			case `dont forget`:
				tempSongIdentity = [`DR CH. 1 #39.`, `Don't Forget`, `https://youtu.be/zgroRz2Rl_c`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `before the story`:
				tempSongIdentity = [`DR CH. 1 #40., DR CH. 2 #46`, `Before The Story`, `https://youtu.be/1kGye9AwD7s`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `faint glow`:
				tempSongIdentity = [`DR CH. 2 #1.`, `Faint Glow`, `https://youtu.be/16A13R7T0rM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `girl next door`:
				tempSongIdentity = [`DR CH. 2 #2.`, `Girl Next Door`, `https://youtu.be/T6UfG77Bwpo`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `my castle town`:
				tempSongIdentity = [`DR CH. 2 #3.`, `My Castle Town`, `https://youtu.be/Bl-YMD6yePc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `ohhhhohohoho!`:
			case `ohhhhohohoho`:
			case `queen laugh`:
				tempSongIdentity = [`DR CH. 2 #4.`, `Ohhhhohohoho!`, `https://youtu.be/_xsaAydYPIM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `queen`:
				tempSongIdentity = [`DR CH. 2 #5.`, `Queen`, `https://youtu.be/6XQv5CHmITA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `a cyber's world?`:
			case `a cybers world`:
				tempSongIdentity = [`DR CH. 2 #6.`, `A CYBER'S WORLD?`, `https://youtu.be/In3y0C7mQvA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `a simple diversion`:
				tempSongIdentity = [`DR CH. 2 #7.`, `A Simple Diversion`, `https://youtu.be/p1U5FjgwDhA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `almost to the guys!`:
			case `almost to the guys`:
				tempSongIdentity = [`DR CH. 2 #8.`, `Almost to the Guys!`, `https://youtu.be/TBrbkS3hDn4`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `cool beat`:
				tempSongIdentity = [`DR CH. 2 #9.`, `Cool Beat`, `https://youtu.be/mem2LEtRj40`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `when i get mad i dance like this`:
			case `when i get mad`:
			case `wigmidlt`:
				tempSongIdentity = [`DR CH. 2 #10.`, `When I Get Mad I Dance Like This`, `https://youtu.be/XH1ibcc_MpQ`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `cyber battle (solo)`:
			case `cyber battle solo`:
			case `cyber battle`:
				tempSongIdentity = [`DR CH. 2 #11.`, `Cyber Battle (Solo)`, `https://youtu.be/10yw5Q0mPPw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `when i get happy i dance like this`:
			case `when i get happy`:
			case `wighidlt`:
				tempSongIdentity = [`DR CH. 2 #12.`, `When I Get Happy I Dance Like This`, `https://youtu.be/bTwrnu_TFEA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `sound studio`:
				tempSongIdentity = [`DR CH. 2 #13.`, `Sound Studio`, `https://youtu.be/v4Xc64X6Npo`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `berdly`:
				tempSongIdentity = [`DR CH. 2 #14.`, `Berdly`, `https://youtu.be/2S8I1h-wNzc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `smart race`:
				tempSongIdentity = [`DR CH. 2 #15.`, `Smart Race`, `https://youtu.be/HZO3xw91eHw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `faint courage`:
				tempSongIdentity = [`DR CH. 2 #16.`, `Faint Courage`, `https://youtu.be/TkvdhHEuCNY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `welcome to the city`:
				tempSongIdentity = [`DR CH. 2 #17.`, `WELCOME TO THE CITY`, `https://youtu.be/uiou1f5nzlU`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `mini studio`:
				tempSongIdentity = [`DR CH. 2 #18.`, `Mini Studio`, `https://youtu.be/OEaRlIfkURI`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `holiday studio`:
				tempSongIdentity = [`DR CH. 2 #19.`, `Holiday Studio`, `https://youtu.be/7SAJNfCkg7U`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `cool mixtape`:
				tempSongIdentity = [`DR CH. 2 #20.`, `Cool Mixtape`, `https://youtu.be/EeVEyBGPgLY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `hey every !`:
			case `hey every`:
				tempSongIdentity = [`DR CH. 2 #21.`, `HEY EVERY !`, `https://youtu.be/DZKnVQL3r2I`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `spamton`:
				tempSongIdentity = [`DR CH. 2 #22.`, `Spamton`, `https://youtu.be/cSm5gKlmw2M`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `now's your chance to be a`:
			case `nows your chance to be a`:
				tempSongIdentity = [`DR CH. 2 #23.`, `NOW'S YOUR CHANCE TO BE A`, `https://youtu.be/2GbBD_7AsGA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `elegant entrance`:
				tempSongIdentity = [`DR CH. 2 #24.`, `Elegant Entrance`, `https://youtu.be/j6baKyF2Ksc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `bluebird of misfortune`:
				tempSongIdentity = [`DR CH. 2 #25.`, `Bluebird of Misfortune`, `https://youtu.be/yud5H-vnbJw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `pandora palace`:
				tempSongIdentity = [`DR CH. 2 #26.`, `Pandora Palace`, `https://youtu.be/q-5cXVcCOUs`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `keygen`:
				tempSongIdentity = [`DR CH. 2 #27.`, `KEYGEN`, `https://youtu.be/-9UUuxhh4Ao`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `acid tunnel of love`:
				tempSongIdentity = [`DR CH. 2 #28.`, `Acid Tunnel of Love`, `https://youtu.be/McOfpEEXnq0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `it's pronounced "rules"`:
			case `its pronounced rules`:
				tempSongIdentity = [`DR CH. 2 #29.`, `It's Pronounced "Rules"`, `https://youtu.be/DQ0aryDlPi4`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `lost girl`:
				tempSongIdentity = [`DR CH. 2 #30.`, `Lost Girl`, `https://youtu.be/P89rxnT7lKw`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `ferris wheel`:
				tempSongIdentity = [`DR CH. 2 #31.`, `Ferris Wheel`, `https://youtu.be/PcfyVaTUops`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `attack of the killer queen`:
				tempSongIdentity = [`DR CH. 2 #32.`, `Attack of the Killer Queen`, `https://youtu.be/vBjscyFC3jo`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `giga size`:
				tempSongIdentity = [`DR CH. 2 #33.`, `Giga Size`, `https://youtu.be/_bVl2e-Wxzg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `power combined`:
				tempSongIdentity = [`DR CH. 2 #34.`, `Powers Combined`, `https://youtu.be/iAxDtmz0ehs`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `knock you down !!`:
			case `knock you down!!`:
			case `knock you down`:
				tempSongIdentity = [`DR CH. 2 #35.`, `Knock You Down !!`, `https://youtu.be/e4EZa--N028`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `the dark truth`:
				tempSongIdentity = [`DR CH. 2 #36.`, `The Dark Truth`, `https://youtu.be/o3UNWAT81f0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `digital roots`:
				tempSongIdentity = [`DR CH. 2 #37.`, `Digital Roots`, `https://youtu.be/Fhv55ss0B4A`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `deal gone wrong`:
				tempSongIdentity = [`DR CH. 2 #38.`, `Deal Gone Wrong`, `https://youtu.be/cfvB-bVpH7Y`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `big shot`:
				tempSongIdentity = [`DR CH. 2 #39.`, `BIG SHOT`, `https://youtu.be/uivFFnCI8tM`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `a real boy!`:
			case `a real boy`:
				tempSongIdentity = [`DR CH. 2 #40.`, `A Real Boy!`, `https://youtu.be/rSXxltE8mQE`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `dialtone`:
				tempSongIdentity = [`DR CH. 2 #41.`, `Dialtone`, `https://youtu.be/Cki-mnHhNtY`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `chill jailbreak alarm to study and relax to`:
			case `chill jailbreak alarm to relax and study to`:
			case `chill jailbreak alarm`:
				tempSongIdentity = [`DR CH. 2 #43.`, `Chill Jailbreak Alarm to Study and Relax To`, `https://youtu.be/_BF-Hq3lOf0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `until next time`:
				tempSongIdentity = [`DR CH. 2 #45.`, `Until Next Time`, ``];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `berdly (rejected concept)`:
			case `berdly rejected concept`:
				tempSongIdentity = [`DR CH. 2 #47.`, `Berdly (Rejected Concept)`, `https://youtu.be/lVqi13hWb00`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `hometown day`:
				tempSongIdentity = [`DR #??.`, `Hometown Day`, `https://deltarune.com/assets/audio/update2022-town-day.mp3`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `my funky town`:
				tempSongIdentity = [`DR #??.`, `My Funky Town`, `https://deltarune.com/assets/audio/update2022-castle-funk.mp3`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `green room`:
				tempSongIdentity = [`DR #??.`, `Green Room`, `https://deltarune.com/assets/audio/update2022-greenroom.mp3`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `snd_ralseising1`:
				tempSongIdentity = [`DR [Out of Soundtrack]`, `snd_ralseising1`, `assets/audio/snd_ralseising1_ch1.wav`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `snd_ralseising2`:
				tempSongIdentity = [`DR [Out of Soundtrack]`, `snd_ralseising2`, `assets/audio/snd_ralseising2_ch1.wav`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `honksong.ogg`:
				tempSongIdentity = [`DR [Out of Soundtrack]`, `honksong.ogg`, `https://youtu.be/l8IYXDWoV0Y`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `gameover_short.ogg`:
				tempSongIdentity = [`DR [Out of Soundtrack]`, `gameover_short.ogg`, `https://youtu.be/EIBiKGca54Q`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `cybercity_alt.ogg`:
				tempSongIdentity = [`DR [Out of Soundtrack]`, `cybercity_alt.ogg`, `https://youtu.be/wb763wz6Moo`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `d.ogg`:
				tempSongIdentity = [`DR [Out of Soundtrack]`, `d.ogg`, `https://youtu.be/2ai1azELuG0`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `berdly_battle_heartbeat_true.ogg`:
				tempSongIdentity = [`DR [Out of Soundtrack]`, `berdly_battle_heartbeat_true.ogg`, `https://youtu.be/Sz_jIdEjPM4`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `flashback_excerpt.ogg`:
				tempSongIdentity = [`DR [Out Of Soundtrack]`, `flashback_excerpt.ogg`, `https://youtu.be/ZRB8Mv8fQ7s`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `audio_menu.ogg`:
				tempSongIdentity = [`DR [Early Song]`, `AUDIO_MENU.ogg`, `assets/audio/AUDIO_MENU.ogg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `noelle.ogg`:
				tempSongIdentity = [`DR [Early Song]`, `noelle.ogg`, `https://youtu.be/_mWOaLav-Pc`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `cybercity_old.ogg`:
				tempSongIdentity = [`DR [Early Song]`, `cybercity_old.ogg`, `https://youtu.be/MD8m6ijK_kA`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `school (alternate)`:
				tempSongIdentity = [`DR [Early Song]`, `School (alternate)`, `https://youtu.be/rksOYId-cNA?t=906`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `checkerboard`:
				tempSongIdentity = [`DR [Early Song]`, `Checkerboard`, `https://youtu.be/rksOYId-cNA?t=989`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `epic rouxls battle`:
				tempSongIdentity = [`DR [Early Song]`, `Epic Rouxls Battle`, `https://youtu.be/rksOYId-cNA?t=1098`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `character joined (long)`:
				tempSongIdentity = [`DR [Early Song]`, `Character Joined (Long)`, `https://youtu.be/rksOYId-cNA?t=1195`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `king boss (orchestral)`:
				tempSongIdentity = [`DR [Early Song]`, `King Boss (Orchestral)`, `https://youtu.be/rksOYId-cNA?t=1205`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `legend (alternate)`:
				tempSongIdentity = [`DR [Early Song]`, `Legend (Alternate)`, `https://youtu.be/rksOYId-cNA?t=1248`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `fountain (unused)`:
				tempSongIdentity = [`DR [Early Song]`, `Fountain (unused)`, `https://youtu.be/rksOYId-cNA?t=1353`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `game main theme (piano sketch)`:
				tempSongIdentity = [`DR [Early Song]`, `Game Main Theme (Piano Sketch)`, `https://youtu.be/rksOYId-cNA?t=1407`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `cyber_battle.ogg`:
				tempSongIdentity = [`DR [Unused]`, `cyber_battle.ogg`, `https://youtu.be/ZHVBMfPRO9s`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `spamton_house.ogg`:
				tempSongIdentity = [`DR [Unused]`, `spamton_house.ogg`, `https://youtu.be/5j-ymb5_Kws`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `dog check`:
				tempSongIdentity = [`DR [Other]`, `Dog Check`, `https://youtu.be/tGhvIfJ_Z8w`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `lost girl (alternate)`:
				tempSongIdentity = [`DR [Other]`, `Lost Girl (Alternate)`, `assets/audio/lost_girl_alternate.mp3`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `results.ogg`:
				tempSongIdentity = [`DR [Other]`, `results.ogg`, `https://deltarune.com/assets/audio/results.ogg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `findher.ogg`:
				tempSongIdentity = [`DR [Other]`, `findher.ogg`, `https://deltarune.com/assets/audio/findher.ogg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
			
			case `lancer-spin.ogg`:
				tempSongIdentity = [`DR [Other]`, `lancer-spin.ogg`, `https://deltarune.com/assets/audio/lancer-spin.ogg`];
				switch (tempMotifPage.toLowerCase())
				{
					case `full`:
						tempMotifInfo = `[<span class="motifName" id="none">MOTIFNAME</span>] :-:`;
					break;
				};
			break;
		};
		elem.innerHTML = (`<h6>` + tempSongIdentity[0] + ` <a href="` + tempSongIdentity[2] + `" target="_blank"><i>` + tempSongIdentity[1] + `</i></a></h6>` + tempMotifInfo);
	};
};