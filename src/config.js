export default {
    STRIPE_KEY: "pk_test_51GxMlYJMweC5ABL7fVurcHIKcshclWB1EZO7lYEwXK6uIcVjmWWVqfCUNW1uG3z75NlFRPIjL92mY0sXuQwLKqjI00Xwy3uDnf",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "finn-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://4b9f5gylf2.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_JrMRMZK4f",
      APP_CLIENT_ID: "6d2ib2nnsvhl5nt3ilcjm0niup",
      IDENTITY_POOL_ID: "us-east-2:3b20f0bc-6d42-481a-9dce-3e29575ef9a1"
    }
};