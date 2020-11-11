module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "survey",

    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      body_temparature: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      danger: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      body_check: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      profile_img: {
        type: DataTypes.BLOB("long"),
        allowNull: true,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );
};
