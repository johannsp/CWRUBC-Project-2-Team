module.exports = function(sequelize, DataTypes) {
  const Album = sequelize.define("Album", {
    title: DataTypes.STRING,
    yearReleased: DataTypes.INTEGER,
    artLink: DataTypes.STRING,
    markedFavorite: DataTypes.BOOLEAN
  });

  Album.associate = function(models) {
    // Associating Album with
    // When an Album is deleted, also delete any associated Links
    Album.hasMany(models.Link, {
      onDelete: "cascade"
    });
    // When an Album is deleted, also delete any associated Notations
    Album.hasMany(models.Notation, {
      onDelete: "cascade"
    });
  };

  return Album;
};
