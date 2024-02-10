function prefabMailer()
{
	/*
		This function allows the 'mailing' of prefabricated content to specific areas.
		Give an element a class of "prefabSender"; the elements that receive the package will be the ones with an ID equal to the sender's prefabReceiver attribute.
		Seperate different receiver IDs with spaces.
		The prefabSenderType attribute (copy, cut) determines whether or not the sender keeps the package as well.
	*/
	let i = 0;
	for (let sender of document.getElementsByClassName("prefabSender"))
	{
		for (let receiver of sender.attributes.prefabReceiver.value.split(" "))
		{
			document.getElementById(receiver).innerHTML += sender.innerHTML;
		};
		if (sender.attributes.prefabSenderType.value == "cut")
		{
			i++;
		};
	};
	for (; i > 0;)
	{
		for (let target of document.getElementsByClassName("prefabSender"))
		{
			if (target.attributes.prefabSenderType.value == "cut")
			{
				target.remove();
				i--;
				break;
			};
		};
	};
};