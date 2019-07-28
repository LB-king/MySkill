export default {
  path: '/skill',
  title: '技能',
  icon: 'flask',
  children: (pre => [
    {
      title: '前端',
      icon: 'table',
      children: [
        { path: `${pre}`, title: 'first' },
        { path: `${pre}/html`, title: 'html' },
        { path: `${pre}/css`, title: 'css' }
      ]
    },
    {
      path: `${pre}/#`,
      title: '后端',
      icon: 'home',
      children: [
        { path: `${pre}/java`, title: 'java' },
        { path: `${pre}/php`, title: 'php' }
      ]
    }
  ])('/skill')
}
