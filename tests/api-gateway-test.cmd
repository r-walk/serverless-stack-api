npx aws-api-gateway-cli-test --username admin@example.com --password Passw0rd! --user-pool-id us-west-2_5H52eZOCK --app-client-id 35tl0oe3jl6s5bdrshptnf77n2 --identity-pool-id us-west-2:f2c789ed-d7f8-4c6e-a636-09bf29668c38 --invoke-url https://b2ka2qvjl2.execute-api.us-west-2.amazonaws.com/dev --api-gateway-region us-west-2 --path-template /aseusers --method POST --body "{""attuid"":""at1234"",""attpwd"":""pwd"",""spwxuser"":""spUser1""}"