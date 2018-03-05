import React from 'react';
import ReactDOM from 'react-dom';

class Demos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="demosPage">
        <div className="grid-container">
          <div className="grid-x align-center">
            <div id="demoRoot" className="cell small-12 medium-8">
              <article>
                <section>
                  <h3>Sign in</h3>
                  <form id='loginForm'>
                    <input id='username' type='text' required autoComplete='off' />
                    <label>Username</label>
                    <input id='password' type='password' required autoComplete='off' />
                    <label>Password</label>
                    <div className="formContainer">
                      <button id='submitButton' type='button'>Next</button>
                    </div>
                  </form>
                </section>
              </article>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Demos;
