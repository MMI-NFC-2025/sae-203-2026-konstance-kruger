/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1154068080")

  // remove field
  collection.fields.removeById("select76019305")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1154068080")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select76019305",
    "maxSelect": 1,
    "name": "Artistes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Sofia Isella",
      "Arctic Monkeys",
      "Billie Eilish",
      "Dua Lipa",
      "Lennon Stella",
      "Ricci",
      "MC Voltage",
      "Mia Lyss"
    ]
  }))

  return app.save(collection)
})
