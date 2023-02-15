SELECT
  "addresses"."line1",
  "cities"."name" as "city",
  "addresses"."district",
  "countries"."name" as "country"
FROM
  "addresses"
JOIN
  "cities" USING ("cityId")
JOIN
  "countries" USING ("countryId");
