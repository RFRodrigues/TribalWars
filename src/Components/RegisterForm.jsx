class RegisterForm extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          bsSize="small"
          aria-labelledby="contained-modal-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
