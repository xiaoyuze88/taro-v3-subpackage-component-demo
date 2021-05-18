export default {
  pages: [
    'pages/index/index'
  ],
  subPackages: [
    {
      root: 'pages/sub',
      pages: [
        'one/one',
        'two/two'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
