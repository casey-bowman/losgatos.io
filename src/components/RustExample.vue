<template>
    <div class="rust-example">
        <h2>rust says
            <input id="a" v-model="a" type="number"/> +
            <input id="b" v-model="b" type="number"/> = {{rust_sum}}
        </h2>
    </div>
</template>

<script>

import { add } from '../add/src/lib.rs'

export default {
  name: 'RustExample',
  data () {
    return {
      a: 0,
      b: 0
    }
  },
  computed: {
    rust_sum: function () {
      return add(this.a, this.b)
    }
  }
}
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
