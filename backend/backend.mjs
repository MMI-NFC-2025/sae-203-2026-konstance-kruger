import PocketBase from 'pocketbase';

const pb = new PocketBase('https://sae203.kkruger.fr:443');

/*
Liste de tout les artistes par date de passage
 */
export async function getAllArtistesByDate() {
  return await pb.collection('programme').getFullList({
    sort: 'date',
    expand: 'artiste,scene'
  });
}

/*
Liste de toutes les scènes par nom
 */
export async function getAllScenesByName() {
  return await pb.collection('scenes').getFullList({
    sort: 'nom'
  });
}

/*
Liste de tous les artistes par nom
 */
export async function getAllArtistesAlphabetical() {
  return await pb.collection('artistes').getFullList({
    sort: 'nom'
  });
}

/*
Artistes par l'ID
*/
export async function getArtisteById(kbhozwpz26ufa89) {
  return await pb.collection('artistes').getOne(kbhozwpz26ufa89);
}
/*
Scène par l'ID
*/
export async function getSceneById(xb5tswnpc3h0c3j) {
  return await pb.collection('scenes').getOne(xb5tswnpc3h0c3j);
}

/*
Artistes par l'ID de la scène et triés par date
*/
export async function getArtistesBySceneId(xb5tswnpc3h0c3j) {
  return await pb.collection('programme').getFullList({
    filter: `scene = "${xb5tswnpc3h0c3j}"`,
    sort: 'date',
    expand: 'artiste,scene'
  });
}

/*
Artistes par le nom de la scène et triés par date
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

/*
Ajoute ou modifie un artiste
 */
export async function saveArtiste(data) {
  if (data.id) {
    const { id, ...body } = data;
    return await pb.collection('artistes').update(id, body);
  }

  return await pb.collection('artistes').create(data);
}

/*
Ajoute ou modifie une scène
 */
export async function saveScene(data) {
  if (data.id) {
    const { id, ...body } = data;
    return await pb.collection('scenes').update(id, body);
  }

  return await pb.collection('scenes').create(data);
}

export default pb;

