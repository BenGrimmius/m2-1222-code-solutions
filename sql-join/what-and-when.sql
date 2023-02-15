SELECT
  "films"."title",
  "films"."releaseYear",
  "genres"."name" as "genre"
FROM
  "filmGenre"
JOIN
  "films" USING ("filmId")
JOIN
  "genres" USING ("genreId");
