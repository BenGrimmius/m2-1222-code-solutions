insert into "languages" ("name")
values
  ('HTML'),
  ('CSS'),
  ('JavaScript')
returning "languageId", "updatedAt";
