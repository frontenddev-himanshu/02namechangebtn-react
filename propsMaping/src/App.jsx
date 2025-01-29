import Card from "./Components/Card"

function App() {

  let users = [
    {
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTT3rf5Ci_0wLylya1RSfLov9Igh9yrtOjwhedjlg8ds5r2kFjdhsPs5biCyGPHN--ZBDni4OfjXlFDImyoCxScCuqBi8AaNBEtryHS2jdMXEi_1wOND9ro",
      title: "Nike",
      price: "433",
    },
    {
      img: "https://static.zara.net/assets/public/4561/5789/bd2d484ca94f/226e35348bf0/20110370999-e1/20110370999-e1.jpg?ts=1728899205647&w=750",
      title: "Zara Red Template",
      price: "788",
    },
    {
      img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/2/3228a1f560251C_1.jpg?rnd=20200526195200&tr=w-256",
      title: "Nykaa Shoes",
      price: "50",
    },
    {
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc4d4dbbc/images/hi-res/50D4I1FNIAA02_1.jpg?sw=480&sh=480",
      title: "Tanishq",
      price: "278",
    },
    {
      img: "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/Editoria-Banner-Airconic.jpg",
      title: "Amrican Touriest",
      price: "78",
    },
    {
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/32281882/2025/1/10/d43c27af-a939-41ba-aee1-12971f6f6e791736494517219Perfume1.jpg",
      title: "Layralash Perfume",
      price: "499",
    },
    {
      img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe3d103d7/images/Fastrack/Catalog/38077AP01_1.jpg?sw=360&sh=360",
      title: "Smart Watch",
      price: "66",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Alpha.jpg?v=1688452927",
      title: "Air Buds",
      price: "33",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB400_628ae039-11be-4f0b-b723-651e2bb05de7.jpg?v=1700300890",
      title: "Power bank",
      price: "55",
    }
  ];


  return (
    <>
      <div id="container" className="w-full h-screen bg-purple-300 flex items-center">
        <div id="card-wrap" className="w-full flex gap-10 p-5 flex-wrap">
          {
            users.map((details) => {
              return (
                <Card cImg={details.img} cTitle={details.title} cPrice={details.price} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
