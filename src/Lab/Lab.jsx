import React, { useRef, useState, useEffect } from 'react';
import "./Lab.css";
import Experiments from '../Experiments';
import ConfettiComponent from '../components/Confetti';
import Btn from "../components/Button/Button";

const Lab = () => {
  const [appear, setAppear] = useState("0");
  const [exp, setExp] = useState(true);
  const [bottle, setBottle] = useState(false);
  const [sub, setSub] = useState(new Set());
  const [animating, SetAnimating] = useState(false);
  const [border, setBorder] = useState("black");
  const [value, setValue] = useState('0');
  const [Hclvalue, setHclValue] = useState('0');
  const [Znvalue, setZnValue] = useState('0');
  const [Zncl2Value, setZncl2Value] = useState('0');
  const [H2Value, setH2value] = useState('0');
  const[display,setDisplay] = useState(false);
  const[loading,setLoading] = useState(false);
  const [audioAllowed, setAudioAllowed] = useState(false); 
  const [eng,setEng] = useState(true);
  const[dLang,setDlang] = useState(0);
  
  const inputRef = useRef(null);
  const soundEffectRefTap = useRef(null);
  const soundEffectRefLiquid = useRef(null);
  const soundEffectRefMetal = useRef(null);
  const soundEffectRefBubbles = useRef(null);
  
  

  const engIntro = useRef(null);
  const engAcid = useRef(null);
  const engZinc = useRef(null);
  const engFinal = useRef(null);
  const hindiIntro = useRef(null);
  const hindiAcid = useRef(null);
  const hindiZinc = useRef(null);
  const hindiFinal = useRef(null);

  const[chatBg,setChatBg] = useState(0);
  const handleSliderChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
   
  };


  function playSoundTap() {
    if (soundEffectRefTap.current && audioAllowed) {
      soundEffectRefTap.current.play();
    }
  }
  function stopSoundTap() {
    if (soundEffectRefTap.current && audioAllowed) {
      soundEffectRefTap.current.pause();
      soundEffectRefTap.current.currentTime = 0;
    }
  }
  function playSoundLiquid() {
    if (soundEffectRefLiquid.current) {
      soundEffectRefLiquid.current.play();
    }
  }
  function stopSoundLiquid() {
    if (soundEffectRefLiquid.current ) {
      soundEffectRefLiquid.current.pause();
      soundEffectRefLiquid.current.currentTime = 0;
    }
  }
  function playSoundMetal() {
    if (soundEffectRefMetal.current ) {
      soundEffectRefMetal.current.play();
    }
  }
  function stopSoundMetal() {
    if (soundEffectRefMetal.current ) {
      soundEffectRefMetal.current.pause();
      soundEffectRefMetal.current.currentTime = 0;
    }
  }
  function playSoundBubbles() {
    if (soundEffectRefBubbles.current ) {
      soundEffectRefBubbles.current.play();
    }
  }
  function stopSoundBubbles() {
    if (soundEffectRefBubbles.current) {
      soundEffectRefBubbles.current.pause();
      soundEffectRefBubbles.current.currentTime = 0;
    }
  }



  function playeIntro() {
    if (engIntro.current ) {
      engIntro.current.play();
      setLoading(true);
    }
  }
  function playeAcid() {
    if (engAcid.current ) {
      engAcid.current.play();
      setChatBg(1);
      setLoading(true);
    }
  }
  function playeZinc() {
    if (engZinc.current ) {
      engZinc.current.play();
      setChatBg(1);
      setLoading(true);
    }
  }
  function playeFinal() {
    if (engFinal.current ) {
      engFinal.current.play();
      setLoading(true);
    }
  }
  function playhIntro() {
    if (hindiIntro.current ) {
      hindiIntro.current.play();
      setLoading(true);
    }
  }
  function playhAcid() {
    if (hindiAcid.current ) {
      hindiAcid.current.play();
      setLoading(true);
    }
  }
  function playhZinc() {
    if (hindiZinc.current ) {
      hindiZinc.current.play();
      setLoading(true);
    }
  }
  function playhFinal() {
    if (hindiFinal.current ) {
      hindiFinal.current.play();
      setLoading(true);
    }
  }
  

  function stopAllAudio() {
    stopeIntro()
    stopeAcid();
    stopeZinc()
    stopeFinal();
    stophIntro();
    stophAcid();
    stophZinc();
    stophFinal();
    setChatBg(0);
  }


  function stopeIntro() {
    if (engIntro.current) {
      engIntro.current.pause();
      engIntro.current.currentTime = 0;
      setLoading(false);
    }
  }
  function stopeAcid() {
    if (engAcid.current) {
      engAcid.current.pause();
      engAcid.current.currentTime = 0;
    }
  }
  function stopeZinc() {
    if (engZinc.current) {
      engZinc.current.pause();
      engZinc.current.currentTime = 0;
    }
  }
  function stopeFinal() {
    if (engFinal.current) {
      engFinal.current.pause();
      engFinal.current.currentTime = 0;
    }
  }
  function stophIntro() {
    if (hindiIntro.current) {
      hindiIntro.current.pause();
      hindiIntro.current.currentTime = 0;
    }
  }
  function stophAcid() {
    if (hindiAcid.current) {
      hindiAcid.current.pause();
      hindiAcid.current.currentTime = 0;
    }
  }
  function stophZinc() {
    if (hindiZinc.current) {
      hindiZinc.current.pause();
      hindiZinc.current.currentTime = 0;
    }
  }
  function stophFinal() {
    if (hindiFinal.current) {
      hindiFinal.current.pause();
      hindiFinal.current.currentTime = 0;
    }
  }


  
  useEffect(() => {
    // Allow audio after the first user interaction
    const enableAudio = () => {
      setAudioAllowed(true);
      window.removeEventListener('click', enableAudio);
    };

    window.addEventListener('click', enableAudio);

    return () => {
      window.removeEventListener('click', enableAudio);
    };
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('keypress', checkInp);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keypress', checkInp);
      }
    };
  }, [value]);

  const checkInp = (e) => {
    if (e.key === 'Enter' && value !== '0') {
      if (bottle) {
        setHclValue(value);
       setChatBg(0);

        animate();
        setValue('0');
        setBorder("black");
      } else {
        setZnValue(value);
        animateZn();
        setValue('0');
        setBorder("black");
        setChatBg(0);
      }
    }
  };
  const changeLang = (e) => {
    if (e.shiftKey && e.key.toLowerCase() === 'c') {
      setEng(prevEng => !prevEng); // Toggle the language state
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', changeLang);

    return () => {
      window.removeEventListener('keydown', changeLang);
    };
  }, []);
  
  
  const animate = () => {
    if (animating) return;
    SetAnimating(true);

    const bot = document.querySelector(".bot");
    const stream = document.querySelector(".stream");

    bot.classList.add("animate");
    setBorder("green");
    const animationPromise = new Promise((resolve) => {
      if (bot.classList.contains("animate")) {
        setTimeout(() => {
          stream.classList.add("liq");
          playSoundLiquid();
          setAudioAllowed(false);
          setTimeout(() => {
            stream.classList.remove("liq");
            stopSoundLiquid();
            
          }, 2500);
        }, 500);
      }
      setTimeout(() => {
        bot.classList.remove("animate");
        setAudioAllowed(true);
        setBorder("black");
        SetAnimating(false);
        resolve();
      }, 3500);
    });

    setSub(prevSub => new Set(prevSub).add('acid'));
    console.log(sub);

    animationPromise.then(() => {
      if (sub.has('metal')) {
        setTimeout(() => {
          stream.classList.add("reaction");
          playSoundBubbles();
          stopAllAudio();
          eng?playeFinal():playhFinal();
          setTimeout(() => {
            stream.classList.remove("reaction");
            stopSoundBubbles();
          }, 10000);
        }, 0);
        setAppear("1");
        setExp(false);
      }
    });
    setBottle(false);
  };

  const animateZn = () => {
    if (animating) return;
    SetAnimating(true);
    const zn = document.querySelector(".zn");
    const stream = document.querySelector(".stream");

    zn.classList.add("animateZn");
  
    const animationPromise = new Promise((resolve) => {
      if (zn.classList.contains("animateZn")) {
        setTimeout(() => {
          stream.classList.add("solid");
          playSoundMetal();
          setAudioAllowed(false)
          setTimeout(() => {
            stream.classList.remove("solid");
            stopSoundMetal();
          }, 2500);
        }, 500);
      }
      setTimeout(() => {
        zn.classList.remove("animateZn");
        setAudioAllowed(true);
        SetAnimating(false);
        resolve();
      }, 3500);
    });

    setSub(prevSub => new Set(prevSub).add('metal'));
    

    animationPromise.then(() => {
      if (sub.has('acid')) {
        setTimeout(() => {
          stream.classList.add("reaction");
          playSoundBubbles();
          stopAllAudio();
          eng?playeFinal():playhFinal();
          setTimeout(() => {
            stream.classList.remove("reaction");
            stopSoundBubbles();
          }, 10000);
        }, 500);
        setAppear("1");
        setExp(false);
      }
    });
  };

  return (
    <>
    
      <audio ref={soundEffectRefTap} id="sound-effectTap" src="/tap.mp3" type="audio/mp3" preload="auto"></audio>
      <audio ref={soundEffectRefLiquid} id="sound-effectLiquid" src="/liquid.mp3" type="audio/mp3" preload="auto"></audio>
      <audio ref={soundEffectRefMetal} id="sound-effectMetal" src="/metal.wav" type="audio/mp3" preload="auto"></audio>
      <audio ref={soundEffectRefBubbles} id="sound-effectBubbles" src="/bubbles.mp3" type="audio/mp3" preload="auto"></audio>

      <audio ref={engIntro} id="eIntro" src="/engIntro.mp3" type="audio/mp3" preload="auto"></audio>
      <audio ref={engAcid} id="eAcid" src="/engAcid.mp3" type="audio/mp3" preload="auto"></audio>
      <audio ref={engZinc} id="eZinc" src="/engZinc.mp3" type="audio/mp3" preload="auto"></audio>
      <audio ref={engFinal} id="eFinal" src="/engFinal.mp3" type="audio/mp3" preload="auto"></audio>

      <audio ref={hindiIntro} id="hIntro" src="/introHindi.mp3" type="audio/mp3" preload="auto"></audio>
      <audio ref={hindiAcid} id="hAcid" src="/hindiAcid.mp3" type="audio/mp3" preload="auto"></audio>
      <audio ref={hindiZinc} id="hZinc" src="/hindiZinc.mp3" type="audio/mp3" preload="auto"></audio>
      <audio ref={hindiFinal} id="hFinal" src="/hindiFinal.mp3" type="audio/mp3" preload="auto"></audio>

      {appear === "1" && <ConfettiComponent duration={5000} />}
      <div className="container">
        
        {!display?
        <div className="start">
         <div className="btn">
          <button onClick={()=>{setDisplay(true);!display?(eng?playeIntro():playhIntro()):null}} >Start</button>
         </div>
        </div>:
        <div className="body">
          <div className="left">
            <div className="Precautions">
              <h2>Precautions</h2>
              {Experiments[0].safetyPrecautions.map((pre, index) => (
                <p key={index}>{pre}</p>
              ))}
            </div>
            <div className="quantity">
              <div className="inp-chat">
              <input
                ref={inputRef}
                className='numInp'
                type="number"
                placeholder='0'
                disabled={border === "black"}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                style={{ border: border === "green" ? "4px solid #5cda60" : "1px solid black" }}
              />
               <input
                className='rangeInp'
                type="range"
                min="0"
                max="100"
                disabled={border === "black"}
                value={value}
                onChange={handleSliderChange}
              />
               </div>
              <div className="chat" style={{opacity:chatBg}}>
                <p>Adjust the quantity of the item here</p>
              </div>
             
            </div>
          </div>
          <div className="middle">
            <div className="board">
              <div className="heading">
                <h2 className='title'>{Experiments[0].title}</h2>
                <p>Observation: {Experiments[0].observation}</p>
              </div>
              <p className='eqn' style={{ opacity: appear }}>{Experiments[0].reactionEquation}</p>
              <table className='table'>
  <tr>
    <th>Reactant</th>
    <th>Amount</th>
    <th>Mole</th>
    <th>Product</th>
    <th>Amount</th>
    <th>Mole</th>
  </tr>
  <tr>
    <td>HCl</td>
    <td>{Hclvalue} ml</td>
    <td>{(Hclvalue * 0.0001).toFixed(5)}</td>
    <td>ZnCl2</td>
    <td style={{ opacity: appear }}>
      {(() => {
        const molesHCl = Hclvalue * 0.0001;
        const molesZn = Znvalue / 65.38;
        const requiredHCl = molesZn * 2; 
        const limitingMoles = molesHCl < requiredHCl ? (molesHCl / 2)*136.286 : molesZn*136.286; 
        return limitingMoles.toFixed(3);
      })()}g
    </td>
    <td style={{ opacity: appear }}>
      {(() => {
        const molesHCl = Hclvalue * 0.0001;
        const molesZn = Znvalue / 65.38;
        const requiredHCl = molesZn * 2; 
        const limitingMoles = molesHCl < requiredHCl ? (molesHCl / 2) : molesZn; 
        return limitingMoles.toFixed(3);
      })()}
    </td>
  </tr>
  <tr>
    <td>Zn</td>
    <td>{Znvalue} g</td>
    <td>{(Znvalue / 65.38).toFixed(2)}</td>
    <td>H2</td>
    <td style={{ opacity: appear }}>
      {(() => {
        const molesHCl = Hclvalue * 0.0001;
        const molesZn = Znvalue / 65.38;
        const requiredHCl = molesZn * 2; 
        const limitingMoles = molesHCl < requiredHCl ?( molesHCl / 2)*2.016 : molesZn*2.016;
        return limitingMoles.toFixed(3);
      })()}g
    </td>
    <td style={{ opacity: appear }}>
      {(() => {
        const molesHCl = Hclvalue * 0.0001;
        const molesZn = Znvalue / 65.38;
        const requiredHCl = molesZn * 2; 
        const limitingMoles = molesHCl < requiredHCl ?( molesHCl / 2) : molesZn;
        return limitingMoles.toFixed(3);
      })()}
    </td>
   
  </tr>
</table>

              <div className="stream"></div>
            </div>
            <div className="equip">
              <div className="images">
                <div className="bottle eq">
                  <img
                    src="/bottle.png"
                    onMouseOver={playSoundTap}
                    onMouseOut={stopSoundTap}
                    onClick={() => {
                      if (exp) {
                        setBorder("green");
                        stopAllAudio();
                        {
                          eng?playeAcid():playhAcid()
                        }
                       setChatBg(1);
                        setBottle(true);
                        inputRef.current.focus();
                      }
                    }}
                    className='bot'
                    alt=""
                  />
                </div>
                <div className="tube eq">
                  <img src="/testTube.png" className='test' alt="" onMouseOver={playSoundTap}
                    onMouseOut={stopSoundTap}/>
                </div>
                <div className="zinc eq">
                  <img
                    src="/zn.png"
                    alt=""
                    onMouseOver={playSoundTap}
                    onMouseOut={stopSoundTap}
                    
                    className='zn'
                    onClick={() => {
                      if (exp) {
                        setBorder("green");
                        setChatBg(1);
                        stopAllAudio();
                        {
                          eng?playeZinc():playhZinc()
                        }
                     
                        setBottle(false);
                        inputRef.current.focus();
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
           <div className="assistance" 
           onDoubleClick={()=>{
            stopAllAudio();
            playSoundTap();
            }}
            onClick={()=>{setEng(!eng),
              setTimeout(() => {
                setDlang(1);
                setTimeout(() => {
                  setDlang(0);
                }, 500);
              }, 0);
              stopAllAudio();
            }}>
           {loading?<img src="/speaking.gif" alt="" className='loading' />:null}
           <img src="/ai.png" className='assist' alt="" 
            />
           </div>
           <p className='curlang'>Current Language:{eng?"English":"Hindi"}</p>
            <p className='lang' style={{opacity:dLang}} >Language changed to {eng?"English":"Hindi"}</p>
          
            <div className="procedure">
              <div className="upper">
                <h2>Procedure</h2>
                <img src="/procedure.png" alt="" />
              </div>
              {Experiments[0].procedure.map((pre, index) => (
                <p key={index}>{pre}</p>
              ))}
            </div>
            <div className="restart" onClick={() => window.location.reload()}>
              <Btn>Restart</Btn>
            </div>
          </div>
        </div>
      }
        
      </div>
    </>
  );
}

export default Lab;
