function poppupPositionFix()
{
	for (let poppupImage of document.getElementsByClassName("poppupImage640"))
	{
		if (poppupImage.getBoundingClientRect().x < 0)
		{
			poppupImage.style.left = `calc(50% - ` + (poppupImage.getBoundingClientRect().x + 322 - 20 - 2 - 10) + `px)`;
		}
	};
};