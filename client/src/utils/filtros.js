export const tipos = (type, array) => {
  // Filtrado API y DB
  let tipos = array.filter((p) => p.Tipos);
  let tiposMap = tipos.map((p) => p.Tipos);
  console.log(tiposMap[0], "tipos");
  if (tipos?.length) {
    console.log("2");
    if (tiposMap[0]?.filter((p) => p?.name?.includes(type))) {
      return tipos;
    }
  } else if (array.length) {
    console.log("1");
    return array.filter((p) => p?.type?.includes(type));
  }
  return [];

  // Filtrado por API
  /* if (array.length) return array.filter((p) => p?.type?.includes(type));
  return []; */
};

export const ordenado = (order, array) => {
  let names = array.map((o) => o.name);
  let fuerza = array.map((o) => o.fuerza);
  let orde = [];

  switch (order) {
    case "a-z":
      names = names.sort();
      names.forEach((p) => {
        array.forEach((po) => {
          if (p === po.name) orde.push(po);
        });
      });
      return orde;
    case "z-a":
      names = names.sort().reverse();
      names.forEach((p) => {
        array.forEach((po) => {
          if (p === po.name) orde.push(po);
        });
      });
      return orde;
    case "++fuerza":
      fuerza = fuerza.sort((a, b) => b - a);
      fuerza.forEach((f) => {
        array.forEach((p) => {
          if (p.fuerza === f) orde.push(p);
        });
      });
      orde = orde.filter((e, i) => orde.indexOf(e) === i);
      return orde;
    case "--fuerza":
      fuerza = fuerza.sort((a, b) => a - b);
      fuerza.forEach((f) => {
        array.forEach((p) => {
          if (p.fuerza === f) orde.push(p);
        });
      });
      orde = orde.filter((e, i) => orde.indexOf(e) === i);
      return orde;
    default:
      return array;
  }
};
