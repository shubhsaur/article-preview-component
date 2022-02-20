const avatarActive = document.querySelector(".avatar-active");
const shareButton = document.querySelector(".avatar-share");

shareButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (avatarActive.style.display == "flex") {
		avatarActive.style.display = "none";
	}
    
    else if(avatarActive.style.display == "flex"){
        
    }
    else {
		avatarActive.style.display = "flex";
	}


}
