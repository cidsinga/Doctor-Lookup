import { DoctorList } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#button').click(function(event){
    event.preventDefault;
    const condish = $('#medCondition').val();
    $('#medCondition').val('');
    (async () => {
      let doctorList = new DoctorList();
      const response = await doctorList.getDocByCondish(condish); // replace doc
      getElements(response);
    })();
    // if(this.value !=true){
    //   $('#showDocName').text('No Results Found');
    // } else {
      function getElements(response){
        $('#showDocName').text(`Doctors that treat ${condish}:
          ${response.doctorList.meta.data.practices[4]}`);
      }


})
});
