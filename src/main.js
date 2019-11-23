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
        let arr = [];
        for (var i = 0; i < response.length; i++) {
          arr.push(response.data[i].profile.first_name);
        }
        let docList = '';
          for (var j = 0; j < arr.length; j++) {
            doclist += '<li>' + arr[j] + '<li>';
            console.log(docList);
        }


        $('#showDocName').text(`Doctors that treat ${condish}:
          ${arr}
          ${response.data[1].profile.first_name}
          ${response.data[1].profile.last_name}`);

      };


  })
});
