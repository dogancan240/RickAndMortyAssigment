import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import CardDetailes from "./components/Cards/CardDetailes";

function App() {
  //Burada sadce her sayfada olması gerekn componentler var navbar gibi, eğer footer olsaydı o da burada olurdu
  //Routes ile diğer sayfalara yönlendirme yapılıyor
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetailes />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetailes />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<CardDetailes />} />
      </Routes>
    </Router>
  );
}

//Altdaki değişken home sayfası kodu yazmaya başlarken burada yazdığım için pages klasörü altında değil.
const Home = () => {
  //Filtreleme için gerekli değişkenleri tutuyoruz
  let [pageNumber, setPagenumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchdata, setfetchdata] = useState([]);

  //filtreleme işleme api ile yapılıyor gerekn değerleri api'nin doc kısmında öğrenebilrsiniz
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  let { info, results } = fetchdata; //respone olarak gele verinin farklı değerlerini tutuyoruz

  // useEffect kullanarak, ne zaman api değeri değişse yeni verileri çekeceğiz
  // bu yüzden [api] değerini yazdık
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setfetchdata(data);
    })();
  }, [api]);
  //Serach componentine set fonksiyonlarını göderdik çünkü search barına girilen değerler ile filtreleme yapcağız, setPagenumber verilmesinin nedeni kullnacı başka bir sayfadaiken serach
  //yaparsa direkt olarak ilk sayfaya yönlendirme yapılması için
  return (
    <div className="App">
      <Search setPagenumber={setPagenumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters
            pageNumber={pageNumber}
            status={status}
            updateStatus={setStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={setPagenumber}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPagenumber={setPagenumber}
      />
    </div>
  );
  //Card componenti kedi sayfasında tasarlnamıştır burada sadece gerekli bilgileri yolluyoruz
};

export default App;
