SELECT
  "countries"."name" AS "Country",
  COUNT("cities") AS "Number-of-Cities"
FROM
  "cities"
JOIN
  "countries" USING ("countryId")
GROUP BY
  "countries"."name"
