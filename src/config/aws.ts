import { CognitoIdentityClient, CreateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity";

const client = new CognitoIdentityClient({ 
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: '',
    secretAccessKey: ''
  }
});

const params = {
  AllowUnauthenticatedIdentities: true,
  IdentityPoolName: 'ap-northeast-2_fft566I1b'
};
const command = new CreateIdentityPoolCommand(params);

export const testCognito = async () => {
  try {
    const data = await client.send(command);
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