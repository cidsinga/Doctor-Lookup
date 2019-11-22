export class DoctorList{
  async getDocByCondish(condish) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?skip=0&limit=10&user_key=${process.env.API_KEY}&location=or-portland&query=${condish}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {

    }
  }
}
