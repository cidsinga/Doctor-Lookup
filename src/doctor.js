export class DoctorList{
  async getDocByCondish(condish) {
    try {
      // let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?skip=0&limit=10&user_key=${process.env.API_KEY}&location=or-portland&query=${condish}`);
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?skip=0&limit=10&user_key=2c5fc699c1986399749f4c1223f41d0d&location=or-portland&query=${condish}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
