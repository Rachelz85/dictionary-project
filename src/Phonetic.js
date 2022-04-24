import React from "react";
import { Row, Col } from "react-bootstrap";
import PlayAudio from "react-simple-audio-player";
import chroma from "chroma-js";
import "./Phonetics.css";

export default function Phonetics(props) {
  // console.log(props.phonetic) to show data audio/text;
  const colorScale = chroma.scale(["#565a63", "#ffffff"]).mode("lch").colors(5);
  //imported a simple audio player - can change color via chroma.scale
  return (
    <div className="Phonetics">
      <Row>
        <Col className="audio">
          <PlayAudio
            url={props.phonetic.audio}
            colorScale={colorScale}
            width="30px"
          />
        </Col>
        <Col>{props.phonetic.text}</Col>
      </Row>
    </div>
  );
}