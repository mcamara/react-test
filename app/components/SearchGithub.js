import React from 'react';

class SearchGithub extends React.Component {
  getRef(ref) {
    this.usernameRef = ref;
  }

  handleSubmit(){
    var username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.context.router.push("/profile/" + username);
  }

  render() {
    return (
      <div className="col-xs-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-xs-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-xs-5">
            <button type="submit" className="btn btn-block btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SearchGithub.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SearchGithub;
