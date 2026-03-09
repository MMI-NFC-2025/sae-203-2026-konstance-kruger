/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1154068080")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 1,
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Luna Eclipse",
      "The Midnight Riders",
      "MC Voltage",
      "Sophie Rivers",
      "Neon Dreams",
      "Blue Note Collective",
      "Island Vibes",
      "Iron Thunder"
    ]
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1154068080",
    "hidden": false,
    "id": "relation645746876",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Luna_Eclipse",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1154068080")

  // remove field
  collection.fields.removeById("select1542800728")

  // remove field
  collection.fields.removeById("relation645746876")

  return app.save(collection)
})
