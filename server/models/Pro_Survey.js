module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "pro_survey",

    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      checked: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );
};
