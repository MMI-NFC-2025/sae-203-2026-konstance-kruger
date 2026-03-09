/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1299117398")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select2055047192",
    "maxSelect": 1,
    "name": "Scenes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Scene Principale",
      "Scene Acoustique",
      "Scene Urbaine",
      "Scene Rock",
      "Scene Electro",
      "Scene Jazz",
      "Scene Tropicale",
      "Scene Metal"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1299117398")

  // remove field
  collection.fields.removeById("select2055047192")

  return app.save(collection)
})
