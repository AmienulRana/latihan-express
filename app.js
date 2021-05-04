const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000



// gunakana ejs
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {

   const dataMakanan = fs.readFileSync('./data-makanan.json', 'utf-8')
   const dMakanan = JSON.parse(dataMakanan)
   const makanan = dMakanan.makanan
    res.render('index',
       {
         title:'Home',
         makanan
       }
    )
})
app.get('/allMenu', (req, res) => {
    res.render('allMenu',{title:'Semua Menu'})
})
app.get('/keranjang', (req, res) => {
    res.render('keranjang', {title : 'Keranjang'})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
