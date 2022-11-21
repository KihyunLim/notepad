import { Amplify, Auth }  from "aws-amplify";

export class AwsAmplify {
  // private email: string;
  // private password: string;
  
  constructor() {
    // this.email = '';
    // this.password = '';
    this.init();
  }

  init() {
    Amplify.configure({
      aws_cognito_region: process.env.REGION,
      aws_user_pools_id: process.env.COGNITO_USER_POOL_ID,
      aws_user_pools_web_client_id: process.env.COGNITO_APP_CLIENT_ID,
    });
  }

  async signin(email: string, password: string) {
    let result: any = undefined;

    /**
     * signIn
     * return : CognitoUser
     */
    try {
      result = await Auth.signIn(email, password);
      console.log(result);

      if (result.challengeName === 'NEW_PASSWORD_REQUIRED') {
        const resultNewPassword = await Auth.completeNewPassword(result, process.env.COGNITO_NEW_PASSWORD as string);
        console.log('resultNewPassword : ', resultNewPassword);
      }
    } catch(error) {
      console.log(error);
    }

    /**
     * currentCredentials
     * return : No Cognito Identity pool provided for unauthenticated access
     */
    try {
      const temp1 = await Auth.currentCredentials();
      console.log('currentCredentials : ', temp1);
    } catch(error) {
      console.log('currentCredentials e : ', error);
    }

    /**
     * currentSession
     * return : CognitoUserSession (accessToken, clockDrift, idToken, refreshToke)
     */
    try {
      const temp2 = await Auth.currentSession();
      console.log('currentSession : ', temp2);
    } catch(error) {
      console.log('currentSession e : ', error);
    }

    /**
     * currentUserCredentials
     * return : No Cognito Identity pool provided for unauthenticated access
     */
    try {
      const temp3 = await Auth.currentUserCredentials();
      console.log('currentUserCredentials : ', temp3);
    } catch(error) {
      console.log('currentUserCredentials e : ', error);
    }

    /**
     * currentUserInfo
     * return : attributes, id: undefined, username: "0f~~1f6-9~~f-4~~a-a~~6-c08~~~f36f"
     */
    try {
      const temp4 = await Auth.currentUserInfo();
      console.log('currentUserInfo : ', temp4);
    } catch(error) {
      console.log('currentUserInfo e : ', error);
    }

    /**
     * currentAuthenticatedUser
     * return : CognitoUser
     */
    try {
      const temp5 = await Auth.currentAuthenticatedUser();
      console.log('currentAuthenticatedUser : ', temp5);
    } catch(error) {
      console.log('currentAuthenticatedUser e : ', error);
    }
  }
}

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