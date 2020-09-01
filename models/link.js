module.exports = function(sequelize, DataTypes) {
  const Link = sequelize.define("Link", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Link.associate = function(models) {
    // A Link should belong either to an Album or a Song
    // There are not firm foreign key constraints since multiple join points are possible
    Link.belongsTo(models.Album, {
      foreignKey: {
        allowNull: true
      }
    });
    Link.belongsTo(models.Song, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Link;
};
