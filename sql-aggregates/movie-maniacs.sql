SELECT
  "customers"."firstName",
  "customers"."lastName",
  SUM("payments"."amount") AS "Total-Paid"
FROM
  "customers"
JOIN
  "payments" USING ("customerId")
GROUP BY
  "customers"."firstName",
  "customers"."lastName"
ORDER BY
  "Total-Paid" DESC
