import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : '提出する';
  }


  render() {
    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
