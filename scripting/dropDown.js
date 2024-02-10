function dropDown()
{
	/* To make a drop down box, format like so: */
	/*
		<div id="[ID]" class="dropDownContainer" dropDownBoxScroll="" dropDownBoxDefault="" dropDownBoxSize="">
			
			<button id="[ID]ButtonTop" class="dropDownButtonTop">
				Lorem ipsum docet dolor amet.
				(<span id="[ID]ToggleText" class="dropDownToggleText">Click to Expand/Contract</span>)
			</button>
			
			<div id="[ID]Content" class="dropDownContent">
				Lorem ipsum docet dolor amet.
			</div>
			
			<button id="[ID]ButtonBottom" class="dropDownButtonBottom">
				Lorem ipsum docet dolor amet.
				(Click to Contract)
			</button>
			
		</div>
	*/
	/*
		The container's id attribute should be unique, and used for all functional elements involved (in place of [ID]).
		The container's dropDownBoxScroll attribute ("parent", "container", "buttonTop", "none") controls where the screen scrolls to when it's expanded or contracted.
		The container's dropDownBoxDefault attribute ("open", "closed", "openOnLink") controls if the content is hidden by default, if it's revealed by default, or if it's revealed by default when linked to. (CSS)
		The container's dropDownBoxSize attribute ("100%", "80%", "50%") controls the width of the container and it's contents. (CSS)
	*/
	
	for (let container of document.getElementsByClassName("dropDownContainer"))
	{
		/* Define functional elements */
		let buttonTop = document.getElementById(container.id + "ButtonTop");
		let toggleText = document.getElementById(container.id + "ToggleText");
		let content = document.getElementById(container.id + "Content");
		let buttonBottom = document.getElementById(container.id + "ButtonBottom");
		/* The top button toggles whether or not the content and bottom button appear, and scrolls the screen to the value of the container's dropDownBoxScroll attribute */
		buttonTop.addEventListener("click", function()
		{
			if (getComputedStyle(content).display == "block")
			{
				buttonTop.style.borderWidth = "0px";
				content.style.display = "none";
				buttonBottom.style.display = "none";
				toggleText.textContent = "Click to Expand";
			}
			else
			{
				buttonTop.style.borderWidth = "1px";
				content.style.display = "block";
				buttonBottom.style.display = "block";
				toggleText.textContent = "Click to Contract";
			}
			switch (container.attributes.dropDownBoxScroll.value)
			{
				case "grandParent":
					container.parentNode.parentNode.scrollIntoView();
				break;
				
				case "parent":
					container.parentNode.scrollIntoView();
				break;
				
				case "container":
					container.scrollIntoView();
				break;
				
				case "buttonTop":
					buttonTop.scrollIntoView();
				break;
				
				default:
				case "none":
					
				break;
			};
		});
		/* The bottom button only appears when the content does, so it only hides it all (and scrolls the screen) */
		buttonBottom.addEventListener("click", function()
		{
			buttonTop.style.borderWidth = "0px";
			content.style.display = "none";
			buttonBottom.style.display = "none";
			toggleText.textContent = "Click to Expand";
			switch (container.attributes.dropDownBoxScroll.value)
			{
				case "grandParent":
					container.parentNode.parentNode.scrollIntoView();
				break;
				
				case "parent":
					container.parentNode.scrollIntoView();
				break;
				
				case "container":
					container.scrollIntoView();
				break;
				
				case "buttonTop":
					buttonTop.scrollIntoView();
				break;
				
				default:
				case "none":
					
				break;
			};
		});
	};
};