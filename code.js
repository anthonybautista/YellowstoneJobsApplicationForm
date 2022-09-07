let empCount = 1;
let eduCount = 1;

function addEmp() {
    empCount++;
    $("#empTable").append(
        `<tr>
            <td colspan="2"><hr></td>
          </tr>
          <tr>
            <td colspan="2"><hr></td>
          </tr>
          <tr>
            <td colspan="2"><b>Employer #${empCount}</b></td>
          </tr>
          <tr>
            <td colspan="2"><b>Employer Name</b>
              <input name="Employer_${empCount}_Name" maxlength="30" size="30" type="text"></td>
          </tr>
          <tr>
            <td colspan="2"><b>Street Address or PO Box Number </b>
              <input name="Employer_${empCount}_Street" maxlength="30" size="30" type="text"></td>
          </tr>
          <tr>
            <td colspan="2"><b>City
              <input name="Employer_${empCount}_City" maxlength="30" size="30" type="text">
              &nbsp;&nbsp;
              State</b>
              <select name="Employer_${empCount}_State" size="1">
                <option selected="selected" value=""> </option>
                <option>AL </option>
                <option>AK </option>
                <option>AZ </option>
                <option>AR </option>
                <option>CA </option>
                <option>CO </option>
                <option>CT </option>
                <option>DE </option>
                <option>DC </option>
                <option>FL </option>
                <option>GA </option>
                <option>HI </option>
                <option>ID </option>
                <option>IL </option>
                <option>IN </option>
                <option>IA </option>
                <option>KS </option>
                <option>KY </option>
                <option>LA </option>
                <option>ME </option>
                <option>MD </option>
                <option>MA </option>
                <option>MI </option>
                <option>MN </option>
                <option>MS </option>
                <option>MO </option>
                <option>MT </option>
                <option>NE </option>
                <option>NV </option>
                <option>NH </option>
                <option>NJ </option>
                <option>NM </option>
                <option>NY </option>
                <option>NC </option>
                <option>ND </option>
                <option>OH </option>
                <option>OK </option>
                <option>OR </option>
                <option>PA </option>
                <option>PR </option>
                <option>RI </option>
                <option>SC </option>
                <option>SD </option>
                <option>TN </option>
                <option>TX </option>
                <option>UT </option>
                <option>VT </option>
                <option>VA </option>
                <option>WA </option>
                <option>WV </option>
                <option>WI </option>
                <option>WY </option>
              </select>
              <b>Zip Code</b>
              <input name="Employer_${empCount}_Zip" maxlength="10" size="10" type="text"></td>
          </tr>
          <tr>
            <td colspan="2"><b>Country</b>
              <select name="Employer_${empCount}_Country" size="1">
                <option selected="selected" value=""> </option>
                <option value="US">United States </option>
                <option value="AE">United Arab Emirates </option>
                <option value="AF">Afghanistan </option>
                <option value="AG">Antigua and Barbuda </option>
                <option value="AL">Albania </option>
                <option value="AM">Armenia </option>
                <option value="AM">Zambia </option>
                <option value="AN">Netherland Antilles </option>
                <option value="AQ">Antarctica </option>
                <option value="AR">Argentina </option>
                <option value="AS">American Samoa </option>
                <option value="AT">Austria </option>
                <option value="AU">Australia </option>
                <option value="AW">Aruba </option>
                <option value="AZ">Azerbaidjan </option>
                <option value="BA">Bosnia-Herzegovina </option>
                <option value="BB">Barbados </option>
                <option value="BD">Bangladesh </option>
                <option value="BE">Belgium </option>
                <option value="BG">Bulgaria </option>
                <option value="BH">Bahrain </option>
                <option value="BM">Bermuda </option>
                <option value="BO">Bolivia </option>
                <option value="BR">Brazil </option>
                <option value="BS">Bahamas </option>
                <option value="BW">Botswana </option>
                <option value="BY">Belarus </option>
                <option value="BZ">Belize </option>
                <option value="CA">Canada </option>
                <option value="CG">Congo </option>
                <option value="CH">Switzerland </option>
                <option value="CL">Chile </option>
                <option value="CM">Cameroon </option>
                <option value="CN">China </option>
                <option value="CO">Columbia </option>
                <option value="CR">Costa Rica </option>
                <option value="CS">Former Czechoslovakia </option>
                <option value="CZ">Czech Republic </option>
                <option value="DE">Germany </option>
                <option value="DK">Denmark </option>
                <option value="DM">Dominica </option>
                <option value="DO">Dominican Republic </option>
                <option value="DZ">Algeria </option>
                <option value="EC">Ecuador </option>
                <option value="EE">Estonia </option>
                <option value="EG">Egypt </option>
                <option value="ES">Spain </option>
                <option value="ET">Ethiopia </option>
                <option value="FI">Finland </option>
                <option value="FJ">Fiji </option>
                <option value="FK">Falkland Islands </option>
                <option value="FR">France </option>
                <option value="GB">Great Britain </option>
                <option value="GD">Grenada </option>
                <option value="GE">Georgia </option>
                <option value="GF">French Guyana </option>
                <option value="GH">Ghana </option>
                <option value="GL">Greenland </option>
                <option value="GN">Guinea </option>
                <option value="GR">Greece </option>
                <option value="GT">Guatamala </option>
                <option value="GU">Guam (USA) </option>
                <option value="GY">Guyana </option>
                <option value="HK">Hong Kong </option>
                <option value="HN">Honduras </option>
                <option value="HR">Croatia </option>
                <option value="HT">Haiti </option>
                <option value="HU">Hungary </option>
                <option value="ID">Indonesia </option>
                <option value="IE">Ireland </option>
                <option value="IL">Israel </option>
                <option value="IN">India </option>
                <option value="IQ">Iraq </option>
                <option value="IR">Iran </option>
                <option value="IS">Iceland </option>
                <option value="IT">Italy </option>
                <option value="JM">Jamaica </option>
                <option value="JO">Jordan </option>
                <option value="JP">Japan </option>
                <option value="KE">Kenya </option>
                <option value="KP">North Korea </option>
                <option value="KR">South Korea </option>
                <option value="KW">Kuwait </option>
                <option value="KY">Cayman Islands </option>
                <option value="KZ">Kazakhstan </option>
                <option value="LA">Laos </option>
                <option value="LB">Lebanon </option>
                <option value="LC">St. Lucia </option>
                <option value="LI">Liechtenstein </option>
                <option value="LK">Sri Lanka </option>
                <option value="LR">Liberia </option>
                <option value="LT">Lithuania </option>
                <option value="LU">Luxembourg </option>
                <option value="LV">Latvia </option>
                <option value="LY">Libya </option>
                <option value="MA">Morocco </option>
                <option value="MC">Monaco </option>
                <option value="MD">Moldavia </option>
                <option value="MG">Madagascar </option>
                <option value="YU">Macedonia </option>
                <option value="MN">Mongolia </option>
                <option value="MQ">Martinique (French) </option>
                <option value="MS">Montserrat </option>
                <option value="MT">Malta </option>
                <option value="MX">Mexico </option>
                <option value="MY">Malaysia </option>
                <option value="MZ">Mozambique </option>
                <option value="NA">Namibia </option>
                <option value="NG">Nigeria </option>
                <option value="NI">Nicaragua </option>
                <option value="NL">Netherlands </option>
                <option value="NO">Norway </option>
                <option value="NP">Nepal </option>
                <option value="NZ">New Zealand </option>
                <option value="PA">Panama </option>
                <option value="PE">Peru </option>
                <option value="PH">Phillipines </option>
                <option value="PK">Pakistan </option>
                <option value="PL">Poland </option>
                <option value="PR">Puerto Rico </option>
                <option value="PT">Portugal </option>
                <option value="PY">Paraguay </option>
                <option value="QA">Qatar </option>
                <option value="RO">Romania </option>
                <option value="RU">Russian Federation </option>
                <option value="RW">Rwanda </option>
                <option value="SA">Saudi Arabia </option>
                <option value="RS">Serbia </option>
                <option value="YU">Serbia and Montenegro </option>
                <option value="SD">Sudan </option>
                <option value="SE">Sweden </option>
                <option value="SG">Singapore </option>
                <option value="SI">Slovenia </option>
                <option value="SK">Slovak Republic </option>
                <option value="SN">Senegal </option>
                <option value="SO">Somalia </option>
                <option value="SR">Suriname </option>
                <option value="SV">El Salvador </option>
                <option value="SY">Syria </option>
                <option value="SZ">Swaziland </option>
                <option value="TC">Turks and Caicos Islands </option>
                <option value="TD">Chad </option>
                <option value="TH">Thailand </option>
                <option value="TJ">Tadjikistan </option>
                <option value="TM">Turkmenistan </option>
                <option value="TN">Tunisia </option>
                <option value="TR">Turkey </option>
                <option value="TT">Trinidad and Tabago </option>
                <option value="TW">Taiwan </option>
                <option value="TZ">Tanzania </option>
                <option value="UA">Ukraine </option>
                <option value="UG">Uganda </option>
                <option value="GB">United Kingdom </option>
                <option value="UY">Uruguay </option>
                <option value="UZ">Uzbekistan </option>
                <option value="VA">Vatican City </option>
                <option value="VC">St. Vincent &amp; Grenadines </option>
                <option value="VE">Venezuala </option>
                <option value="VG">Virgin Islands (British) </option>
                <option value="VI">Virgin Islands (USA) </option>
                <option value="VN">Vietnam </option>
                <option value="WS">Samoa </option>
                <option value="YE">Yemen </option>
                <option value="ZA">South Africa </option>
                <option value="ZR">Zaire </option>
                <option value="ZW">Zimbabwe </option>
              </select>
              <b>Telephone</b>
              <input name="Employer_${empCount}_Telephone" maxlength="20" size="20" type="text"></td>
          </tr>
          <tr>
            <td colspan="2"><b>Position</b>
              <input name="Employer_${empCount}_Position" maxlength="17" size="17" type="text"></td>
          </tr>
          <tr>
            <td colspan="2"><b>Supervisor's Name and Title</b>
              <input name="Employer_${empCount}_Supervisor" maxlength="30" size="30" type="text"></td>
          </tr>
          <tr>
            <td colspan="2" ><b>Please enter dates as mm/dd/yyyy (example: 01/12/2009) &nbsp;&nbsp;<br>
              Start Date
              <input id="sd3" name="Employer_${empCount}_Start_Date" maxlength="10" size="10" type="text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              End Date</b>
              <input id="ed3" name="Employer_${empCount}_End_Date" maxlength="10" size="10" type="text"></td>
          </tr>
          <tr>
            <td colspan="2" ><b>May we contact this employer?
              Yes
              <input name="Employer_${empCount}_Contact" value="Y" type="radio">
              No</b>
              <input name="Employer_${empCount}_Contact" value="N" type="radio"></td>
          </tr>
          <tr>
            <td colspan="2"><b>Specific Duties</b>
              <input name="Employer_${empCount}_Duties" maxlength="50" size="50" type="text"></td>
          </tr>
          <tr>
            <td colspan="2"><b>Reason For Leaving</b>
              <input name="Employer_${empCount}_Reason_For_Leaving" maxlength="30" size="30" type="text"></td>
          </tr>`
    )
}

