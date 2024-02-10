function emphasis()
{
	/* Overview */
	/*
		Make a <b>, <em>, or <strong> element with a chosen animSubType property to determine the animation that plays for the element. This is done in JS to be able to give iterable values of animation-delay to each individual letter without manually setting it all up, allowing for easy access to complicated animations.
		
		If an element has an animSubType of shake, it's tag doesn't really matter, but it should be <b> for the sake of consistancy and saving space.
		
		Table of Tags and animSubTypes:
			Tag      | ="wave"      | ="rainbow"          | ="shake" | ="float"    
			---------+--------------+---------------------+----------+-------------
			<b>      | Single Wave  | Rainbow             | Shake    | Jump        
			<em>     | Weak Waves   | Rainbow Wave        | Shake    | Float       
			<strong> | Strong Waves | Strong Rainbow Wave | Shake    | Strong Float
	*/
	
	/* Initialization*/
	let i = 0; /* Iterates through values to generate offsets to make convincing wave patterns */
	let iMin = 0; /* i will underflow if it's below this. Should always be 0, but can hypothetically be other things too, I guess? Variable for future-proofing. */
	let iMax = 0 ; /* i will overflow if it's above this. Should be equal to (animation length in seconds)*(100/iScale) - iDec */
	let iDec = 0; /* How much i is decreased by as it's iterated on */
	let iScale = 0; /* How much time a 'unit' of i is worth (in increments of 0.01*iScale seconds). This value, along with iDec, can be used to determine the exact amount of time between each successive letter's animation, where the time difference equals iDec * iScale hundredths of a second. */
	let isHTML = false; /* Keeps track of whether or not the current letter being processed is HTML or text. */
	let newText = ``; /* The 'output' that the element's .innerHTML is set to */
	let animType = ""; /* Keeps track of the animation that the current element should have */
	
	/* The process of adding an animated letter to the output */
	function addLetter(letter)
	{
		/* When a < or > is encountered, they toggle the isHTML boolean, and aren't given an animation. While isHTML is true, all letters aren't given an animation. This preserves the HTML inside of the emphasis element, while still being able to add more. */
		if (letter == `<`)
		{
			isHTML = true;
		};
		if (letter == `>`)
		{
			isHTML = false;
		};
		if (letter == `<` || isHTML == true || letter == `>`)
		{
			newText += letter;
		}
		else
		{
			/* Iterates on i, unless the animation is Shake, or the animation is BounceWave and the letter is space. This means that spaces don't "take up" the iterated value of i, which helps make the BounceWave animation look more physical and grounded. */
			if (animType != "Shake0" && animType != "Shake1" && animType != "Shake2" && animType != "Shake3" && !(animType == "BounceWave" && letter == ` `))
			{
				i = Math.round(i - iDec);
			};
			if (i < iMin)
			{
				i = iMax;
			};
			if (i > iMax)
			{
				i = iMin;
			};
			/* Gives each letter a span, and classes of animType[animType] and animOffset[i]x[iScale] */
			newText += `<span class="animType` + animType + ` animOffset` + i + `x` + iScale + `">` + letter + `</span>`;
		};
	};
	
	// The process of deciding how/if to add letters and animations
	function emphasize(elem)
	{
		/* Making sure the switch () statement doesn't fail */
		if (elem.hasAttribute("animSubType") == false)
		{
			elem.setAttribute("animSubType", "");
		};
		/* Depending on the animSubType value and the tag of the element in question, different values of iMin, iMax, iDec, and iScale are given, and the addLetter() function is called for each letter of the element's HTML. */
		switch (elem.attributes.animSubType.value)
		{
			default:
			case "wave":
				/* For wave type animations: */
				switch (elem.tagName)
				{
					default:
					case "B":
						animType = "BounceWave";
						iMin = 0;
						iMax = 24;
						iDec = 1;
						iScale = 10;
					break;
					
					case "EM":
						animType = "WeakWave";
						iMin = 0;
						iMax = 7;
						iDec = 1;
						iScale = 25;
					break;
					
					case "STRONG":
						animType = "StrongWave";
						iMin = 0;
						iMax = 8;
						iDec = 2;
						iScale = 10;
					break;
				};
				newText = ``;
				isHTML = false;
				for (let letter of elem.innerHTML.split(""))
				{
					addLetter(letter);
				};
				elem.innerHTML = newText;
			break;
			
			case "rainbow":
				switch (elem.tagName)
				{
					default:
					case "B":
						animType = "Rainbow";
						iMin = 0;
						iMax = 11;
						iDec = 1;
						iScale = 25;
					break;
					
					case "EM":
						animType = "RainbowWave";
						iMin = 0;
						iMax = 7;
						iDec = 1;
						iScale = 25;
					break;
					
					case "STRONG":
						animType = "RainbowStrongWave";
						iMin = 0;
						iMax = 8;
						iDec = 2;
						iScale = 10;
					break;
				};
				newText = ``;
				isHTML = false;
				for (let letter of elem.innerHTML.split(""))
				{
					addLetter(letter);
				};
				elem.innerHTML = newText;
			break;
			
			case "shake":
				iScale = 25;
				newText = ``;
				isHTML = false;
				for (let letter of elem.innerHTML.split(""))
				{
					/* When an element is give an animSubType of shake, it's given a random Shake[#] animation, which have different lengths. Since each letter has a randomized value of i (such that iMax and iMin are unneeded), iMax is cannibalized to represent the length of the chosen animation (in terms of [iScale]-hundredths of a second, minus 1). i uses this as a max value. */
					animType = "Shake" + Math.floor(Math.random() * 4);
					switch (animType)
					{
						default:
						case "Shake0":
							iMax = 19;
						break;
						
						case "Shake1":
						case "Shake2":
							iMax = 23;
						break;
						
						case "Shake3":
							iMax = 27;
						break;
					};
					i = Math.floor(Math.random() * iMax);
					addLetter(letter);
				};
				elem.innerHTML = newText;
			break;
			
			case "float":
				/* float animations affect the entire word at once, eliminating the need to add spans for each letter (and by extension, for any more JS) */
			break;
		};
	};
	
	/* Making the code of emphasize() into a function allows for elements with different tags to use the same code in their for-loops (you can't iterate through multiple arrays with a single for-loop). */
	for (let elem of document.getElementsByTagName("b"))
	{
		emphasize(elem);
	};
	for (let elem of document.getElementsByTagName("em"))
	{
		emphasize(elem);
	};
	for (let elem of document.getElementsByTagName("strong"))
	{
		emphasize(elem);
	};
};