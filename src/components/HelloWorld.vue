<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>rust says
        <input id="a" v-model="a" type="number"/> +
        <input id="b" v-model="b" type="number"/> = {{rust_sum}}
    </h2>
  </div>
</template>

<script>
import { add } from '../add/src/lib.rs'

export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the Los Gatos Reading Group',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
