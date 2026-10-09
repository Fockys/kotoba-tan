# kotoba-tan
A full suite for language learning using immersion based methods, specifically tailored towards japanese language learning for english natives.


Built with tauri, react, typescript and rust
Build to be modular with different modules for different language learning practices

I will not add a flashcard module because the free software Anki already fill this role with great efficiency. 


---
## references
bellow are some resources that have been important to development and helped us greately
- https://github.com/KolbyML/Manatan
- https://github.com/yomidevs/yomitan
- https://github.com/Manhhao/hoshidicts



# build guide

### windows requirements
- git
- node.js LTS and pnpm
- rust installed with 'rustup'
- VS build tools with desktop development with c++ workload and a windows SDK

Check that rust is using MSVC
```powershell
rustc -Vv
```
The host value should end in windows-mscv if it doesnt install and select
```powershell
rustup toolchain install stable-x86_64-pc-windows-msvc
rustup default stable-x86_64-pc-windows-msvc
```


```
git clone https://github.com/Fockys/kotoba-tan
cd kotoba-tan
pnpm install
```

to run dev
```
pnpm tauri dev
```

to build a release 
```
pnpm tauri build
```