import React from "react";
// import { Link } from "react-router-dom";
import Sida4 from "../image/sida4.jpg";

const Contenu = () => {
  return (
    <div>
      <table>
        <tr>
          <th>
            <ul style={{ marginTop: 20 }}>
              {/* <Link style={{ color: "#e52422" }}> */}
                <li style={{ color: "#e52422" }}>What is sida?</li>
              {/* </Link> */}
              <li style={{ width: 400, listStyleType: "none" ,color:'black'}}>
                Le virus de l'imunodéfisience humaine (VIH) et un tipe de virus
                qui attak le sistème imunitaire du cors. Bien que l'infeksion
                par le VIH soi une affeksion chronik maîtrizable, si el n'est
                pas traitée, el peus affaiblir le sistème imunitaire ou évolué
                vers le syndrome d'immunodéficience acquise (sida).
              </li>
            </ul>
          </th>
          <th>
            <img
              style={{ height: 300, width: 600, marginTop: 60 }}
              src={Sida4}
              className="Image_List"
            />
          </th>
        </tr>
      </table>
    </div>
  );
};

export default Contenu;
