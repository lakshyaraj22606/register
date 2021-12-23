import React from 'react';
class Register extends React.Component{
    render(){
        return(
        <div>

<div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>EVENT</span>
            <span>REGISTRATION</span>
          </div>
          <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="TITLE"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="DESCRIPTION"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" type="date" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" type="time" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="VENUE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">REGISTER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
        );
    }
}

export default Register;