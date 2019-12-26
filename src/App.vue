<template>
  <div id="app">
    <img src="./assets/logo.jpeg">
    <div><Welcome/></div>
    <br/>


    <h2>Books we plan to read</h2>
    <h3>Bitcoin</h3>
    <a href="https://github.com/lnbook/lnbook">Mastering the Lightning Network</a> by Andreas M. Antonopoulos, Olaoluwa Osuntokun, and René Pickhardt<br/>
    <a href="https://github.com/jimmysong/pw-exercises">Programming Wallet</a> by Jimmy Song<br/><br/>
    <br/>

    <h2>Books we've read together</h2>

    <h3>Bitcoin</h3>
    <a href="https://learning.oreilly.com/library/view/mastering-bitcoin-2nd/9781491954379/">Mastering Bitcoin (2nd edition)</a> by Andreas Antonopoulos<br/>
    <a href="https://learning.oreilly.com/library/view/programming-bitcoin/9781492031482/">Programming Bitcoin</a> by Jimmy Song (twice read by groups)<br/>
    <a href="https://learning.oreilly.com/library/view/grokking-bitcoin/9781617294648/">Grokking Bitcoin</a> by Kalle Rosenbaum (we're on the last chapter)<br/>

    <h3>Rust</h3>
    <a href="https://doc.rust-lang.org/stable/book/">The Rust Programming Language (2018 edition)</a> by Steve Klabnik and Carol Nichols<br/>with contributions from the Rust Community<br/>
    <a href="https://learning.oreilly.com/library/view/programming-rust/9781491927274/">Programming Rust</a> by Jim Blandy and Jason Orendorff (we're midway through)<br/>

    <br/>
    <br/>
    <div><RustExample/></div>

  </div>
</template>

<script>
import Welcome from './components/Welcome'
import RustExample from './components/RustExample'

export default {
  name: 'App',
  components: {
    Welcome,
    RustExample
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
