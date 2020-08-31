module.exports = function(sequelize, DataTypes) {
  var Notation = sequelize.define("Notation", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Notation.associate = function(models) {
    // A Notation should belong either to an Album, an Artist, or a Song
    // There are not firm foreign key constraints since multiple join points are possible
    Notation.belongsTo(models.Album, {
      foreignKey: {
        allowNull: true
      }
    });
    Notation.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: true
      }
    });
    Notation.belongsTo(models.Song, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Notation;
};