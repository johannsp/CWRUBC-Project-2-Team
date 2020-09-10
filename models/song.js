module.exports = function(sequelize, DataTypes) {
  const Song = sequelize.define("Song", {
    title: DataTypes.STRING,
    yearReleased: DataTypes.INTEGER,
    artLink: DataTypes.STRING,
    markedFavorite: DataTypes.BOOLEAN
  });

  Song.associate = function(models) {
    // Associating Song with
    // When an Album is deleted, also delete any associated Links
    Song.hasMany(models.Link, {
      onDelete: "cascade"
    });
    // When an Song is deleted, also delete any associated Notations
    Song.hasMany(models.Notation, {
      onDelete: "cascade"
    });
  };

  return Song;
};
