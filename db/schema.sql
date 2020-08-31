DROP DATABASE IF EXISTS musicBox_db;

CREATE DATABASE musicBox_db;

USE musicBox_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(80) NOT NULL,
  password VARCHAR(80) NOT NULL
);

DROP TABLE IF EXISTS albums;
CREATE TABLE albums (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT FK_album_userId FOREIGN KEY (user_id)
  REFERENCES user(id)
);

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT FK_song_userId FOREIGN KEY (user_id)
  REFERENCES user(id)
);

DROP TABLE IF EXISTS notations;
CREATE TABLE notations (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  info TEXT NOT NULL,
  album_id INT NOT NULL,
  song_id INT NOT NULL,
  CONSTRAINT FK_notation_albumId FOREIGN KEY (album_id)
  REFERENCES album(id) ON DELETE CASCADE,
  CONSTRAINT FK_notation_songId FOREIGN KEY (song_id)
  REFERENCES song(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS links;
CREATE TABLE links (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(120) NOT NULL,
  album_id INT NOT NULL,
  song_id INT NOT NULL,
  CONSTRAINT FK_link_albumId FOREIGN KEY (album_id)
  REFERENCES album(id) ON DELETE CASCADE,
  CONSTRAINT FK_link_songId FOREIGN KEY (song_id)
  REFERENCES song(id) ON DELETE CASCADE
);

