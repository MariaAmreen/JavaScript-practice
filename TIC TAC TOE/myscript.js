let sign = "X";

function printx(number)
{
	let cell = document.getElementById("r"+number);
	if(cell.innerHTML == "")
		{
			cell.innerHTML = sign;
			winner();
			changeSign();
		}
}
function changeSign()
{
	if(sign == "X")
	{
		sign = "O";
	}
	else
	{
		sign = "X";
	}
}
function getBox(no)
{
	return document.getElementById("r"+no).innerHTML;	
}
function checkMove(a,b,c,m)
{
	console.log(m);
	if(getBox(a) == m && getBox(b) == m && getBox(c) == m)
	{
		return true;
	}
	else{
		return false;
	}
}
//master function
function winner()
{
	if(checkMove(1,2,3,sign) || checkMove (4,5,6,sign) || checkMove (7,8,9,sign)
		|| checkMove(1,4,7,sign) || checkMove (2,5,8,sign) || checkMove (3,6,9,sign)
		|| checkMove(1,5,9,sign) || checkMove (7,5,3,sign))
	{
		alert (sign+" has won the game");
		setTimeout(function()
		{
			for(let i=1; i<=9; i++)
			{
			document.getElementById("r"+i).innerHTML="";
			}
		},1000)
	}
	else
	{
		if(getBox(1)!=""&&getBox(2)!="" && getBox(3)!=""
			&& getBox(4)!=""&&getBox(5)!="" && getBox(6)!=""
			&& getBox(7)!=""&&getBox(8)!="" && getBox(9)!="")
		{
			alert ("its a tie");
		}
	}
}
// Restart Gmae Button
var restart = document.querySelector("#b");
//Grabs all the Squares
var squares = document.querySelectorAll('td');
//Clear all the squares
function clearBoard()
{
	for (var i=0; i<squares.length; i++)
	{
		squares[i].textContent = '';
	}
}
restart.addEventListener('click', clearBoard);












