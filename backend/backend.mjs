import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

/**
 * Retourne la liste de tous les artistes triés par date de représentation
 * On passe par la collection programme, puis on développe artiste et scene
 */
export async function getAllArtistesByDate() {
  return await pb.collection('programme').getFullList({
    sort: 'date',
    expand: 'artiste,scene'
  });
}

/**
 * Retourne la liste de toutes les scènes triées par nom
 */
export async function getAllScenesByName() {
  return await pb.collection('scenes').getFullList({
    sort: 'nom'
  });
}

/**
 * Retourne la liste de tous les artistes triés par ordre alphabétique
 */
export async function getAllArtistesAlphabetical() {
  return await pb.collection('artistes').getFullList({
    sort: 'nom'
  });
}

/**
 * Retourne les infos d'un artiste en donnant son id
 * @param {string} id
 */
export async function getArtisteById(id) {
  return await pb.collection('artistes').getOne(id);
}



/**
 * Retourne tous les artistes se produisant sur une scène donnée par son id, triés par date
 * @param {string} sceneId
 */
export async function getArtistesBySceneId(sceneId) {
  return await pb.collection('programme').getFullList({
    filter: `scene = "${sceneId}"`,
    sort: 'date',
    expand: 'artiste,scene'
  });
}

/**
 * Retourne tous les artistes se produisant sur une scène donnée par son nom, triés par date
 * @param {string} sceneName
 */
export async function getArtistesBySceneName(sceneName) {
  const scene = await pb.collection('scenes').getFirstListItem(
    `nom = "${sceneName}"`
  );

  return await pb.collection('programme').getFullList({
    filter: `scene = "${scene.id}"`,
    sort: 'date',
    expand: 'artiste,scene'
  });
}

/**
 * Ajoute ou modifie un artiste
 * Si data.id existe -> update
 * Sinon -> create
 * @param {object} data
 */
export async function saveArtiste(data) {
  if (data.id) {
    const { id, ...body } = data;
    return await pb.collection('artistes').update(id, body);
  }

  return await pb.collection('artistes').create(data);
}

/**
 * Ajoute ou modifie une scène
 * Si data.id existe -> update
 * Sinon -> create
 * @param {object} data
 */
export async function saveScene(data) {
  if (data.id) {
    const { id, ...body } = data;
    return await pb.collection('scenes').update(id, body);
  }

  return await pb.collection('scenes').create(data);
}

export default pb;