/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1299117398")

  // remove field
  collection.fields.removeById("text3218329231")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1299117398")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3218329231",
    "max": 0,
    "min": 0,
    "name": "localisation",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
