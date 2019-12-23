# losgatos.io
Source code for losgatos.io

---

The installation instruction details here are for Ubuntu.

- Install Rust 

      curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
      . ~/.cargo/env

- Install node, npm, and yarn

      sudo snap install node --classic --channel=12

- Run

      yarn install
      yarn build   
      yarn lint
      yarn dev
