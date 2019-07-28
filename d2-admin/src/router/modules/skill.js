import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/skill',
  name: 'skill',
  meta,
  redirect: { name: 'skill-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      component: _import('skill/index'),
      meta: { ...meta, title: 'SKILL' }
    },
    {
      path: 'html',
      name: `${pre}html`,
      component: _import('skill/html/index'),
      meta: { ...meta, title: 'HTML' }
    },
    {
      path: 'css',
      name: `${pre}css`,
      component: _import('skill/css/index'),
      meta: { ...meta, title: 'CSS' }
    },
    {
      path: 'php',
      name: `${pre}php`,
      component: _import('skill/php/index'),
      meta: { ...meta, title: 'PHP' }
    },
    {
      path: 'java',
      name: `${pre}java`,
      component: _import('skill/java/index'),
      meta: { ...meta, title: 'JAVA' }
    }
  ])('skill-')
}
