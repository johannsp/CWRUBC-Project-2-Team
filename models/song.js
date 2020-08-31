module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define("Song", {
    title: DataTypes.STRING
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
