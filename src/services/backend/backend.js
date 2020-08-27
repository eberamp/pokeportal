
const backend = {
  simulatedRequestToValidate: function(invitation){
    if (invitation === 'eNuc1us'){
      return {
        "ok": true,
        "pokemon": {
          "id": 245,
          "name": "suicune"
        }
      }
    } else if (invitation === 'e71n0gArd'){
      return {
        "ok": true,
        "pokemon": {
          "id": 149,
          "name": "dragonite"
        }
      }
    } else {
      return { "ok": false }
    }
  }
}

export { backend };