import { Amplify, Auth }  from "aws-amplify";
// 이거 아니여도 될듯 함
/*import * as AWS from "aws-sdk";

AWS.config.region = process.env.REGION; // 리전
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.COGNITO_USER_POOL_ID,
}); */

export class AwsAmplify {
  // private email: string;
  // private password: string;
  
  constructor() {
    // this.email = '';
    // this.password = '';
    this.init();
  }

  init() {
    // @ts-ignore
    Amplify.configure({
      aws_cognito_region: process.env.REGION,
      aws_user_pools_id: process.env.COGNITO_USER_POOL_ID,
      aws_user_pools_web_client_id: process.env.COGNITO_APP_CLIENT_ID,
    });
  }

  async signin(email: string, password: string) {
    let result: any = undefined;

    try {
      result = await Auth.signIn(email, password);
      console.log(result);

      if (result.challengeName === 'NEW_PASSWORD_REQUIRED') {
        const resultNewPassword = await Auth.completeNewPassword(result, 'newpassword');
        console.log('resultNewPassword : ', resultNewPassword);
      }
    } catch(error) {
      console.log(error);
    }
    try {
      const temp1 = await Auth.currentCredentials();
      console.log('currentCredentials : ', temp1);
    } catch(error) {
      console.log('currentCredentials e : ', error);
    }
    try {
      const temp2 = await Auth.currentSession();
      console.log('currentSession : ', temp2);
    } catch(error) {
      console.log('currentSession e : ', error);
    }
    try {
      const temp3 = await Auth.currentUserCredentials();
      console.log('currentUserCredentials : ', temp3);
    } catch(error) {
      console.log('currentUserCredentials e : ', error);
    }
    try {
      const temp4 = await Auth.currentUserInfo();
      console.log('currentUserInfo : ', temp4);
    } catch(error) {
      console.log('currentUserInfo e : ', error);
    }
    try {
      const temp5 = await Auth.currentUserInfo();
      console.log('currentUserInfo : ', temp5);
    } catch(error) {
      console.log('currentUserInfo e : ', error);
    }
  }
}
