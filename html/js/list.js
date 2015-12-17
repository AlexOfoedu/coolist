function bigBomba()
{
	
	xY();
	changeColor();

};

function xY()
{
	
}

function changeColor()
{

	var list = document.getElementById("listicles_top").children;

	var i;

	for (i = 0; i < list.length; i++)
	{
		list[i].addEventListener("click", list[i].wZ(this));
	}

}

function wZ(x)
{
	x.style.color = "#000000";
}

/*
	function checkItem()
	{

	var listX = document.getElementById("listicles_top").children;
	var i;

		for (i = 0; i < listX.length; i++)
		{
			listX[i].addEventListener("click", alert(listX[i]));
		};
	};

	function addItem()
	{
		document.getElementById("btn_add").addEventListener("click", alert("YO!"));
	};

};
*/
/*
function itemColorChange(theItem)
{

	theItem.style.color = "#000000";

};
*/