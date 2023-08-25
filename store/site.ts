import { atom } from 'jotai';

export const menuAtom = atom<boolean>(false);
menuAtom.debugLabel = 'menuAtom';

export const menuOpenAtom = atom(null, (_, set, update: boolean) => {
  set(menuAtom, update);
});
menuOpenAtom.debugLabel = 'menuOpenAtom';

export const subMenuAtom = atom<boolean>(false);
subMenuAtom.debugLabel = 'subMenuAtom';

export const subMenuOpenAtom = atom(null, (_, set, update: boolean) => {
  set(subMenuAtom, update);
});
subMenuOpenAtom.debugLabel = 'subMenuOpenAtom';
