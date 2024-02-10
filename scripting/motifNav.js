function returnNavPages(inputMotifPage)
{
	/* returns basic info about page numbers and the like for the leitmotif index */
	var pageList = [
		[
			`0`,
			`1a`,
			`1b`,
			`1c`,
			`1x`,
			`2`,
			`3`,
			`4`,
			`5a`,
			`5b`,
			`5c`,
			`5d`,
			`5e`,
			`5f`,
			`6`,
			`7`,
			`8`,
			`9`,
			`10`,
			`none`
		],
		[
			`Preface`,
			`Once Upon a Time...`,
			`A Snowy Detour`,
			`Don't Forget!`,
			`A Cherry on Top`,
			`Dog Fighting`,
			`Ghosts, Dummies, and Spiders, Oh My!`,
			`The Power of <b>NEO</b>`,
			`Toriel & Asgore`,
			`Asriel & Flowey`,
			`Sans and Papyrus & Undyne and Alphys`,
			`Susie, Noelle, and Berdly`,
			`Mettaton & Spamton`,
			`Lancer, Rouxls Kaard, and King`,
			`Minor Motifs and Miscellaneae`,
			`Welcome to the Underground`,
			`The Dark World?`,
			`The Magic of Determination`,
			`THE DARK`,
			`also none`
		]
	];
	var thisPage = inputMotifPage;
	var thisPageIndex = pageList[0].indexOf(thisPage);
	var thisPageTitle = pageList[1][thisPageIndex];
	
	var nextPageIndex = Math.round(thisPageIndex + 1);
	var nextPage = pageList[0][nextPageIndex];
	var nextPageTitle = pageList[1][nextPageIndex];
	
	var prevPageIndex = Math.round(thisPageIndex - 1);
	var prevPage = pageList[0][nextPageIndex];
	var prevPageTitle = pageList[1][nextPageIndex];
	
	/*
		the stuff below automatically makes navbox content based on the
			inputMotifPage
		for the leitmotif index.
		i got so wrapped up in making it, i didn't realize there was literally no reason to do so until i went to test it.
		a good excersize nonetheless; i'm happy with how I optimized it.
		I cannibalized the initialization to make the function return some basic info about the pages instead of making a whole navbox.
		the stuff in --double dashes-- were comments before i commented it all out.
	*/
	/*
		-- Main Nav --
		var mainNavFind = (`<a href"motifs-` + thisPage + `.html" target="self">Part ` + thisPage + `: <i>` + pageTitle + `</i></a>`);
		var mainNavReplace = (`<b id="y">Part ` + thisPage + `: <i>` + thisPageTitle + `</i></b>`);
		var mainNavTemplate = `
			<ul>
				<li id="r"><a href="motifs-0.html#main_nav" target="self">Preface</b></a></li>
				<small><li id="o"><a href="motifs-1a.html" target="self">Part 1A: <i>Once Upon a Time...</i></a> - <a href="motifs-1b.html" target="self">Part 1B: <i>A Snowy Detour</i></a> - <a href="motifs-1c.html" target="self">Part 1C: <i>Don't Forget!</i></a> - <a href="motifs-1x.html" target="self">Part 1X: <i>A Cherry on Top</i></a></li></small>
				<li id="y"><a href="motifs-2.html" target="self">Part 2: <i>Dog Fighting</i></a> - <a href="motifs-3.html" target="self">Part 3: <i>Ghosts, Dummies, and Spiders, Oh My!</i></a> - <a href="motifs-4.html" target="self">Part 4: <i>The Power of <b>NEO</b></i></a></li>
				<small><li id="g"><a href="motifs-5a.html" target="self">Part 5A: <i>Toriel & Asgore</i></a> - <a href="motifs-5b.html" target="self">Part 5B: <i>Flowey & Asriel</i></a> - <a href="motifs-5c.html" target="self">Part 5C: <i>Sans and Papyrus & Undyne and Alphys</i></a></li></small>
				<small><li id="c"><a href="motifs-5d.html" target="self">Part 5D: <i>Susie, Noelle, & Berdly</i></a> - <a href="motifs-5e.html" target="self">Part 5E: <i>Mettaton & Spamton</i></a> - <a href="motifs-5f.html" target="self">Part 5F: <i>Lancer, Rouxls Kaard, & King</i></a></li></small>
				<li id="b"><a href="motifs-6.html" target="self">Part 6: <i>Minor Motifs and Miscellaneae</i></a> - <a href="motifs-7.html" target="self">Part 7: <i>Welcome To The Underground</i></a></li>
				<li id="p"><a href="motifs-8.html" target="self">Part 8: <i>The Dark World?</i></a> - <a href="motifs-9.html" target="self">Part 9: <i>The Magic of Determination</i></a> - <a href="motifs-10.html" target="self">Part 10: <i>THE DARK</i></a></li>
			</ul>
			<h4><a href="index.html">Back to Home</a></h4>
		`;
		var mainNavContent = mainNavTemplate.replace(mainNavFind, mainNavReplace);
		document.getElementById("main_nav").innerHTML = mainNavContent;
		-- List Nav --
		var listNavPrev = pageList[0][Math.round(thisPageIndex - 1)];
		var listNavNext = pageList[0][Math.round(thisPageIndex + 1)];
		var listNavTemplate = [
			`<h3><a href="#header">Back to Top</a> - <a href="index.html">Back to Home</a></h3><span class="blockElementSmall"><a href="motifs-0.html" target="self">First</a></span><span class="blockElementSmall"><a href="motifs-`,
			`.html" target="self">Prev.</a></span><span class="blockElementSmall">`,
			`</span><span class="blockElementSmall"><a href="motifs-`,
			`.html" target="self">Next</a></span><span class="blockElementSmall"><a href="motifs-10.html" target="self">Last</a></span>`
		];
		var listNavContent = (listNavTemplate[0] + listNavPrev + listNavTemplate[1] + thisPageTitle + listNavTemplate[2] + listNavNext + listNavTemplate[3]);
		document.getElementById("list_nav").innerHTML = listNavContent;
	*/
};