import React, { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Page/Home";
import Form from "./Page/Form";
import Ficher from "./Page/Fichier";
import Nav from "./Page/Nav";
const Paye = () => {
  return (
    <div className="">
      <form className="">
        <div className="relative">
          <input type="text" className="input" />
        </div>
      </form>
    </div>
  );
};
const Head = () => {
  return (
    <div className="">
      <p className="text-[22px] font-bold text-blue-950 space-x-3">
        <span className="">
          Selection de dossier{" "}
          <span className="underline px-2 "> INFOS UNIVERSITY</span>
        </span>
        <span className="fas fa-user-check"></span>
      </p>
    </div>
  );
};
function App() {
  const [eleve, setEleve] = useState([
    {
      name: "VALISOA",
      last: "Ralitera",
      se: "C",
      eco: "LMA Ampefiloha",
      mail: "ralitera@dev.fr",
      value:
        "je suis VALISOA Ralitera vient qui suit matiere en informatique aprés mon baccalauréat, je disposé mon cadidature pour être votre éleve dans cet institue",
    },
    {
      name: "RAKOT",
      last: "Rabe",
      se: "D",
      eco: "LMA Ampefiloha",
      mail: "rabe@com.fr",
      value:
        "je suis VALISOA Ralitera vient qui suit matiere en informatique aprés mon baccalauréat, je disposé mon cadidature pour être votre éleve dans cet institue",
    },
    {
      name: "RASOA",
      last: "Mety",
      se: "C",
      eco: "LMA Ampefiloha",
      mail: "rasoaa@dev.fr",
      value:
        "je suis VALISOA Ralitera vient qui suit matiere en informatique aprés mon baccalauréat, je disposé mon cadidature pour être votre éleve dans cet institue",
    },
    {
      name: "SELFCARE",
      last: "Kevin",
      se: "C",
      eco: "LMA Ampefiloha",
      mail: "ambel@dev.fr",
      value:
        "je suis VALISOA Ralitera vient qui suit matiere en informatique aprés mon baccalauréat, je disposé mon cadidature pour être votre éleve dans cet institue",
    },
  ]);
  const [visible, setVisible] = useState(true);
  const [erreur, setErreur] = useState("");
  const [message, setMessage] = useState("");
  const fils = (data) => {
    let resulat = "";
    const menu = [];
    if (eleve.length > 0) {
      eleve.forEach((element) => {
        if (element.mail === data.mail) {
          data = null;
          setErreur("email déja utiliser, veuillez entre nouveaux");
        } else {
          setEleve([...eleve, data]);
        }
      });
    } else {
      setEleve([...eleve, data]);
    }
    //data===null?setErreur('email déja utiliser, veuillez entre nouveaux'): setEleve([...eleve,data])
    //console.log(resulat)
  };
  useState(() => {
    const demare = performance.now();
    setTimeout(() => {
      setVisible(false);
      display();
    }, demare + 1000);
    //console.log(demare);
    const affiche = [
      "INFOS UNIVERSITY, souhaite de votre bienvenue dans monde informatique",
      "cher etudiant, bienvenue a vous sur notre page web officiel pour etudiant informatique",
      "Veuillez déposer votre dossier pour sélectionner votre cadidature",
      "Code information sur langage de programation pour tous et application récent",
      "Projet et framework plus réactive et interactive pour les téchologie avancée",
    ];
    let index = 0;
    function display() {
      if (index < affiche.length) {
        const text = affiche[index];
        let indexText = -1;
        let textPlus = "";
        const interval = setInterval(() => {
          indexText++;
          if (indexText < text.length) {
            textPlus += text[indexText];
            setMessage(textPlus);
          } else {
            clearInterval(interval);
            setTimeout(() => {
              let nombre = textPlus.length;
              const inter = setInterval(() => {
                indexText--;
                if (indexText > 0) {
                  setMessage((prevText) => prevText.slice(0, indexText));
                } else {
                  clearInterval(inter);
                  setTimeout(() => {
                    index++;
                    display();
                  }, 120);
                }
              }, 60);
            }, 1000);
          }
        }, 60);
      } else {
        setTimeout(() => {
          index = 0;
          display();
          setMessage("");
        }, 120);
      }
    }
  });
  setTimeout(() => {
    setErreur("");
  }, 4000);
  const supprimer = (id) => {
    const tous = [...eleve];
    tous.splice(id, 1);
    setEleve(tous);
  };
  return (
    <div className="h-screen bg-gradient-to-br to-blue-600 from-orange-400">
      {visible && (
        <div className="flex justify-center items-center h-screen">
          <div className="space-x-4 flex">
            <div className="h-6 w-6 rounded-full bg-red-950 text"></div>
            <div className="h-6 w-6 rounded-full bg-fuchsia-950 text"></div>
            <div className="h-6 w-6 rounded-full bg-orange-900 text"></div>
            <div className="h-6 w-6 rounded-full bg-indigo-900 text"></div>
            <div className="h-6 w-6 rounded-full bg-blue-900 text"></div>
          </div>
        </div>
      )}
      {!visible && (
        <div className="">
          <div className="text-center mb-5 py-5">
            <Head />
          </div>
          <div className="media">
            <div className="col-span-4 px-10 py-4">
              <Form sendData={fils} message={erreur} />
            </div>
            <div className="col-span-4">
              {
                <div className="py-20 px-4">
                  <p className="font-bold text-[22px] ">{message}</p>
                </div>
              }
            </div>
            <div className="col-span-4">
              <div className="text-center">
                <p className="text-2xl underline py-2 underline-offset-2 text-blue-600 font-bold">
                  list des etudiant inscription{" "}
                </p>
                <p className="">{eleve.length} etudiant inscrire</p>
                {
                  <p className="text-red-400 duration-1000 transition-opacity text-sm">
                    {erreur}
                  </p>
                }
              </div>
              <div className="py-2 px-10 rounded-2xl h-[458px] overflow-hidden overflow-y-scroll y">
                {eleve.map((element, index) => {
                  return (
                    <div className="px-2 mt-4 py-4 text-left bg-orange-200 shadow-lg shadow-rose-600 rounded-2xl relative">
                      <div className="relative">
                        <p className="space-x-2">
                          <span className="fas fa-user-check text-lime-400"></span>
                          <span className="font-bold underline">
                            {element.name}{" "}
                          </span>
                          <span className="">{element.last} </span>
                        </p>
                        <div className="">
                          <img
                            src=""
                            className="h-8 w-8 rounded-full outline outline-2 outline-emerald-800 absolute -top-2 right-3"
                            alt=""
                          />
                        </div>
                      </div>
                      <hr className="py-4" />
                      <div className="text-center">
                        <p className=" cursor-pointer text-[16px] underline text-blue-400">
                          {element.mail}{" "}
                        </p>
                      </div>
                      <div className="px-4 py-3">
                        <ul className="">
                          <li className="space-x-5">
                            <span className="underline">Série</span>
                            <span className="">{element.se} </span>
                          </li>
                          <li className="space-x-5">
                            <span className="underline">Ecole d'orgine</span>
                            <span className="">{element.eco} </span>
                          </li>
                        </ul>
                        <div className="relative">
                          <p className="text-sm">{element.value}</p>
                        </div>
                        <div className="">
                         
                        </div>
                      </div>
                      <button>
                        <i
                          onClick={() => supprimer(index)}
                          className="fas fa-window-close fa-lg absolute -top-2 left-0"
                        ></i>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
