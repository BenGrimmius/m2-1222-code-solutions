SELECT
  "customers"."customerId",
  "customers"."firstName",
  "customers"."lastName",
  SUM("payments"."amount") AS "Total-Paid"
FROM
  "customers"
JOIN
  "payments" USING ("customerId")
GROUP BY
  "customers"."customerId"
ORDER BY
  "Total-Paid" DESC
