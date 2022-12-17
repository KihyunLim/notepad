import { Amplify, Auth }  from "aws-amplify";
import { CognitoUser } from 'amazon-cognito-identity-js';
import { ITokenInfo } from '@/src/typeDefinition';

class AwsAmplify {
  // private email: string;
  // private password: string;
  
  constructor() {
    // this.email = '';
    // this.password = '';
    this.init();
  }

  init() {
    console.log('init AwsAmplify!!');
    Amplify.configure({
      aws_cognito_region: process.env.REGION,
      aws_user_pools_id: process.env.COGNITO_USER_POOL_ID,
      aws_user_pools_web_client_id: process.env.COGNITO_APP_CLIENT_ID,
    });
  }

  async signIn(email: string, password: string) {
    let response:ITokenInfo = {
      iat: 0,
      exp: 0,
      available: false,
    };

    /**
     * signIn
     * return : CognitoUser
     */
    try {
      console.log(email, password);
      let responseSignIn = await Auth.signIn(email, password);
      console.log(responseSignIn);

      if (responseSignIn.challengeName === 'NEW_PASSWORD_REQUIRED') {
        responseSignIn = await Auth.completeNewPassword(responseSignIn, process.env.COGNITO_NEW_PASSWORD as string);
        console.log('responseSignIn NewPassword : ', responseSignIn);
      }

      response = await this.getTokenInfo();
      console.log('token state :', response);
    } catch(error) {
      console.log(error);
    }

    return response;

    /**
     * currentCredentials
     * return : No Cognito Identity pool provided for unauthenticated access
     */
    /* try {
      const temp1 = await Auth.currentCredentials();
      console.log('currentCredentials : ', temp1);
    } catch(error) {
      console.log('currentCredentials e : ', error);
    } */

    /**
     * currentSession
     * return : CognitoUserSession (accessToken, clockDrift, idToken, refreshToke)
     */
    /* try {
      const temp2 = await Auth.currentSession();
      console.log('currentSession : ', temp2);
    } catch(error) {
      console.log('currentSession e : ', error);
    } */

    /**
     * currentUserCredentials
     * return : No Cognito Identity pool provided for unauthenticated access
     */
    /* try {
      const temp3 = await Auth.currentUserCredentials();
      console.log('currentUserCredentials : ', temp3);
    } catch(error) {
      console.log('currentUserCredentials e : ', error);
    } */

    /**
     * currentUserInfo
     * return : attributes, id: undefined, username: "0f~~1f6-9~~f-4~~a-a~~6-c08~~~f36f"
     */
    /* try {
      const temp4 = await Auth.currentUserInfo();
      console.log('currentUserInfo : ', temp4);
    } catch(error) {
      console.log('currentUserInfo e : ', error);
    } */

    /**
     * currentAuthenticatedUser
     * return : CognitoUser
     */
    /* try {
      const temp5 = await Auth.currentAuthenticatedUser();
      console.log('currentAuthenticatedUser : ', temp5);
    } catch(error) {
      console.log('currentAuthenticatedUser e : ', error);
    } */
  }

  signOut() {
    Auth.signOut();
  }

  async getTokenInfo() {
    const result:ITokenInfo = {
      iat: 0,
      exp: 0,
      available: false,
    };

    try {
      const user = await Auth.currentAuthenticatedUser();

      if (user) {
        console.log('authenticated user : ', user);

        result.iat = user.signInUserSession.accessToken.payload.iat * 1000;
        result.exp = user.signInUserSession.accessToken.payload.exp * 1000;
        if (result.exp > (new Date()).getTime()) {
          result.available = true;
        }
      } else {
        throw new Error('unauthenticated user!!');
      }
    } catch (error) {
      console.error(error);
    }

    return result;
  }
}

export const awsAmplify = new AwsAmplify();

/**
 * 나중에 라우터에서 로그인 여부 확인
 * https://github.com/mubbashir10/aws-cognito-react-auth
 */
/* 
import React from "react";
import { Auth } from "aws-amplify";
import { Route, Redirect } from "react-router-dom";

interface Props {
  component: React.FC;
}
const ProtectedRoute: React.FC<Props> = ({ component }) => {
  const [isAuthenticated, setLoggedIn] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      let user = null;

      try {
        user = await Auth.currentAuthenticatedUser();
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (e) {
        setLoggedIn(false);
      }
    })();
  });

  return (
    <Route
      render={(props) =>
        isAuthenticated ? (
          React.createElement(component)
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default ProtectedRoute;
 */