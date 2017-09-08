<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'app',
  created () {
    this.setFontSize()
    this.setMeta()
  },
  methods: {
    setFontSize () {
      // 以iphone6为基准值
      const I6 = 750
      let [idealViewport, doc] = [window.screen.width, document]
      let formula = (idealViewport / I6) * 100
      doc.documentElement.style.fontSize = formula + 'px'
      doc.body.style.fontSize = formula + 'px'
    },
    setMeta () {
      let meta = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />'
      document.head.insertAdjacentHTML('beforeend', meta)
    }
  }
}
</script>

<style>
</style>
