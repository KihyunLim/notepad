import { CognitoIdentityClient, CreateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity";

export class Aws {
  private client: CognitoIdentityClient;

  constructor() {
    this.client = this.setClient();
    this.testAWS();
  }

  setClient() {
    return new CognitoIdentityClient({ 
      region: process.env.REGION as string,
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID as string,
        secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
      }
    });
  }

  async testAWS() {
    const params = {
      AllowUnauthenticatedIdentities: true,
      IdentityPoolName: process.env.IDENTITY_POOL_NAME as string
    };
    const command = new CreateIdentityPoolCommand(params);

    try {
      const data = await this.client.send(command);
      console.log('client send > then : ', data);
      // process data.
    } catch (error:any) {
      // error handling.
      console.log('client send > error : ', error);
      // const { requestId, cfId, extendedRequestId } = error.$$metadata;
      // console.log({ requestId, cfId, extendedRequestId });
    } finally {
      // finally.
      console.log('client send > ?? > finally!!');
    }
  }
}