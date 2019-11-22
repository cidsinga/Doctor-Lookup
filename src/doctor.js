export function DoctorList{
  async getDocByCondish(condish) {
    try {
      let response = await fetch...
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {

    }
  }
}
