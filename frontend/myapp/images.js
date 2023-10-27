const importAll = (r) => r.keys().map((fileName) => ({ id: fileName, imageSrc: r(fileName).default }));

// require.context returns 
// an array with images pathes ['./cat.png', './dog.png', './bird.svg']

export const Outside = importAll(require.context('./public/images/real/outside', false, /\.(png|jpe?g|svg)$/));
// outisde as an array of objects with an id and imageSrc

export const Wedding = importAll(require.context('./public/images/real/wedding', false, /\.(png|jpe?g|svg)$/));
export const Real = importAll(require.context('./public/images/real', false, /\.(png|jpe?g|svg)$/));
export const Bussiness = importAll(require.context('./public/images/real/bussiness', false, /\.(png|jpe?g|svg)$/));




