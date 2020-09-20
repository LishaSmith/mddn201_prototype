function Card(name, age, political, fear, aspiration, interests){
	this.name="";
	this.age="";
	this.political="";
	this.fear="";
	this.aspiration="";
	this.interests="";
	this.info=name + " " + age + " " + political;
	this.setName=function(newName){
		this.name=newName;
	}
	this.setAge=function(newAge){
		this.age=newAge;
	}
	this.setPolitical=function(newPolitical){
		this.political=newPolitical;
	}
	this.setFear=function(newFear){
		this.fear=newFear;
	}
	this.setAspiration=function(newAspiration){
		this.aspiration=newAspiration;
	}
	this.setInterests=function(newInterests){
		this.interests=newInterests;
	}
	this.showInfo=function(){
		
	}

}

function userCard(){
	var infoCard= new Card();
	infoCard.setName(document.getElementById('nameInput').value);
	infoCard.setAge(document.getElementById('ageInput').value);
	infoCard.setPolitical(document.getElementById('politicalInput').value);
	infoCard.setFear(document.getElementById('fearInput').value);
	infoCard.setAspiration(document.getElementById('aspirationInput').value);
	infoCard.setInterests(document.getElementById('interestInput').value);
	infoCard.showInfo();

	document.getElementById('nameInput').value = "";
	document.getElementById('ageInput').value = "";
	document.getElementById('politicalInput').value = "";
	document.getElementById('fearInput').value = "";
	document.getElementById('aspirationInput').value = "";
	document.getElementById('interestInput').value = "";

}
