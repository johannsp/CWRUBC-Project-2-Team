module.exports = function(sequelize, DataTypes) {
  const Artist = sequelize.define("Artist", {
    name: DataTypes.STRING
  });

  Artist.associate = function(models) {
    // Associating Artist with 
    // When an Artist is deleted, also delete any associated Notations
    Artist.hasMany(models.Notation, {
      onDelete: "cascade"
    });
  };

  return Artist;
};
