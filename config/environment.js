require("dotenv").config();
module.exports = {
  app: { port: process.env.PORT || 8000 },
  mongo: {
    useMongoClient: true,
    uri: process.env.MONOGO_URI || "mongodb://localhost/sugarbox-dev",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  },
  secrets: {
    session: "sugar-box-secret"
  }
};
