import { atom } from 'recoil';

export const navAtom = atom({
  key: 'NAV_ATOM',
  default: [
    {
      name: '首页',
      link: '/',
    },
    {
      name: '知识分享',
      link: '/blog',
    },
    {
      name: '碎碎念',
      link: '/fragment',
    },
  ],
});
