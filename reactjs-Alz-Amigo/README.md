
# In-Memory maded with ReactJS (NextJS).

'In-Memory' is a platform that hosts interactive games that stimulate human neuronal activity, primarily aimed at patients with Alzheimer's disease.


## Deployment

- Clone repository:
```bash
git clone https://github.com/m0rniac/reactjs-inmemo
```
```bash
cd reactjs-inmemo/
```
- Install dependencies:
```bash
npm install
```
- Run:
```bash
npm run dev
```
or
- Build:
```bash
npm run build
```
## About 'BUILD'

The project uses the **13.4.4** version of NextJS, which in production generates the `.next` folder by default (without `index.html` file).

In some cases it could complicate the deploy, to change the build mode and generate a Static Project (with `index.html` file) you must uncheck ***"output: 'export'"*** in the `next.config.js` file like so:


```javascript
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
}
```


This will create an `out` folder with the file "index.html" just like a ReactJS build. It should be mentioned that in some cases this modification could affect some functionalities of the project

### More info:
- [NextJS: Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [NextJS: Static Site Generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
- [NextJS: Static & Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering)
.
## Feedback
If you have any feedback, please reach out to me at:

[![instagram](https://img.shields.io/badge/instagram-0A66C2?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/christcastr/)

[![portfolio](https://img.shields.io/badge/buy_me_a_coffee-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.paypal.com/paypalme/christcastr/)

