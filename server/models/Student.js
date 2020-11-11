module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "student",

    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      class: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      profile_img: {
        type: DataTypes.BLOB("long"),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
