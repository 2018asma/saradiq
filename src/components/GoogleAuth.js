import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    console.log(5);
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "595857126140-chevcgsb4mg97ocmpha7tspn0b96targ.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      console.log(isSignedIn)
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      console.log(isSignedIn)
      this.props.signOut();
    }
  };

  onSignIn = () => {
  return  this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };

  renderLogin() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="btn btn-brown">
          <i className="fa fa-google ml-2" />
          تسجيل خروج
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="btn btn-brown">
          <i className="fa fa-google ml-2" />
          تسجيل دخول
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderLogin()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GoogleAuth);
