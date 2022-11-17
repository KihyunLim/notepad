import { CognitoIdentityClient, CreateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity";
import { CognitoIdentityProviderClient, GetSigningCertificateCommand } from "@aws-sdk/client-cognito-identity-provider";

export class Aws {
  private client: CognitoIdentityClient;
  private clientProvider: CognitoIdentityProviderClient;

  constructor() {
    this.client = this.setClient();
    this.clientProvider = this.setClientProvider();
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

  setClientProvider() {
    return new CognitoIdentityProviderClient({ 
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
    const paramsProvider = {
      UserPoolId: process.env.IDENTITY_POOL_NAME as string
    }
    const command = new CreateIdentityPoolCommand(params);
    const commandProvider = new GetSigningCertificateCommand(paramsProvider);

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

    console.log('-----------');

    try {
      const dataProvider = await this.clientProvider.send(commandProvider);
      console.log('clientProvider send > then : ', dataProvider);
      // process data.
    } catch (error:any) {
      // error handling.
      console.log('clientProvider send > error : ', error);
      // const { requestId, cfId, extendedRequestId } = error.$$metadata;
      // console.log({ requestId, cfId, extendedRequestId });
    } finally {
      // finally.
      console.log('clientProvider send > ?? > finally!!');
    }
  }
}