function addEdu() {
    eduCount++;
    $("#eduTable").append(
        `<tr>
            <td>
            <hr>
            <p class="fw-bold mb-0">Education #${eduCount}</p>
            <label class="col-5" for="School_${eduCount}_Name">Name of School</label>
            <input name="School_${eduCount}_Name" id="School_${eduCount}_Name" maxlength="17" size="17" type="text"><br>
            <label class="col-5"  for="School_${eduCount}_Location">Location</label>
            <input name="School_${eduCount}_Location" id="School_${eduCount}_Location" maxlength="17" size="17" type="text"><br>
            <label class="col-5"  for="School_${eduCount}_Degree_Received">Degree Received</label>
            <input name="School_${eduCount}_Degree_Received" id="School_${eduCount}_Degree_Received" maxlength="17" size="17" type="text"><br>
            <label class="col-5"  for="School_${eduCount}_Field_of_Study">Field of Study</label>
            <input name="School_${eduCount}_Field_of_Study" id="School_${eduCount}_Field_of_Study" maxlength="17" size="17" type="text"><br>
            <label class="col-5"  for="School_${eduCount}_Graduate">Graduate? (Y/N)</label>
            <input name="School_${eduCount}_Graduate" id="School_${eduCount}_Graduate" maxlength="1" size="1" onchange="javascript:this.value=this.value.toUpperCase();" type="text">
            </td>
          </tr>`
    )
}

$(function () {
    $("#addEmployer").on('click', function () {
        addEmp();
    });
    $("#removeEmployer").on('click', function () {
        if (empCount > 1) {
            empCount--;
            for( let i = 0; i < 13; i++ ) {
                $("#empTable").find("tr").last().remove();
            }
        }
    });

    $("#addEducation").on('click', function () {
        addEdu();
    });
    $("#removeEducation").on('click', function () {
        if (eduCount > 1) {
            eduCount--;
            $("#eduTable").find("tr").last().remove();
        }
    });
})