insert into "actors" ("firstName", "lastName")
values ('Jeff', 'Goldblum')
returning "actorId", "updatedAt"
