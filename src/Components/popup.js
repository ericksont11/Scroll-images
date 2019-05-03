import React from "react";

export default function PopUp({id, datumType, secondDatumType, datum, secondDatum }) {

  return (
    <div id={id} style ={{ visibility:"hidden"}}>
        <div>
        <div className="center weatherText">{datumType}: {datum}</div>
        <div className="center weatherText">{secondDatumType}: {secondDatum}</div>
        </div>
    </div>
  );
}
