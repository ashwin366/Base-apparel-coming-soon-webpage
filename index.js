const button = document.querySelector(".btn");
const emailInput = document.querySelector(".item1__email-input");
const pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

button.addEventListener("click",function(){
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value)){
		emailInput.classList.remove("input--error");
		document.querySelector(".error").classList.add("error--hidden");
		this.classList.toggle('btn--active');
		emailInput.classList.toggle('input--active');
		setTimeout(function(){
			document.querySelector(".item1__form").submit();
			alert("Thank you for subscribing.");
		},1000);
	}else{
		document.querySelector(".error").classList.remove("error--hidden");
		emailInput.classList.add("input--error");
	}

});
