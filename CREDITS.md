# Credits

- Template - Edd Yerburgh's [vue-parcel-boilerplate](https://github.com/eddyerburgh/parcel-vuejs-template)

removed *jest*

`yarn build`

`yarn lint`

`yarn dev`

---

- Addition of Rust - [Parcel's Rust page](https://parceljs.org/rust.html)

install Rust - on Linux run

    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

and then

    . ~/.cargo/env

added *add* folder 

import where needed - `import { add } from './add/src/lib.rs'`

tested by modifying ``src/components/HelloWorld.vue``
    
    <template>
      <div class="hello">
        <h1>{{ msg }} - {{rust_msg}}</h1>
        ...
      </div>
    </template>  

    <script>
    import { add } from '../add/src/lib.rs'
    
    export default {
    
      name: 'HelloWorld',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      computed: {
          rust_msg: function() {
            return add(3, 9)
          }
        }
    
    }
    </script>
    ...
