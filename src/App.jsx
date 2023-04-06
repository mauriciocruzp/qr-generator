import { useRef, useState } from "react";
import { useQrious } from 'react-qrious';
import { saveAs } from 'file-saver';
import Header from "./components/Header";

function App() {

  const input = useRef(null);
  const level = "L";
  const size = 390;
  const [value, setValue] = useState('https://windsoftti.com/')
  const [imageData, _qrious] = useQrious({ value, level, size })

  const generateQR = (event) => {
    event.preventDefault();
    console.log(input.current.value);
    setValue(input.current.value);
  }

  const handleDownload = () => {
    saveAs(imageData, 'qrCode.png');
  }

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Header />
            <form action="" onSubmit={generateQR}>
              <div className="row">
                <div className="col-md-6">
                  <label>URL (Tu código QR abrirá esta URL)</label>
                  <input type="text" className="form-control" name="url" id="url" placeholder="https://"
                    required ref={input} />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <button type="submit" className="btn btn-primary btn-lg btn-block">Generar
                    código QR</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="row justify-content-center">
              <img alt={value} id="qrcode" src={imageData} />
            </div>
            <br />
            <div className="row justify-content-center">
              <button onClick={handleDownload} className="btn btn-secondary btn-lg btn-block">Descargar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
