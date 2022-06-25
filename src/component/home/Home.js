import Navbar from '../navbar/Navbar';
import { useState, useEffect } from 'react';
import './Home.css';
const Slideshow = ({imgs}) =>{
    const [index, setIndex] = useState(0)
  
    useEffect(()=>{
      setIndex(0)
    }, [])
  
    const next = ()=> {
      if (index === imgs.length -1){
        setIndex(0)
      }
      else{
        setIndex(index+1)
      }
    }
  
    const prev = () => {
      if (index === 0){
        setIndex(imgs.length -1)
      }else{
        setIndex(index -1)
      }
    }
  
    return <div className='slideshow'>
      <img className='mainImg' src={imgs[index]} />
      <div className='actions'>
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
  
    </div>
    
  }
  function Home() {
    return (
        
      <div className='App'>
        <Navbar />
        <Slideshow imgs ={['https://images.tokopedia.net/img/cache/700/product-1/2020/10/16/3393118/3393118_c44f27e1-24e6-43ff-b0a9-edc3969331fd_1040_1040','https://images.bisnis-cdn.com/posts/2019/06/17/934549/38gl950g-sphere-lighting.jpg','https://media.wired.com/photos/627da1085d49787abdf713b4/master/pass/Pakistani-Gamers-Want-a-Seat-at-the-Table-Culture-shutterstock_1949862841.jpg','https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/8/20/0f9eed37-ffc1-41ae-b16e-f4917ceaf90d.jpg']}  />
        <nav class="container">
          <ul>
              <li>
                  <img src="https://media.pricebook.co.id/article/5e8309a5b92c2e67058b4568/5e8309a5b92c2e67058b4568_1585650820.jpg" />
                  <br />
                  <p><small><s>Rp. 7.000.000</s></small><br /> Rp. 6.659.900
                  </p>
              </li>
              <li>
                  <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-9565258/jete_headset_-_headphone_-_handsfree_-_earphone_gaming_jete-g1_full01_ls5nxw1v.jpg" />
                  <br />
                  <p><small><s>Rp. 778.990.</s></small><br /> Rp. 525.000
                  </p>  
              </li>
              <li>
                  <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-5526494/rexus_rexus_keyboard_gaming_mechanical_legionare_mx10_rgb_full05_n868req3.jpg" />
                  <br />
                  <p><small><s>Rp. 3.750.000</s></small><br /> Rp. 3.500.000
                  </p>
              </li>
              <li>
                  <img src="https://carisinyal.com/wp-content/uploads/2019/01/MSI-GL62M-7RDX-1018.webp" />
                  <br />
                  <p><small><s>Rp. 15.600.000</s></small><br /> Rp. 15.000.000
                  </p>
                </li>
              <li>
                  <img src="https://sobatgame.com/wp-content/uploads/2019/08/logitech-g402-gaming-mouse.jpg" />
                  <br />
                  <p><small><s>Rp. 890.000</s></small><br /> Rp. 725.000
                  </p>
              </li>
          </ul>
        </nav>
    </div>
    );
  }


export default Home;