SELECT
  "payments"."amount",
  "customers"."firstName",
  "customers"."lastName"
FROM
  "customers"
JOIN
  "payments" USING ("customerId")
ORDER BY
  "amount" DESC
LIMIT
  10;
