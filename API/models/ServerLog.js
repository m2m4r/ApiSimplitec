const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class ServerLogs extends Model {}

ServerLogs.init(
  {
    DateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    payload: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "serverLogs",
  }
);

module.exports = Log;