class Weather {
  constructor(city, state){
    this.apiKey = '99dfe35fcb7de1ee'; // Changer la clé de l'api pour une api qui fonctionne
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}.${this.city}.json`); // Changer l'url pour une url d'appli qui fonction en ajoutant les modifications dynamiques
  
    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Changer weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}