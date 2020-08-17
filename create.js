import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

const CryptoJS = require("crypto-js");

export const main = handler(async (event, context) => {
  console.log("EventBody: **" + Object.keys(event.body) + "**");
  const data = JSON.parse(event.body);
  var encryptKey = process.env.encryptKey;
  console.log('EncryptKey: ' + encryptKey);
  const params = {
    TableName: process.env.tableName,
    // 'Item' contains the attributes of the item to be created
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      attuid: data.attuid,
      attpwd: CryptoJS.AES.encrypt(JSON.stringify(data.attpwd), encryptKey).toString(),
      spwxuser: data.spwxuser,
      createdAt: Date.now()
    }
  };
  await dynamoDb.put(params);

  return params.Item;
});