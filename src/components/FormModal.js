import React from 'react'

class FormModal extends React.Component {
    render() {
    const modal = this.props.showModal ? <div>Hello</div> : null;
      return (
        <div>
          {modal}
        </div>
      );
    }
  }
  
  export default FormModal;