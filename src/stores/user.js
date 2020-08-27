
// Fake "store" or logical localstore to keep the user data
// Of course "const" to avoid reasiging the store
// and the object atributes are only accessed through the interface provided in the return section

const userStore = (() => {

	let id = null;
	let name = "";
	let invitationUsed = "";
	let authenticated = false;
	let pokemon = null;
	let favorites = [];
	
	function getId(){
		return id;
	}

	function IsAuthenticated(){
		return authenticated;
	}

	function setAuthenticated(value){
		authenticated = value;
	}

	function setInvitation(invitation){
		invitationUsed = invitation;
	}

	function getInvitation(){
		return invitationUsed;
	}

	function hasInvitation(){
		return invitationUsed.length > 0;
	}

	function setAssignedPokemon(aPokemon){
		pokemon = aPokemon;
	}

	function getAssignedPokemon(){
		return pokemon;
	}

	function saveToFavorites(pokemonId){
		favorites = [...favorites, pokemonId];
	}

	function getFavorites(){
		return favorites;
	}

	function getFavoritesCount(){
		return favorites.length;
	}


	return {
		getId,

		setAuthenticated,
		IsAuthenticated,

		setInvitation,
		getInvitation,
		hasInvitation,

		setAssignedPokemon,
		getAssignedPokemon,

		saveToFavorites,
		getFavorites,
		getFavoritesCount
	}

})();

export { userStore };

