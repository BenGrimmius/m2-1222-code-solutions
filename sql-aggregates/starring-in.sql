SELECT
  "genres"."name" as "Genre",
  COUNT("films"."title") as "Number-of-Films"
FROM
  "genres"
JOIN
  "filmGenre" USING ("genreId")
JOIN
  "films" USING ("filmId")
JOIN
  "castMembers" USING ("filmId")
JOIN
  "actors" USING ("actorId")
WHERE
  "actors"."firstName" = 'Lisa'
GROUP BY
  "genres"."name"
