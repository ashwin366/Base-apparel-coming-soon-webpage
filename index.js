const button = document.querySelector(".btn");

button.addEventListener("click",function(){
	this.classList.toggle('btn--active');
	setTimeout(function(){
		document.querySelector(".item1__form").submit();
	},550);

});