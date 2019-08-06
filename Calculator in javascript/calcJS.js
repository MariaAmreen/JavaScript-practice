function calculator(){		
		screen();
		calcButtons();
		addButton();
		minusButton();
		multiplyButton();
		divisionButton();
		pointButton();
		moduluButton();
		equalButton();
		clearButton();	
	}
	function screen(){
		var sc = document.createElement("INPUT");
		sc.setAttribute("type", "text");
		sc.setAttribute("name", "answer");
		sc.setAttribute("class", "form-control");
		sc.setAttribute("placeholder", "0");
		sc.setAttribute("id","input")
		document.getElementById("screen").appendChild(sc);
	}	
	function insertInput(value){
		document.getElementById("input").value += value;
	}
	function replaceInput(value){
		document.getElementById("input").value = value;
	}
	 
	function calcButtons(){
		for(var i=9; i>=0; i--){
			var x = document.createElement("input");
			x.setAttribute("type", "button");
			x.setAttribute("value", i);
			x.setAttribute("name", 'btn'+i);
			x.setAttribute("id", 'id-'+i);
			x.addEventListener("click", function (e){
					insertInput(e.target.value);});
			document.getElementById("numericKeys").appendChild(x);
		}
	}

	function addButton(){
	var a = document.createElement("input");
	a.setAttribute("type", "button");
	a.setAttribute("value", "+");
	a.addEventListener("click", function (e) {
					insertInput(e.target.value);});
	document.getElementById("Operators").appendChild(a);
	}

	function minusButton(){
	var a = document.createElement("input");
	a.setAttribute("type", "button");
	a.setAttribute("value", "-");
	a.addEventListener("click", function (e) {
					insertInput(e.target.value);});
	document.getElementById("Operators").appendChild(a);
	}

	function multiplyButton(){
	var a = document.createElement("input");
	a.setAttribute("type", "button");
	a.setAttribute("value", "*");
	a.addEventListener("click", function (e) {
					insertInput(e.target.value);});
	document.getElementById("Operators").appendChild(a);
	}

	function divisionButton(){
	var a = document.createElement("input");
	a.setAttribute("type", "button");
	a.setAttribute("value", "/");
	a.addEventListener("click", function (e) {
					insertInput(e.target.value);});
	document.getElementById("Operators").appendChild(a);
	}

	function pointButton(){
	var a = document.createElement("input");
	a.setAttribute("type", "button");
	a.setAttribute("value", ".");
	a.addEventListener("click", function (e) {
					insertInput(e.target.value);});
	document.getElementById("Operators").appendChild(a);
	}

	function moduluButton(){
	var a = document.createElement("input");
	a.setAttribute("type", "button");
	a.setAttribute("value", "%");
	a.addEventListener("click", function (e) {
					insertInput(e.target.value);});
	document.getElementById("Operators").appendChild(a);
	}

	function equalButton(){
	var a = document.createElement("input");
	a.setAttribute("type", "button");
	a.setAttribute("class", "eql");
	a.setAttribute("value", "=");
	a.addEventListener("click", function (e)
	{
		replaceInput(eval(document.getElementById("input").value));
	});
					
	document.getElementById("Operators").appendChild(a);
	}
	
	function clearButton(){
	var cl = document.createElement("input");
	cl.setAttribute("type", "button");
	cl.setAttribute("class", "clr");
	cl.setAttribute("value", "C");
	cl.addEventListener("click", function (e)
	{
		replaceInput("");
	});
	document.getElementById("Operators").appendChild(cl);
	}
		