import React from 'react';
import icone from "../../assets/data/card"


function Competence() {
  return (
    <section className='competence' id='competences'>
      <div className='competence__container'>
        <h2 className='title'>Compétences</h2>
        <div className='competence__content'>
          {icone.map((competence, index) => (
            <div className='competence__card' key={index}>
              <div className='competence__card-content'>
                <img src= {competence.image} alt={'Icône ' + competence.name} />
                <span>{competence.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competence;
